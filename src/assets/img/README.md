# 📸 Carousel de Fotos - Instrucciones

## 🎯 Cómo Funciona

El carousel está configurado para mostrar 6 fotos de tu casamiento. Cada foto tiene:

- **Título personalizable**
- **Descripción personalizable**
- **Placeholder automático** si no encuentra la imagen

## 📁 Imágenes Requeridas

Para que funcione completamente, agrega estas imágenes en esta carpeta:

1. **photo1.jpg** - Nuestro Primer Encuentro
2. **photo2.jpg** - Momentos Compartidos
3. **photo3.jpg** - El Día de la Propuesta
4. **photo4.jpg** - Preparando el Casamiento
5. **photo5.jpg** - Familia y Amigos
6. **photo6.jpg** - Nuestro Amor

## 🔧 Personalización

### Cambiar Títulos y Descripciones

Edita el archivo `src/index.html` en la sección de fotos:

```html
<div class="carousel-caption">
  <h5>Tu Título Aquí</h5>
  <p>Tu descripción aquí</p>
</div>
```

### Cambiar Cantidad de Fotos

1. Agrega/quita slides en el HTML
2. Ajusta los indicadores del carousel
3. Actualiza los estilos CSS si es necesario

### Cambiar Colores

Edita `src/css/styles.css` en la sección "Carousel Styles"

## 📱 Características

- **Responsive**: Se adapta a móviles y desktop
- **Auto-play**: Las fotos cambian automáticamente
- **Controles**: Botones de navegación y indicadores
- **Fallback**: Placeholders SVG si no hay imágenes
- **Tema Beige**: Consistente con tu invitación

## 🚀 Funcionalidades

- **Deslizar**: Toca y desliza en móviles
- **Controles**: Botones anterior/siguiente
- **Indicadores**: Puntos para navegar directamente
- **Auto-rotación**: Cambio automático cada 5 segundos
- **Pausa**: Se pausa al hacer hover

¡Agrega tus fotos y disfruta del carousel! 📸💕
