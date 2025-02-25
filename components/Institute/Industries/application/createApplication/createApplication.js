createApplicationBtn.addEventListener("click", () => {
    window.location.href = "create_application.html";
});

document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const dateApplied = document.getElementById("date-applied").value;
    const totalStudents = document.getElementById("total-students").value;
    const fileInput = document.getElementById("student-file");

    if (!fileInput.files.length) {
        alert("Please upload an Excel file.");
        return;
    }

    alert("Application submitted successfully!");
    window.location.href = "applications.html"; // Redirect back to applications page
});

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