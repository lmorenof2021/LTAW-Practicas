//-Asíncrona

//-- Importar el módulo FS
const fs = require('fs');

console.log("Lectura asíncrona de un fichero");

//-- Realizar la lectura asíncrona
//-El tercer argumento es un callback que se ejecutará una vez que la lectura se complete.
//-Esta recibe el parámetro err (obtejo de error) y data
fs.readFile('fich1.txt','utf8', (err, data) => {

    //-- Cuando los datos están ya disponibles
    //-- los mostramos en la consola
    console.log("Lectura completada...")
    console.log("Contenido del fichero: \n")
    console.log(data);
});

console.log("Esperando al sistema de ficheros...")