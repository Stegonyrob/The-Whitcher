<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
  export default {
    data() {
      return {
        name: "header",
        show: true,
      };
    },
    watch: {
      show(newVal) {
        console.log("Alert is now " + (newVal ? "visible" : "hidden"));
      },
    },
    methods: {
      toggle() {
        console.log("Toggle button clicked");
        this.show = !this.show;
      },
      dismissed() {
        console.log("Alert dismissed");
      },
    },
  };
  </script>
<template>
    <header>
        <p class="text-light bg-secondary ps-3 pb-3 pt-1 mb-0">
              Entre espadas y hechizos, la verdad emerge. Adéntrate en el misterio con The Witcher...
          </p>
      <nav class="navbar bg-dark navbar-expand-lg border-bottom border-body " data-bs-theme="dark">
       <a class="navbar-brand" href="#">
        <img src="../../assets/img/Witcher-Logo-PNG.png" alt="Logo" width="50" height="44" class=" ms-3 d-inline-block align-text-top">
       </a>
       <div class="container-fluid">
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        
          <ul class="navbar-nav justify-content-end nav-underline ">
        
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/books">Books</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/films">Films</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/news">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/about">About</a>
            </li>
            </ul>
      </div>
    </div>
 </nav>
 </header>
 </template>
  
  
  
  <style>
  
  
  
  </style>