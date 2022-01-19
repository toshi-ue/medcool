#!/bin/sh
set -e

rm -f ${HOME}/tmp/pids/server.pid

exec "$@"
