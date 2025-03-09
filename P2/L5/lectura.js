

const fs = require('fs');

// Nombre del fichero JSON a leer
const FICHERO_JSON = "tienda.json";

// Leer el fichero JSON
const tienda_json = fs.readFileSync(FICHERO_JSON, 'utf8');

// Crear la estructura tienda a partir del contenido del fichero
const tienda = JSON.parse(tienda_json);

// Mostrar información sobre la tienda
console.log("Número de productos en la tienda: " + tienda.productos.length);

// Recorrer el array de productos y aumentar el stock
tienda.productos.forEach((producto, index) => {
  console.log("Producto: " + (index + 1) + ": " + producto["nombre"]);
  // Incrementar el stock en 1 unidad
  producto.unidades = parseInt(producto.unidades) + 1;
});

// Guardar el resultado en el fichero tienda.json
fs.writeFileSync(FICHERO_JSON, JSON.stringify(tienda, null, 2));

console.log("El stock de los productos ha sido incrementado en 1 unidad y guardado en " + FICHERO_JSON);