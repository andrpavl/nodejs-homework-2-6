FROM node 

WORKDIR /nodejs-homework-2-6

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]
