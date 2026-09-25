function openChat() {
    document.getElementById("chatbot").style.display = "block";
}

function closeChat() {
    document.getElementById("chatbot").style.display = "none";
}


function addMessage(message, type) {

    const chatBody = document.getElementById("chatBody");

    const div = document.createElement("div");

    div.className = type + "-message";

    div.innerText = message;

    chatBody.appendChild(div);

    chatBody.scrollTop = chatBody.scrollHeight;
}


function sendQuick(message) {

    addMessage(message, "user");

    setTimeout(function () {

        addMessage(
            "This feature will be connected with the college database soon. 🤖",
            "bot"
        );

    }, 500);
}


function sendMessage() {

    const input = document.getElementById("chatInput");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    input.value = "";

    setTimeout(function () {

        addMessage(
            "I'm your MIT Admission Enquiry Assistant. The AI/NLP system will answer this question after we connect the backend database.",
            "bot"
        );

    }, 500);
}


function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }
}
