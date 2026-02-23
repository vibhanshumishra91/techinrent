// Smooth scrolling functionality for navigation
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
};

// Event listeners for smooth scrolling on anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
    });
});

// Form handling functionality
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    // Process form submission (e.g., send to server)
    // Provide confirmation or error feedback
});

// Animations for elements when they appear in the viewport
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('fade-in'); // Assuming fade-in is defined in CSS
        }
    });
};
window.addEventListener('scroll', animateOnScroll);

// FAQ accordions functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        answer.classList.toggle('active');
    });
});