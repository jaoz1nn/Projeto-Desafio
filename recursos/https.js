const http = require('http');
const url = require('url');
const fs = require('fs');

function readFile(res, file) {
    fs.readFile(file, function(err, data) {
        res.end(data);
    });
}

const callback = function (req, res) {
    var parts = url.parse(req.url);
    var path  = parts.path;

    if (parts.path == "/abertura/tipoDocx"){
        res.writeHead(200, {"Content-type": "text/plain"});
        readFile(res, "arquivo.docx");
    } else if (parts.path == "/abertura/tipoJpeg"){
        res.writeHead(200, {"Content-type": "image/jpeg"});
        readFile(res, "arquivo.jpeg");
    } else if (parts.path == "/abertura/tipoMp3"){
        res.writeHead(200, {"Content-type": "audio/mp3"});
        readFile(res, "arquivo.mp3");
    } else if (parts.path == "/abertura/tipoMp4"){
        res.writeHead(200, {"Content-type": "video/mp4"});
        readFile(res, "arquivo.mp4");
    } else if (parts.path == "/abertura/tipoJson"){
        res.writeHead(200, {"Content-type": "application/json"});
        readFile(res, "arquivo.json");
    } else if (parts.path == "/abertura/tipoMd"){
        res.writeHead(200, {"Content-type": "text/md"});
        readFile(res, "./arquivo.md");
    } else {
        res.writeHead(200, {"Content-type": "text/html"});
        readFile(res, "404.html");
    }
};

const server = http.createServer(callback)
server.listen(3000);
console.log("Servidor rodando em http://localhost:3000 [Status: OK]");