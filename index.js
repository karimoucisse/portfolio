const header = document.querySelector("header")
const spanPortfolio = document.querySelector("header>div>span")
console.log(spanPortfolio);
const dropDown= document.getElementById("burger_nav")
const faBars = document.getElementById("icone_bars")
// const logoBottom = document.querySelector(".logo_bottom div i")
// console.log(logoBottom);
const logoLinkedin = document.getElementById("logo_linkedin")
const logoGithub = document.getElementById("logo_github")


//  const slide = new Array("images/deezer.png","images/reservia.png");
//  const logo_bars = document.getElementById("bars")
//  const bars = document.getElementsByClassName("i")[0];
//  let numero = 0;


window.addEventListener("scroll", event => {
    // console.log(scrollY);

    if(scrollY > 168) {
        header.classList.add("transparent")
        spanPortfolio.classList.add("color_red")

    }else {
        header.classList.remove("transparent")
        spanPortfolio.classList.remove("color_red")
    }
    if(scrollY> 100){
        logoLinkedin.classList.add("color_black")
        logoGithub.classList.add("color_black")
    }else {
        logoLinkedin.classList.remove("color_black")
        logoGithub.classList.remove("color_black")
    }
})

faBars.addEventListener('click', event => {
    console.log("bonjour");  
    faBars.classList.toggle("fa-bars") 
    faBars.classList.toggle("fa-times")  
     onClickRemoveNav()    
});

onClickRemoveNav = () =>{
    dropDown.classList.toggle("dropdown")
}

// ChangeSlide = (sens) => {
//     numero = numero + sens;
//     if (numero < 0)
//         numero = slide.length - 1;
//     if (numero > slide.length - 1)
//         numero = 0;
//     document.getElementById("slide").src = slide[numero];
// }

