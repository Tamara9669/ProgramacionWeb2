const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'index')));

// Rutas para HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index', 'index.html'));
});

app.get('/qr', (req, res) => {
    res.sendFile(path.join(__dirname, 'index', 'qr.html'));
});

// Ruta para abrir la calculadora del sistema
app.get('/calculadora', (req, res) => {
    // Comando para abrir la calculadora según el sistema operativo
    const plataforma = process.platform;

    if (plataforma === 'win32') {
        exec('calc'); // Calculadora en Windows
    } else if (plataforma === 'darwin') {
        exec('open -a Calculator'); // Calculadora en macOS
    } else if (plataforma === 'linux') {
        exec('gnome-calculator'); // Calculadora en Linux (Gnome)
    }

    // Redirige de vuelta a la página principal o envía una respuesta de éxito
    res.send('<h1>Calculadora abierta en tu equipo</h1><a href="/">Volver a la Principal</a>');
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
