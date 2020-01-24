<template>
    <section class="game-mode">
        <h2 class="section-titles">Game Mode</h2>
        <p class="timer">Timer: {{this.$store.state.timerCount | timeDisplay}}</p>
        <button @click="chooseEasy" class="button" :disabled="this.$store.state.easy">Easy</button>
        <button @click="chooseInt" class="button" :disabled="this.$store.state.medium">Medium</button>
        <button @click="chooseHard" class="button" :disabled="this.$store.state.hard">Hard</button>
    </section>
</template>

<script>
export default {
  methods: {
    chooseEasy() {
      this.$store.dispatch('startTimerEasy');
    },
    chooseInt() {
      this.$store.dispatch('startTimerInt');
    },
    chooseHard() {
      this.$store.dispatch('startTimerHard');
    }
  }
};
</script>
