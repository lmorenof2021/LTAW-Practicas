//-Permite crear un servidor HTTP y manejar solicitudes y respuestas
const http = require('http');

const PUERTO = 8080;

//-- SERVIDOR: Bucle principal de atención a clientes
//-Función de callback que se ejecuta cada vez que el servidor reciba una solicitud
const server = http.createServer((req, res) => {

  console.log("\nMENSAJE A")

  //-Se establece un listener para el evento data del objeto req
  req.on('data', (cuerpo) => {
    console.log("MENSAJE B")
  });

  //-Se dispara este evento cuando se han recibido todos los datos de la solicitud.
  req.on('end', ()=> {
    console.log("MENSAJE C");

    //-- Hayppy server. Generar respuesta
    res.setHeader('Content-Type', 'text/plain');
    res.write("Soy el happy server\n");
    res.end()
  });

  console.log("MENSAJE D");

});

console.log("MENSAJE E");
//-Se inicia el servidor para que escuche en el puerto
server.listen(PUERTO);
console.log("MENSAJE F");