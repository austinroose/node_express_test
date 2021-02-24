'use strict';

const express = require("express");
var api = require("./routes/api");

const PORT = 8080;
const HOST = '0.0.0.0';


const app = express()
var router = express.Router()

app.get('/', (req, res) => {
    res.send("Hello worldd");
})

app.use('/api', api)

app.listen(PORT, HOST)
console.log(`Running on http:///${HOST}:${PORT}`)