const Funcionario = require("../models/funcionario-model");
const FuncionarioService = require("../services/funcionario-service");

var funcionarioService = new FuncionarioService();

exports.get = async (req, res)=>{
    res.json(await funcionarioService.getAll());
};

exports.getByNome = async (req,res) =>{
    res.json(await funcionarioService.getByNome(req.query.nome));
};

exports.post = async (req, res) =>{
    res.json(await funcionarioService.add(
        new Funcionario(
            req.body.nome,
            req.body.cargo,
            req.body.dt_nascimento,
            req.body.dt_entrada
        )));
};

exports.put = async (req,res) =>{
    res.json(await funcionarioService.update(req.params.id,
        new Funcionario( 
            req.body.nome,
            req.body.cargo,
            req.body.dt_nascimento,
            req.body.dt_entrada
            )));
};

exports.delete = (req,res) =>{
    res.json(funcionarioService.delete(req.params.id));
};