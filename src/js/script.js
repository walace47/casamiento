// Funcionalidades JavaScript para la invitación de casamiento

// Función para mostrar notificaciones (debe estar definida antes de usarla)
function showNotification(message) {
    console.log('🔔 Mostrando notificación:', message);

    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-bell me-2"></i>
            ${message}
        </div>
    `;

    // Estilos de la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Agregar al DOM
    document.body.appendChild(notification);

    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Verificar que las funciones estén disponibles globalmente
window.openGoogleMaps = function () {
    // Dirección del evento (puedes personalizar estas coordenadas)
    //const address = 'Pellegrini 1415, Plottier, Neuquén, Argentina';
    //Sconst plusCode = "3Q6R+3X Plottier, Neuquén";
    const plusCode = "3Q6R+3PH Neuquén";

    // Opción 1: Buscar por dirección (más flexible)
    const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`;

    // Opción 2: Coordenadas exactas (si las tienes, descomenta estas líneas)
    // Para obtener coordenadas exactas:
    // 1. Ve a Google Maps
    // 2. Busca tu ubicación
    // 3. Haz clic derecho en el marcador
    // 4. Selecciona "¿Qué hay aquí?"
    // 5. Copia las coordenadas que aparecen
    // const lat = -38.9547; // Reemplaza con la latitud real
    // const lng = -68.0594; // Reemplaza con la longitud real
    // const coordUrl = `https://www.google.com/maps?q=${lat},${lng}`;

    // Abrir en nueva pestaña
    window.open(searchUrl, '_blank');

    // Mostrar notificación
    showNotification('Abriendo Google Maps...');

    // Opcional: Agregar analytics o tracking
};

// Función para abrir Google Maps con la ubicación del evento
function openGoogleMaps() {

    //const plusCode = "3Q6R+3X Plottier, Neuquén";
    // const address = 'Pellegrini 1415, Plottier, Neuquén, Argentina';
    const plusCode = "3Q6R+3PH Neuquén";

    const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`;


    // Abrir en nueva pestaña
    window.open(searchUrl, '_blank');

    // Mostrar notificación
    showNotification('Abriendo Google Maps...');

    // Opcional: Agregar analytics o tracking
    console.log('Usuario abrió Google Maps para:', address);
}

// Función opcional: Obtener direcciones desde la ubicación del usuario
function getDirections() {
    const destination = 'Pellegrini 1415, Plottier, Neuquén, Argentina';
    //const plusCode = "3Q6R+3X Plottier, Neuquén";
    const plusCode = "3Q6R+3PH Neuquén";

    // Crear URL para obtener direcciones
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(plusCode)}`;

    // Abrir en nueva pestaña
    window.open(directionsUrl, '_blank');

    // Mostrar notificación
    showNotification('Abriendo direcciones en Google Maps...');
}

// Hacer la función disponible globalmente
window.getDirections = getDirections;

// Función para detectar si el usuario está en móvil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Función para abrir Google Maps con la app nativa en móviles
function openGoogleMapsMobile() {
    const address = 'Pellegrini 1415, Plottier, Neuquén, Argentina';
    //const plusCode = "3Q6R+3X Plottier, Neuquén";
    const plusCode = "3Q6R+3PH Neuquén";

    if (isMobile()) {
        // En móviles, intentar abrir la app nativa de Google Maps
        const mobileUrl = `https://maps.google.com/maps?q=${encodeURIComponent(plusCode)}`;
        window.open(mobileUrl, '_blank');
        showNotification('Abriendo Google Maps...');
    } else {
        // En desktop, usar la versión web
        openGoogleMaps();
    }
}

// Hacer la función disponible globalmente
window.openGoogleMapsMobile = openGoogleMapsMobile;



// Función para hacer scroll suave a la sección de detalles
function scrollToDetails() {
    const detailsSection = document.getElementById('details');
    detailsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Función para manejar las respuestas RSVP
function rsvpResponse(response) {
    const messageDiv = document.getElementById('rsvp-message');
    let message = '';
    let className = '';

    if (response === 'confirmado') {
        message = `
            <div class="rsvp-success">
                <i class="fas fa-check-circle me-2"></i>
                <strong>¡Gracias por confirmar!</strong><br>
                Estamos muy felices de que puedas venir. Te enviaremos más detalles por WhatsApp.
            </div>
        `;
        className = 'rsvp-success';

        // Simular envío de confirmación
        setTimeout(() => {
            showNotification('Confirmación enviada a los novios');
        }, 1000);

    } else if (response === 'pendiente') {
        message = `
            <div class="rsvp-pending">
                <i class="fas fa-clock me-2"></i>
                <strong>Entendemos que necesitas tiempo</strong><br>
                Por favor confirma tu asistencia antes del 1 de Diciembre.
            </div>
        `;
        className = 'rsvp-pending';
    }

    messageDiv.innerHTML = message;

    // Agregar animación de entrada
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';

    setTimeout(() => {
        messageDiv.style.transition = 'all 0.5s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 100);
}

// Función para mostrar notificaciones (ya definida arriba)

// Función para agregar efectos de parallax al hero
function initParallax() {
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        if (heroContent) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Función para agregar contador regresivo
function initCountdown() {
    // Fecha del casamiento (puedes cambiar esta fecha)
    const weddingDate = new Date('March 7, 2026 19:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Crear o actualizar el contador
            let countdownElement = document.getElementById('countdown');
            if (!countdownElement) {
                countdownElement = document.createElement('div');
                countdownElement.id = 'countdown';
                countdownElement.className = 'countdown-timer';

                // Insertar en el contenedor del countdown-section
                const countdownContainer = document.querySelector('.countdown-container');
                if (countdownContainer) {
                    countdownContainer.appendChild(countdownElement);
                }
            }

            // Asegurar que tiene la clase correcta
            countdownElement.className = 'countdown-timer';

            // Verificar si ya tiene contenido, si no, crearlo
            const existingItems = countdownElement.querySelectorAll('.countdown-item');
            if (existingItems.length === 0) {
                countdownElement.innerHTML = `
                    <div class="countdown-item">
                        <span class="countdown-number">${days}</span>
                        <span class="countdown-label">Días</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${hours}</span>
                        <span class="countdown-label">Horas</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${minutes}</span>
                        <span class="countdown-label">Minutos</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${seconds}</span>
                        <span class="countdown-label">Segundos</span>
                    </div>
                `;
            } else {
                // Actualizar solo los números
                const numbers = countdownElement.querySelectorAll('.countdown-number');
                if (numbers.length === 4) {
                    numbers[0].textContent = days;
                    numbers[1].textContent = hours;
                    numbers[2].textContent = minutes;
                    numbers[3].textContent = seconds;
                }
            }
        }
    }

    // Actualizar cada segundo
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Función para agregar efectos de entrada en scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos que queremos animar
    const animatedElements = document.querySelectorAll('.detail-card, .contact-info');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Función para agregar música de fondo (opcional)
function initBackgroundMusic() {
    // Solo si el usuario interactúa con la página
    let hasInteracted = false;

    document.addEventListener('click', () => {
        if (!hasInteracted) {
            hasInteracted = true;
            // Aquí podrías agregar música de fondo si lo deseas
            console.log('Usuario interactuó con la página');
        }
    });
}

// Función para inicializar los event listeners de Google Maps
function initGoogleMapsEvents() {
    // Event listener para la tarjeta del lugar
    const locationCard = document.getElementById('location-card');
    if (locationCard) {
        locationCard.addEventListener('click', function () {
            openGoogleMaps();
        });
    }

    // Event listener para el botón "Ver Ubicación"
    const btnViewLocation = document.getElementById('btn-view-location');
    if (btnViewLocation) {
        btnViewLocation.addEventListener('click', function (e) {
            e.stopPropagation(); // Evitar que se active el click de la tarjeta
            openGoogleMapsMobile();
        });
    }

    // Event listener para el botón "Obtener Direcciones"
    const btnGetDirections = document.getElementById('btn-get-directions');
    if (btnGetDirections) {
        btnGetDirections.addEventListener('click', function (e) {
            e.stopPropagation(); // Evitar que se active el click de la tarjeta
            getDirections();
        });
    }
}

// Función para inicializar los event listeners de las fotos
function initPhotoEvents() {
    // Agregar event listeners a las imágenes del carousel
    const carouselImages = document.querySelectorAll('#photosCarousel .carousel-photo img');

    carouselImages.forEach((img) => {
        // Hacer que la imagen sea clickeable
        img.style.cursor = 'pointer';

        img.addEventListener('click', function (e) {
            e.stopPropagation(); // Evitar que se active el carousel
            const imgSrc = this.src;
            const imgAlt = this.alt || 'Foto';
            showPhotoModal(imgSrc, imgAlt);
        });
    });

    // También mantener compatibilidad con photo-cards si existen
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach((card, index) => {
        card.addEventListener('click', function () {
            showPhotoModal(null, `Foto ${index + 1}`, index + 1);
        });
    });

    // Agregar event listener a la foto 8
    const photo8 = document.querySelector('.photo8-full');
    if (photo8) {
        photo8.addEventListener('click', function (e) {
            const imgSrc = this.src;
            const imgAlt = this.alt || 'Foto 8';
            showPhotoModal(imgSrc, imgAlt);
        });
    }
}

// Función para mostrar modal de foto
function showPhotoModal(imgSrc, imgAlt, photoNumber = null) {
    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'photo-modal';

    let imageContent = '';
    if (imgSrc) {
        // Mostrar la imagen real
        imageContent = `<img src="${imgSrc}" class="modal-full-image" />`;
    } else {
        // Placeholder si no hay imagen
        imageContent = `
            <div class="photo-placeholder-large">
                <i class="fas fa-heart"></i>
                <p>Foto ${photoNumber || ''}</p>
            </div>
        `;
    }

    modal.innerHTML = `
        <div class="photo-modal-content">
            <span class="photo-modal-close">&times;</span>
            <div class="photo-modal-image">
                ${imageContent}
            </div>
        </div>
    `;

    // Agregar al DOM
    document.body.appendChild(modal);

    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';

    // Mostrar modal
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);

    // Event listeners para cerrar
    modal.addEventListener('click', function (e) {
        // Solo cerrar si se hace clic en el fondo del modal (no en el contenido)
        if (e.target === modal) {
            closePhotoModal(modal);
        }
    });

    // Prevenir que el clic en el contenido cierre el modal
    const modalContent = modal.querySelector('.photo-modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }

    const closeBtn = modal.querySelector('.photo-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            closePhotoModal(modal);
        });
    }

    // Cerrar con tecla ESC
    const handleEscape = function (e) {
        if (e.key === 'Escape') {
            closePhotoModal(modal);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Función para cerrar modal de foto
function closePhotoModal(modal) {
    modal.style.opacity = '0';
    document.body.style.overflow = ''; // Restaurar scroll
    setTimeout(() => {
        if (modal.parentNode) {
            document.body.removeChild(modal);
        }
    }, 300);
}

// Inicializar todas las funcionalidades cuando se carga la página
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar funcionalidades
    initParallax();
    initCountdown();
    initScrollAnimations();
    initBackgroundMusic();
    initGoogleMapsEvents();
    initPhotoEvents();

    // Agregar estilos CSS para el contador
    const countdownStyles = document.createElement('style');
    countdownStyles.textContent = `
        .countdown-timer {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 0;
            flex-wrap: wrap;
        }

        .countdown-item {
            text-align: center;
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px 15px;
            min-width: 90px;
            border: 2px solid rgba(255,255,255,0.3);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .countdown-number {
            display: block;
            font-size: 2.5rem;
            font-weight: bold;
            color: #ffffff;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            margin-bottom: 5px;
        }

        .countdown-label {
            display: block;
            font-size: 0.9rem;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 500;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
            .countdown-timer {
                gap: 10px;
            }

            .countdown-item {
                min-width: 70px;
                padding: 15px 10px;
            }

            .countdown-number {
                font-size: 2rem;
            }

            .countdown-label {
                font-size: 0.75rem;
            }
        }
    `;
    document.head.appendChild(countdownStyles);


});

// Función para compartir en redes sociales
function shareWedding() {
    if (navigator.share) {
        navigator.share({
            title: 'Invitación de Casamiento - María & Juan',
            text: '¡Nos casamos! Te invitamos a celebrar este momento especial.',
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const shareUrl = `https://wa.me/?text=${encodeURIComponent('¡Nos casamos! Te invitamos a celebrar este momento especial. ' + window.location.href)}`;
        window.open(shareUrl, '_blank');
    }
}

// Music Player Functionality
document.addEventListener('DOMContentLoaded', function () {
    const musicBtn = document.getElementById('musicPlayerBtn');
    const backgroundMusic = document.getElementById('backgroundMusic');

    if (musicBtn && backgroundMusic) {
        let isPlaying = false;
        let toastTimeout = null;

        // Función para mostrar el toast
        const showMusicToast = () => {
            // Eliminar toast existente si hay uno
            const existingToast = document.querySelector('.music-toast');
            if (existingToast) {
                existingToast.remove();
            }

            // Crear el toast
            const toast = document.createElement('div');
            toast.className = 'music-toast';
            toast.innerHTML = '<i class="fas fa-music"></i>Apretá para reproducir música';
            document.body.appendChild(toast);

            // Mostrar el toast
            setTimeout(() => {
                toast.classList.add('show');
            }, 10);

            // Ocultar y eliminar después de 3 segundos
            if (toastTimeout) {
                clearTimeout(toastTimeout);
            }
            toastTimeout = setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
        };

        // Función para ocultar el toast
        const hideMusicToast = () => {
            const toast = document.querySelector('.music-toast');
            if (toast) {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }
            if (toastTimeout) {
                clearTimeout(toastTimeout);
                toastTimeout = null;
            }
        };

        // Intentar reproducir automáticamente al cargar la página
        const tryAutoPlay = () => {
            backgroundMusic.play().then(() => {
                musicBtn.classList.add('playing');
                musicBtn.setAttribute('aria-label', 'Pausar música');
                isPlaying = true;
            }).catch(error => {
                console.log('No se pudo reproducir automáticamente (requiere interacción del usuario):', error);
                // Mostrar toast si no se pudo reproducir automáticamente
                showMusicToast();
            });
        };

        // Intentar reproducir después de un pequeño delay para asegurar que todo esté cargado
        setTimeout(tryAutoPlay, 500);

        // Reproducir música cuando el usuario toque la pantalla o haga scroll (para móviles)
        let musicStartedByTouch = false;
        const startMusicOnInteraction = () => {
            if (!isPlaying && !musicStartedByTouch) {
                musicStartedByTouch = true;
                backgroundMusic.play().then(() => {
                    musicBtn.classList.add('playing');
                    musicBtn.setAttribute('aria-label', 'Pausar música');
                    isPlaying = true;
                    hideMusicToast(); // Ocultar toast cuando se reproduce
                }).catch(error => {
                    console.log('Error al reproducir música al interactuar:', error);
                    musicStartedByTouch = false; // Permitir intentar de nuevo
                });
            }
        };

        // Eventos de touch para móviles (solo una vez)
        document.addEventListener('touchstart', startMusicOnInteraction, { once: true, passive: true });
        document.addEventListener('touchend', startMusicOnInteraction, { once: true, passive: true });
        // También escuchar scroll en móviles
        let scrollAttempted = false;
        document.addEventListener('scroll', () => {
            if (!scrollAttempted) {
                scrollAttempted = true;
                startMusicOnInteraction();
            }
        }, { passive: true });

        musicBtn.addEventListener('click', function () {
            if (isPlaying) {
                backgroundMusic.pause();
                musicBtn.classList.remove('playing');
                musicBtn.setAttribute('aria-label', 'Reproducir música');
                isPlaying = false;
            } else {
                backgroundMusic.play().then(() => {
                    musicBtn.classList.add('playing');
                    musicBtn.setAttribute('aria-label', 'Pausar música');
                    isPlaying = true;
                    hideMusicToast(); // Ocultar toast cuando se reproduce
                }).catch(error => {
                    console.log('Error al reproducir música:', error);
                    // Si hay un error (por ejemplo, el archivo no existe), no hacer nada
                });
            }
        });

        // Pausar música cuando la página pierde el foco (opcional)
        document.addEventListener('visibilitychange', function () {
            if (document.hidden && isPlaying) {
                backgroundMusic.pause();
                musicBtn.classList.remove('playing');
                musicBtn.setAttribute('aria-label', 'Reproducir música');
                isPlaying = false;
            }
        });
    }
});
