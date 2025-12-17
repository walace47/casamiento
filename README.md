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

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Clonar el proyecto
git clone <tu-repositorio>
cd casamiento2

# Servir archivos estáticos (opcional)
python3 -m http.server 8000
# O
npx serve src/
```

### Despliegue con Docker

```bash
# Despliegue automático
./deploy.sh

# O manualmente
cd docker
docker-compose up -d --build
```

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

### Opciones Gratuitas

- **GitHub Pages**: Ideal para proyectos personales
- **Netlify**: Despliegue automático desde Git
- **Vercel**: Plataforma moderna para sitios estáticos

### Opciones de Producción

- **VPS con Docker**: Control total y personalización
- **AWS S3 + CloudFront**: Escalable y económico
- **Servicios de hosting**: Hostinger, GoDaddy, etc.

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
- **`docker/nginx.conf`**: Configuración de Nginx

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
