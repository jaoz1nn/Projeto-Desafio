const express = require("express");

const router = express.Router()
router.get('/',(req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

router.get('/contatos',(req, res) =>{
    res.sendFile(__dirname + '/contato.html');
});

router.get('/produtos',(req, res) =>{
    res.sendFile(__dirname + '/produto.html');
});

router.get('/catalogos',(req, res) =>{
    res.sendFile(__dirname + '/catalogo.html');
});

const app = express();
app.use('/', router);

module.exports = app;