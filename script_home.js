

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

var dropdown_content = document.getElementById("dropdown_content");
var dropdownLabel_width = document.getElementById("dropdownLabel").offsetWidth;

function equateDropdown() {
    // dropdown_content.offsetWidth = dropdownLabel_width;
    dropdownLabel_width = document.getElementById("dropdownLabel").offsetWidth;
    dropdown_content.style.transition = "none";
    dropdown_content.style.width = dropdownLabel_width + "px";
    console.log(dropdown_content.offsetWidth);
    console.log(dropdownLabel_width);
}

document.getElementById('dropdownLabel').addEventListener('mouseover', equateDropdown);
// window.addEventListener('resize', equateDropdown);

// equateDropdown();
