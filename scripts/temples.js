// Get the current year and last modified date
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

// Update footer with the current year and last modified date
const footer = document.querySelector('footer');
footer.innerHTML += `<p>&copy; ${currentYear}. - David Chukwudi Igberi - All Rights Reserved.</p>`;
footer.innerHTML += `<p>Last Modified: ${lastModified}</p>`;

// Hamburger Menu Functionality
const hamburgerButton = document.createElement('button');
hamburgerButton.classList.add('hamburger');
hamburgerButton.innerHTML = '&#9776;'; // Unicode for hamburger icon
document.querySelector('header').appendChild(hamburgerButton);

const navMenu = document.querySelector('nav ul');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerButton.innerHTML = navMenu.classList.contains('active') ? '&times;' : '&#9776;'; // Change icon to 'X' when active
});

// CSS to hide the menu by default on mobile view
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 600) {
        navMenu.classList.add('hidden');
    }
});
