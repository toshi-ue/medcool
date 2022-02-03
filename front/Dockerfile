FROM node:16.13.1-alpine

ARG API_URL
ARG WORKDIR

ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  HOST=0.0.0.0 \
  YARN_VERSION=1.22.15 \
  API_URL=${API_URL}

WORKDIR ${HOME}

COPY package*.json ./

RUN apk update && \
  apk upgrade && \
  npm install npm@8.1.2 && \
  npm install npm install -g @vue/cli@4.5.15 nuxt@2.15.8 create-nuxt-app@4.0.0

COPY . ./

CMD ["yarn","run", "build"]
