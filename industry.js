// Sidebar Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.getElementById("toggleSidebar");

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            sidebar.style.transform = sidebar.style.transform === "translateX(0px)" ? "translateX(-100%)" : "translateX(0px)";
        });
    }

    // Load initial data
    updateDashboardStats();
    renderCharts();
});

// Dummy Data for Dashboard Stats
const dashboardData = {
    totalStudents: 1500,
    totalOpenings: 45,
    totalInstitutes: 20,
    totalApplications: 1200
};

// Update Stats on the Dashboard
function updateDashboardStats() {
    document.getElementById("totalStudents").textContent = dashboardData.totalStudents;
    document.getElementById("totalOpenings").textContent = dashboardData.totalOpenings;
    document.getElementById("totalInstitutes").textContent = dashboardData.totalInstitutes;
    document.getElementById("totalApplications").textContent = dashboardData.totalApplications;
}

// Render Charts
function renderCharts() {
    const barCtx = document.getElementById("barChart").getContext("2d");
    new Chart(barCtx, {
        type: "bar",
        data: {
            labels: ["Students", "Openings", "Institutes", "Applications"],
            datasets: [{
                label: "Dashboard Overview",
                data: [dashboardData.totalStudents, dashboardData.totalOpenings, dashboardData.totalInstitutes, dashboardData.totalApplications],
                backgroundColor: ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f"]
            }]
        }
    });

    const doughnutCtx = document.getElementById("doughnutChart").getContext("2d");
    new Chart(doughnutCtx, {
        type: "doughnut",
        data: {
            labels: ["Students", "Openings", "Institutes", "Applications"],
            datasets: [{
                data: [dashboardData.totalStudents, dashboardData.totalOpenings, dashboardData.totalInstitutes, dashboardData.totalApplications],
                backgroundColor: ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f"]
            }]
        }
    });
}
