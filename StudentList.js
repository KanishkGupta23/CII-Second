document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = "https://cii-final-2.onrender.com/api/applications";
    const applicationsList = document.getElementById("applications-list");
    const errorMessage = document.getElementById("error-message");
    const confirmButton = document.getElementById("confirm-button");

    let applications = [];

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        applications = Array.isArray(data) ? data : [data];

        if (applications.length === 0) {
            applicationsList.innerHTML = '<tr><td colspan="6">No job applications found.</td></tr>';
            return;
        }

        applicationsList.innerHTML = applications.map((application, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${application.user?.username || 'N/A'}</td>
                <td>${application.openings?.job_title || 'N/A'}</td>
                <td>${Array.isArray(application.openings?.key_skills) ? application.openings.key_skills.join(', ') : 'No skills listed'}</td>
                <td>${application.user?.email || 'Email not available'}</td>
            </tr>
        `).join("");

    } catch (error) {
        console.error("Error fetching applications:", error);
        errorMessage.textContent = "Failed to fetch applications.";
    }

    confirmButton.addEventListener("click", () => {
        if (applications.length === 0) {
            alert("No applications to confirm.");
            return;
        }
        // alert("Applications confirmed successfully!");

        confirmButton.remove();

        const messageElement = document.getElementById("error-message");
        messageElement.textContent = "Applications have been confirmed successfully!";
        messageElement.style.color = "green";
    });
});
