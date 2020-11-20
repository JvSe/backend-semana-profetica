const Info = require('../model/Info');

module.exports = {

    async store(req, res) {

        const info = await Info.create({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            postagem: req.body.postagem,
            imgPostagem: req.body.imgPostagem,
            autor: req.body.autor,
            imgAutor: req.body.imgAutor
            
        });

        return res.json(info)
    },

    async index(req, res) {
        const infos = await Info.find();

        return res.json(infos);
    }
}