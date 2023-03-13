const socket = io('http://localhost:3000');
socket.on('message', (message) => {
  const messagesElement = document.querySelector('.messages');
  addMessage(message);
  function addMessage(message) {
    const newMessageElement = document.createElement('p');
    newMessageElement.textContent = message.slice(0, 80);
    if (messagesElement.children.length >= 20) {
      messagesElement.lastElementChild.remove();
    }
    messagesElement.prepend(newMessageElement);
  }
});
