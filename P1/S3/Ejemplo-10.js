//-Error de lectura síncrona

const fs = require('fs');

//-- Fichero a leer

//-En este caso el fichero no existe
const FICHERO = 'fich11.txt';

try {
  const data = fs.readFileSync(FICHERO, 'utf8');
  console.log("Lectura completada...")
  console.log("Contenido del fichero: \n")
  console.log(data);

} catch (err) {
  console.log("Error!!")
  console.log(err.message);
}