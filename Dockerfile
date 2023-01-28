FROM node:18-alpine

RUN apk update && apk upgrade

COPY . /app

RUN ln -s /app/packages/frontend/dist /app/packages/backend/dist/static

EXPOSE 3000

WORKDIR /app

CMD [ "node", "/app/packages/backend/dist/main.js" ]
