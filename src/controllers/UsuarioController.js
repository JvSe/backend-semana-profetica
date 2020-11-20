const Usuario = require('../model/Usuario');

module.exports = {

    async store(req, res) {

        const response = await Usuario.find({email:req.body.email})

        console.log(response)

        for (let u in response){
            if(response[u].email == req.body.email){
                return res.json({user:true})
            } 
        }

       
        const usuario = await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            endereco: req.body.endereco,
            data_aniversario: req.body.dataAniversario,
            telefone: req.body.telefone,
            imagem: null,
        });

        return res.json(usuario)
    },

    async login(req, res) {
        const { email , senha } = req.body;
        const user = await Usuario.find({'email': email});

        for (let u in user) {
            if(user[u].email === email && user[u].senha === senha) {
                return res.json({login:true, id_user:user[u]})
            }
        }

        return res.json({login:false, erro:"Login/Senha incorreta"});
        
    },

}