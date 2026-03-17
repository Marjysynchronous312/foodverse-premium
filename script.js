const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('menuOverlay');

// Function to toggle menu
const toggleMenu = () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    // Prevent scrolling when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
};

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// IntersectionObserver for smooth scroll animations
const observerOptions = { threshold:0.1 };
const revealElems = document.querySelectorAll('h1,p,.btn,.card,.menu-title,.parallax,.about img,.about div,.review,.contact input,.contact textarea,.contact button');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.style.opacity=1; }
  });
}, observerOptions);
revealElems.forEach(el=>observer.observe(el));