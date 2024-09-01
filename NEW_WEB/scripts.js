document.addEventListener("DOMContentLoaded", function() {
    // Mock Data for Events
    const searchBar = document.getElementById("search-bar");
    const eventCards = document.querySelectorAll(".event-card");
    const serviceCards = document.querySelectorAll(".service-card");

    searchBar.addEventListener("input", function() {
        const searchTerm = searchBar.value.toLowerCase();

        eventCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        serviceCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
    
    
    const events = [
        {
            title: "Farmers' Market",
            date: "September 5, 2024",
            location: "City Park",
            description: "Explore a variety of fresh produce from local farmers."
        },
        {
            title: "Community Workshop",
            date: "September 10, 2024",
            location: "Community Center",
            description: "Participate in interactive learning sessions."
        },
        {
            title: "Charity Run",
            date: "September 15, 2024",
            location: "Downtown",
            description: "Join us in a run to raise funds for local charities."
        }
    ];

    // Mock Data for Services
    const services = [
        {
            title: "Local Library",
            location: "Downtown",
            description: "A place for learning and community events."
        },
        {
            title: "Volunteer Opportunities",
            location: "Various Locations",
            description: "Make a positive impact in your community."
        },
        {
            title: "Community Garden",
            location: "Westside",
            description: "Grow fresh produce with your neighbors."
        },
        {
            title: "Recycling Center",
            location: "Eastside",
            description: "Properly dispose of recyclable materials."
        }
    ];

    const eventsContainer = document.querySelector(".events-container");
    const servicesContainer = document.querySelector(".services-container");

    // Load Events
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");

        eventCard.innerHTML = `
            <div class="event-details">
                <h3>${event.title}</h3>
                <p>${event.date}</p>
                <p>${event.location}</p>
                <p>${event.description}</p>
            </div>
        `;

        eventCard.addEventListener("click", function() {
            // Redirect to a detailed page
            window.location.href = `event.html?title=${encodeURIComponent(event.title)}&description=${encodeURIComponent(event.description)}&date=${encodeURIComponent(event.date)}&location=${encodeURIComponent(event.location)}`;
        });

        eventsContainer.appendChild(eventCard);
    });

    // Load Services
    services.forEach(service => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card");

        serviceCard.innerHTML = `
            <div class="service-details">
                <h3>${service.title}</h3>
                <p>${service.location}</p>
                <p>${service.description}</p>
            </div>
        `;

        serviceCard.addEventListener("click", function() {
            // Redirect to a detailed page
            window.location.href = `service.html?title=${encodeURIComponent(service.title)}&description=${encodeURIComponent(service.description)}&location=${encodeURIComponent(service.location)}`;
        });

        servicesContainer.appendChild(serviceCard);
    });
});
