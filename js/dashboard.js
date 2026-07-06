// Check login status

if (localStorage.getItem("isLoggedIn") !== "true") {

    alert("Please login first!");

    window.location.href = "login.html";

}

// Logout

const logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", function (event) {

    event.preventDefault();

    localStorage.removeItem("isLoggedIn");

    window.location.href = "index.html";

});

// Display logged in student's name

const student = JSON.parse(localStorage.getItem("student"));

if (student) {
    document.getElementById("welcomeMessage").textContent =
        "Welcome Back, " + student.name + " 👋";
}

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) {
    document.getElementById("welcomeMessage").textContent =
        "Welcome Back, " + loggedInUser.name + " 👋";
}