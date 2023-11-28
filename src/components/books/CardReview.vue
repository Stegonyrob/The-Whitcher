<script setup>

import { useReviewStore } from '@/stores/reviewStore';

const reviewStore = useReviewStore();
const review = reviewStore.review;
</script>
<template>
    <div class="review-card row g-0 col-md-6">
        <div class="card bg-transparent " >
            
                 <div v-for="(review, index) in review" :key="index" class="review-card">
                 <img :src="review.image" class="img-fluid rounded-start" :alt="review.title">
                 <div>
                    <h5 class="card-title">{{ review.title }} </h5>
                     <p class="card-text">{{ review.text }}</p>
                    </div>
                    </div>
            </div>
   
    </div>
</template>
<style>
.review-card{
    display: inline-flex;
    margin-left: 10%;
    margin-bottom: 3rem;
}
.card-title{
    margin-left: 35%;
    margin-top: 3rem;
}
.card-text{
    margin-top: 3rem;
    text-align: justify;
    margin-left: 10%;
    margin-right: 5%;
}
.img-fluid{
margin-top: 3rem;
height: 70%;
}

    
  

</style>