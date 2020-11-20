/*
* Aquivo que configura o servidor como um todo, para fazer funcionar
*/

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();

var http = require('http').Server(server);
var io = require('socket.io')(http);

const routes = require('./routes');

const listaPessoas = [];
var cont = 0;


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

io.origins('*:*')

io.on('connection', socket => {
    console.log('New client connected')

    socket.on('receber id', idUser => {
        listaPessoas[socket.id] = idUser
        cont += 1
        console.log(listaPessoas)
    })

    console.log(cont)
    
    if((cont+1) == 6) {
        io.emit('verificarBatalha', true)
    } else {
        socket.emit('verificarBatalha', false)
    }

    socket.on('disconnect', () => {
        console.log('User disconnected')
        delete listaPessoas[socket.id];
        console.log(listaPessoas)
        if (cont != 0){
            cont -= 1
        } else {
            cont = cont
        }
        
        console.log(cont)
    })
})

http.listen(process.env.PORT || 1512);