const Decreto = require('../model/Decreto');

module.exports = {

    async store(req, res) {

        const decreto = await Decreto.create({
            titulo: req.body.titulo,
            pedidos: req.body.pedidos,
            user: req.body.user,
            
        });

        return res.json(decreto)
    },

    async index(req, res) {
        const decretos = await Decreto.find();

        return res.json(decretos);
    }
}