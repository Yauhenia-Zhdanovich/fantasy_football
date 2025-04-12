FROM node:23-slim

WORKDIR /server
COPY package.json package-lock.json ./
RUN npm ci
RUN npm install -g nodemon
RUN npm install
