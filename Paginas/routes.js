const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para la página de Bienvenida en `/1`
router.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname, 'rutas/indexBienvenida.html'));
});

// Ruta para la página de Quiénes Somos en `/2`
router.get('/2', (req, res) => {
    res.sendFile(path.join(__dirname, 'rutas/indexQuienesSomos.html'));
});

// Ruta para la página de Contacto en `/3`
router.get('/3', (req, res) => {
    res.sendFile(path.join(__dirname, 'rutas/indexContacto.html'));
});

module.exports = router;
