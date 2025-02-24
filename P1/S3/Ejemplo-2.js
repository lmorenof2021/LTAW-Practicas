const http = require('http');

const PUERTO = 8080;

//-- Imprimir informacion sobre el mensaje de solicitud
function print_info_req(req) {

    console.log("");
    console.log("Mensaje de solicitud");
    console.log("====================");
    console.log("Método: " + req.method);
    console.log("Recurso: " + req.url);
    console.log("Version: " + req.httpVersion)
    console.log("Cabeceras: ");

    //-- Recorrer todas las cabeceras disponibles
    //-- imprimiendo su nombre y su valor
    for (hname in req.headers)
      console.log(`  * ${hname}: ${req.headers[hname]}`);

    //-- Construir el objeto url con la url de la solicitud
    const myURL = new URL(req.url, 'http://' + req.headers['host']);
    console.log("URL completa: " + myURL.href);
    console.log("  Ruta: " + myURL.pathname);
}

//-- SERVIDOR: Bucle principal de atención a clientes
const server = http.createServer((req, res) => {

  //-- Petición recibida
  //-- Imprimir información de la petición
  print_info_req(req);

  //-- Si hay datos en el cuerpo, se imprimen
  req.on('data', (cuerpo) => {

    //-- Los datos del cuerpo son caracteres
    //-Se establece la codificación de los datos entrantes a utf-8
    req.setEncoding('utf8');

    console.log("Cuerpo: ")
    console.log(` * Tamaño: ${cuerpo.length} bytes`);
    console.log(` * Contenido: ${cuerpo}`);
  });

  //-- Esto solo se ejecuta cuando llega el final del mensaje de solicitud. 
  //-Cuando se ha recibido todo el cuerpo de la solicitud
  req.on('end', ()=> {
    console.log("Fin del mensaje");

    //-- Hayppy server. Generar respuesta
    //-setHeader informa al cliente sobre el tipo de contenido que est recibiendo. En este caso, un texto sin formato
    res.setHeader('Content-Type', 'text/plain');
    res.write("Soy el happy server\n");
    res.end()
  });

});

server.listen(PUERTO);

console.log("Ejemplo 1. Happy Server listo!. Escuchando en puerto: " + PUERTO);