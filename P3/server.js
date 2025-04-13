//-- Cargar las dependencias
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');

const PUERTO = 8080;

//-- Crear una nueva aplciacion web
const app = express();

//-- Crear un servidor, asosiaco a la App de express
const server = http.Server(app);

//-- Crear el servidor de websockets, asociado al servidor http
const io = socket(server);

let usuariosConectados = 0;

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Definir el punto de entrada principal de mi aplicación web
app.get('/', (req, res) => {
  res.send('Mi chat!!!' + '<p><a href="/index.html">Pulse para entrar al chat</a></p>');
});


//-- Esto es necesario para que el servidor le envíe al cliente la
//-- biblioteca socket.io para el cliente
app.use('/', express.static(__dirname + '/'));

//-- El directorio publico contiene ficheros estáticos
app.use(express.static('public'));


//------------------- GESTION SOCKETS IO
//-- Evento: Nueva conexion recibida
io.on('connect', (socket) => {
  usuariosConectados++;
  console.log('** NUEVA CONEXIÓN **'.yellow);

  socket.send('Inicio del chat');
 

  socket.on("message", (msg) => {
    console.log("Mensaje Recibido!: ".blue + msg);
  });

//-- Evento de desconexión
  socket.on('disconnect', () => {
    usuariosConectados--;
    console.log('** CONEXIÓN TERMINADA **'.yellow);
    io.send('Usuario desconectado');

  });
});


//-- Lanzar el servidor HTTP
//-- ¡Que empiecen los juegos de los WebSockets!
server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);
