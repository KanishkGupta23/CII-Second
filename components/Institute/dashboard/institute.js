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

const dashboardData = {
  totalStudents: 500,
  totalOpenings: 45,
  totalIndustries: 10,
  totalApplications: 1200,
};

function updateDashboardStats() {
  document.getElementById("totalStudents").textContent =
    dashboardData.totalStudents;
  document.getElementById("totalOpenings").textContent =
    dashboardData.totalOpenings;
  document.getElementById("totalIndustries").textContent =
    dashboardData.totalIndustries;
  document.getElementById("totalApplications").textContent =
    dashboardData.totalApplications;
}

function renderCharts() {
  const barCtx = document.getElementById("barChart").getContext("2d");
  new Chart(barCtx, {
    type: "bar",
    data: {
      labels: ["Students", "Openings", "Industries", "Applications"],
      datasets: [
        {
          label: "Dashboard Overview",
          data: [
            dashboardData.totalStudents,
            dashboardData.totalOpenings,
            dashboardData.totalIndustries,
            dashboardData.totalApplications,
          ],
          backgroundColor: ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f"],
        },
      ],
    },
  });
}

updateDashboardStats();
renderCharts();
