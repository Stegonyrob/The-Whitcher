<script setup >

import CardFilms from '../components/films/CardFilms.vue';

</script>
<template>
    <div class="films">
        <CardFilms />
        <video autoplay loop muted>
            <source src="../assets/img/the-witcher-3-wild-hunt-desktop-wallpaperwaifu-com.mp4" type="video/webm"/>
            <source src="../assets/img/the-witcher-3-wild-hunt-desktop-wallpaperwaifu-com.mp4" type="video/webm"/>

        </video>
        

        
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
  