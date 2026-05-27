function showMessage() {
    alert("Welcome to Student Management Website!");
}

// Register Students
const form = document.getElementById("studentForm");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        let students = JSON.parse(localStorage.getItem("students")) || [];

        students.push({
            name: name,
            email: email
        });

        localStorage.setItem("students", JSON.stringify(students));

        alert("Student Registered Successfully!");

        document.getElementById("studentForm").reset();

    });

}

// Display Students
const table = document.getElementById("studentTable");

if (table) {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach(function(student, index) {

        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>
                <button onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

// Delete Student
function deleteStudent(index) {

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.splice(index, 1);

    localStorage.setItem("students", JSON.stringify(students));

    location.reload();

}