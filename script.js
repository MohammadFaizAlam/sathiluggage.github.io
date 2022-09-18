'use strict' 

// =================  NAVBAR Toggle starts =================

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
    elemArr[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

// =================  NAVBAR Toggle ends =================



// ================= Toggle Navbar and Overlay when click any Navbar-Links starts =================

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for(let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

// ================= Toggle Navbar and Overlay when click any Navbar-Links ends =================






// ================= HEADER AND GO TOP BTN ACTIVE WHEN WINDOW SCROLL DOWN TO 400px starts =================

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]")

window.addEventListener("scroll", function() {
    if(window.scrollY >= 400) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});

// ================= HEADER AND GO TOP BTN ACTIVE WHEN WINDOW SCROLL DOWN TO 400px ends =================
