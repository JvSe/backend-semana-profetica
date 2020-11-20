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
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
});

module.exports = model('Decreto', DecretoSchema);