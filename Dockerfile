FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM alpine:3.16
RUN apk add --update nginx && rm -rf /var/cache/apk/*
COPY deploy/nginx/nginx.conf /etc/nginx/nginx.conf
RUN nginx -t
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]