FROM nginx:alpine

# Copiar la configuración personalizada de Nginx
COPY conf/nginx.conf /etc/nginx/nginx.conf

# Copiar los archivos de la página web al directorio por defecto de Nginx
COPY src/ /usr/share/nginx/html/

# Verificar que los assets se copiaron correctamente (solo para debug)
RUN ls -la /usr/share/nginx/html/assets/ || echo "Assets folder check"

# Exponer el puerto 80
EXPOSE 80

# Nginx ya viene configurado por defecto para servir archivos estáticos
# desde /usr/share/nginx/html/
