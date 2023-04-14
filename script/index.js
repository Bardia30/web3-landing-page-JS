const heroImg = document.querySelector(".hero__img");

let windowWidth = window.innerWidth;

if (windowWidth < 1200){
    heroImg.src = "./assets/images/image-web-3-mobile.jpg"
    heroImg.style.width = "23.43745rem";
    heroImg.style.height = "18.75rem";
}


let hamburger = document.querySelector(".navbar__hamburger-icon");

hamburger.addEventListener('click', (e)=>{
    const menu = document.querySelector(".navbar-hamburger");
    menu.style.display = 'flex';

    const mask = document.querySelector('.page-mask');
    mask.style.display = 'flex';

    const navbarIcon = document.querySelector('.navbar-hamburger__icon');
    navbarIcon.src = './assets/images/icon-menu-close.svg';
})


let hamburgerClose = document.querySelector('.navbar-hamburger__icon');


hamburgerClose.addEventListener('click', ()=>{
    const menu = document.querySelector(".navbar-hamburger");
    menu.style.display = 'none';

    const mask = document.querySelector('.page-mask');
    mask.style.display = 'none';
})