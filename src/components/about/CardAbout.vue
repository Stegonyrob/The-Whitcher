<script setup>

import { useAboutStore } from '@/stores/aboutStore';

const aboutStore = useAboutStore();
const about = aboutStore.about;
</script>
<template> <div class="card bg-transparent" >
    <div class="about-card   ">
        <div v-for="(about, index) in about" :key="index" >
                 <img :src="about.image" class="card-img rounded-start" :alt="about.name">
                 <div class="card-body">
                    <h2 class="card-name">{{ about.name }} </h2>
                     <p class="card-bio">{{ about.bio }}</p>
                    </div>
    </div>
              
            </div>
   
    </div>
</template>
<style>
.card{
    width: 80%;
    height: auto;
}
.about-card{
    display: inline-flex;
    margin-left: 18rem;
    width: 100%;
    height: 40%;
   
}
.card-name{
    margin-top: 2rem;
    margin-left: 55%;
    margin-bottom: 2rem;
    color: azure;
   
}
.card-bio{
    text-align: justify;
    margin-left: 30rem;
    margin-right: 2%;
    width: 50%;
    color: azure;
}
.card-img{
margin-top: 3rem;
height: 30% ;
width: auto;
margin-left: 40rem;
}

 </style>