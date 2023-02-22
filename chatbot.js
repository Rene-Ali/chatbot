// Get the elements from the HTML
const chatLog = document.querySelector('.chat-log');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Define the chatbot's responses
const chatbotResponses = [
  'Hello!',
  'How are you?',
  'What can I help you with?',
  'Sorry, I did not understand that.',
  'Please try again.'
];

// Function to add a message to the chat log
function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender);
  messageDiv.textContent = message;
  chatLog.appendChild(messageDiv);
}

// Function to handle user input
function handleUserInput() {
  const userMessage = userInput.value;
  addMessage(userMessage, 'user');
  const chatbotMessage = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];
  addMessage(chatbotMessage, 'chatbot');
  userInput.value = '';
}

// Add event listener to the send button
sendBtn.addEventListener('click', handleUserInput);

// Add event listener to the input field to handle enter key press
userInput.addEventListener('keydown', function(e) {
  if (e.code === 'Enter') {
    handleUserInput();
  }
});