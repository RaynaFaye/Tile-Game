<template>
    <section>
        <ul class="game-tiles game-tiles-easy" @click="addTiles" ref="game" v-if="!this.$store.state.won">
            <li v-for="(image, index) in images" :key="index" class="wrapper" @click="turnTile">
                <img  :src="image" alt="" class="image-tile image-tile-turned">
            </li>
            <li class="empty-square"></li>
        </ul>
        
    </section>
</template>

<script>
import HighScore from './HighScore.vue';
import { gameMixin } from '../gameMixin.js';

export default {
  mixins: [gameMixin],
  data() {
    return {
      images: [
        require('../../public/images/easy1.jpg'),
        require('../../public/images/easy1.jpg'),
        require('../../public/images/easy2.jpg'),
        require('../../public/images/easy2.jpg'),
        require('../../public/images/easy3.jpg'),
        require('../../public/images/easy3.jpg'),
        require('../../public/images/easy4.jpg'),
        require('../../public/images/easy4.jpg')
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
        localStorage.setItem('scoresEasy', JSON.stringify(this.scoreTimes));
        this.dataScores = JSON.parse(localStorage.getItem('scoresEasy'));
      }
    }
  },
  created() {
    this.scoreTimes = localStorage.getItem('scoresEasy')
      ? JSON.parse(localStorage.getItem('scoresEasy'))
      : [];
  }
};
</script>