const express = require('express');
const routes = require('./routes'); // Asegúrate de que el nombre del archivo sea correcto
const path = require('path');

const app = express();

// Usar las rutas importadas
app.use('/', routes);

// Servir archivos estáticos para CSS
app.use(express.static(path.join(__dirname, '/rutas')));

// Iniciar el servidor en el puerto 3010
const port = 3010;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log(`Bienvenida en http://localhost:${port}/1`);
    console.log(`Quiénes Somos en http://localhost:${port}/2`);
    console.log(`Contacto en http://localhost:${port}/3`);
});
