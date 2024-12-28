// Add any interactivity as needed
console.log('Page Loaded!');

document.getElementById('hamburger').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});