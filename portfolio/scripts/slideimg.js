// pour écouter le scroll dans la console navigateur


window.addEventListener('scroll', function(){
    
});


var scroll = window.requestAnimationFrame || 
function(callback) {
    window.setTimeout(callback, 1000/60)
};

var elementsToShow = document.querySelectorAll('.show-on-scroll');


// fonction loop() avec toggle (ou add) pour les class
function loop(){
    
    elementsToShow.forEach(function(element){
        if(isElementInViewport(element)){
            element.classList.add('is-visible');
        }
        else
        element.classList.remove('is-visible');

    });
    scroll(loop);
    
    
}


loop();

// fonction pour les coordonnées élément (coord balise html)
function isElementInViewport(el){
    //if(typeOf jQuery === "function" && el instanceof jQuery){
      //  el= el[0];
    //}

    var rect = el.getBoundingClientRect();
    return(
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight))
        &&
        (rect.top <= (window.innerHeight || document.documentElement.clientHeight))

        ||
        
        (rect.top >= 0 
            && 
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}