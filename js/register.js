// ===============================
// SHOW / HIDE PASSWORD
// ===============================

const showPassword = document.getElementById("showPassword");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

showPassword.addEventListener("change", function () {

    if (showPassword.checked) {

        password.type = "text";
        confirmPassword.type = "text";

    } else {

        password.type = "password";
        confirmPassword.type = "password";

    }

});

// ===============================
// REGISTER FORM
// ===============================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get values

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const passwordValue = document.getElementById("password").value;
    const confirmPasswordValue = document.getElementById("confirmPassword").value;

    // Check password

    if (passwordValue !== confirmPasswordValue) {

        alert("Passwords do not match!");

        return;

    }

    // Create user object

    const student = {

        name: name,
        email: email,
        department: department,
        year: year,
        password: passwordValue

    };

    // Save in Local Storage

    localStorage.setItem("student", JSON.stringify(student));

    // Save login status

    localStorage.setItem("isLoggedIn", "true");

    alert("Registration Successful!");

    // Redirect

    window.location.href = "dashboard.html";

});