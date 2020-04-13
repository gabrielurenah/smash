FROM node:12-alpine

WORKDIR /opt/app

COPY package*.json ./

RUN npm install --silent

COPY ./ ./

CMD npm run watch
