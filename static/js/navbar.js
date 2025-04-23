fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-container').innerHTML = data;
    setActiveLink(); // Call the function to set the active link
})
.catch(error => console.error('Error loading the navbar:', error));

// Function to set active class
function setActiveLink() {
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
}