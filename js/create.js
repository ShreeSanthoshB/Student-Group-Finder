// ===============================
// GET FORM
// ===============================

const form = document.getElementById("groupForm");

// ===============================
// CREATE GROUP
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get input values

    const group = {

        groupName: document.getElementById("groupName").value.trim(),

        subject: document.getElementById("subject").value.trim(),

        department: document.getElementById("department").value,

        mode: document.getElementById("mode").value,

        members: document.getElementById("members").value,

        description: document.getElementById("description").value.trim()

    };

    // Get existing groups

    let createdGroups =
        JSON.parse(localStorage.getItem("createdGroups")) || [];

    // ===============================
    // CHECK FOR DUPLICATE GROUP NAME
    // ===============================

    const alreadyExists = createdGroups.some(function (g) {

        return g.groupName.toLowerCase() ===
               group.groupName.toLowerCase();

    });

    if (alreadyExists) {

        alert("A group with this name already exists.");

        return;

    }

    // ===============================
    // SAVE GROUP
    // ===============================

    createdGroups.push(group);

    localStorage.setItem(
        "createdGroups",
        JSON.stringify(createdGroups)
    );

    // ===============================
    // SUCCESS MESSAGE
    // ===============================

    alert("Study Group Created Successfully!");

    // Reset form

    form.reset();

    // Redirect to My Groups page

    window.location.href = "my-groups.html";

});