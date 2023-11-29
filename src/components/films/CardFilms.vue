<script setup>
import { ref } from 'vue';
import { usefilmStore } from '@/stores/filmsStore';

const filmStore = usefilmStore();
const films = filmStore.films;
const showDescription = ref(null);

function toggleDescription(index) {
  showDescription.value = showDescription.value === index ? null : index;
}
</script>
<template>
  <div class="films">
    <div class="film-cards">
      <div v-for="(film, index) in films" :key="index" class="film-card">
        <img :src="film.image" :alt="film.title" @click="toggleDescription(index)">
        <h5>{{ film.sagaTitle }} - {{ film.number }}</h5>
        <h6>{{ film.title }}</h6>
        <div v-if="showDescription === index">
          <div class="pBond">{{ film.description }}</div>
        </div>
       
      </div>
    </div>
  </div>
</template>



<style scoped>
.film-cards {
  justify-content: center;
  margin-bottom: 5rem;
}

.film-card {
  margin: 1rem;
  padding: 1rem;
  background-color: rgba(124, 124, 124, 0.4);
  

  
}

.film-card img {
  width: 100%;
  max-width: 90px;
  cursor: pointer;
}

h5, h6 {
  font-size: medium;
  font-weight: bold;
}
.pBond{
  font-weight: bold;
}
</style>