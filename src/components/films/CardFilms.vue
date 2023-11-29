<script setup>
import { ref } from 'vue';
import { useFilmStore } from '@/stores/filmStore';

const filmStore = useFilmStore();
const film = filmStore.film;
const showDescription = ref(null);

function toggleDescription(index) {
  showDescription.value = showDescription.value === index ? null : index;
}
</script>
<template>
  <div class="film">
    <div class="film-cards">
      <div v-for="(film, index) in film" :key="index" class="film-card">
        <img :src="film.image" :alt="film.title" @click="toggleDescription(index)">
        <h5>{{ film.sagaTitle }} - {{ film.number }}</h5>
        <h6>{{ film.title }}</h6>
        <div v-if="showDescription === index">
          <div>{{ film.description }}</div>
        </div>
       
      </div>
    </div>
  </div>
</template>



<style scoped>
.film-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5rem;
}

.film-card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  text-align: center;
}

.film-card img {
  width: 100%;
  max-width: 90px;
  cursor: pointer;
}

h5, h6 {
  font-size: small;
}
</style>