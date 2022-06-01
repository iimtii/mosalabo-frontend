FROM artifactory.rakuten-it.com/dockerhub/node:16-slim AS deps
# Install dependencies only when needed
# FROM node:alpine 
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM artifactory.rakuten-it.com/dockerhub/node:16-slim AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM artifactory.rakuten-it.com/dockerhub/node:16-slim AS runner

ARG GROUP_NAME=nodejs
ARG USER_NAME=nextjs

WORKDIR /app/${USER_NAME}

ENV NODE_ENV production
RUN addgroup -g 1001 ${GROUP_NAME}
RUN adduser -g ${GROUP_NAME} -u 1001 -m ${USER_NAME}

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
# ★1 nodejsじゃなくてnodeをuser:groupに指定
COPY --from=builder --chown=${USER_NAME}:${GROUP_NAME} /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER ${USER_NAME}

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]