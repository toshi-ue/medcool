FROM ruby:3.1.0-alpine
ARG DEV_PACKAGES="build-base curl-dev"
ARG JOBS_NUMBER
ARG MY_BUNDLER_VERSION
ARG RUNTIME_PACKAGES="nodejs mariadb-dev tzdata git"
ARG WORKDIR

ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  MY_BUNDLER_VERSION=${MY_BUNDLER_VERSION}

WORKDIR ${HOME}

COPY Gemfile* ./

RUN apk update && \
  apk upgrade && \
  apk add --no-cache ${RUNTIME_PACKAGES} && \
  apk add --virtual build-dependencies --no-cache ${DEV_PACKAGES} && \
  gem install bundler --no-document -v ${MY_BUNDLER_VERSION} && \
  bundle install -j${JOBS_NUMBER} && \
  apk del build-dependencies

COPY . .

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

CMD ["rails", "server", "-b", "0.0.0.0"]
