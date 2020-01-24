<template>
    <section class="high-score">
        <h2 class="section-titles">High Scores (Top 10)</h2>
        <p class="congratulations">Finish Time {{this.$store.state.timerCount | timeDisplay}}</p>
        <app-high-score :highscores="highScoresEasy" currentClass="currentEasy" scoresType="scoresEasy">
            <h2 class="section-titles highscore-title">Easy</h2>
        </app-high-score>
        <app-high-score :highscores="highScoresInt" currentClass="currentInt" scoresType="scoresIntermediate">
            <h2 class="section-titles highscore-title">Medium</h2>
        </app-high-score>
        <app-high-score :highscores="highScoresHard" currentClass="currentHard" scoresType="scoresHard">
            <h2 class="section-titles highscore-title">Hard</h2>
        </app-high-score>
        <button class="button removeAll" @click="clearAll">Clear All HighScores</button>
    </section>
</template>

<script>
import HighScore from './HighScore.vue';
export default {
  data() {
    return {
      highScoresEasy: localStorage.getItem('scoresEasy')
        ? JSON.parse(localStorage.getItem('scoresEasy'))
        : [],
      highScoresInt: localStorage.getItem('scoresIntermediate')
        ? JSON.parse(localStorage.getItem('scoresIntermediate'))
        : [],
      highScoresHard: localStorage.getItem('scoresHard')
        ? JSON.parse(localStorage.getItem('scoresHard'))
        : []
    };
  },
  components: {
    appHighScore: HighScore
  },
  methods: {
    clearAll() {
      localStorage.clear();
      this.highScoresEasy = [];
      this.highScoresInt = [];
      this.highScoresHard = [];
    }
  }
};
</script>



