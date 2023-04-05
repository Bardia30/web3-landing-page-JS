const heroImg = document.querySelector(".hero__img");

let windowWidth = window.innerWidth;
console.log(windowWidth);


if (windowWidth < 1200){
    heroImg.src = "./assets/images/image-web-3-mobile.jpg"
    heroImg.style.width = "23.43745rem";
    heroImg.style.height = "18.75rem";
}