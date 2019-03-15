'use static';

const express = require('express');
const bodyParser = require('body-parser');

const api = require('./api');

const app = express();
app.use(bodyParser.json());

// app.use(api);

app.use(express.static('pages'));

app.listen(8080, () => console.log('Listing on port 8080'));
