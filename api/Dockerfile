FROM node:20-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

RUN npm run build

CMD ['npm', 'start']

EXPOSE 4000