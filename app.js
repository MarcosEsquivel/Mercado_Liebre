const express = require('express');
const app = express();
const port = 3535;
const path = require('path');

app.use(express.static('public'));


app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/ofertas', (req,res) => res.sendFile(path.join(__dirname, 'views', 'ofertas.html')))

app.listen(port, () => console.log('Servidor corriendo en http//localhost: ' + port));