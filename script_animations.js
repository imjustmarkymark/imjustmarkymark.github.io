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

// Nav buttons
document.getElementById('navOneHeader').addEventListener('click', showHeader1);
document.addEventListener('click', hideHeader1);
document.getElementById('navTwoHeader').addEventListener('click', showHeader2);
document.addEventListener('click', hideHeader2);

function showHeader1() {
    console.log("nav one worked!");

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

// Lightbox
// import Lightbox from 'bs5-lightbox';

// const options = {
// 	keyboard: true,
// 	size: 'fullscreen'
// };

// document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	const lightbox = new Lightbox(el, options);
// 	lightbox.show();
// }));