# Guía de Despliegue

## 🚀 Opciones de Despliegue Recomendadas

### 1. **Vercel** (⭐ Recomendado para estáticos)

**Ventajas:**

- ✅ Gratis para proyectos personales
- ✅ Despliegue automático desde GitHub
- ✅ CDN global incluido
- ✅ SSL automático
- ✅ Muy fácil de configurar

**Pasos:**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

O conectar tu repositorio GitHub en [vercel.com](https://vercel.com)

---

### 2. **Netlify** (⭐ Muy similar a Vercel)

**Ventajas:**

- ✅ Gratis para proyectos personales
- ✅ Despliegue automático desde GitHub
- ✅ CDN global
- ✅ SSL automático
- ✅ Formularios y funciones serverless

**Pasos:**

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Desplegar
netlify deploy --prod
```

O conectar tu repositorio en [netlify.com](https://netlify.com)

---

### 3. **Docker + Servidor Propio** (Para control total)

**Opciones de hosting:**

- DigitalOcean Droplet ($5-10/mes)
- AWS EC2
- Google Cloud Compute Engine
- VPS de cualquier proveedor

**Pasos:**

```bash
# En tu servidor
git clone <tu-repo>
cd casamiento2
docker-compose up -d --build
```

---

### 4. **GitHub Pages** (Gratis y simple)

**Ventajas:**

- ✅ Completamente gratis
- ✅ Integrado con GitHub
- ✅ SSL automático

**Limitaciones:**

- Solo sitios estáticos
- Sin backend

**Configuración:**

1. Crear branch `gh-pages`
2. Configurar GitHub Actions para build automático
3. Activar GitHub Pages en settings del repo

---

### 5. **AWS S3 + CloudFront** (Para escalabilidad)

**Ventajas:**

- ✅ Muy escalable
- ✅ CDN global
- ✅ Control total

**Costo:** ~$1-5/mes para tráfico bajo

---

## 📦 Sistema de Versionado (Cache Busting)

El proyecto incluye un sistema automático de versionado que:

1. **Genera hashes** para CSS y JS basados en el contenido
2. **Actualiza referencias** en HTML automáticamente
3. **Configura Nginx** para cache inteligente

### Uso:

```bash
# Instalar dependencias
npm install

# Hacer build con versionado
npm run build

# Ver versión actual
npm run version
```

### Archivos generados:

- `dist/` - Directorio con archivos versionados
- `.version` - Archivo con la versión actual

---

## 🔧 Configuración de Cache

El Nginx está configurado para:

- **HTML**: Sin cache (siempre actualizado)
- **CSS/JS versionados**: Cache largo (1 año) - inmutables
- **Imágenes**: Cache medio (30 días)
- **CSS/JS sin versionar**: Sin cache (fallback)

---

## 🐳 Despliegue con Docker

### Build local:

```bash
docker build -t invitacion-casamiento .
docker run -p 80:80 invitacion-casamiento
```

### Con docker-compose:

```bash
docker-compose up -d --build
```

### Push a Docker Hub:

```bash
docker build -t tu-usuario/invitacion-casamiento:latest .
docker push tu-usuario/invitacion-casamiento:latest
```

---

## 🔄 CI/CD Recomendado

### GitHub Actions (Ejemplo)

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📊 Comparación de Opciones

| Opción       | Costo     | Facilidad  | Performance | Recomendado para     |
| ------------ | --------- | ---------- | ----------- | -------------------- |
| Vercel       | Gratis    | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  | Proyectos personales |
| Netlify      | Gratis    | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐  | Proyectos personales |
| Docker + VPS | $5-10/mes | ⭐⭐⭐     | ⭐⭐⭐⭐    | Control total        |
| GitHub Pages | Gratis    | ⭐⭐⭐⭐   | ⭐⭐⭐      | Proyectos simples    |
| AWS S3+CF    | $1-5/mes  | ⭐⭐       | ⭐⭐⭐⭐⭐  | Escalabilidad        |

---

## 🎯 Recomendación Final

Para este proyecto de invitación de casamiento, recomiendo **Vercel** o **Netlify** porque:

1. Son gratuitos
2. Muy fáciles de configurar
3. CDN global incluido
4. SSL automático
5. Despliegue automático desde GitHub

Si necesitas más control o tienes un servidor propio, usa **Docker** con tu VPS preferido.
