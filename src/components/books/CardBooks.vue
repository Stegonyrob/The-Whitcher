
<script>
import { useBookStore } from '@/stores/bookStore';
import BookCard from './components/BookCard.vue';

export default {
 components: {
  BookCard
 },
 setup() {
  const bookStore = useBookStore();

  return {
    bookStore
  };
 }
}
</script>

<template>
    <div>
     <BookCard 
       v-for="book in bookStore.books" 
       :key="book.number" 
       :bookImage="book.image" 
       :sagaTitle="book.sagaTitle" 
       :bookTitle="book.title" 
       :bookNumber="book.number"
     />
    </div>
   </template>
   