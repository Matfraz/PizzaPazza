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


//funzione per header visibile
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const c1 = document.querySelectorAll('.color5');
    const c2 = document.querySelectorAll('.color2');
    const menuAs = document.querySelectorAll('.menu__a');
    const logo = document.querySelector('.navbar__logo');

    console.log('JavaScript loaded'); // Verifica che il JS sia caricato

    window.addEventListener('scroll', () => {
        console.log('Scroll detected'); // Verifica che lo scroll venga rilevato
        if (window.scrollY > 0) {
            console.log('Adding scrolled class');
            header.classList.add('scrolled');
            c1.forEach(c1 => {
                c1.classList.add('scrolled');
            });
            
            c2.forEach(c2 => {
                c2.classList.add('scrolled');
            });

            logo.classList.add('scrolled');
            menuAs.forEach(menuA => {
                menuA.classList.add('scrolled');
            });
        } else {
            console.log('Removing scrolled class');
            header.classList.remove('scrolled');
            logo.classList.remove('scrolled');
            menuAs.forEach(menuA => {
                menuA.classList.remove('scrolled');
            });
            c1.forEach(c1 => {
                c1.classList.remove('scrolled');
            });
            c2.forEach(c2 => {
                c2.classList.remove('scrolled');
            });
        }
    });
});


