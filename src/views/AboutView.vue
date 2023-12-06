<script setup >

import CardAbout from '../components/about/CardAbout.vue';

</script>
<template>
    <div class="about">
        <CardAbout />
        <video autoplay loop muted>
            <source src="../assets/img/the-witcher-3-white-wolf-desktop-wallpaperwaifu-com.mp4" type="video/webm"/>
            <source src="../assets/img/the-witcher-3-white-wolf-desktop-wallpaperwaifu-com.mp4" type="video/webm"/>
        </video>
    </div>
</template>
  
<style lang = "scss" scoped>
.about{
    min-height: 100vh;
    position: relative;
video{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1000;
}
}

</style>
  