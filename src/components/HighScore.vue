<template>
    <div class="style-highscore" :class="currentClass">
        <slot></slot>
        <ul class="highscore-list">
            <li v-for="(highscore, index) in shortListScores" :key="index">{{highscore | timeDisplay }} </li>
        </ul>
        <button class="button remove" @click="clear">Clear Scores</button>
    </div>
</template>

<script>
export default {
  props: ['highscores', 'scoresType', 'currentClass'],
  computed: {
    shortListScores() {
      return this.highscores.slice(0, 10);
    }
  },
  methods: {
    clear() {
      localStorage.removeItem(this.scoresType);
      this.highscores = [];
    }
  }
};
</script>


