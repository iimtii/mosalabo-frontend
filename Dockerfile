FROM artifactory.rakuten-it.com/dockerhub/node:14-slim AS builder
COPY ./package.json /app/
WORKDIR /app
ENV http_proxy=http://pkg.proxy.prod.jp.local:10080
ENV https_proxy=http://pkg.proxy.prod.jp.local:10080
# RUN npm install -g yarn
COPY ./ /app/
RUN yarn install && yarn build
ENV http_proxy=
ENV https_proxy=

FROM artifactory.rakuten-it.com/dockerhub/nginxinc/nginx-unprivileged:1.20-alpine
EXPOSE 3000
RUN sed -i 's,listen       80;,listen       3000;,' /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build/ /usr/share/nginx/html/