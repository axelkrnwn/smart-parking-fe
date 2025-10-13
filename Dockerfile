FROM node:23-alpine

WORKDIR /app
ARG VITE_BASE_URL
ARG VITE_BASE_PORT

ENV VITE_BASE_URL=$VITE_BASE_URL
ENV VITE_BASE_PORT=$VITE_BASE_PORT

COPY ./package.json .

RUN npm install 

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]


