# Etapa 1: Compilación de archivos estáticos
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor de producción ultraliviano
FROM nginx:alpine

# Limpiar lo que Nginx trae por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos compilados en la Etapa 1 hacia Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]