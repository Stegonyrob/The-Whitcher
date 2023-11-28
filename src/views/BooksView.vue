<script setup >
import CardReview from '../components/books/CardReview.vue';
import CardBook from '../components/books/CardBooks.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
</script>
<template>
    <div class="books ">
        <CardReview/>
          <CardBook/>
    </div>
  </template>
  
  <style>
  body{
      background-image: url(./src/assets/img/wallpaperbetter.jpg);
      background-size: cover;
      background-position: center;
      }
 </style>
  