// ===============================
// DEFAULT PROFILE
// ===============================

let profile = {

    name: "John Doe",

    email: "john@gmail.com",

    course: "B.Tech Computer Science",

    year: "3rd Year"

};

// ===============================
// LOAD PROFILE
// ===============================

window.onload = function(){

    loadProfile();

};

// ===============================
// LOAD PROFILE FUNCTION
// ===============================

function loadProfile(){

    const savedProfile =
    JSON.parse(localStorage.getItem("profile"));

    if(savedProfile){

        profile = savedProfile;

    }

    document.getElementById("name").value =
    profile.name;

    document.getElementById("email").value =
    profile.email;

    document.getElementById("course").value =
    profile.course;

    document.getElementById("year").value =
    profile.year;

    loadStatistics();

}

// ===============================
// EDIT PROFILE
// ===============================

function editProfile(){

    document.getElementById("name").readOnly = false;

    document.getElementById("email").readOnly = false;

    document.getElementById("course").readOnly = false;

    document.getElementById("year").readOnly = false;

    document.getElementById("editBtn").style.display = "none";

    document.getElementById("saveBtn").style.display = "inline-block";

}

// ===============================
// SAVE PROFILE
// ===============================

function saveProfile(){

    profile.name =
    document.getElementById("name").value.trim();

    profile.email =
    document.getElementById("email").value.trim();

    profile.course =
    document.getElementById("course").value.trim();

    profile.year =
    document.getElementById("year").value.trim();

    localStorage.setItem(

        "profile",

        JSON.stringify(profile)

    );

    document.getElementById("name").readOnly = true;

    document.getElementById("email").readOnly = true;

    document.getElementById("course").readOnly = true;

    document.getElementById("year").readOnly = true;

    document.getElementById("editBtn").style.display = "inline-block";

    document.getElementById("saveBtn").style.display = "none";

    alert("Profile updated successfully!");

}

// ===============================
// PROFILE STATISTICS
// ===============================

function loadStatistics(){

    const joinedGroups =
    JSON.parse(localStorage.getItem("joinedGroups")) || [];

    const createdGroups =
    JSON.parse(localStorage.getItem("createdGroups")) || [];

    const resources =
    JSON.parse(localStorage.getItem("resources")) || [];

    if(document.getElementById("joinedCount")){

        document.getElementById("joinedCount").textContent =
        joinedGroups.length;

    }

    if(document.getElementById("createdCount")){

        document.getElementById("createdCount").textContent =
        createdGroups.length;

    }

    if(document.getElementById("resourceCount")){

        document.getElementById("resourceCount").textContent =
        resources.length;

    }

}