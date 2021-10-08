 var navHamburger= document.getElementById("burger_nav")
 var slide = new Array("images/deezer.png","images/reservia.png", "images/cv.png");
 var numero = 0;

function onBarsClick(){
    navHamburger.classList.toggle("dropdown")
}

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

