document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id'); // Get service ID from URL

    const servicesData = [
        {
            "name": "Local Bakery",
            "description": "Freshly baked bread, pastries, and cakes.",
            "address": "123 Main Street",
            "phone": "555-123-4567",
            "website": "https://example.com/bakery"
        },
        {
            "name": "Bookstore & Coffee Shop",
            "description": "Cozy atmosphere, a great selection of books, and delicious coffee.",
            "address": "456 Elm Street",
            "phone": "555-789-0123",
            "website": "https://example.com/bookstore"
        },
        {
            "name": "Community Art Center",
            "description": "Art classes, workshops, and exhibitions for all ages.",
            "address": "789 Oak Street",
            "phone": "555-456-7890",
            "website": "https://example.com/art-center"
        }
    ];

    // Find the service based on the ID
    const service = servicesData[serviceId]; 

    if (service) {
        document.getElementById('service-name').textContent = service.name;
        document.getElementById('service-description').textContent = service.description;
        document.getElementById('service-address').textContent = `<strong>Address:</strong> ${service.address}`;
        document.getElementById('service-phone').textContent = `<strong>Phone:</strong> ${service.phone}`;
        document.getElementById('service-website').href = service.website; // Set the website link
        document.getElementById('service-website').textContent = 'View Website';
    } else {
        document.getElementById('service-details').innerHTML = 'Service not found.';
    }
});