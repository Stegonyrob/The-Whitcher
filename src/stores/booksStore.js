// ./src/stores/bookStore.js
import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
 state: () => ({
   books: [
     {
       image: './src/assets/img/Libros/LIBRO1.png',
       sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
       title: 'El Ultimo deseo',
       number: I,
       description: kjd,
     },
     {
      image: './src/assets/img/Libros/LIBRO2.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Espada del destino',
      number: II,
      description: kjd,
    },
    {
      image: './src/assets/img/Libros/LIBRO3.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Book Title 1',
      number: III,
      description: kjd,
    },
    {
      image:'./src/assets/img/Libros/LIBRO4.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Book Title 1',
      number: IV,
      description: kjd,
    },
    {
      image: './src/assets/img/Libros/LIBRO5.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Book Title 1',
      number: V,
      description: kjd,
    },
    {
      image: './src/assets/img/Libros/LIBRO6.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Book Title 1',
      number: VI,
      description: kjd,
    },
    {
      image: './src/assets/img/Libros/LIBRO7.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Book Title 1',
      number: VII,
      description: kjd,
    },
    {
      image: './src/assets/img/Libros/LIBRO8.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'El Ultimo deseo',
      number: VIII,
      description: kjd,
    },
   
   ]
 }),
})
