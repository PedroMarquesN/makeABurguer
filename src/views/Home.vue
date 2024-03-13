<script setup>

import Banner from "@/components/Banner.vue";
import BurguerForm from "@/components/BurguerForm.vue";

const components = {
  Banner
};


</script>


<template>
  <Banner/>
  <div class="main-container">
    <h1>Monte Seu Hamburguer</h1>
    <BurguerForm/>
  </div>
</template>