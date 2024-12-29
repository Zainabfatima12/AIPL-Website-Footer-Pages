document.getElementById("searchBtn").addEventListener("click", function () {
    const domain = document.getElementById("domain").value;
    const location = document.getElementById("location").value;

    if (domain || location) {
        alert(`Searching for domain: "${domain}" and location: "${location}"`);
    } else {
        alert("Please enter a domain or select a location to search.");
    }
});
/*------------------------Circle Section---------------------------*/
function startNow() {
    alert("Get Started with Your Job Search!");
  }

    // Optional interactivity
    document.querySelectorAll('.store-links img').forEach(img => {
        img.addEventListener('click', () => {
            console.log('Redirecting to store');
        });
    });

    document.getElementById('hamburger').addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('active');
    });
    