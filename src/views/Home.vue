<script setup>
import Banner from "@/components/Banner.vue";
import BurguerForm from "@/components/BurguerForm.vue";

const components = { Banner };

const scrollToBottom = () => {
  const offset = 500;
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' // Rola suavemente
  });
};
</script>


<template>
  <Banner/>
  <div class="main-container">
    <h1 @click="scrollToBottom">Monte Seu Hamburguer</h1>
    <BurguerForm/>
  </div>
</template>