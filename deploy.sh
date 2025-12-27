#!/bin/bash

# Script de despliegue mejorado
# Uso: ./deploy.sh [vercel|netlify|docker|github]

set -e

DEPLOY_TYPE=${1:-docker}
VERSION=$(node scripts/version.js 2>/dev/null || echo "1.0.0")

echo "🚀 Iniciando despliegue..."
echo "📦 Versión: $VERSION"
echo "🔧 Tipo: $DEPLOY_TYPE"
echo ""

# Build del proyecto
echo "📝 Haciendo build..."
npm install
npm run build

case $DEPLOY_TYPE in
  vercel)
    echo "🌐 Desplegando a Vercel..."
    if command -v vercel &> /dev/null; then
      vercel --prod
    else
      echo "❌ Vercel CLI no instalado. Instala con: npm i -g vercel"
      exit 1
    fi
    ;;

  netlify)
    echo "🌐 Desplegando a Netlify..."
    if command -v netlify &> /dev/null; then
      netlify deploy --prod --dir=dist
    else
      echo "❌ Netlify CLI no instalado. Instala con: npm i -g netlify-cli"
      exit 1
    fi
    ;;

  docker)
    echo "🐳 Construyendo imagen Docker..."
    docker build -t invitacion-casamiento:$VERSION .
    docker build -t invitacion-casamiento:latest .

    echo "✅ Imagen construida: invitacion-casamiento:$VERSION"
    echo "💡 Para ejecutar: docker run -p 80:80 invitacion-casamiento:latest"
    echo "💡 O con docker-compose: docker-compose up -d --build"
    ;;

  github)
    echo "📤 Preparando para GitHub Pages..."
    if [ -d "dist" ]; then
      git checkout gh-pages 2>/dev/null || git checkout -b gh-pages
      cp -r dist/* .
      git add .
      git commit -m "Deploy v$VERSION" || true
      git push origin gh-pages
      git checkout main
      echo "✅ Desplegado a GitHub Pages"
    else
      echo "❌ Directorio dist no encontrado"
      exit 1
    fi
    ;;

  *)
    echo "❌ Tipo de despliegue desconocido: $DEPLOY_TYPE"
    echo "Opciones: vercel, netlify, docker, github"
    exit 1
    ;;
esac

echo ""
echo "✨ Despliegue completado!"

