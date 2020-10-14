// Frodo Hover easter egg
document.getElementById('frodoText').addEventListener("mouseover", frodoIn);
document.getElementById('frodoText').addEventListener("mouseout", frodoOut);

function frodoIn() {
       document.getElementById('frodo').style.visibility = "visible";
}

function frodoOut() {
       document.getElementById('frodo').style.visibility = "hidden";
}

// Image Carousel
var carouselWrapper = document.getElementById('UX_design_wrapper');
var carousel = document.getElementById('UX_design');



function scrollToNextItem() {
        carousel.scrollBy({left: imgWidth, top: 0, behavior:'smooth'});
 }
 function scrollToPrevItem() {

        carousel.scrollBy({left: -imgWidth, top: 0, behavior:'smooth'});
 }

 // Header Shadow
document.addEventListener('scroll', addShadow);

function addShadow() {
    if (window.scrollY > 0) {
        document.getElementById("nav_header").style.transition = "all .3s ease";
        document.getElementById("nav_header").style.boxShadow = "10px 0px 10px 0px rgba(0, 0, 0, .2)";
    }
    else {
        document.getElementById("nav_header").style.transition = "all .3s ease";
        document.getElementById("nav_header").style.boxShadow = "";
    }
}