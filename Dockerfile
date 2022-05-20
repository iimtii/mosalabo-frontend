FROM artifactory.rakuten-it.com/dockerhub/node:16-slim
RUN useradd -ms /bin/bash newuser
USER newuser
WORKDIR /home/newuser
COPY ./package.json /home/newuser
COPY ./ /home/newuser

RUN yarn install
RUN yarn build
CMD ["yarn", "start"]