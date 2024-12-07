# Usa la imagen oficial de Node.js para construir la app Angular
FROM node:16 AS build

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente y construye la app
COPY . .
RUN npm run build --prod

# Usa una imagen ligera de Nginx para servir la app
FROM nginx:alpine

# Copia los archivos construidos de la app al contenedor de Nginx
COPY --from=build /app/dist/your-app-name /usr/share/nginx/html

# Expone el puerto en el que serviremos la app
EXPOSE 80

# Ejecuta Nginx
CMD ["nginx", "-g", "daemon off;"]
