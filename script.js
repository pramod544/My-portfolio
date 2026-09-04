// Get menu button

const menuBtn = document.getElementById("menu-btn");


// Get navigation links

const navLinks = document.getElementById("nav-links");


// When menu button is clicked

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});
// Close menu after clicking a navigation link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});
// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");

const formMessage = document.getElementById("form-message");


contactForm.addEventListener("submit", function (event) {

    // Stop page refresh

    event.preventDefault();


    // Show success message

    formMessage.textContent =
        "Thank you! Your message has been submitted successfully.";


    // Clear form

    contactForm.reset();

});
// =========================
// SCROLL ANIMATION
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    observer.observe(element);

});