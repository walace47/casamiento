# 💒 Invitación de Casamiento - Página Web

Una página web elegante y moderna para invitaciones de casamiento, construida con tecnologías web estándar y optimizada para todos los dispositivos.

## 🏗️ Estructura del Proyecto

```
casamiento2/
├── 📁 src/                    # Código fuente de la aplicación
│   ├── 📄 index.html         # Página principal
│   ├── 📁 css/               # Estilos CSS
│   │   └── styles.css        # Estilos personalizados
│   ├── 📁 js/                # JavaScript
│   │   └── script.js         # Funcionalidades interactivas
│   └── 📁 assets/            # Imágenes, iconos, etc.
├── 🐳 docker/                 # Configuración Docker
│   ├── Dockerfile            # Imagen del contenedor
│   ├── docker-compose.yml    # Orquestación de servicios
│   ├── nginx.conf            # Configuración de Nginx
│   └── .dockerignore         # Archivos a excluir
├── 📚 docs/                   # Documentación
│   ├── README.md             # Guía de uso y personalización
│   └── DOCKER_README.md      # Guía de despliegue Docker
├── 🚀 deploy.sh               # Script de despliegue automático
└── 📄 README.md               # Este archivo
```

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante y profesional
- 📱 **Completamente Responsivo**: Se adapta a todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Carga rápida y eficiente
- 🎭 **Animaciones Suaves**: Efectos visuales atractivos
- ⏰ **Contador Regresivo**: Cuenta los días hasta el casamiento
- ✅ **Sistema RSVP**: Confirmación de asistencia interactiva
- 🔒 **Seguridad**: Headers de seguridad y buenas prácticas
- 🚀 **Fácil Despliegue**: Docker y scripts automatizados
- 🔄 **Cache Busting**: Sistema automático de versionado para evitar cache

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Clonar el proyecto
git clone <tu-repositorio>
cd casamiento2

# Instalar dependencias
npm install

# Servir archivos estáticos (opcional)
python3 -m http.server 8000
# O
npx serve src/
```

### Build con Versionado (Cache Busting)

```bash
# Hacer build con versionado automático
npm run build

# Ver versión actual
npm run version
```

El build genera:

- `dist/` - Archivos versionados listos para producción
- Archivos CSS/JS con hash único para evitar problemas de cache

### Despliegue

```bash
# Despliegue automático (Docker por defecto)
./deploy.sh

# Desplegar a Vercel
./deploy.sh vercel

# Desplegar a Netlify
./deploy.sh netlify

# Desplegar a GitHub Pages
./deploy.sh github

# O manualmente con Docker
docker-compose up -d --build
```

Ver `docs/DEPLOY.md` para más opciones de despliegue.

## 🎨 Personalización

### 1. Cambiar Contenido

Edita `src/index.html` para personalizar:

- Nombres de los novios
- Fecha y hora del evento
- Lugar y detalles
- Información de contacto

### 2. Personalizar Estilos

Modifica `src/css/styles.css` para:

- Cambiar colores
- Ajustar fuentes
- Modificar animaciones

### 3. Agregar Funcionalidades

Edita `src/js/script.js` para:

- Cambiar la fecha del contador
- Agregar nuevas interacciones
- Integrar con APIs externas

## 🐳 Docker

El proyecto incluye configuración completa de Docker:

- **Nginx optimizado** para archivos estáticos
- **Compresión gzip** para mejor rendimiento
- **Headers de seguridad** básicos
- **Caché optimizado** para archivos estáticos

Ver `docs/DOCKER_README.md` para detalles completos.

## 📱 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos y animaciones
- **JavaScript ES6+**: Funcionalidades interactivas
- **Bootstrap 5**: Framework CSS responsive
- **Font Awesome**: Iconos vectoriales
- **Nginx**: Servidor web optimizado
- **Docker**: Contenedores y orquestación

## 🌐 Despliegue

### 🔄 Sistema de Versionado (Cache Busting)

El proyecto incluye un sistema automático de versionado que:

- ✅ Genera hashes únicos para CSS y JS basados en el contenido
- ✅ Actualiza automáticamente las referencias en HTML
- ✅ Configura Nginx para cache inteligente
- ✅ Evita problemas de cache en navegadores y CDNs

**Uso:**

```bash
npm run build  # Genera archivos versionados en dist/
```

### Opciones de Despliegue

**Gratuitas:**

- **Vercel** ⭐ (Recomendado): Gratis, CDN global, SSL automático
- **Netlify**: Similar a Vercel, muy fácil de usar
- **GitHub Pages**: Gratis, integrado con GitHub

**Producción:**

- **Docker + VPS**: Control total ($5-10/mes)
- **AWS S3 + CloudFront**: Escalable ($1-5/mes)
- **Servicios de hosting**: Hostinger, GoDaddy, etc.

Ver `docs/DEPLOY.md` para guía completa de despliegue.

## 🔧 Desarrollo

### Requisitos

- Navegador web moderno
- Editor de código (VS Code recomendado)
- Docker (para despliegue)

### Comandos Útiles

```bash
# Ver estructura del proyecto
tree -I 'node_modules|.git'

# Validar HTML
npx html-validate src/index.html

# Minificar CSS
npx cssnano src/css/styles.css src/css/styles.min.css

# Minificar JavaScript
npx terser src/js/script.js -o src/js/script.min.js
```

## 📚 Documentación

- **`docs/README.md`**: Guía completa de uso y personalización
- **`docs/DOCKER_README.md`**: Despliegue con Docker
- **`docs/DEPLOY.md`**: Guía completa de despliegue y opciones
- **`conf/nginx.conf`**: Configuración de Nginx con cache optimizado

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🎊 Agradecimientos

- Bootstrap por el framework CSS
- Font Awesome por los iconos
- Nginx por el servidor web
- Docker por la plataforma de contenedores

---

**¡Que tengan un día maravilloso! 💕**

_Hecho con ❤️ para celebrar el amor_
