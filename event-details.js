document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id'); 

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

    // Find the event based on the ID
    const event = eventsData.find(e => e.link.includes(`id=${eventId}`));

    if (event) {
        document.getElementById('event-title').textContent = event.title;
        document.getElementById('event-date').textContent = `<strong>Date:</strong> ${event.date}`;
        document.getElementById('event-location').textContent = `<strong>Location:</strong> ${event.location}`;
        document.getElementById('event-description').textContent = event.description;
    } else {
        // Handle case where event is not found (e.g., display an error message)
        document.getElementById('event-details').innerHTML = 'Event not found.';
    }
});