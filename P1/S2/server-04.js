const http = require('http');

//-- Definir el puerto a utilizar
const PUERTO = 8080;

//-- Crear el servidor
const server = http.createServer((req, res) => {
    
  //-- Indicamos que se ha recibido una petición
  console.log("Petición recibida!");

  //-- Cabecera que indica el tipo de datos del
  //-- cuerpo de la respuesta: Texto plano
  res.setHeader('Content-Type', 'text/plain');


  //-- Enviar una respuesta:. Siempre es la misma respuesta
  //-- Con el método res.write() se escribe el mensaje en el 
  //-- cuerpo de la respuesta
  res.write("Soy el Happy server!!\n");

  //-- Terminar la respuesta y enviarla
  res.end();
});

//-- Activar el servidor: ¡Que empiece la fiesta!
server.listen(PUERTO);

console.log("Happy server activado!. Escuchando en puerto: " + PUERTO);