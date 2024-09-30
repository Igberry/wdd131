// Set current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Set last modified date in the footer
document.getElementById('last-modified').textContent = document.lastModified;

// Function to calculate wind chill factor
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + '°C';
    } else {
        return "N/A";
    }
}

// Static temperature and wind speed values
const temperature = 24; // Example temperature
const windSpeed = 5; // Example wind speed in km/h

// Display wind chill factor
document.getElementById('wind-chill').textContent = calculateWindChill(temperature, windSpeed);
