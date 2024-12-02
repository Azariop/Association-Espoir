// Gérer la fermeture de la pop-up
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});




// Gestion du diaporama d'images
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slideshow .slide");
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? "block" : "none";
    });

    slideIndex = (slideIndex + 1) % slides.length; // Passe à la slide suivante, retourne au début à la fin
}

// Change d'image toutes les 3 secondes
setInterval(showSlides, 2000);

// Afficher la première slide immédiatement
showSlides();



