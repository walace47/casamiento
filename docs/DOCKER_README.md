# 🐳 Despliegue con Docker

Guía simple para desplegar la invitación de casamiento usando Docker y Nginx.

## 🚀 Despliegue Rápido

### Opción 1: Script Automático (Recomendado)

```bash
./deploy.sh
```

### Opción 2: Comandos Manuales

```bash
# Construir y levantar
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

## 📋 Requisitos

- Docker instalado
- Docker Compose instalado
- Puerto 80 disponible

## 🔧 Comandos Útiles

```bash
# Ver estado del contenedor
docker-compose ps

# Ver logs en tiempo real
docker-compose logs -f

# Reiniciar el servicio
docker-compose restart

# Reconstruir la imagen
docker-compose build --no-cache

# Detener y eliminar todo
docker-compose down --volumes --remove-orphans
```

## 🌐 Acceso

Una vez desplegado, la página estará disponible en:

- **Local**: http://localhost
- **Red local**: http://[tu-ip]:80

## 📁 Estructura de Archivos Docker

```
casamiento2/
├── Dockerfile              # Configuración del contenedor
├── docker-compose.yml      # Orquestación de servicios
├── nginx.conf             # Configuración de Nginx
├── .dockerignore          # Archivos a excluir del build
├── deploy.sh              # Script de despliegue automático
└── [archivos de la página web]
```

## ⚙️ Configuración de Nginx

El archivo `nginx.conf` incluye:

- ✅ Compresión gzip para mejor rendimiento
- ✅ Headers de seguridad básicos
- ✅ Caché optimizado para archivos estáticos
- ✅ Manejo de rutas SPA
- ✅ Logs de acceso y errores

## 🔍 Troubleshooting

### Puerto 80 ocupado

```bash
# Cambiar puerto en docker-compose.yml
ports:
  - "8080:80"  # Usar puerto 8080 en lugar de 80
```

### Error de permisos

```bash
# Dar permisos al script
chmod +x deploy.sh
```

### Contenedor no inicia

```bash
# Ver logs detallados
docker-compose logs

# Verificar que el puerto esté libre
sudo netstat -tlnp | grep :80
```

### Limpiar Docker

```bash
# Eliminar contenedores e imágenes no utilizadas
docker system prune -a

# Eliminar volúmenes no utilizados
docker volume prune
```

## 🚀 Despliegue en Producción

### 1. Cambiar puerto (si es necesario)

```yaml
ports:
  - "80:80" # Para acceso directo al puerto 80
  # O
  - "8080:80" # Para usar puerto 8080
```

### 2. Configurar dominio

Editar `nginx.conf` y cambiar:

```nginx
server_name localhost;  # Cambiar por tu dominio
```

### 3. SSL/HTTPS (opcional)

Para agregar HTTPS, puedes usar un proxy reverso como Traefik o configurar certificados SSL directamente en Nginx.

## 📊 Monitoreo

```bash
# Ver uso de recursos
docker stats

# Ver logs de acceso
docker-compose exec invitacion-casamiento tail -f /var/log/nginx/access.log

# Ver logs de errores
docker-compose exec invitacion-casamiento tail -f /var/log/nginx/error.log
```

## 🎯 Ventajas de esta Configuración

- ✅ **Simple**: Solo 4 archivos para el despliegue
- ✅ **Eficiente**: Nginx optimizado para archivos estáticos
- ✅ **Seguro**: Headers de seguridad básicos
- ✅ **Rápido**: Compresión gzip y caché optimizado
- ✅ **Portable**: Funciona en cualquier servidor con Docker
- ✅ **Escalable**: Fácil de replicar y mantener

¡Tu invitación de casamiento estará funcionando en minutos! 🎉
