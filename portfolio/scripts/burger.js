/*const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
burger.classList.toggle('active');
});*/

// le boutton 'menu' : open

const button = document.querySelector('.menu-toggler');
const menu = document.querySelector('.top-nav');

button.addEventListener('click', () => {
button.classList.toggle('open');
menu.classList.toggle('open');
});


// le boutton 'menu' : close

menu.addEventListener('click', () => {
    button.classList.remove('open');
    menu.classList.remove('open');

});

//const nav = document.querySelector('nav');
/*
nav.addEventListener('click', () => {
    nav.classList.getElementByClass('nav');
    nav.classList.animate('html, body');
});
*/



// le boutton 'retour haut de page' (se situe en bas de page)

const up = document.querySelector('.up');

var vitesse=-1;

up.addEventListener('click', () => {
    scrollLent();

    
    function scrollLent() {
        var el = document.getElementById('taille_body');
        var taille = el.offsetHeight; // pour test
    
        //alert(ancrParDeux);
        
        // récup taille du documentElement (<html>)
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop > 1) // pourcentage
        {
            if(scrollTop >= taille/2){ // > 50pourCent de l'ancrage scroll
                vitesse--; // -- augmente la vitesse du scroll, sisi jvous jure
                console.log(vitesse);
            }
                
            else if(scrollTop < taille/2 - 950) // < 50% de l'ancr - x car taille docElement < taille de la page
            {
                    vitesse++;
                console.log(vitesse);

            }
            scrollBy(0, vitesse);
            setTimeout(scrollLent, 1);
            if(vitesse >= -2) // sécurité, sinon la page fait l'ascenseur
            {vitesse=-2;}
        }
    return true;
    }

});