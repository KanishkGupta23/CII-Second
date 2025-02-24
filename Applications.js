document.addEventListener("DOMContentLoaded", function () {
    const industryContainer = document.getElementById("industry-container");
    const loadingText = document.getElementById("loading-text");
    const errorText = document.getElementById("error-text");

    async function fetchIndustries() {
        try {
            const response = await fetch("https://cii-final-2.onrender.com/api/openings/openings");
            const data = await response.json();

            if (Array.isArray(data.data)) {
                loadingText.style.display = "none";
                data.data.forEach(industry => {
                    const card = createIndustryCard(industry);
                    industryContainer.appendChild(card);
                });
            } else {
                throw new Error("Unexpected data structure");
            }
        } catch (error) {
            console.error("Error fetching industries:", error);
            errorText.textContent = "Failed to load industries. Please try again later.";
            errorText.style.display = "block";
            loadingText.style.display = "none";
        }
    }

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
        document.getElementById("date-time").textContent = now.toLocaleDateString(
          "en-GB",
          options
        );
      }
      
      // Update time every second
      setInterval(updateDateTime, 1000);
      updateDateTime();

    function createIndustryCard(industry) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${industry.industry?.name || "Industry Name"}</h2>
            <h3>Job Title: ${industry.job_title || "N/A"}</h3>
            <p>${industry.description || "No description available."}</p>
            <p>Location: ${industry.city || "Unknown"}</p>
            <p>Stipend: ${industry.stipend !== undefined ? `₹${industry.stipend}` : "Not specified"}</p>
            <p>Opening Date: ${industry.opening_date ? new Date(industry.opening_date).toLocaleDateString() : "N/A"}</p>
            <p>Total Vacancies: ${industry.totalVacancies || "Not specified"}</p>
            <a href="InstitutesApplied.html" class="btn">View Institutes Applied</a>
        `;

        return card;
    }

    fetchIndustries();
});
