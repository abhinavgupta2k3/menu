// Fade-in animation for categories
const categories = document.querySelectorAll('.category');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
categories.forEach(cat => observer.observe(cat));

// Highlight active nav link
const sections = document.querySelectorAll('.category');
const navLinks = document.querySelectorAll('nav a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(sec => sectionObserver.observe(sec));
