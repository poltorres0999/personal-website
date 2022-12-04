#!/bin/bash
# file: run.sh
# Deploymnet script, assumes that docker & docker compose are installed
docker-compose pull
docker-compose down
docker-compose up