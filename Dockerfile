FROM artifactory.rakuten-it.com/dockerhub/node:16-slim AS builder
COPY ./package.json /app/
WORKDIR /app
ENV http_proxy=http://pkg.proxy.prod.jp.local:10080
ENV https_proxy=http://pkg.proxy.prod.jp.local:10080
COPY ./ /app/
RUN yarn install
RUN yarn build
ENV http_proxy=
ENV https_proxy=
CMD ["yarn", "start"]

FROM FROM registry-jpe2.r-local.net/caas-trial/nginxinc/nginx-unprivileged:1.18
EXPOSE 3000
RUN sed -i 's,listen       80;,listen       3000;,' /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.next/server/pages /usr/share/nginx/html/