const { Schema, model } = require('mongoose');

const DecretoSchema = new Schema({
    titulo:{
        type: String,
        required: true,
    },
    pedidos: {
        type: Array,
        required: false,
    },
});

module.exports = model('Decreto', DecretoSchema);