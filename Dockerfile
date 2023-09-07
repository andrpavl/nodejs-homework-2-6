FROM node:18.16.0

WORKDIR /nodejs-homework-2-6

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]
