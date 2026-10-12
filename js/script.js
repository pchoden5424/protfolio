const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const button = this.querySelector(".submit-btn");

    button.innerHTML = `
        Message Sent
        <i class="fa-solid fa-check"></i>
    `;

    button.style.background = "#22c55e";

    this.reset();

    setTimeout(() => {

        button.innerHTML = `
            Send Message
            <i class="fa-solid fa-paper-plane"></i>
        `;

        button.style.background = "";

    }, 3000);

});