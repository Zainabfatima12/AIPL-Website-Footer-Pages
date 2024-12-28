document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

/*document.getElementById('search-button').addEventListener('click', function() {
    const searchBox = document.getElementById('search-box');
    if (searchBox.style.display === 'block') {
        searchBox.style.display = 'none';
    } else {
        searchBox.style.display = 'block';
    }
  });*/
  
  // Hide search box when clicking outside
  /*document.addEventListener('click', function(event) {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');
    if (!searchButton.contains(event.target) && !searchBox.contains(event.target)) {
        searchBox.style.display = 'none';
    }
  });*/

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
       video.play();
     playButton.style.display = 'none';
    }
}