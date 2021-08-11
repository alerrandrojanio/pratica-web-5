const pool = require("../dbs/postgres");

exports.save = async (funcionario) => {
    const result = await pool.query(
      "INSERT INTO funcionarios(nome, cargo, dt_nascimento, dt_entrada) VALUES ($1, $2, $3, $4) RETURNING *;",
        [funcionario.nome, 
        funcionario.cargo,
        funcionario.dt_nascimento,
        funcionario.dt_entrada]
    );
    return result.rows[0];
  };
  
  exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM funcionarios;");
    return result.rows;
  };
   
  exports.findByName = async (nome) => {
    const result = await pool.query("SELECT * FROM funcionarios WHERE nome=$1;", [nome]);
    return result.rows;
  };
   
  exports.update = async (id, funcionario) => {
    const result = await pool.query(
      "UPDATE funcionarios SET nome=$1, cargo=$2, dt_nascimento=$3, dt_entrada=$4, WHERE id=5 RETURNING *;",
      [funcionario.nome, 
        funcionario.cargo,
        funcionario.dt_nascimento,
        funcionario.dt_entrada,
        id]);
    return result.rows[0];
  };
   
  exports.delete = async (id) => {
    await pool.query("DELETE FROM funcionarios WHERE id=$1;", [id]);
  };