// Gérer la fermeture de la pop-up
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});


let slideIndex = 1; // Initialisation de la première diapositive
showSlides(slideIndex);

// Fonction pour passer à la diapositive suivante/précédente
function plusSlides(n) {
    slideIndex += n;

    // Si dépassement des limites, revenir au début ou à la fin
    const slides = document.getElementsByClassName("custom-slider");
    if (slideIndex > slides.length) {
        slideIndex = 1; // Retourner à la première diapositive
    }
    if (slideIndex < 1) {
        slideIndex = slides.length; // Retourner à la dernière diapositive
    }

    showSlides(slideIndex);
}

// Fonction pour afficher une diapositive spécifique via les points
function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

// Fonction principale pour afficher les diapositives
function showSlides(n) {
    const slides = document.getElementsByClassName("custom-slider");
    const dots = document.getElementsByClassName("dot");

    // Masquer toutes les diapositives
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Retirer la classe "active" de tous les points
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Afficher uniquement la diapositive courante
    slides[slideIndex - 1].style.display = "block";

    // Ajouter la classe "active" au point correspondant
    dots[slideIndex - 1].className += " active";
}
