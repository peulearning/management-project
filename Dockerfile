FROM ubuntu:latest
LABEL authors="peuja"

ENTRYPOINT ["top", "-b"]