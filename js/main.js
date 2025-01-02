// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease',
    once: true,
    offset: 50
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });
});

// Navbar color change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Form Submissions
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you! We will get back to you soon.';
        successMessage.style.color = '#008000';
        successMessage.style.marginTop = '1rem';
        form.appendChild(successMessage);
        
        // Clear form
        form.reset();
        
        // Remove success message after 3 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    });
});

// Room Card Hover Effect
const roomCards = document.querySelectorAll('.room-card');
roomCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Amenity Card Animation
const amenityCards = document.querySelectorAll('.amenity-card');
amenityCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.material-icons');
        icon.style.transform = 'scale(1.2)';
        icon.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.material-icons');
        icon.style.transform = 'scale(1)';
    });
});

// Hero Slider Functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelector('.hero-dots');
let currentSlide = 0;
let slideInterval;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dots.appendChild(dot);
});

function updateSlider() {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.dot')[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetSlideInterval();
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Initialize slider interval
resetSlideInterval();

// Add click events to next/prev buttons
document.querySelector('.next-slide').addEventListener('click', () => {
    nextSlide();
    resetSlideInterval();
});

document.querySelector('.prev-slide').addEventListener('click', () => {
    prevSlide();
    resetSlideInterval();
});

// Scroll down button functionality
document.querySelector('.scroll-down').addEventListener('click', () => {
    const bookingSection = document.querySelector('#booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
});
