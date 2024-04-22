# Utilizar una imagen de NodeJS como base
FROM node:20
 
# Establecer el directorio de trabajo
WORKDIR /app
 
# Copiar los archivos necesarios para construir la app
COPY package*.json ./
COPY . .
 
# Instalar dependencias y construir la app
RUN npm install --force
RUN npm run build
 
# Exponer el puerto 80
EXPOSE 5173
 
# Iniciar la aplicación con PM2
CMD ["npm", "run", "preview", "--host"]