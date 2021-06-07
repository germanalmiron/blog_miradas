// Configuración inicial
const express = require("express");
const app = express();
const path = require('path')
var router = express.Router();

// setting
app.set('views', path.join(__dirname, 'public'));

//static files
app.use(express.static('public'));

// Iniciar servidor
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
