
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Donation form handler
    document.getElementById('donationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your donation! Redirecting to payment processor...');
    });

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if(current < target) {
                current += increment;
                counter.innerText = Math.ceil(current) + (counter.innerText.includes('+') ? '+' : '%');
                setTimeout(updateCounter, 30);
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(counter);
            }
        });

        observer.observe(counter);
    });
});
