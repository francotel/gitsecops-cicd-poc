# Etapa 1: Build
FROM node:14.20.1-alpine3.10 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Etapa 2: Runtime
FROM node:14.20.1-alpine3.10
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Configuración insegura a propósito para detectar
RUN chmod 777 /tmp
USER root

EXPOSE 3000
CMD ["node", "app.js"]