// Function to get the current year
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
}

// Function to get the last modified date
function getLastModifiedDate() {
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
}

// Call functions when the page loads
window.onload = function () {
    getCurrentYear();
    getLastModifiedDate();
};

