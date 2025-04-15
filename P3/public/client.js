//-- Elementos del interfaz
const display = document.getElementById("display");
const msg_entry = document.getElementById("msg_entry");
const typingDiv = document.getElementById('typingIndicator');

//-- Crear un websocket. Se establece la conexión con el servidor
const socket = io();

//--Emitir que estás escribiendo
msg_entry.addEventListener('input', () => {
  socket.emit('typing');
});

//-- Mostrar los mensajes recibidos
socket.on("message", (msg) => {
  display.innerHTML += '<p style="color:green">' + msg + '</p>';
  display.scrollTop = display.scrollHeight;
});

//--Recibir evento typing para cuando alguien está escribiendo
socket.on('userTyping', () => {
  typingDiv.style.display = 'block';

  clearTimeout(window.typingTimeout);
  window.typingTimeout = setTimeout(() => {
    typingDiv.style.display = 'none';
  }, 1500);
});

//-- Al apretar enter o enviar se envía un mensaje al servidor
msg_entry.onchange = () => {
  if (msg_entry.value) {
    socket.send(msg_entry.value);
    msg_entry.value = "";
  }
};
