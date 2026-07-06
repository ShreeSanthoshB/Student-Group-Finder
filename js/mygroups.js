const joinedContainer = document.getElementById("joinedGroups");
const createdContainer = document.getElementById("createdGroups");

// Display Joined Groups

function displayJoinedGroups(){

    let joinedGroups =
    JSON.parse(localStorage.getItem("joinedGroups")) || [];

    joinedContainer.innerHTML="";

    if(joinedGroups.length===0){

        joinedContainer.innerHTML="<p>No joined groups yet.</p>";

        return;

    }

    joinedGroups.forEach((group,index)=>{

    joinedContainer.innerHTML += `

    <div class="card">

        <h3>${group.name}</h3>

        <p>${group.department}</p>

        <p>${group.mode}</p>

        <p>${group.members}</p>

        <p>${group.schedule}</p>

        <p>${group.description}</p>

        <button class="leave-btn" onclick="leaveGroup(${index})">
            Leave Group
        </button>

    </div>

    `;

});

}


// Display Created Groups

function displayCreatedGroups(){

    let createdGroups =
    JSON.parse(localStorage.getItem("createdGroups")) || [];

    createdContainer.innerHTML="";

    if(createdGroups.length===0){

        createdContainer.innerHTML="<p>No groups created yet.</p>";

        return;

    }

    createdGroups.forEach((group,index)=>{

        createdContainer.innerHTML += `

        <div class="card">

            <h3>${group.groupName}</h3>

            <p><strong>Subject:</strong> ${group.subject}</p>

            <p><strong>Department:</strong> ${group.department}</p>

            <p><strong>Mode:</strong> ${group.mode}</p>

            <p>${group.description}</p>

            <button class="delete-btn"
            onclick="deleteGroup(${index})">

            Delete Group

            </button>

        </div>

        `;

    });

}


// Leave Joined Group

function leaveGroup(index){

    let joinedGroups =
    JSON.parse(localStorage.getItem("joinedGroups")) || [];

    joinedGroups.splice(index,1);

    localStorage.setItem(
        "joinedGroups",
        JSON.stringify(joinedGroups)
    );

    displayJoinedGroups();

}


// Delete Created Group

function deleteGroup(index){

    let createdGroups =
    JSON.parse(localStorage.getItem("createdGroups")) || [];

    createdGroups.splice(index,1);

    localStorage.setItem(
        "createdGroups",
        JSON.stringify(createdGroups)
    );

    displayCreatedGroups();

}


// Load Data

displayJoinedGroups();

displayCreatedGroups();