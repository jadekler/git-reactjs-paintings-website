FROM ubuntu:14.04
COPY deploy deploy
CMD cd deploy && ./website
