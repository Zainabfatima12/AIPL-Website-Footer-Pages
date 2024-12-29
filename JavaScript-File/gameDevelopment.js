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

function playVideo() {
    const video = document.getElementById('cta-video');
    const playButton = document.querySelector('.play-button');

    if (video.paused) {
        video.play(); // Play the video
        playButton.style.display = 'none'; // Hide the play button when the video starts
    }
}

// Smooth scroll functionality
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    document.getElementById("featuresSection").scrollIntoView({
        behavior: "smooth" // Ensures smooth scrolling
    });
});