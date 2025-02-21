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
