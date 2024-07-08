# Dockerfile for Angular frontend

# Stage 1: Build Angular app
FROM node:18.19 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve Angular app using Nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
