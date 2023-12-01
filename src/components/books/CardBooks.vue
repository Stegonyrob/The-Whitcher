<script setup>
import { ref } from 'vue';
import { useBookStore } from '@/stores/booksStore';

const bookStore = useBookStore();
const books = bookStore.books;
const showDescription = ref(null);

function toggleDescription(index) {
  showDescription.value = showDescription.value === index ? null : index;
}
</script>
<template>
  <div class="books">
    <div class="book-cards">
      <div v-for="(book, index) in books" :key="index" class="book-card">
        <img :src="book.image" :alt="book.title" @click="toggleDescription(index)">
        <h5>{{ book.sagaTitle }} - {{ book.number }}</h5>
        <h6>{{ book.title }}</h6>
        <div v-if="showDescription === index">
          <div>{{ book.description }}</div>
        </div>
       
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
.book-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5rem;


.book-card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  text-align: center;
}

.book-card img {
  width: 100%;
  max-width: 90px;
  cursor: pointer;
}

h5, h6 {
  font-size: small;
}}
</style>
