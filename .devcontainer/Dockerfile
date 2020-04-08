FROM node:12.10.0-buster

RUN apt-get update

RUN apt-get -y install --no-install-recommends yarn
# config registry globally
RUN npm config set registry https://registry.npm.taobao.org

RUN yarn config set registry https://registry.npm.taobao.org

RUN npm install -g eslint

# install global concurrently
RUN npm install -g concurrently
