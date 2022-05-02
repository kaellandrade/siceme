# Desenvolvimento
FROM node:16.15 as debug

WORKDIR /app/siceme
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
ENTRYPOINT [ "nodemon","--inspect=0.0.0.0","./index.js" ]

# Produção
FROM node:16.15 as prod

WORKDIR /app/siceme
COPY package*.json ./
RUN npm install
COPY . .
CMD node .
