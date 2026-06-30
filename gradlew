#!/usr/bin/env sh

DIR="$(cd "$(dirname "$0")"; pwd -P)"
exec "$DIR/gradle/wrapper/gradle-wrapper.jar" "$@"
