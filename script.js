document.addEventListener('DOMContentLoaded', function() {
    // Sample Data (Replace with actual data from your API or database)
    const eventsData = [
        {
            "title": "Local Farmers Market",
            "date": "2024-03-10",
            "location": "Downtown Park",
            "description": "Fresh produce, local crafts, and community fun.",
            "link": "event-details.html?id=1" 
        },
        {
            "title": "Community Gardening Workshop",
            "date": "2024-03-17",
            "location": "Community Center",
            "description": "Learn tips and tricks for successful gardening.",
            "link": "event-details.html?id=2" 
        },
        {
            "title": "Volunteer Cleanup Day",
            "date": "2024-03-24",
            "location": "Riverfront Park",
            "description": "Join us in making our community a cleaner place!",
            "link": "event-details.html?id=3" 
        }
    ];

    const servicesData = [
        {
            "name": "Local Bakery",
            "description": "Freshly baked bread, pastries, and cakes.",
            "address": "123 Main Street",
            "phone": "555-123-4567",
            "website": "https://example.com/bakery",
            "latitude": 40.7128, 
            "longitude": -74.0060
        },
        {
            "name": "Bookstore & Coffee Shop",
            "description": "Cozy atmosphere, a great selection of books, and delicious coffee.",
            "address": "456 Elm Street",
            "phone": "555-789-0123",
            "website": "https://example.com/bookstore",
            "latitude": 40.7183, 
            "longitude": -74.0059
        },
        {
            "name": "Community Art Center",
            "description": "Art classes, workshops, and exhibitions for all ages.",
            "address": "789 Oak Street",
            "phone": "555-456-7890",
            "website": "https://example.com/art-center",
            "latitude": 40.7162, 
            "longitude": -74.0004
        }
    ];

    

    // Event Listing
    const eventList = document.getElementById('event-list');
    eventsData.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <a href="${event.link}" target="_blank">Learn More</a>
        `;
        eventItem.addEventListener('click', function() {
            window.location.href = event.link; 
        });
        eventList.appendChild(eventItem);
    });

    // Service Listing
    const serviceList = document.getElementById('service-list');
    servicesData.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');
        serviceItem.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p><strong>Address:</strong> ${service.address}</p>
            <p><strong>Phone:</strong> ${service.phone}</p>
            <a href="${service.website}" target="_blank">View Website</a>
        `;
        serviceItem.addEventListener('click', function() {
            window.location.href = "service-details.html?id=" + servicesData.indexOf(service); 
        });
        serviceList.appendChild(serviceItem);
    });

    // Search Functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();

        // Filter Events
        const filteredEvents = eventsData.filter(event => {
            return (
                event.title.toLowerCase().includes(searchTerm) ||
                event.description.toLowerCase().includes(searchTerm) ||
                event.location.toLowerCase().includes(searchTerm) 
            );
        });

        // Filter Services
        const filteredServices = servicesData.filter(service => {
            return (
                service.name.toLowerCase().includes(searchTerm) ||
                service.description.toLowerCase().includes(searchTerm) ||
                service.address.toLowerCase().includes(searchTerm) 
            );
        });

        // Update Event List
        eventList.innerHTML = ''; // Clear existing event list
        filteredEvents.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.classList.add('event-item');
            eventItem.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <a href="${event.link}" target="_blank">Learn More</a>
            `;
            eventItem.addEventListener('click', function() {
                window.location.href = event.link; 
            });
            eventList.appendChild(eventItem);
        });

        // Update Service List
        serviceList.innerHTML = ''; // Clear existing service list
        filteredServices.forEach(service => {
            const serviceItem = document.createElement('div');
            serviceItem.classList.add('service-item');
            serviceItem.innerHTML = `
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <p><strong>Address:</strong> ${service.address}</p>
                <p><strong>Phone:</strong> ${service.phone}</p>
                <a href="${service.website}" target="_blank">View Website</a>
            `;
            serviceItem.addEventListener('click', function() {
                window.location.href = "service-details.html?id=" + servicesData.indexOf(service); 
            });
            serviceList.appendChild(serviceItem);
        });
    });

    // Leaflet Map
    var mymap = L.map('mapid').setView([40.7128, -74.0060], 13); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    // Add markers for services
    servicesData.forEach(service => {
        L.marker([service.latitude, service.longitude]).addTo(mymap)
          .bindPopup(`<b>${service.name}</b><br />${service.address}<br />${service.phone}`).openPopup();
    });
});