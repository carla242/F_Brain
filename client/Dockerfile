
FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare yarn@stable --activate
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
