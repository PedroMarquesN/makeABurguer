<script setup>
import Banner from "@/components/Banner.vue";
import BurguerForm from "@/components/BurguerForm.vue";

const components = { Banner };

const scrollToPosition = () => {
  const footerHeight = document.querySelector('footer').offsetHeight;
  const x = 1300;
  const y = document.body.scrollHeight - window.innerHeight - footerHeight - 20;
  window.scrollTo({
    left: x,
    top: y,
    behavior: 'smooth'
  });
};

</script>


<template>
  <Banner/>
  <div class="main-container">
    <h1 @click="scrollToPosition" class="pulse">Monte Seu Hamburguer</h1>
    <BurguerForm/>
  </div>
</template>

<style scoped>
.pulse {
  animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
}
}
</style>