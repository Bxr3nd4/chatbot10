document.addEventListener('DOMContentLoaded', function () {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function botBienvenida() {
        addMessage('bot', '¿Cuál es tu nombre?');
    }

    sendButton.addEventListener('click', function () {
        const userMessage = userInput.value;
        if (userMessage.trim() !== '') {
            addMessage('user', userMessage);

            setTimeout(() => {
                addMessage('bot', '¿Cuál es tu número de WhatsApp?');
            }, 1000);
            userInput.value = '';
        }
    });

    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = sender;
        messageDiv.textContent = message;
        chatLog.appendChild(messageDiv);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    window.onload = function() {
        botBienvenida();
    }

    function addBotMessage(text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("bot-message"); 
    
        const botImage = document.createElement("img");
        botImage.src = "ruta_de_la_imagen_del_bot.png";
        botImage.alt = "Avatar del bot";
    
        const messageText = document.createElement("p");
        messageText.textContent = text;
    
        messageDiv.appendChild(botImage);
        messageDiv.appendChild(messageText);
    

        chatLog.appendChild(messageDiv);

    }
    
});