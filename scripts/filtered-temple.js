// Get the current year and last modified date
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

// Update footer with the current year and last modified date
const footer = document.querySelector('footer');
footer.innerHTML += `<p>&copy; ${currentYear}. - David Chukwudi Igberi - All Rights Reserved.</p>`;
footer.innerHTML += `<p>Last Modified: ${lastModified}</p>`;

const navMenu = document.querySelector('nav ul');

// CSS to hide the menu by default on mobile view
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 600) {
        navMenu.classList.add('hidden');
    }
});

// Temple Data Array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/1280x800/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996-05-26",
    area: 21780,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/1280x800/hong_kong_china_temple_baptistry.jpeg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17800,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/1200x675/accra-ghana-temple-detail-249022-2400x1200.jpg"
  }
];

// Function to create and display temple cards
function displayTemples(filteredTemples) {
  const templeContainer = document.getElementById('templeContainer');
  templeContainer.innerHTML = ''; // Clear previous content
  
  filteredTemples.forEach(temple => {
    const templeCard = document.createElement('div');
    templeCard.classList.add('temple-card');
    templeCard.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p>${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    templeContainer.appendChild(templeCard);
  });

  // Log the number of temples displayed
  console.log(`Displayed ${filteredTemples.length} temples.`);
}

// Filter Functions
function showAll() {
  displayTemples(temples);
}

function filterOld() {
  const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
  displayTemples(oldTemples);
}

function filterNew() {
  const newTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
  displayTemples(newTemples);
}

function filterLarge() {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
}

function filterSmall() {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
}

// Event Listeners for Navigation Links
document.getElementById('showAll').addEventListener('click', showAll);
document.getElementById('filterOld').addEventListener('click', filterOld);
document.getElementById('filterNew').addEventListener('click', filterNew);
document.getElementById('filterLarge').addEventListener('click', filterLarge);
document.getElementById('filterSmall').addEventListener('click', filterSmall);

// Initial display of all temples on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  showAll();
  
  // Footer: Update year and last modified date
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle the "active" class to show/hide the nav links
hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('active');
});

