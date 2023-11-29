<script setup>
import CardAbout from '../components/about/CardAbout.vue';
</script>
<template>
  <div class="video-background">
    <video autoplay loop muted>
      <source src="../assets/img/the-witcher-3-white-wolf-desktop-wallpaperwaifu-com.mp4" type="video/mp4">
    </video>
    
    <CardAbout />
  </div>

 </template>

<style>

 
.video-background {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translateX(-55%) translateY(-55%);
}



</style>
