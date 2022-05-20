FROM artifactory.rakuten-it.com/dockerhub/node:16-slim
COPY ./package.json /app/
WORKDIR /app
COPY ./ /app/
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]