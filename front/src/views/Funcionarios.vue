<template>
<div>


  <div class="campos">
    <h4>Cadastrar Carros</h4>

           <p> Id: <input type="text" v-model="id" /><br /></p> 
           <p> Nome: <input type="text" v-model="nome" /><br /></p> 
           <p> Marca: <input type="text" v-model="cargo" /><br /></p>
           <p> Ano de Fabricação: <input type="text" v-model="dataNascimento" /><br /></p>
           <p> Ano do modelo: <input type="text" v-model="dataEtrEmpresa" /><br /><br></p>
   </div>

  <div class="butaos">
    <button @click="PostFunc()">Post Funcionário</button><br /><br />
    <button @click="PutFunc()">Put Funcionário</button><br /><br />
    <button @click="DeleteFunc()">Delete Funcionário</button><br /><br /> 
  </div>

   <!-- <ul>
      <li>
        <div class="infor">
          <p> Id: {{ carros.id }}</p>
          <p>Nome: {{ carros.nome }}</p>
          <p>Marca: {{ carros.marca }}</p>
          <p>Ano de Fabricação: {{ carros.anoFabricacao }}</p>
          <p>Ano de Modelo: {{ carros.anoModelo }}</p>
          <p>Data de Venda: {{ carros.dataVenda }}</p>
        </div>
      </li>
    </ul> -->


</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        id: 0,
        nome: "",
        cargo:"",
        dataNascimento:"",
        dataEtrEmpresa:"",
        funcionarios:[],
        baseURI:""
    }
  },
  
  methods: {
    PostFunc(){
      let obj ={
        nome: this.nome,
        cargo: this.cargo,
        dataNascimento: this.dataNascimento,
        dataEtrEmpresa: this.dataEtrEmpresa,
      };

      axios.post(this.baseURI, obj).then((resul) =>{
        this.funcionarios = resul.data
      })
    },

    PutFunc(){
      let obj ={

        nome: this.nome,
        cargo: this.cargo,
        dataNascimento: this.dataNascimento,
        dataEtrEmpresa: this.dataEtrEmpresa,
      };

      axios.put(this.baseURI+"/" + this.id, obj).then((result) =>{
        console.log(result)
      })
    },

    DeleteFunc(){
      axios.delete(this.baseURI +"/"+this.id,).then((result) =>{})
    }
  },
}
</script>

<style>

.Campos {
    margin: auto;
    font-weight: 600;
    width: 40%;
        
}
.butaos{
    display: flex;
    width: 70%;
    justify-content: center;
    margin: 10px auto;
  
}
.butaos button{
    background-color: rgb(23, 91, 192);
    color: white;
    margin: 0 20px;
    cursor: pointer;
}
.infor {
    display: flex;
}
.infor p {
    margin: 10px 10px;
    
}


</style>