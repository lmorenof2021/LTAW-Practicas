const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8001;

//leer archivo y manejar errores
const serveFile = (res, filePath, contentType) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            res.writeHead(500);
            res.end('Error al cargar el archivo');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
};



// Crear el servidor
const server = http.createServer((req, res) => {
    console.log(`Solicitud recibida para: ${req.url}`);

// Manejo de rutas
    let filePath = ''; //almacena la ruta del archivo
    let contentType = ''; //almacena el tipo de contenido del archivo

    if (req.url === '/') {

        filePath = path.join(__dirname, 'index.html');
    
        contentType = 'text/html';
    
    } else if (req.url === '/BillieEilish') {
    
        filePath = path.join(__dirname, 'producto1.html');
    
        contentType = 'text/html';
    
    } else if (req.url === '/KendrickLamar') {
    
        filePath = path.join(__dirname, 'producto2.html');
    
        contentType = 'text/html';
    
    } else if (req.url === '/TheWeeknd') {
    
        filePath = path.join(__dirname,  'producto3.html');
    
        contentType = 'text/html';

    } else if (req.url === '/Rihanna') {
    
        filePath = path.join(__dirname,  'producto4.html');
    
        contentType = 'text/html';
    
    } else if (req.url === '/css/styles.css') {
    
        filePath = path.join(__dirname,  'css', 'styles.css');
    
        contentType = 'text/css';

    
    } else if (req.url === '/imagenes/producto1.jpg') {
    
        filePath = path.join(__dirname,  'imagenes', 'producto1.jpg');
    
        contentType = 'image/jpeg';
    
    } else if (req.url === '/imagenes/producto2.jpg') {
    
        filePath = path.join(__dirname,  'imagenes', 'producto2.jpg');
    
        contentType = 'image/jpeg';
    
    } else if (req.url === '/imagenes/producto3.jpg') {
    
        filePath = path.join(__dirname,  'imagenes', 'producto3.jpg');
    
        contentType = 'image/jpeg';
    
    } else if (req.url === '/imagenes/producto4.jpg') {
    
        filePath = path.join(__dirname,  'imagenes', 'producto4.jpg');
    
        contentType = 'image/jpeg';
    

    } else if (req.url === '/imagenes/favicon.png') {
    
        filePath = path.join(__dirname,  'imagenes', 'favicon.png');
    
        contentType = 'image/png';
    
    }
    else {
    
        // Si el recurso no se encuentra, servir una página de error
    
        filePath = path.join(__dirname, 'pag_error.html');
    
        contentType = 'text/html';
    
    }


    
    serveFile(res, filePath, contentType);
});

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});