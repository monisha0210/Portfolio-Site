// Mobile menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    navLinks.classList.remove('active'); // Close mobile menu
  });
});

// Scroll indicator
window.addEventListener('scroll', () => {
  const scrollIndicator = document.getElementById('scrollIndicator');
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollIndicator.style.width = scrollPercent + '%';
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.background = window.scrollY > 100 
    ? 'rgba(15, 15, 35, 0.98)' 
    : 'rgba(15, 15, 35, 0.95)';
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards and skill tags
document.querySelectorAll('.project-card, .skill-tag').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Typing effect for hero text
const heroText = "I'm a Front End Developer";
const heroP = document.querySelector('.hero-content p');
let i = 0;

function typeWriter() {
  if (i < heroText.length) {
    heroP.textContent = heroText.substring(0, i + 1);
    i++;
    setTimeout(typeWriter, 50);
  }
}

setTimeout(() => {
  heroP.textContent = '';
  typeWriter();
}, 1000);
