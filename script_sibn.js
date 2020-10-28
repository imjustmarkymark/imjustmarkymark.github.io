// Frodo Hover easter egg
document.getElementById('frodoText').addEventListener("mouseover", frodoIn);
document.getElementById('frodoText').addEventListener("mouseout", frodoOut);
function frodoIn() {
       document.getElementById('frodo').style.visibility = "visible";
}
function frodoOut() {
       document.getElementById('frodo').style.visibility = "hidden";
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

//Carousel slide indicator
// document.getElementById('test').addEventListener('click', highlightSlide);
// function highlightSlide() {
//        if(parent.currentSlide == 0) {
//               document.querySelector('#slide_one').style.opacity = "1.0";
//        }
//        else if(currentSlide == 1) {
//               document.querySelector('#slide_one').style.opacity = "1.0";
//        }
// }