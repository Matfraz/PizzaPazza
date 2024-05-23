//funzione per caricamento
window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loading-screen');
    localStorage.removeItem('loadingScreenHidden'); // Rimuovi l'indicatore che la schermata è stata nascosta

    if (loadingScreen) {
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 2000);
    }
});



document.addEventListener("DOMContentLoaded", function() {
    let item = document.querySelector('.hamburger'); // Seleziona l'elemento hamburger
    if (item) { // Verifica che l'elemento esista
        item.addEventListener("click", function() { // Aggiunge un ascoltatore di eventi per il click
            document.querySelector('.nav-links').classList.toggle('open'); // Aggiunge/toglie la classe 'open' all'elemento menu
            item.classList.toggle('open'); // Aggiunge/toglie la classe 'open' all'elemento hamburger
        });
    } else {
        console.error("Elemento .hamburger non trovato");
    }
});







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


function openPopup() {
    document.getElementById("history-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("history-popup").style.display = "none";
}

let slideInde = 0;
showSlides(slideInde);

function nextSlide() {
    showSlides(slideInde += 1);
}

function prevSlide() {
    showSlides(slideInde -= 1);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-slide img');
    if (n >= slides.length) {
        slideInde = 0;
    }
    if (n < 0) {
        slideInde = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideInde ? 'block' : 'none';
    });
}
