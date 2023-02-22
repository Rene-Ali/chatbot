// Definiere mögliche Fragen und Antworten
const faq = {
    "Hallo": "Hallo! Wie kann ich dir helfen?",
    "Wie geht es dir?": "Mir geht es gut, danke!",
    "Was ist dein Name?": "Ich bin ein Chatbot. Und wie kann ich dir helfen?",
    "Was ist das Wetter heute?": "Das kann ich dir leider nicht sagen. Aber versuche doch eine Wetter-App!",
    "Auf Wiedersehen": "Bis zum nächsten Mal!"
  };
  
  // Funktion, um eine zufällige Antwort aus einem Array von Antworten auszuwählen
  function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // Funktion, um die Antwort des Chatbots zu generieren
  function generateResponse(message) {
    // Normalisiere die Eingabe des Benutzers, indem du sie in Kleinbuchstaben umwandelst
    const input = message.toLowerCase();
  
    // Suche nach einer passenden Frage in der FAQ
    for (const question in faq) {
      if (input.includes(question.toLowerCase())) {
        // Wenn eine passende Frage gefunden wurde, gib eine zufällige Antwort aus
        return pickRandom(faq[question]);
      }
    }
  
    // Wenn keine passende Frage gefunden wurde, gib eine Standardantwort aus
    return "Entschuldigung, ich habe dich nicht verstanden. Kannst du das bitte wiederholen?";
  }
  
  // Funktion, um eine neue Nachricht zum Chatfenster hinzuzufügen
  function addMessage(message, sender) {
    // Erstelle ein neues <div> Element für die Nachricht
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(sender);
  
    // Erstelle ein neues <div> Element für den Text der Nachricht
    const bubbleElement = document.createElement("div");
    bubbleElement.classList.add("bubble");
    bubbleElement.innerText = message;
  
    // Füge das Text-Element zur Nachricht hinzu
    messageElement.appendChild(bubbleElement);
  
    // Füge die Nachricht zum Chatfenster hinzu
    const chatElement = document.getElementById("chat");
    chatElement.appendChild(messageElement);
  
    // Scrolle zum Ende des Chatfensters
    chatElement.scrollTop = chatElement.scrollHeight;
  }
  
  // Funktion, um die Eingabe des Benutzers zu verarbeiten und eine Antwort des Chatbots zu generieren
  function processInput() {
    const inputElement = document.getElementById("input");
    const input = inputElement.value.trim();
  
    if (input !== "") {
      // Füge die Eingabe des Benutzers zum Chatfenster hinzu
      addMessage(input, "user");
  
      // Generiere eine Antwort des Chatbots
      const response = generateResponse(input);
  
      // Füge die Antwort des Chatbots zum Chatfenster hinzu
      addMessage(response, "bot");
  
      // Setze das Eingabefeld zurück
      inputElement.value = "";
    }
  }
  
  // Füge einen Event Listener zum Senden-Button hinzu
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", processInput);
  
  // Füge einen Event Listener zur Enter-Taste hinzu
  const inputElement = document.getElementById("input");
  inputElement.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      processInput();
    }
  });