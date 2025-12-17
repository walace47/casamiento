# 🎉 Invitación de Casamiento - Página Web

Una página web simple y elegante para invitaciones de casamiento, construida con HTML, Bootstrap y JavaScript.

## ✨ Características

- **Diseño Responsivo**: Se adapta a todos los dispositivos
- **Animaciones Suaves**: Efectos visuales elegantes
- **Contador Regresivo**: Cuenta los días hasta el casamiento
- **Sistema RSVP**: Confirmación de asistencia interactiva
- **Diseño Moderno**: Interfaz limpia y profesional
- **Optimizado para Móviles**: Perfecto para compartir por WhatsApp

## 🚀 Cómo Usar

### 1. Personalizar Contenido

Edita el archivo `index.html` para cambiar:

- **Nombres de los novios**: Cambia "María & Juan" por los nombres reales
- **Fecha y hora**: Modifica la fecha del casamiento
- **Lugar**: Actualiza la dirección del evento
- **Detalles**: Personaliza menú, entretenimiento, etc.
- **Información de contacto**: Cambia los números de teléfono

### 2. Personalizar Fecha del Contador

En el archivo `script.js`, busca esta línea:

```javascript
const weddingDate = new Date("December 15, 2024 19:00:00").getTime();
```

Y cambia la fecha por la fecha real de tu casamiento.

### 3. Personalizar Colores

En el archivo `styles.css`, puedes cambiar los colores principales:

```css
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 4. Agregar Imágenes

Para agregar fotos de los novios, puedes:

- Incluir una imagen en el hero section
- Agregar una galería de fotos
- Incluir fotos en las tarjetas de detalles

## 📱 Funcionalidades

### Contador Regresivo

- Muestra días, horas, minutos y segundos hasta el casamiento
- Se actualiza en tiempo real
- Diseño elegante con efecto glassmorphism

### Sistema RSVP

- Botones para confirmar asistencia
- Mensajes personalizados según la respuesta
- Notificaciones visuales

### Animaciones

- Efectos de entrada al hacer scroll
- Hover effects en las tarjetas
- Transiciones suaves

### Responsive Design

- Se adapta a móviles, tablets y desktop
- Navegación optimizada para touch
- Texto legible en todos los dispositivos

## 🎨 Personalización Avanzada

### Cambiar Fuentes

Para usar fuentes personalizadas, agrega en el `<head>`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

Y en CSS:

```css
body {
  font-family: "TuFuente", sans-serif;
}
```

### Agregar Música de Fondo

En `script.js`, puedes descomentar y personalizar la función de música:

```javascript
// Agregar un elemento de audio
const audio = new Audio("ruta-a-tu-musica.mp3");
audio.loop = true;
audio.play();
```

### Integrar con WhatsApp

Para enviar confirmaciones por WhatsApp, modifica la función `rsvpResponse`:

```javascript
// Enviar mensaje por WhatsApp
const message = `Confirmo mi asistencia al casamiento de ${nombresNovios}`;
const whatsappUrl = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
  message
)}`;
window.open(whatsappUrl, "_blank");
```

## 📂 Estructura de Archivos

```
casamiento2/
├── index.html          # Página principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este archivo
```

## 🌐 Publicar en Internet

### Opciones Gratuitas:

1. **GitHub Pages**: Sube el proyecto a GitHub y activa Pages
2. **Netlify**: Arrastra la carpeta del proyecto a Netlify
3. **Vercel**: Conecta tu repositorio de GitHub

### Opciones de Pago:

1. **Hostinger**: Hosting económico con dominio incluido
2. **GoDaddy**: Dominios y hosting profesionales
3. **AWS S3**: Para proyectos más avanzados

## 🔧 Solución de Problemas

### La página no se ve bien en móvil

- Verifica que tienes el meta viewport en el HTML
- Usa las herramientas de desarrollador del navegador para probar

### El contador no funciona

- Revisa que la fecha esté en formato correcto
- Abre la consola del navegador para ver errores

### Los estilos no se cargan

- Verifica que los archivos CSS estén en la misma carpeta
- Revisa las rutas de los archivos

## 📞 Soporte

Si tienes problemas o quieres personalizar algo específico:

1. Revisa la consola del navegador para errores
2. Verifica que todos los archivos estén en la misma carpeta
3. Asegúrate de que el servidor web esté funcionando

## 🎊 ¡Listo!

Tu página de invitación de casamiento está lista para usar. Solo personaliza el contenido, sube los archivos a un servidor web y comparte el enlace con tus invitados.

¡Que tengan un día maravilloso! 💕
