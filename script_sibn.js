// Frodo Hover easter egg
// document.getElementById('frodoText').addEventListener("mouseover", frodoIn);
// document.getElementById('frodoText').addEventListener("mouseout", frodoOut);
// function frodoIn() {
//        document.getElementById('frodo').style.visibility = "visible";
// }
// function frodoOut() {
//        document.getElementById('frodo').style.visibility = "hidden";
// }

// Nav buttons
// document.getElementById('navOneHeader').addEventListener('click', showHeader1);
// document.addEventListener('click', hideHeader1);
// document.getElementById('navTwoHeader').addEventListener('click', showHeader2);
// document.addEventListener('click', hideHeader2);

function showHeader1() {
    document.getElementById('navOneOptions').style.opacity = "1";
    document.getElementById('navOneOptions').style.zIndex = "1";
    document.getElementById('navOneOptions').style.transform = "translateY(0px)";
}

function hideHeader1(evt) {
    var clickIn = document.getElementById('navOneHeader');
    targetElement = evt.target;

    do {
        if (targetElement == clickIn) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    
    document.getElementById('navOneOptions').style.opacity = "0";
    document.getElementById('navOneOptions').style.zIndex = "-1";
    document.getElementById('navOneOptions').style.transform = "translateY(-10px)";
    }

function showHeader2() {
    document.getElementById('navTwoOptions').style.opacity = "1";
    document.getElementById('navTwoOptions').style.zIndex = "1";
    document.getElementById('navTwoOptions').style.transform = "translateY(0px)";
}

function hideHeader2(evt) {
    var clickIn = document.getElementById('navTwoHeader');
    targetElement = evt.target;

    do {
        if (targetElement == clickIn) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    
    document.getElementById('navTwoOptions').style.opacity = "0";
    document.getElementById('navTwoOptions').style.zIndex = "-1";
    document.getElementById('navTwoOptions').style.transform = "translateY(-10px)";
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
//        if(Siema1.currentSlide == 0) {
//               document.querySelector('#slide_one').style.opacity = "1.0";
//        }
//        else if(Siema1.currentSlide == 1) {
//               document.querySelector('#slide_one').style.opacity = "1.0";
//        }
// }