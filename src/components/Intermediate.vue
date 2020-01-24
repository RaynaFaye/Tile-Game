<template>
    <section>
        <ul class="game-tiles game-tiles-intermediate" @click="addTiles" ref="game">
            <li v-for="(image, index) in images" :key="index" class="wrapper" @click="turnTile">
                <img  :src="image" alt="" class="image-tile image-tile-turned">
            </li>
        </ul>
    </section>
</template>

<script>
import { gameMixin } from '../gameMixin.js';
import HighScore from './HighScore.vue';

export default {
  mixins: [gameMixin],
  data() {
    return {
      images: [
        require('../../public/images/intermediate1.jpg'),
        require('../../public/images/intermediate1.jpg'),
        require('../../public/images/intermediate2.jpg'),
        require('../../public/images/intermediate2.jpg'),
        require('../../public/images/intermediate3.jpg'),
        require('../../public/images/intermediate3.jpg'),
        require('../../public/images/intermediate4.jpg'),
        require('../../public/images/intermediate4.jpg'),
        require('../../public/images/intermediate5.jpg'),
        require('../../public/images/intermediate5.jpg'),
        require('../../public/images/intermediate6.jpg'),
        require('../../public/images/intermediate6.jpg'),
        require('../../public/images/intermediate7.jpg'),
        require('../../public/images/intermediate7.jpg'),
        require('../../public/images/intermediate8.jpg'),
        require('../../public/images/intermediate8.jpg')
      ]
    };
  },
  components: {
    appHighScore: HighScore
  },
  watch: {
    cards: function() {
      if (this.cards === this.images.length) {
        this.$store.dispatch('stopTimer');
        this.scoreTimes.push(this.$store.state.timerCount);
        this.sortScores();
        localStorage.setItem(
          'scoresIntermediate',
          JSON.stringify(this.scoreTimes)
        );
        this.dataScores = JSON.parse(
          localStorage.getItem('scoresIntermediate')
        );
      }
    }
  },
  created() {
    this.scoreTimes = localStorage.getItem('scoresIntermediate')
      ? JSON.parse(localStorage.getItem('scoresIntermediate'))
      : [];
  }
};
</script>

