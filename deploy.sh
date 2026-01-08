#!/bin/bash

# Deploy the application to the local Raspberry Pi environment

# Configuración
PI_USER="pi"
PI_HOST="pi"  # Ajusta si usas IP o hostname diferente
PROJECT_PATH="~/docker/casamiento"  # Ajusta la ruta según tu configuración en la Pi

echo "🚀 Iniciando despliegue en Raspberry Pi..."

# Ejecutar comandos en la Raspberry Pi de forma remota
ssh ${PI_USER}@${PI_HOST} << 'ENDSSH'
    set -e  # Salir si hay algún error

    echo "📦 Actualizando código desde el repositorio..."

    # Navegar al directorio del proyecto
    cd ~/docker/casamiento || cd docker/casamiento || { echo "❌ Error: No se encontró el directorio del proyecto"; exit 1; }

    # 1. Pull del backend
    echo "🔄 Actualizando casamiento."
    git pull || { echo "⚠️  Advertencia: Error al hacer pull del casamiento"; }


    # 3. Detener contenedores
    echo "🛑 Deteniendo contenedores..."
    docker compose stop

    # 4. Reconstruir y levantar contenedores
    echo "🔨 Reconstruyendo y levantando contenedores..."
    docker compose up --build -d

    echo "✅ Despliegue completado!"
    echo "📊 Estado de los contenedores:"
    docker compose ps
ENDSSH

echo "✨ Proceso de despliegue finalizado"

