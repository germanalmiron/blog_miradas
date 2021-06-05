// Configuración inicial
const express = require("express");
const app = express();

// rutas
app.use(express.static('public'));

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor iniciando');
});


