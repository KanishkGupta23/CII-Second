document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("applications-container");

    try {
        const response = await fetch("https://cii-final-2.onrender.com/api/institutes/applications");
        const data = await response.json();

        if (data.success && Array.isArray(data.applications)) {
            container.innerHTML = ""; // Clear loading text

            data.applications.forEach(application => {
                const card = document.createElement("div");
                card.classList.add("application-card");

                card.innerHTML = `
                    <h2>${application.heading}</h2>
                    <p><strong>Date Applied:</strong> ${new Date(application.date_applied).toLocaleDateString()}</p>
                    <p><strong>Total Students:</strong> ${application.total_students}</p>
                    <a href="StudentList/StudentList.html" class="view-btn">View Students</a>
                `;

                container.appendChild(card);
            });
        } else {
            container.innerHTML = `<p class="loading-text">No applications found.</p>`;
        }
    } catch (error) {
        // container.innerHTML = `<p class="loading-text" style="color: red;">Error fetching applications: ${error.message}</p>`;
    }
});

// Function to update date-time
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

document.addEventListener("DOMContentLoaded", async () => {
    const applicationContainer = document.getElementById("applications-container");

    // Dummy application data
    const applications = [
        {
            id: 1,
            heading: "Application_1",
            date_applied: "2024-02-20",
            total_students: 15,
            institute: "Global Institute of Technology"
        },
        {
            id: 2,
            heading: "Application_2",
            date_applied: "2024-02-22",
            total_students: 10,
            institute: "Global Institute of Technology"
        },
        // {
        //     id: 3,
        //     heading: "Elite Engineering College Application_1",
        //     date_applied: "2024-02-19",
        //     total_students: 18,
        //     institute: "Elite Engineering College"
        // },
        // {
        //     id: 4,
        //     heading: "Elite Engineering College Application_2",
        //     date_applied: "2024-02-23",
        //     total_students: 12,
        //     institute: "Elite Engineering College"
        // }
    ];

    if (applications.length === 0) {
        applicationContainer.innerHTML = `<p class="loading-text">No applications found.</p>`;
    } else {
        applications.forEach(application => {
            const card = document.createElement("div");
            card.classList.add("application-card");

            card.innerHTML = `
                <h2>${application.heading}</h2>
                <p><strong>Institute:</strong> ${application.institute}</p>
                <p><strong>Date Applied:</strong> ${application.date_applied}</p>
                <p><strong>Total Students:</strong> ${application.total_students}</p>
                <button class="view-btn" onclick="viewStudents(${application.id})">View Students</button>
            `;

            applicationContainer.appendChild(card);
        });
    }
});

// Function to handle view students button click
function viewStudents(applicationId) {
    // alert(`Redirecting to students list for Application ID: ${applicationId}`);
    // Example: Redirect to another page with application ID as query param
    window.location.href = `StudentList/StudentList.html`;
}
