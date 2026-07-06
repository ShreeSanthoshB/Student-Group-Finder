// =====================================
// LOAD SESSIONS FROM LOCAL STORAGE
// =====================================

let sessions =
JSON.parse(localStorage.getItem("sessions")) || [];

// Display existing sessions when page loads
displaySessions();


// =====================================
// ADD NEW SESSION
// =====================================

function addSession() {

    const title =
    document.getElementById("sessionTitle").value.trim();

    const description =
    document.getElementById("sessionDescription").value.trim();

    const date =
    document.getElementById("sessionDate").value;

    const time =
    document.getElementById("sessionTime").value;

    // Check empty fields

    if (
        title === "" ||
        description === "" ||
        date === "" ||
        time === ""
    ) {

        alert("Please fill all the fields.");

        return;

    }

    // Create session object

    const session = {

        title: title,

        description: description,

        date: date,

        time: time

    };

    // Save session

    sessions.push(session);

    localStorage.setItem(
        "sessions",
        JSON.stringify(sessions)
    );

    alert("Study session scheduled successfully!");

    // Clear form

    document.getElementById("sessionTitle").value = "";
    document.getElementById("sessionDescription").value = "";
    document.getElementById("sessionDate").value = "";
    document.getElementById("sessionTime").value = "";

    // Refresh session list

    displaySessions();

}


// =====================================
// DISPLAY ALL SESSIONS
// =====================================

function displaySessions() {

    const sessionList =
    document.getElementById("sessionList");

    sessionList.innerHTML = "";

    // No sessions available

    if (sessions.length === 0) {

        sessionList.innerHTML = `
            <div class="empty-message">
                <h3>No Study Sessions Yet</h3>
                <p>Schedule your first study session.</p>
            </div>
        `;

        return;

    }

    // Display sessions

    sessions.forEach(function(session, index) {

        const card = document.createElement("div");

        card.className = "session-card";

        card.innerHTML = `

            <h3>${session.title}</h3>

            <p><strong>Description:</strong> ${session.description}</p>

            <p><strong>Date:</strong> ${session.date}</p>

            <p><strong>Time:</strong> ${session.time}</p>

            <button class="delete-btn"
                    onclick="deleteSession(${index})">

                Delete

            </button>

        `;

        sessionList.appendChild(card);

    });

}


// =====================================
// DELETE SESSION
// =====================================

function deleteSession(index) {

    if (confirm("Delete this study session?")) {

        sessions.splice(index, 1);

        localStorage.setItem(
            "sessions",
            JSON.stringify(sessions)
        );

        displaySessions();

    }

}