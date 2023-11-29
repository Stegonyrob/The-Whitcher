import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const usefilmStore = defineStore('film,', 
() => {
 const films = reactive(
  [
     {
       image: './src/assets/img/Series/temporada1 b.png',
       title: 'Temporada 1',
       description: '«La primera temporada, que se estrenó en 2019, consta de ocho episodios. Los mismos cuentan con dos líneas temporales paralelas: la de Geralt de Rivia y Yennefer y la de la princesa Cirilla. El brujo y la hechicera, quienes se conocen en un bosque, mientras que Ciri huye de su hogar después de que su reino es invadido por el ejército nilfgaardiano. Tras una larga travesía en la que Geralt y Yennefer se separan y Ciri debe encontrar su propio destino, el brujo y la princesa se cruzan en el bosque después de haber sido, ambos, perseguidos por los nilfgaardianos. Si bien ella no sabía quién era él o cómo se veía físicamente, sabía que su destino era encontrarse con Geralt de Rivia. Una vez llegado el final, cuando los protagonistas se encuentran, Geralt le dice a Ciri que es su destino estar juntos y que él la protegerá mientras le da un profundo abrazo. En cuanto a Yennefer, ella se sacrifica para salvar a los ciudadanos de Aretusa y se convierte en una bola de fuego que explota en el cielo..',
     },
     {
      image: './src/assets/img/Series/termporada 2 b 1.png',
      title: 'Temporada 2',
      description: 'Al igual que la primera, la segunda temporada de The Witcher consta de ocho episodios que llegaron a Netflix en diciembre de 2021. Esta última edición que está disponible en la plataforma es mucho más fácil de seguir y comprender que la primera. Esto es gracias a que no hay ninguna confusión narrativa que pueda resultar acrobática para el espectador. En esta temporada y tras encontrarse con Ciri al principio de la primera, Geralt lleva a la princesa a Kaer Morhen el lugar que, para él, es el más seguro ya que es donde se crió. La trama principal de esta edición está centrada en el camino que toman el brujo y la princesa, pero también en lo que ha sucedido con Yennefer y cuál es su destino. Sin embargo, para el final de la temporada 2, los tres se encuentran y muchas cosas cambian. Por un lado, Geralt le dice a Yennefer que la ama y que siempre lo ha hecho. En cuanto a Ciri, ella se entrena para convertirse en una bruja y en el camino se encuentra con alguien que le dice que tiene un gran destino por delante.',
    },
    {
      image: './src/assets/img/Series/temporada 3.png',
      title: 'Temporada 3',
      description: 'La temporada 3 de "The Witcher" se ha dividido en dos partes, algo similar a lo que Netflix había hecho con la temporada 4 de "Stranger Things" y la temporada 4 de "You", y la primera parte se ha estrenado dejándonos el suspense de un cliffhanger brutal sobre el futuro de Henry Cavill como Geralt de Rivia. Cubriendo los eventos del libro "Tiempo de odio" de Andrzej Sapkowski, el cuarto de la saga, la tercera temporada de "The Witcher" nos muestra a Geralt, Yennefer (Anya Chalotra) y Ciri (Freya Allan) intentando huir de los muchos conflictos que los rodeaban. Sin embargo, el final del quinto episodio, el último de esta Parte 1 de la temporada 3, revela que una de las mayores amenazas para Ciri estaba más cerca de lo que podrían haber anticipado... Continuará',
    },
    
 ])
 

return {
  films
};
});