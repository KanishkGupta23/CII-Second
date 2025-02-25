document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("institutions-container");

    try {
        const response = await fetch("https://cii-final-2.onrender.com/api/institutes/institutes");
        const data = await response.json();

        if (data.success && Array.isArray(data.institutes)) {
            container.innerHTML = ""; // Clear loading text

            data.institutes.forEach(institute => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h2>${institute.name}</h2>
                    <p>${institute.description || "No description available."}</p>
                    <p><strong>Location:</strong> ${institute.city}, ${institute.country}</p>
                    <p><strong>Contact:</strong> ${institute.contact_num || "N/A"}</p>
                    <p><strong>Established Year:</strong> ${new Date(institute.estb_year).getFullYear()}</p>
                    <a href="application/application.html" class="button">View Applications</a>
                `;

                container.appendChild(card);
            });
        } else {
            container.innerHTML = `<p class="loading-text">No institutes found.</p>`;
        }
    } catch (error) {
        container.innerHTML = `<p class="loading-text" style="color: red;">Error fetching institutions: ${error.message}</p>`;
    }
});

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
