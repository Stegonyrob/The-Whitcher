<script setup>

import CardAbout from '../components/about/CardAbout.vue';
</script>
<template>
    <div class="video-background">
    <div class="video-wrapper">
      <video autoplay loop muted>
        <source src="../assets/img/the-witcher-3-white-wolf-desktop-wallpaperwaifu-com.mp4" type="video/mp4">
      </video>
    
    
    <CardAbout />
  </div>
</div>
 </template>

<style lang="scss">
.video-background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-wrapper video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>