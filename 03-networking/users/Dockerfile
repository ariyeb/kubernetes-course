FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm i --save-prod

COPY . /app

ENV PORT=8000

EXPOSE ${PORT}

CMD [ "npm", "start" ]