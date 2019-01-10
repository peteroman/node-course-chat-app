const path = require('path');
const express = require('express');

const pubpath = path.join(__dirname, '../public');

var app = express();
const port = process.env.PORT|| 3000;

app.use(express.static(pubpath));


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});