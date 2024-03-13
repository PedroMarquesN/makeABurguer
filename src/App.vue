<script setup>
  import NavBar from "./components/NavBar.vue"
  import Footer from "@/components/Footer.vue";




</script>

<template>

  <NavBar />
  <router-view/>
  <Footer/>
</template>

<style>

 * {
   font-family: Poppins, sans-serif;
   padding: 0;
   margin: 0;
   box-sizing: border-box;
 }

 .main-container {
   margin: 50px;
   min-height: 250px;
 }

 h1 {
   text-align: center;
   font-size: 42px;
   margin-bottom: 30px;
   color: #222;
 }


</style>
