const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mk-nav-menu");
const navLink = document.querySelectorAll(".mk-nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// for auto year 
let date = new Date();
// console.log (date);
let year = date.getFullYear();
// console.log(year);
const Nmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const m = new Date();
let month = Nmonth[m.getMonth()];
// console.log(month);

// document.getElementById("autoyear").textContent = year;


