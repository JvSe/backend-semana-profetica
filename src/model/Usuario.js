const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nome:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true
    },
    data_aniversario: {
        type: String
    },
    telefone: {
        type: Number,
    },
    imagem: {
        type: Number,
    },
});

module.exports = model('Usuario', UsuarioSchema);