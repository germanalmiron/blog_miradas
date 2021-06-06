// Configuración inicial
const express = require("express");
const app = express();

// rutas
app.use(express.static('public'));

// Iniciar servidor
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});


