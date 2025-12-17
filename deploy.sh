#!/bin/bash

echo "🚀 Desplegando invitación de casamiento..."

# Cambiar al directorio docker

# Detener contenedores existentes
echo "📦 Deteniendo contenedores existentes..."
docker compose down --rmi all

# Construir la imagen
echo "🔨 Construyendo y levantando imagen Docker..."
docker compose up --build --remove-orphans -w



# Verificar que esté funcionando
echo "✅ Verificando estado..."
sleep 3
docker-compose ps

echo ""
echo "🎉 ¡Invitación desplegada exitosamente!"
echo "🌐 Abre tu navegador en: http://localhost"
echo ""
echo "📋 Comandos útiles:"
echo "   Ver logs: docker compose logs -f"
echo "   Detener: docker compose down"
echo "   Reiniciar: docker compose restart"
