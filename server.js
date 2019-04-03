'use static';

const PORT = 8080;

const http = require('http');
const ws = require('ws');
const path = require ('path');
const fs = require('fs');

const pathname = path.join(__dirname, "index.html");
const index = fs.readFileSync(pathname);

function listener(socket) {
  socket.on() {
    socket.send();
  }
}
// const express = require('express');
// const bodyParser = require('body-parser');
const api = require('./api');

// const app = express();
// app.use(bodyParser.json());

// app.use(api);

app.use(express.static('pages'));

app.listen(PORT, () => console.log('Listing on port' + PORT));
