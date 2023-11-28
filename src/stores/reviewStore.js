import { defineStore } from 'pinia';
import { reactive } from 'vue';


export const useReviewStore = defineStore('review', () => {
  const review = reactive (
    [
    {
      title: 'THE WITCHER SAGA',
      image: './src/assets/img/witcher-3-geralt-wolves-black-wallpaper 1.png',
      text: 'En la saga de The Witcher, Andrzej Sapkowski presenta a su héroe, Geralt de Rivia, un brujo. Es un mercenario itinerante que mata monstruos por dinero. Su extraña apariencia, con cabello blanco y ojos de gato, lo distingue de otras personas, quienes lo rechazan por ello. Es un mutante excepcionalmente poderoso que ocasionalmente recurre a la magia. Tanto los impotentes como los poderosos lo temen y desprecian, ya que lo ven como alguien peligroso e imposible de retener. Su código de honor le prohíbe matar si puede evitarlo y no atacar a los monstruos a menos que representen una amenaza real. Tiene un carácter fuerte, pero aún así tiene un lado humano: no siempre sale ileso de la batalla. Ambientada en un mundo medieval imaginario mejorado con magia y monstruos, ¡la saga de The Witcher te sorprenderá: el monstruo no siempre es quien crees que es!',
},

])
return {
    review}
});
