// ./src/stores/filmStore.js
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useFilmStore = defineStore('film', 
() => {
 const films = reactive(
  [
     {
       image: './src/assets/img/Libros/LIBRO1.png',
       sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
       title: 'El Ultimo deseo',
       number: 'I ',
       description: '«Decir que la conocí sería una exageración. Pienso que, excepto el brujo y la hechicera, nadie la conoció de verdad jamás. Cuando la vi por vez primera no me causó especial impresión, incluso pese a las extraordinarias circunstancias que lo acompañaron. Sé de algunos que han afirmado que al instante, a primera vista, percibieron el hálito de la muerte que seguía a esta muchacha. A mí sin embargo me pareció completamente normal, y ya por entonces sabía yo que no era normal, por eso me esforcé en mirar, descubrir, percibir lo extraordinario en ella. Pero nada vi y nada percibí. Nada que pudiera haber sido señal, presentimiento ni profecía de los trágicos acontecimientos posteriores. Aquéllos de los que fue causa. Y aquéllos que ella misma provocó.» Jaskier, Medio siglo de poesía Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo.',
     },
     {
      image: './src/assets/img/Libros/LIBRO2.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Espada del destino',
      number: 'II',
      description: 'La vida de un brujo cazador de monstruos no es fácil. Tan pronto puede uno tener que meterse hasta el cuello en un estercolero para eliminar a la bestia carroñera que amenaza la ciudad, intentado no atrapar una infección incurable, como se puede encontrar unido a la cacería de uno de los últimos dragones, en la que la cuestión no es si los cazadores conseguirán matar a la pobre bestia, sino qué pasará cuando tengan que repartirse el botín. Magos, príncipes, estarostas, voievodas, druidas, vexlings, dríadas, juglares y criaturas de todo pelaje pueblan esta tierra, enzarzados en conflictos de supervivencia, codicia y amor, y entre ellos avanza, solitario, el brujo Geralt de Rivia.Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo.',
    },
    {
      image: './src/assets/img/Libros/LIBRO3.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'La sangre de los elfos',
      number:' III',
      description: '"En verdad os digo que se acerca el tiempo de la espada y el hacha, la época de la tormenta salvaje. Se acerca el Tiempo del Invierno Blanco y de la Luz Blanca. El Tiempo de la Locura y el Tiempo del Odio, el Tiempo del Fin. El mundo morirá entre la escarcha y resucitará de nuevo junto con el nuevo sol. Resucitará de entre la Antigua Sangre, de Hen Ichaer, de la semilla sembrada. De la semilla que no germina sino que estalla en llamas. ¡Así será! ¡Contemplad las señales! Qué señales sean, yo os diré: primero se derramará sobre la tierra la sangre de los Aen Seidhe, la Sangre de los Elfos..." Aen Ithlinnespeath, profecía de Ithlinne Aegli aep Aevenien Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo.',
    },
    {
      image:'./src/assets/img/Libros/LIBRO4.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Tiempo de odio',
      number: 'IV',
      description: '"Decir que la conocí sería una exageración. Pienso que, excepto el brujo y la hechicera, nadie la conoció de verdad jamás. Cuando la vi por vez primera no me causó especial impresión, incluso pese a las extraordinarias circunstancias que lo acompañaron. Sé de algunos que han afirmado que al instante, a primera vista, percibieron el hálito de la muerte que seguía a esta muchacha. A mí sin embargo me pareció completamente normal, y ya por entonces sabía yo que no era normal, por eso me esforcé en mirar, descubrir, percibir lo extraordinario en ella. Pero nada vi y nada percibí. Nada que pudiera haber sido señal, presentimiento ni profecía de los trágicos acontecimientos posteriores. Aquéllos de los que fue causa. Y aquéllos que ella misma provocó." Jaskier, Medio siglo de poesía Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo.',
    },
    {
      image: './src/assets/img/Libros/LIBRO5.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Bautismo de fuego',
      number: 'V',
      description:'«Entonces le dijo la profetisa al brujo: "Este consejo te doy: ponte botas de yerro, toma en la mano un bastón de yerro. Ve con tus botas de yerro hasta el fin del mundo y por el camino agita el bastón y riega todo con lágrimas. Ve a través de la agua y el fuego, no te detengas ni mires a tu alredor. Y cuando las almadreñas se te desgasten, cuando el bastón de yerro se deshaga, cuando el viento y el calor te sequen los ojos de tal forma que de ellos ni una lágrima acierte a escapar, entonces, en el fin del mundo, hallarás lo que buscas y lo que amas. Pudiera ser". Y el brujo cruzó la agua y el fuego, sin mirar a su alrededor. Pero no se puso botas de yerro ni tomó bastón. Sólo llevó su espada de brujo. No escuchó las palabras de la profetisa. Y bien que hizo, porque era una mala profetisa.» Flourens Delannoy, Cuentos y leyendas Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones d lectores en todo el mundo.',
    },
    {
      image: './src/assets/img/Libros/LIBRO6.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'La Torre de la golondrina',
      number: 'VI',
      description: '«Puedo darte todo lo que desees -dijo el hada-. Riqueza, poder y cetro, fama, una vida larga y feliz. Elige. No quiero riqueza ni fama, poder ni cetros -respondió la bruja- . Quiero un caballo que sea negro y tan imposible de alcanzar como el viento de la noche. Quiero una espada que sea luminosa y afilada como los rayos de la luna. Quiero atravesar el mundo en la oscura noche con mi caballo negro, quiero quebrar las fuerzas del Mal y de la Oscuridad con mi espada de luz. Eso es lo que quiero. Te daré un caballo que será más negro que la noche y más ligero que el viento de la noche -le prometió el hada-. Te daré una espada que será más luminosa y afilada que los rayos de la luna. Pero no es poco lo que pides, bruja, habrás de pagármelo muy caro. - ¿Con qué? En verdad nada tengo. - Con tu sangre.» Flourens Delannoy, Cuentos y leyendas Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo.',
    },
    {
      image: './src/assets/img/Libros/LIBRO7.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'La dama del lago',
      number: 'VII',
      description: '«De las llamitas, algunas altas y poderosas eran, vivamente brillaban y con claridad, otras por su parte eran pequeñas, vacilantes y temblorosas, y oscurecíase su luz y amortiguábase a trechos. En el mismo final había una llamita pequeña y tan débil que apenas ardía, apenas se removía, ora brillando con gran esfuerzo, ora casi, casi apagándose del todo. -¿De quién es ese fueguecillo moribundo? preguntó el brujo. -Tuyo -respondió la Muerte.» Flourens Delannoy, Cuentos y leyendas Andrzej Sapkowski es el gran renovador de la literatura fantástica de nuestros tiempos, un genio del lenguaje y la caracterización cuya prosa ya ha hechizado a millones de lectores en todo el mundo. ',
    },
    {
      image: './src/assets/img/Libros/LIBRO8.png',
      sagaTitle: 'LA SAGA DE GERALT DE RIVIA',
      title: 'Estacion de tormentas',
      number: 'VIII',
      description: 'Poco sabía el brujo Geralt de Rivia lo que le esperaba al acudir a la villa costera de Kerack. Primero fue acusado injustamente de desfalco, luego fue misteriosamente liberado bajo fianza, y finalmente descubrió que sus preciadas espadas, dejadas en depósito al entrar en la ciudad, habían desaparecido. Demasiadas casualidades, en efecto, y máxime cuando tras ellas está la atractiva hechicera Lytta Neyd, llamada Coral. De esta manera, Geralt de Rivia se encuentra de nuevo implicado en los escabrosos asuntos de los magos, y ni la fiel (aunque ocasionalmente engorrosa) compañía del trovador Jaskier, ni el recuerdo de su amada Yennefer, ni toda su fama como implacable cazador de monstruos podrán evitar que se vea cada vez más envuelto en una oscura trama.',
    },
   
 ])
 

return {
  films
};
});