<script setup>
import {onMounted , ref} from "vue";

const nome = ref('');
const carne = ref('');
const carnes = ref('')
const pao = ref('');
const paes = ref('')
const opcionaisData = ref('');
const opcionaisSelecionados = ref([])
const msg = ref('');
const status = "Solicitado"

async function getIngredientes() {
  const req = await fetch("http://localhost:3000/ingredientes");
  const data = await req.json()

  carnes.value = data.carnes
  paes.value = data.paes
  opcionaisData.value = data.opcionais

}

async function createBurger(e){
  e.preventDefault()

  const data = {
    nome: nome.value,
    carne: carne.value,
    pao: pao.value,
    opcionais: opcionaisSelecionados.value,
    status: "Solicitado"
  }

  const dataJson = JSON.stringify(data)

  const req = await fetch("http://localhost:3000/burgers", {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: dataJson
  })

  const res = await req.json()
  nome.value = ''
  carne.value = ''
  pao.value = ''
  opcionaisSelecionados.value = ''
  console.log(res)

}


onMounted(() => {
  getIngredientes()
})


</script>


<template>
  <div>
    <p>Componente de Mensagem</p>
    <div>
      <form action="" id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="nome">Nome do Cliente:</label>
          <input type="text" id="nome" name="name" v-model="nome" placeholder="Digite o seu nome..."/>
        </div>
        <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Selecione o seu pão</option>
            <option  v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
          </select>
        </div>
        <div class="input-container">
          <label for="carne">Escolha o carne:</label>
          <select name="carne" id="carne" v-model="carne">
            <option value="">Selecione o seu carne</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
          </select>
        </div>
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais">Escolha os opcionais:</label>
          <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id">
            <input type="checkbox" id="opcionais" name="opcionais" v-model="opcionaisSelecionados" :value="opcional.tipo"/>
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar meu Burger">

        </div>

      </form>
    </div>
  </div>
</template>


<style scoped>
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: #FCBA03 solid 4px;
  }

  input, select {
    padding: 5px 10px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;

  }


  .checkbox-container {
    display: flex;
    align-items: center;
    width: 50%;
    margin-bottom: 20px;
  }


  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;

  }

  .submit-btn {
    background-color: #222;
    color: #FCBA03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }



</style>