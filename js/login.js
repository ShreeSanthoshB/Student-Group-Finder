// ===============================
// SHOW / HIDE PASSWORD
// ===============================

const showPassword = document.getElementById("showPassword");
const password = document.getElementById("password");

showPassword.addEventListener("change", function () {

    if (showPassword.checked) {

        password.type = "text";

    } else {

        password.type = "password";

    }

});

// ===============================
// LOGIN FORM
// ===============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get entered values

    const email = document.getElementById("email").value.trim();
    const passwordValue = document.getElementById("password").value;

    // Get registered student

    const student = JSON.parse(localStorage.getItem("student"));

    // Check if a user is registered

    if (student == null) {

        alert("No account found! Please register first.");

        window.location.href = "register.html";

        return;

    }

    // Validate login

    if (email === student.email && passwordValue === student.password) {

        localStorage.setItem("isLoggedIn", "true");

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password!");

    }

    localStorage.setItem("loggedInUser", JSON.stringify(student));
    window.location.href = "dashboard.html";

});