///-Lectura síncrona

//-- Importar el módulo FS, que proporciona funciones para interactuar cpn el sistema
const fs = require('fs');

console.log("Lectura síncrona de un fichero");

//-- Realizar la lectura del contenido fich1.txt, y especifica que el contenido del archivo debe ser interpretado como utf8
const data = fs.readFileSync('fich1.txt','utf8');

//-- Esta instrucción se ejecuta una vez terminada
//-- la lectura síncrona
console.log("Lectura completada...")

//-- Mostrar el contenido del fichero
console.log("Contenido del fichero: \n")
console.log(data);