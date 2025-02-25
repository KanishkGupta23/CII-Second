document.addEventListener("DOMContentLoaded", () => {
    fetchStudentData();
});

const studentTableBody = document.getElementById("studentTableBody");

// Function to fetch student data
async function fetchStudentData() {
    try {
        const response = await fetch("https://cii-final-2.onrender.com/api/users"); // API endpoint
        const students = await response.json();

        studentTableBody.innerHTML = ""; // Clear loading text

        if (students.length === 0) {
            studentTableBody.innerHTML = `<tr><td colspan="4" class="text-center">No students found.</td></tr>`;
        } else {
            students.forEach((student, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td>${student.department}</td>
                    <td>${student.emailId}</td>
                    <td>${student.appliedFor}</td>
                    <td class="action-buttons">
                        <button class="view-btn">View</button>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                `;
                studentTableBody.appendChild(row);
            });
        }
    } catch (error) {
        console.error("Error fetching students:", error);
        // studentTableBody.innerHTML = `<tr><td colspan="4" class="text-center">Error loading data.</td></tr>`;
    }
}

// Function to handle file upload
function handleUpload() {
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) {
        alert("Please select a file first.");
        return;
    }
    
    const file = fileInput.files[0];
    console.log("Uploading file:", file.name);

    // You can add API call logic here to upload the file
}

// Function to delete a student (placeholder function)
function deleteStudent(studentId) {
    if (confirm("Are you sure you want to delete this student?")) {
        console.log("Student deleted with ID:", studentId);
        // Add API call to delete student
    }
}

const dummyStudents = [
    {
        id: 1,
        name: "Aarav Mehta",
        department: "Computer Science",
        emailId: "aarav.mehta@example.com",
        appliedFor: "Internship"
    },
    {
        id: 2,
        name: "Sanya Verma",
        department: "Electrical Engineering",
        emailId: "sanya.verma@example.com",
        appliedFor: "Research Paper"
    },
    {
        id: 3,
        name: "Rohit Sharma",
        department: "Mechanical Engineering",
        emailId: "rohit.sharma@example.com",
        appliedFor: "Projects"
    },
    {
        id: 4,
        name: "Priya Kapoor",
        department: "Civil Engineering",
        emailId: "priya.kapoor@example.com",
        appliedFor: "Workshop"
    },
    {
        id: 5,
        name: "Vikram Singh",
        department: "Information Technology",
        emailId: "vikram.singh@example.com",
        appliedFor: "Audits"
    },
    {
        id: 6,
        name: "Neha Joshi",
        department: "Biotechnology",
        emailId: "neha.joshi@example.com",
        appliedFor: "Seminar"
    },
    {
        id: 7,
        name: "Arjun Das",
        department: "Electronics & Communication",
        emailId: "arjun.das@example.com",
        appliedFor: "Certification"
    },
    {
        id: 8,
        name: "Meera Rao",
        department: "Physics",
        emailId: "meera.rao@example.com",
        appliedFor: "Case Studies"
    },
    {
        id: 9,
        name: "Kabir Malhotra",
        department: "Mathematics",
        emailId: "kabir.malhotra@example.com",
        appliedFor: "Visits"
    },
    {
        id: 10,
        name: "Ananya Sen",
        department: "Business Administration",
        emailId: "ananya.sen@example.com",
        appliedFor: "Other"
    }
];

// Function to display dummy data in the table (if API is unavailable)
function loadDummyData() {
    studentTableBody.innerHTML = "";
    dummyStudents.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.department}</td>
            <td>${student.emailId}</td>
            <td>${student.appliedFor}</td>
            <td class="action-buttons">
                <button class="view-btn">View</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Uncomment the line below if you want to use dummy data instead of fetching from API
loadDummyData();

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

