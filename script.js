
// Smooth scroll behavior for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight nav link on scroll (optional)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
 document.addEventListener("DOMContentLoaded", function () {
const reviewCards = document.querySelectorAll('.review-card');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
  entry.target.classList.add('visible');
  observer.unobserve(entry.target); // animate once
}
});
}, {
threshold: 0.2
});

reviewCards.forEach(card => {
observer.observe(card);
});
});
document.addEventListener("DOMContentLoaded", function () {
const slides = document.querySelectorAll(".screenshots .slide");
let current = 0;

function showSlide(index) {
slides.forEach((slide, i) => {
slide.classList.remove("active");
if (i === index) {
  slide.classList.add("active");
}
});
}

function nextSlide() {
current = (current + 1) % slides.length;
showSlide(current);
}

showSlide(current); // Show first slide

setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
document.addEventListener("DOMContentLoaded", function () {
const cards = document.querySelectorAll(".review-card");
let current = 0;

function showSlide(index) {
cards.forEach((card, i) => {
card.classList.remove("active", "exit-left");
if (i === index) {
  card.classList.add("active");
} else if (i === (index - 1 + cards.length) % cards.length) {
  card.classList.add("exit-left");
}
});
}

function nextSlide() {
current = (current + 1) % cards.length;
showSlide(current);
}

showSlide(current); // Show the first slide

setInterval(nextSlide, 4000); // Change testimonial every 4 seconds
});

