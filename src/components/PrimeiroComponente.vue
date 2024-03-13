<script setup>
import {onMounted, ref} from "vue";

const nome = ref('Henrique')


onMounted(() => {
  setTimeout(() =>{
    nome.value = "Nascimento"
  },2000)
})

</script>

<template>
  <h1>Meu nome é : {{nome}}</h1>
</template>