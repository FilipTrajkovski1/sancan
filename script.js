document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const reviews = document.querySelectorAll(".review-box");

    // Ako sekcija ne postoji, prekini
    if (reviews.length === 0) return;

    let reviewIndex = 0;

    setInterval(() => {
        reviews[reviewIndex].classList.remove("active");
        reviewIndex = (reviewIndex + 1) % reviews.length;
        reviews[reviewIndex].classList.add("active");
    }, 15000);

});