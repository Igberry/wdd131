// Product Array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" }
];

// Populate the product dropdown
const productSelect = document.getElementById('productName');
products.forEach(product => {
    let option = document.createElement('option');
    option.value = product.name;
    option.text = product.name;
    productSelect.add(option);
});

// Add a counter for reviews on the confirmation page
if (window.location.pathname.includes('review.html')) {
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    document.body.innerHTML = `<h1>Thank you for your review!</h1><p>You have submitted ${reviewCount} reviews.</p>`;
}
// Get the last modified date of the document
const lastModified = document.lastModified;
    
// Set the content of the span to the last modified date
document.getElementById('lastModifiedDate').textContent = lastModified;