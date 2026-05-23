const videos = document.querySelectorAll('.video-slide');
const videoSlider = document.querySelector('.video-slider');
const title = document.getElementById('videoTitle');
const description = document.getElementById('videoDescription');
const links = document.getElementById('videolinks');
const dots = document.querySelectorAll('.dot');
let currentVideoIndex = 0;

const videoData = [
    { title: "Racing", description: "Scuderia Ferrari", links: "DISCOVER" },
    { title: "Collections", description: "HOLIDAY SEASON", links: "DISCOVER FERRARI GIFTS" },
    { title: "Sports Cars", description: "Start Your Engine", links: "DISCOVER THE FERRARI LINE UP" }
];

function changeVideoAndText(index) {
    if (index === undefined) {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    } else {
        currentVideoIndex = index;
    }

    // Remove active classes for animation reset
    title.classList.remove('active', 'bottom-to-top');
    description.classList.remove('active', 'bottom-to-top');
    links.classList.remove('active', 'bottom-to-top');
    dots.forEach(dot => dot.classList.remove('active'));

    // Move video slider to the next slide
    videoSlider.style.transform = `translateX(-${currentVideoIndex * 100}%)`;

    // Update text content
    title.innerHTML = videoData[currentVideoIndex].title;
    description.innerHTML = videoData[currentVideoIndex].description;
    links.innerHTML = videoData[currentVideoIndex].links;

    // Trigger a reflow to reset animations
    void title.offsetWidth;
    void description.offsetWidth;
    void links.offsetWidth;

    setTimeout(() => {
        // Add the classes for animation and activation
        title.classList.add('active', 'bottom-to-top');
        description.classList.add('active', 'bottom-to-top');
        links.classList.add('active', 'bottom-to-top');
        dots[currentVideoIndex].classList.add('active');
    }, 50);
}

// Initialize the first slide
videoSlider.style.transform = "translateX(0)";
title.classList.add('active', 'bottom-to-top');
description.classList.add('active', 'bottom-to-top');
links.classList.add('active', 'bottom-to-top');

// Change slides every 15 seconds
let intervalId = setInterval(changeVideoAndText, 10000);

// hero code starts here
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    slides[n].classList.add('active');
    currentSlide = n;

    // Reset text animation for the new slide
    const textElements = slides[n].querySelectorAll('.animate-text');
    textElements.forEach(el => {
        el.style.animation = 'none'; // Reset
        el.offsetHeight; // Trigger reflow to restart animation
        el.style.animation = 'textFadeIn 1s forwards';
    });
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

// Initial display
showSlide(0);

// Automatic slide change every 3 seconds (adjust as needed)
setInterval(nextSlide, 5000);
// hero section ends here