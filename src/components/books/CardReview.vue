<script setup>

import { useReviewStore } from '@/stores/reviewStore';

const reviewStore = useReviewStore();
const review = reviewStore.review;
</script>
<template>
    <div class="review bg-transparent ">
    <div >
                      <div v-for="(review, index) in review" :key="index" class="review-card">
                 <img :src="review.image" class="rounded-start" :alt="review.title">
                 <div>
                    <h5 >{{ review.title }} </h5>
                     <div>{{ review.text }}</div>
                    </div>
                    </div>
           
        </div>
    </div>
</template>
<style lang="scss" scoped>
.review-card{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 5rem;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  text-align: center;

}
 </style>