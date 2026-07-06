// ===============================
// GET HTML ELEMENTS
// ===============================

const searchInput = document.getElementById("search");
const departmentSelect = document.getElementById("department");
const modeSelect = document.getElementById("mode");
const groupContainer = document.getElementById("groupContainer");

// ===============================
// DISPLAY CREATED GROUPS
// ===============================

let createdGroups =
JSON.parse(localStorage.getItem("createdGroups")) || [];

createdGroups.forEach(function(group){

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `

        <h3>${group.groupName}</h3>

        <p><strong>Department:</strong> ${group.department}</p>

        <p><strong>Mode:</strong> ${group.mode}</p>

        <p><strong>Members:</strong> ${group.members}</p>

        <p>${group.description}</p>

        <button class="join-btn">Join Group</button>

    `;

    groupContainer.appendChild(card);

});

// ===============================
// SEARCH & FILTER
// ===============================

function filterGroups(){

    const cards = document.querySelectorAll(".card");

    let searchValue = searchInput.value.toLowerCase();

    let departmentValue = departmentSelect.value.toLowerCase();

    let modeValue = modeSelect.value.toLowerCase();

    cards.forEach(function(card){

        let title =
        card.querySelector("h3").textContent.toLowerCase();

        let paragraphs =
        card.querySelectorAll("p");

        let department =
        paragraphs[0].textContent.toLowerCase();

        let mode =
        paragraphs[1].textContent.toLowerCase();

        let show = true;

        // Search

        if(!title.includes(searchValue)){

            show = false;

        }

        // Department

        if(departmentValue != "all" &&
           !department.includes(departmentValue)){

            show = false;

        }

        // Mode

        if(modeValue != "all" &&
           !mode.includes(modeValue)){

            show = false;

        }

        if(show){

            card.style.display = "flex";

        }

        else{

            card.style.display = "none";

        }

    });

}

searchInput.addEventListener("keyup",filterGroups);

departmentSelect.addEventListener("change",filterGroups);

modeSelect.addEventListener("change",filterGroups);

// ===============================
// JOIN GROUP
// ===============================

let joinedGroups =
JSON.parse(localStorage.getItem("joinedGroups")) || [];

function attachJoinButtons(){

    const joinButtons =
    document.querySelectorAll(".join-btn");

    joinButtons.forEach(function(button){

        const card = button.parentElement;

        const paragraphs =
        card.querySelectorAll("p");

        const group = {

            name: card.querySelector("h3").textContent,

            department: paragraphs[0].textContent,

            mode: paragraphs[1].textContent,

            members: paragraphs[2].textContent,

            description:
            paragraphs[paragraphs.length-1].textContent

        };

        const alreadyJoined =
        joinedGroups.some(function(g){

            return g.name === group.name;

        });

        if(alreadyJoined){

            button.innerHTML = "Joined ✓";

            button.disabled = true;

            button.style.background = "green";

        }

        button.addEventListener("click",function(){

            if(!joinedGroups.some(g => g.name === group.name)){

                joinedGroups.push(group);

                localStorage.setItem(

                    "joinedGroups",

                    JSON.stringify(joinedGroups)

                );

                button.innerHTML = "Joined ✓";

                button.disabled = true;

                button.style.background = "green";

                alert("Successfully joined " + group.name);

            }

        });

    });

}

attachJoinButtons();