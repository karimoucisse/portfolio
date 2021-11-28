const header = document.querySelector("header")
const spanPort = document.querySelector("header>div>span")
// const spanFolio = document.querySelector("header>div>span + span")
const dropDown= document.getElementById("burger_nav")
const faBars = document.getElementById("icone_bars")
// const logoBottom = document.querySelector(".logo_bottom div i")
// console.log(logoBottom);


//  const logo_bars = document.getElementById("bars")
//  const bars = document.getElementsByClassName("i")[0];

window.addEventListener("scroll", event => {
    // console.log(scrollY);

    if(scrollY > 168) {
        header.classList.add("transparent")
        // spanFolio.classList.add("color_red")
        spanPort.classList.add("color_opacity")

    }else {
        header.classList.remove("transparent")
        // spanFolio.classList.remove("color_red")
        spanPort.classList.remove("color_opacity")
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



