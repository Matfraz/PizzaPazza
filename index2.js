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




