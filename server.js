'use static';

const PORT = 8080;

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const ws = require('ws');
const fs = require('fs');
const path = require('path');
//const api = require('./api');

const pathname = path.join(__dirname, "pages/index.html");
const index = fs.readFileSync(pathname);

const app;
// app.use(bodyParser.json());

function socketListener(socket) {
  socket.on('message', (msg) => {
    console.log(`Message: ${msg}`);
    socket.send(msg);
  });
}

function httphandler(req, res) {
  res.setHeader('Content-type', 'text/html');
  res.end(index);
}

const server = http.createServer(httphandler);
const wsserver = new ws.Server({
  server: server
});

wsserver.on('connection', socketListener);

server.listen(8888, () => console.log('Successful Server Start'));

app.createServer(socketListener).listen(PORT, () => {
  console.log(`http://${require('os').networkInterfaces().en0[1].address}:${PORT}`);
});

// app.use(express.static('pages'));
//
// app.listen(PORT, () => console.log('Listing on port' + PORT));
