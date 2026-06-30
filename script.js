document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar__link');
    const hamburger = document.querySelector('.navbar__toggle-wrapper');
    const mobileMenu = document.querySelector('.navbar__mobile-menu');
    const header = document.querySelector('.header');

    // Active navbar link on click
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(item => {
                item.classList.remove('navbar__link--active');
            });

            this.classList.add('navbar__link--active');
        });
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('open');
    });

    // Close menu when mobile link clicked
    document.querySelectorAll('.navbar__mobile-link').forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('open');
        }
    });

    // Navbar shadow on scroll
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });
});


// Active Navbar Link While Scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar__link");

window.addEventListener("scroll", () => {
    let current = "about-content";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("navbar__link--active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("navbar__link--active");
        }
    });
});