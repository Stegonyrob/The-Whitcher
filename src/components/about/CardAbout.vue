<script setup>
import { useAboutStore } from '@/stores/aboutStore';

const aboutStore = useAboutStore();
const about = aboutStore.about;
</script>
<template>
    <div class="container  align-content-start me-5">
      <div class="card ps-4 bg-transparent mb-3">
        <div class="row g-0 mt-2">
          <div class="col-3 mt-5">
            <div v-for="(about, index) in about" :key="index">
              <img :src="about.image" class="card-img col-sm-3 mt-1 rounded" :alt="about.name" style="object-fit: cover;">
            </div>
          </div>
          <div class="col-md-6">
            <div v-for="(about, index) in about" :key="index">
              <div class="card-body" style="text-align: justify;">
                <h2 class="card-name ms-5 mt-5 mb-3">{{ about.name }} </h2>
                <p class="card-bio ms-2 mt-5">{{ about.bio }}</p>
              </div>
            </div>
          </div>
        </div>      
      </div>    
    </div>      
  </template>
  
  <style scoped lang="scss">
  .container {
    margin-top: -40rem;
    margin-left: 20rem;
    width: 90%;
    z-index: 5;
    .card-body{
        color: azure;
    }
    .card-bio {
    
        margin-left: 5rem !important;
    }
  }
  </style>
  