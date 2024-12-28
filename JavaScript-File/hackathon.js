document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Smooth scroll functionality
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    document.getElementById("featuresSection").scrollIntoView({
        behavior: "smooth" // Ensures smooth scrolling
    });
});