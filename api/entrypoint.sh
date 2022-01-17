#!/bin/sh
set -e

rm -f /medcool/tmp/pids/server.pid

exec "$@"
