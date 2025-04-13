
//-- Elementos del interfaz
const display = document.getElementById("display");
const button = document.getElementById("button");

//-- Crear un websocket. Se establece la conexión con el servidor
const socket = io();

//-- Mostrar los mensajes recibidos
socket.on("message", (msg) => {
  display.innerHTML += '<p style="color:blue">' + msg + '</p>';
});

//-- Al apretar el botón se envía un mensaje al servidor
button.onclick = () => {
  if (mensaje.value) {
    socket.send(mensaje.value);
    button.value = "";
  }
};
