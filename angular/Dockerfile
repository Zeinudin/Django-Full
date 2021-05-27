FROM node:14.15.0-alpine as builder

RUN mkdir /app
WORKDIR /app


COPY Hospital/package.json Hospital/package-lock.json /app/Hospital/


RUN npm install --prefix Hospital
COPY . /app/
RUN npm run build --prefix Hospital -- --output-path=./dist/out


FROM nginx:1.15.7-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/Hospital/dist/out /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf