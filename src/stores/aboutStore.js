import { defineStore } from 'pinia';

export const useBookStore = defineStore('book', {
  state: () => ({
    author: {
      name: 'Andrzej Sapkowski',
      image: './src/assets/img/author.png',
      bio: 'Andrzej Sapkowski (Łódź; 21 de junio de 1948) es un escritor polaco de fantasía heroica. Sus obras están fuertemente influenciadas por la cultura y mitología eslavas, así como por las narraciones tradicionales.',
      firts:'Su primera historia, El Brujo ("Wiedźmin" en polaco), fue publicada en la revista Fantastyka en 1986, consiguiendo un gran éxito ante el público y la crítica, y constituyendo el inicio de la saga de Geralt. Estas novelas le convirtieron en el autor polaco de mayor número de ventas en los años 1990.',
      second:'La saga de Geralt ha sido llevada al cine (Wiedźmin, dirigida por Marek Brodzki, en 2001), a la televisión, aunque con poco éxito; al mundo de los videojuegos (The Witcher, The Witcher 2: Assassins of Kings, The Witcher 3: Wild Hunt) con un gran éxito de crítica, ventas y afición, ganando así, el GOTY en 2015.',
      tirt:' Recientemente llegó a la gran plataforma de streaming Netflix, con The Witcher donde su popularidad no ha hecho más que crecer desde su estreno.',
},

  })
});
