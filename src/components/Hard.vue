<template>
    <section>
        <ul class="game-tiles game-tiles-hard" @click="addTiles" ref="game">
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
        require('../../public/images/hard1.jpg'),
        require('../../public/images/hard1.jpg'),
        require('../../public/images/hard2.jpg'),
        require('../../public/images/hard2.jpg'),
        require('../../public/images/hard3.jpg'),
        require('../../public/images/hard3.jpg'),
        require('../../public/images/hard4.jpg'),
        require('../../public/images/hard4.jpg'),
        require('../../public/images/hard5.jpg'),
        require('../../public/images/hard5.jpg'),
        require('../../public/images/hard6.jpg'),
        require('../../public/images/hard6.jpg'),
        require('../../public/images/hard7.jpg'),
        require('../../public/images/hard7.jpg'),
        require('../../public/images/hard8.jpg'),
        require('../../public/images/hard8.jpg'),
        require('../../public/images/hard9.jpg'),
        require('../../public/images/hard9.jpg'),
        require('../../public/images/hard10.jpg'),
        require('../../public/images/hard10.jpg'),
        require('../../public/images/hard11.jpg'),
        require('../../public/images/hard11.jpg'),
        require('../../public/images/hard12.jpg'),
        require('../../public/images/hard12.jpg'),
        require('../../public/images/hard13.jpg'),
        require('../../public/images/hard13.jpg'),
        require('../../public/images/hard14.jpg'),
        require('../../public/images/hard14.jpg'),
        require('../../public/images/hard15.jpg'),
        require('../../public/images/hard15.jpg'),
        require('../../public/images/hard16.jpg'),
        require('../../public/images/hard16.jpg'),
        require('../../public/images/hard17.jpg'),
        require('../../public/images/hard17.jpg'),
        require('../../public/images/hard18.jpg'),
        require('../../public/images/hard18.jpg')
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
        localStorage.setItem('scoresHard', JSON.stringify(this.scoreTimes));
        this.dataScores = JSON.parse(localStorage.getItem('scoresHard'));
      }
    }
  },
  created() {
    this.scoreTimes = localStorage.getItem('scoresHard')
      ? JSON.parse(localStorage.getItem('scoresHard'))
      : [];
  }
};
</script>
