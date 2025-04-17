//-- Cargar las dependencias
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');
//-- Cargar el módulo de electron
const electron = require('electron');

console.log("Arrancando electron...");

const PUERTO = 8080;

//-- Crear una nueva aplciacion web
const app = express();

//-- Crear un servidor, asociado a la App de express
const server = http.Server(app);

//-- Crear el servidor de websockets, asociado al servidor http
const io = socket(server);

//--Variable de usuarios conectados
let usuariosConectados = 0;


//-- Esto es necesario para que el servidor le envíe al cliente la
//-- biblioteca socket.io para el cliente
app.use('/', express.static(__dirname + '/'));

//-- El directorio publico contiene ficheros estáticos
app.use(express.static('public'));


//------------------- GESTION SOCKETS IO
//-- Evento: Nueva conexion recibida
io.on('connect', (socket) => {
  //--+1 por cada usuario que se conecta
  usuariosConectados++;
  console.log('** NUEVA CONEXIÓN **'.yellow);

  socket.send('Inicio del chat');

  socket.send('El usuario se acaba de conectar al chat');
  socket.broadcast.emit('message','Un nuevo usuario se acaba de conectar al chat')
 

  socket.on("message", (msg) => {
    console.log("Mensaje Recibido!: ".blue + msg);

    if (msg.startsWith('/')) {
        let mensajeRespuesta = '';
        const comando = msg;
      
        if (comando === '/help') {
          mensajeRespuesta = 'Comandos disponibles: /help, /list, /hello, /date';
        } else if (comando === '/list') {
          mensajeRespuesta = `Número de usuarios conectados: ${usuariosConectados}`;
        } else if (comando === '/hello') {
          mensajeRespuesta = 'El servidor te envía saludos!!';
        } else if (comando === '/date') {
          mensajeRespuesta = `Fecha y hora actuales: ${new Date().toLocaleString()}`;
        } else {
          mensajeRespuesta = 'Comando incorrecto. Escribe /help para ver los comandos disponibles.';
        }
        //Solo se envía al servidor
        socket.send(mensajeRespuesta);
      } else {
        //Si no es un comando, se envía a todos
        io.send(msg);
      }
  });
  
//--Evento cuando un usuario está escribiendo
  socket.on('typing', () => {
    socket.broadcast.emit('userTyping'); 
  });
  

//-- Evento de desconexión
  socket.on('disconnect', () => {
    usuariosConectados--;
    console.log('** CONEXIÓN TERMINADA **'.yellow);
    io.send('Usuario desconectado');

  });
});

//-- Variable para acceder a la ventana principal
//-- Se pone aquí para que sea global al módulo principal
let win = null;

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', () => {
    console.log("Evento Ready!");

    //-- Crear la ventana principal de nuestra aplicación
    win = new electron.BrowserWindow({
        width: 600,  //-- Anchura 
        height: 400  //-- Altura
    });

});


//-- Lanzar el servidor HTTP
server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);
