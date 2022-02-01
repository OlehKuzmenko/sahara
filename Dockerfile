FROM node:14 AS build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]