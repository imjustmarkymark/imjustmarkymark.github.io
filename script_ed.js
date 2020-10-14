// Jack Nicholson easter egg
document.getElementById('jackieText').addEventListener("mouseover", jackieIn);
document.getElementById('jackieText').addEventListener("mouseout", jackieOut);

function jackieIn() {
       document.getElementById('jackie').style.visibility = "visible";
}

function jackieOut() {
       document.getElementById('jackie').style.visibility = "hidden";
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

// window.addEventListener("resize", fixHeader);
// function fixHeader() {
//     document.querySelector("header_ul").style.width = window.innerWidth+"px";
//     document.querySelector("header_ul").style.backgroundColor = "green";

// }