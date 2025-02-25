document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("industries-container");

    // Dummy industry data
    const industries = [
        {
            id: 1,
            name: "Tech Solutions Pvt Ltd",
            description: "A leading software development company specializing in AI and cloud solutions.",
            city: "Bangalore",
            country: "India",
            contact_num: "+91 9876543210",
            estb_year: "2005-04-15"
        },
        {
            id: 2,
            name: "Green Energy Corp",
            description: "Pioneers in sustainable energy solutions and renewable technology.",
            city: "San Francisco",
            country: "USA",
            contact_num: "+1 415-987-6543",
            estb_year: "2010-08-22"
        },
        {
            id: 3,
            name: "Auto Innovations Ltd",
            description: "Revolutionizing the automobile industry with electric and self-driving cars.",
            city: "Berlin",
            country: "Germany",
            contact_num: "+49 30 1234567",
            estb_year: "2012-03-10"
        },
        {
            id: 4,
            name: "HealthCare Plus",
            description: "Developing next-generation healthcare solutions and medical equipment.",
            city: "Tokyo",
            country: "Japan",
            contact_num: "+81 3-4567-8901",
            estb_year: "2008-06-05"
        }
    ];

    if (industries.length === 0) {
        container.innerHTML = `<p class="loading-text">No industries found.</p>`;
    } else {
        industries.forEach(industry => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h2>${industry.name}</h2>
                <p>${industry.description || "No description available."}</p>
                <p><strong>Location:</strong> ${industry.city}, ${industry.country}</p>
                <p><strong>Contact:</strong> ${industry.contact_num || "N/A"}</p>
                <p><strong>Established Year:</strong> ${new Date(industry.estb_year).getFullYear()}</p>
                <a href="application/application.html" class="button">Create Application</a>
            `;

            container.appendChild(card);
        });
    }
});

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    document.getElementById("date-time").textContent = now.toLocaleDateString("en-GB", options);
}

// Update time every second
setInterval(updateDateTime, 1000);
updateDateTime();
