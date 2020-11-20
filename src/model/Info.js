const { Schema, model } = require('mongoose');

const InfoSchema = new Schema({
    titulo:{
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    postagem: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    imgPostagem: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    imgAutor: {
        type: String,
        required: false
    }

});
module.exports = model('Info', InfoSchema);