// Efecto de corazones al hacer clic
document.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
});

// Ensure DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll suave para los botones del panel Hero
    document.getElementById('hero-galery-button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('hero-music-button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('hero-text-button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Toggle navbar visibility on mobile
    const navbarFavicon = document.querySelector('.navbar-favicon');
    const navLinks = document.getElementById('nav-links');

    navbarFavicon.addEventListener('click', function() {
        navLinks.classList.toggle('visible');
    });

    // Toggle navbar visibility on mobile
    const navbarFaviconMobile = document.querySelector('.navbar-mobile .navbar-favicon');
    const navLinksMobile = document.querySelector('.navbar-mobile .nav-links');

    if (navbarFaviconMobile) {
        navbarFaviconMobile.addEventListener('click', function() {
            navLinksMobile.classList.toggle('visible');
        });
    }
});

// Efecto al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Agregar fotos dinámicamente a la galería
const gallery = document.getElementById('gallery');
const totalPhotos = 91; // Total de fotos
const photosPerDay = 7; // Fotos por día
const startDate = new Date('2023-02-02'); // Fecha de inicio
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1; // Enero es 0, Febrero es 1, etc.

let photosToShow;

if (currentMonth === 2 && currentDay >= 2 && currentDay <= 14) {
    photosToShow = photosPerDay * (currentDay - 1);
} else if (currentMonth > 2 || (currentMonth === 2 && currentDay > 14)) {
    photosToShow = totalPhotos;
} else {
    photosToShow = 0;
}

for (let i = 1; i <= photosToShow; i++) {
    const img = document.createElement('img');
    img.src = `assets/photos/${i}.${i > 22 ? 'jpeg' : 'jpg'}`;
    img.alt = 'Nuestra foto';
    img.className = 'gallery-photo';
    gallery.appendChild(img);
}

// Frases para las imágenes
const descriptions = [
    "¿Recuerdas que necesitábamos una foto juntos?",
    "Pero mi sombrillita roja lo arruinó todo:(",
    "Estar contigo en tu balconcito fue un momento tan hermoso. :3",
    "Estar bajo el cielo oscuro contigo siempre ha sido lo más bonito. :3",
    "Y ver tu sonrisa cuando te beso siempre hace que mi corazón lata más rápido. c':",
    "Tus besos me llenan de alegría el alma",
    "Y tus abrazos me hacen sentir en casa",
    "No puedo dejar de pensar en ti",
    "Pues eres tú todo lo que quiero para mi vida",
    "Cuando estamos frente a frente el tiempo se detiene",
    "Miremos al futuro juntos, corazón",
    "Nos miramos tan hermosos juntos",
    "Te amo, te amo",
    "y te amo",   
    "Embeces hacemos nuestras tonterías juntos",
    "A veces nos sacamos de onda. jsjsj",
    "A veces simplemente disfrutamos de la vida",
    "Pero estar juntos",
    "Eso es lo que más ilumina mis días",
    "Y rememorar esos momentos",
    "Me llena de ternura el corazón",
    "Es truste que la mayor parte del tiempo lo hayamos pasado por video llamada, pero",
    "Cada momento que pasamos lado a lado se vuelve más especial gracias a eso y",
    "Todos esos recuerdos se vuelven más valiosos",
    "Más enérgicos, más intensos,",
    "Más felices",
    "Sé que me amas como yo te amo, preciosa",
    "Muchas gracias por estos meses juntos. Por favor, los multipliquemos. UwU",
    "De verdad, todo el mundo me dice lo bien que nos vemos juntitos :3",
    "Aaaah, cómo extraño estar junto a ti en tu balconcito UnU",
    "Como tú y yo, naidien",
    "Jsjsj, aquí tengo ojos de marijuano",
    "Por muchos meses más, mi vida.",
    "Porque a tu lado",
    "¡Todo es más divertido! (Aunque tú te enojas por todo. Jsjsj)",
    "Wof, wof!",
    // ...agrega más descripciones según sea necesario...
];

// Crear el modal solo cuando se haga clic en una imagen
let modal, modalContent, modalImage, modalText;

gallery.addEventListener('click', function(e) {
    if (e.target.tagName === 'IMG') {
        if (!modal) {
            modal = document.createElement('div');
            modal.className = 'modal';
            modal.style.display = 'none'; // Asegúrate de que el modal esté oculto por defecto
            document.body.appendChild(modal);

            modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            modal.appendChild(modalContent);

            modalImage = document.createElement('img');
            modalImage.className = 'modal-image';
            modalContent.appendChild(modalImage);

            modalText = document.createElement('p');
            modalText.className = 'modal-text';
            modalContent.appendChild(modalText);

            modal.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }

        const imgSrc = e.target.src;
        const imgIndex = Array.from(gallery.children).indexOf(e.target);
        modalImage.src = imgSrc;
        modalText.textContent = descriptions[imgIndex] || 'Descripción no disponible';
        modal.style.display = 'flex';
    }
});

function toggleMobileMenu() {
    const mobileLinks = document.getElementById('mobile-links');
    mobileLinks.classList.toggle('show');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobile-links').classList.remove('show');
        });
    });
});

// Close mobile menu when scrolling
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.getElementById('mobile-links').classList.remove('show');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);