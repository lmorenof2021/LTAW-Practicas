const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const PORT = 8001;


// Crear el servidor
const server = http.createServer((req, res) => {
    console.log(`Solicitud recibida para: ${req.url}`);

    // Manejo de rutas
    let filePath = ''; //almacena la ruta del archivo
    let contentType = ''; //almacena el tipo de contenido del archivo

    if (req.url === '/') {

        filePath = path.join(__dirname, 'p1', 'index.html');
    
        contentType = 'text/html';
    
    } else if (req.url === '/producto1') {
    
        filePath = path.join(__dirname, 'p1', 'producto1.html');
    
        contentType = 'text/html';
    
    } else if (req.url === '/producto2') {
    
        filePath = path.join(__dirname, 'p1', 'producto2.html');
    
        contentType = 'text/html';
    
    } else if (req.url === '/producto3') {
    
        filePath = path.join(__dirname, 'p1', 'producto3.html');
    
        contentType = 'text/html';
    
    } else if (req.url === '/css/styles.css') {
    
        filePath = path.join(__dirname, 'p1', 'css', 'styles.css');
    
        contentType = 'text/css';
    
    } else if (req.url === '/js/script.js') {
    
        filePath = path.join(__dirname, 'p1', 'js', 'script.js');
    
        contentType = 'application/javascript';
    
    } else if (req.url === '/imagenes/producto1.jpg') {
    
        filePath = path.join(__dirname, 'p1', 'imagenes', 'producto1.jpg');
    
        contentType = 'image/jpeg';
    
    } else if (req.url === '/imagenes/producto2.jpg') {
    
        filePath = path.join(__dirname, 'p1', 'imagenes', 'producto2.jpg');
    
        contentType = 'image/jpeg';
    
    } else if (req.url === '/imagenes/producto3.jpg') {
    
        filePath = path.join(__dirname, 'p1', 'imagenes', 'producto3.jpg');
    
        contentType = 'image/jpeg';
    
    
    }
    
    
    serveFile(res, filePath, contentType);
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});