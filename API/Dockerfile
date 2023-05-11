
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

# Define el comando para ejecutar la aplicación
CMD [ "node", "index.js" ]