$(document).ready(function(){
    $('.menu-toggler').onClick(function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });
});