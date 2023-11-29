<script setup>

import CardAbout from '../components/about/CardAbout.vue';
</script>
<template>
    <div class="video-background">
    <div class="video-wrapper">
      <video autoplay loop muted>
        <source src="../assets/img/the-witcher-3-white-wolf-desktop-wallpaperwaifu-com.mp4" type="video/mp4">
        <source src="../assets/img/the-witcher-3-white-wolf-desktop-wallpaperwaifu-com.mp4" type="video/mp4">
      </video>
    
    
    <CardAbout />
  </div>
</div>
 </template>


<style scoped>
video{
  z-index: -1000;
  left: 50%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  object-fit: cover;
}
    
</style>
