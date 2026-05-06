// --- Dark Mode Toggle Logic ---
const darkModeBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
const icon = darkModeBtn.querySelector('i');

darkModeBtn.addEventListener('click', () => {
    const isDark = body.hasAttribute('data-theme');
    
    if (isDark) {
        body.removeAttribute('data-theme');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Check local storage for saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
}

// --- Smooth Scroll Reveal Animation ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

// Target all major sections and cards for animation
document.querySelectorAll('section, .about-card, .item-card').forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
});

// Add CSS for reveal via JS
const style = document.createElement('style');
style.textContent = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    .reveal-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// --- Lightbox Gallery Logic ---
const galleryImgs = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-lightbox');

galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// --- Simple Form Handling ---
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you, Ritesh! Your message has been sent successfully.');
    this.reset();
});

// --- Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.background = 'var(--nav-bg)';
    nav.style.padding = '20px';
});
