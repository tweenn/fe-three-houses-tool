#!/bin/bash

APP_PATH=$("pwd")"/dist";
APP_DOMAIN="fire-emblem-three-houses-tool.surge.sh";

surge --project $APP_PATH --domain $APP_DOMAIN
