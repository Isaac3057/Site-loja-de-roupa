let slideIndex = 0;
let slides, dots, autoSlide;

function showSlides(n) {
    slides = document.querySelectorAll(".slide");
    dots = document.querySelectorAll(".dot");

    slides.forEach(slide => (slide.style.display = "none"));
    dots.forEach(dot => dot.classList.remove("active"));

    if (n !== undefined) slideIndex = n;
    else slideIndex++;

    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    clearTimeout(autoSlide);
    autoSlide = setTimeout(showSlides, 6000);
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function currentSlide(n) {
    showSlides(n);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
    document.querySelector(".prev").onclick = () => plusSlides(-1);
    document.querySelector(".next").onclick = () => plusSlides(1);
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.onclick = () => currentSlide(index + 1);
    });
});
