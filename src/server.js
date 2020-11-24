require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();

var http = require('http').Server(server);

const routes = require('./routes');

// GET, POST, PUT, DELETE
mongoose.connect("mongodb+srv://jvse:2301200023@cluster0.ucd7e.mongodb.net/SemanaProfetica?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false
});
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

server.use(cors(corsOptions));
server.use(express.json());
server.use(routes);
http.listen(process.env.PORT || 1512);