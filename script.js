// ===============================
// Campus Navigator Checker
// ===============================
function checkCampus() {
    const campus = document.getElementById("campusInput").value.toLowerCase().trim();
    const message = document.getElementById("message");

    if (campus === "") {
        message.innerHTML = "⚠️ Please enter a campus name.";
        message.style.color = "#fef08a";
        return;
    }

    if (
        campus.includes("jain") ||
        campus.includes("jiet") ||
        campus.includes("jain institute")
    ) {
        message.innerHTML = "✅ Welcome to <b>Jain Institute of Engineering and Technology</b>, Hubballi.";
        message.style.color = "#bbf7d0";
    } else {
        message.innerHTML = "❌ Campus not found. Try typing <b>Jain Institute of Engineering and Technology</b>.";
        message.style.color = "#fecaca";
    }
}

// Allow trigger on "Enter" key for search input
document.getElementById("campusInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        checkCampus();
    }
});

// ===============================
// AI Assistant
// ===============================
function answerQuestion() {
    const question = document.getElementById("question").value.toLowerCase().trim();
    const answer = document.getElementById("answer");

    if (question === "") {
        answer.innerHTML = "⚠️ Please enter a question.";
        answer.style.color = "#dc2626";
        return;
    }

    answer.style.color = "#1f2937";

    if (question.includes("library")) {
        answer.innerHTML = "📚 <b>Library</b><br>📍 Academic Block<br>🕒 Timings: 8:30 AM - 8:00 PM";
    } else if (question.includes("cse") || question.includes("computer science")) {
        answer.innerHTML = "💻 <b>CSE Department</b><br>📍 Block A - First Floor";
    } else if (question.includes("canteen") || question.includes("cafeteria") || question.includes("food")) {
        answer.innerHTML = "🍴 <b>Cafeteria</b><br>🕒 Timings: 9:00 AM - 5:00 PM";
    } else if (question.includes("principal")) {
        answer.innerHTML = "🏢 <b>Principal's Office</b><br>📍 First Floor - Administrative Block";
    } else if (question.includes("placement")) {
        answer.innerHTML = "🎯 <b>Placement Cell</b><br>📍 Second Floor - Administrative Block<br>🕒 Timings: 9:00 AM - 5:00 PM";
    } else if (question.includes("hostel")) {
        answer.innerHTML = "🏠 <b>Hostel Office</b><br>📍 Near Main Gate";
    } else if (question.includes("fee")) {
        answer.innerHTML = "💳 <b>Fee Counter</b><br>📍 Administrative Block<br>🕒 Timings: 9:00 AM - 4:00 PM";
    } else if (question.includes("bus")) {
        answer.innerHTML = "🚌 <b>College Bus Service</b><br>Buses arrive between 8:00 AM and 8:45 AM.";
    } else if (question.includes("admission")) {
        answer.innerHTML = "📝 <b>Admission Office</b><br>📍 Ground Floor - Administrative Block";
    } else if (question.includes("contact") || question.includes("phone")) {
        answer.innerHTML = "☎️ <b>Contact College Office:</b><br>+91 98765 43210";
    } else if (question.includes("hello") || question.includes("hi")) {
        answer.innerHTML = "👋 Hello! How can I help you navigate SmartCampus today?";
    } else {
        answer.innerHTML =
            "🤖 Sorry! I couldn't find an answer for that.<br><br>" +
            "<b>Try asking about:</b> Library, CSE Department, Cafeteria, Placement, Hostel, Fees, Bus, or Admission.";
    }
}

// Allow trigger on "Enter" key for assistant
document.getElementById("question").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        answerQuestion();
    }
});

// ===============================
// Event Registration
// ===============================
function registerEvent(eventName) {
    alert(`🎉 Success! You have registered for the ${eventName}.`);
}

// ===============================
// Lost & Found Form Handling
// ===============================
function submitLostFound() {
    const name = document.getElementById("lostName").value.trim();
    const item = document.getElementById("lostItem").value.trim();
    const desc = document.getElementById("lostDesc").value.trim();
    const msg = document.getElementById("lostMessage");

    if (!name || !item || !desc) {
        msg.innerHTML = "⚠️ Please fill in all fields.";
        msg.style.color = "#dc2626";
        return;
    }

    msg.innerHTML = `✅ Thank you, ${name}. Your report for "${item}" has been registered.`;
    msg.style.color = "#16a34a";

    // Clear form fields
    document.getElementById("lostFoundForm").reset();
}

// ===============================
// Maintenance Form Handling
// ===============================
function submitMaintenance() {
    const location = document.getElementById("maintLocation").value.trim();
    const desc = document.getElementById("maintDesc").value.trim();
    const msg = document.getElementById("maintMessage");

    if (!location || !desc) {
        msg.innerHTML = "⚠️ Please fill in all fields.";
        msg.style.color = "#dc2626";
        return;
    }

    msg.innerHTML = `✅ Maintenance report submitted for <b>${location}</b>.`;
    msg.style.color = "#16a34a";

    // Clear form fields
    document.getElementById("maintenanceForm").reset();
}