// ===============================
// GET HTML ELEMENTS
// ===============================

const resourceForm = document.getElementById("resourceForm");
const resourceList = document.getElementById("resourceList");

// ===============================
// LOAD RESOURCES
// ===============================

let resources =
    JSON.parse(localStorage.getItem("resources")) || [];

displayResources();

// ===============================
// ADD RESOURCE
// ===============================

resourceForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const resource = {

        title: document.getElementById("resourceTitle").value.trim(),

        description: document.getElementById("resourceDescription").value.trim(),

        link: document.getElementById("resourceLink").value.trim()

    };

    resources.push(resource);

    localStorage.setItem(
        "resources",
        JSON.stringify(resources)
    );

    alert("Resource shared successfully!");

    resourceForm.reset();

    displayResources();

});

// ===============================
// DISPLAY RESOURCES
// ===============================

function displayResources() {

    resourceList.innerHTML = "";

    if (resources.length === 0) {

        resourceList.innerHTML =

            "<p class='empty'>No resources shared yet.</p>";

        return;

    }

    resources.forEach(function (resource, index) {

        resourceList.innerHTML += `

        <div class="resource-card">

            <h3>${resource.title}</h3>

            <p>${resource.description}</p>

            <a href="${resource.link}" target="_blank">
                Open Resource
            </a>

            <button
                class="delete-btn"
                onclick="deleteResource(${index})">

                Delete

            </button>

        </div>

        `;

    });

}

// ===============================
// DELETE RESOURCE
// ===============================

function deleteResource(index) {

    resources.splice(index, 1);

    localStorage.setItem(
        "resources",
        JSON.stringify(resources)
    );

    displayResources();

}