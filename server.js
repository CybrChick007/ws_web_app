'use static';

const express = require('express');
const app = express();

app.use(express.static('pages'));



app.listen(8080, () => console.log('Listing on port 8080'));
