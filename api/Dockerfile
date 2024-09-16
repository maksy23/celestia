FROM node:14

WORKDIR /src

COPY package*.json ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 3000

CMD ["node", "dist/main.js"]
