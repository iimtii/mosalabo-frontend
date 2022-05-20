FROM artifactory.rakuten-it.com/dockerhub/node:16-slim AS builder
COPY ./package.json /app/
WORKDIR /app
COPY ./ /app/
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]

FROM artifactory.rakuten-it.com/dockerhub/nginxinc/nginx-unprivileged:1.20-alpine
EXPOSE 3000
RUN sed -i 's,listen       80;,listen       3000;,' /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.next/server/pages /usr/share/nginx/html/