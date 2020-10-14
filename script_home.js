

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