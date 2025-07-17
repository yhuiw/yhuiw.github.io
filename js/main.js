const hamburger = document.querySelector('.hamburger'); // mobile nav toggle
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => {  // close mobile nav on link click
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
);

const themeCheckbox = document.getElementById('theme-checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeCheckbox.checked = true;
}

themeCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem(
        'theme',
        document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
});

// smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    })
);

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.15)';
        nav.style.backdropFilter = 'blur(25px)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
        nav.style.backdropFilter = 'blur(20px)';
    }
});