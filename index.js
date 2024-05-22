document.addEventListener('DOMContentLoaded', function() {
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Inizializza la prima slide come attiva
    document.querySelector('.menu-slide').classList.add('active');
});


let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselSlide = document.querySelector('.carousel-slide');
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;
    const offset = -slideIndex * 100 / totalSlides;
    carouselSlide.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Cambia slide ogni 3 secondi

