// Smooth Scroll Animation
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Text Animation
const text = document.querySelector('.animate-text');
text.style.opacity = 0;

setTimeout(() => {
    text.style.transition = "2s";
    text.style.opacity = 1;
}, 500);
