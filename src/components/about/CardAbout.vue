<script setup>
import { ref } from 'vue';
import { useAboutStore } from '@/stores/aboutStore';

const aboutStore = useAboutStore();
const about = aboutStore.about;
</script>
<template>
  <div class="about">
    <div class="about-cards">
      <div v-for="(about, index) in about" :key="index" class="about-card">
        <img :src="about.image" :alt="about.name" >
                <h2>{{ about.name }}</h2>
        <div >
          <div class="bio">{{ about.bio }}</div>
        </div>
       
      </div>
    </div>
  </div>
</template>



<style lang = "scss" scoped>
.about-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  margin-bottom: 5rem;
.about-card {
  padding: 2rem;
  background-color: rgba(124, 124, 124, 0.4);
  margin-left: 35%;
  margin-right: 10%;
  margin-top: 5%;
  color: wheat;
  text-align: justify ;
  img {
  width: 100%;
  max-width: 10rem;
  cursor: pointer;
  float: left;
  margin: 2rem;
  h2{
    margin-right: 10%;
  }
}
}}
@media (max-width: 426px) { 

  .about-card {
  padding: 1rem;
  background-color: rgba(124, 124, 124, 0.4);
  margin-left: 10%;
  color: wheat;
  text-align: justify ;
  font-size: 0.5rem;
  img {
  width: 50%;
  max-width: 6rem;
  cursor: pointer;
  float: left;
  margin: 2rem;
}
 }}
</style>