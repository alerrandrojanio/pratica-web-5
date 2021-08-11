const funcinarioRepository = require("../repositories/funcionario-repository");
class FuncionarioService{
    
  add(funcionario){
    return funcinarioRepository.save(funcionario);
  }
  
  getAll(){
    return funcinarioRepository.findAll();
  }
    
  getByNome(nome){
    return funcinarioRepository.findByName(nome);
  }
  
  update(id, funcionario){
    return funcinarioRepository.update(id, funcionario);
  }
    
  delete(id){
    return funcinarioRepository.delete(id);
  }
}
    
module.exports = FuncionarioService;