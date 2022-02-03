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
RUN yarn install

COPY . ./

RUN yarn run build
