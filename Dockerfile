FROM node:22-alpine AS builder

# Instalar dependencias
WORKDIR /app
COPY package.json ./
RUN npm install

# Copiar archivos fuente y hacer build
COPY . .
RUN npm run build

# Imagen final con Nginx
FROM nginx:alpine

# Copiar la configuración personalizada de Nginx
COPY conf/nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos builded desde el builder
COPY --from=builder /app/dist/ /usr/share/nginx/html/

# Verificar que los assets se copiaron correctamente (solo para debug)
RUN ls -la /usr/share/nginx/html/assets/ || echo "Assets folder check"

# Exponer el puerto 80
EXPOSE 80

# Nginx ya viene configurado por defecto para servir archivos estáticos
# desde /usr/share/nginx/html/
