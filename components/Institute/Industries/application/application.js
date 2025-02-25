document.addEventListener("DOMContentLoaded", async () => {
    const applicationContainer = document.getElementById("applications-container");
    const createApplicationBtn = document.getElementById("create-application-btn");

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
        }
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

    // Redirect to student list upload page
    createApplicationBtn.addEventListener("click", () => {
        window.location.href = "createApplication/createApplication.html";
    });
});

// Function to handle viewing students
function viewStudents(applicationId) {
    window.location.href = `Students/Student.html`;
}
