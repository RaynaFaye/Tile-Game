<template>
  <div id="app">
    <header>
      <h1 class="game-title">Match The Tiles</h1>  
    </header>
    <div class="game-section">
      <app-game-mode></app-game-mode>
      <transition name="fade" mode="out-in">
        <component :is="this.$store.state.selectedGame"></component>
      </transition>
    </div>
    <footer>Ⓒ 2018 - Serena Lombardo <br>
     Made with Vue.js (Vue, Vue CLI, Vuex)</footer>
  </div>
</template>

<script>
import GameMode from './components/GameMode.vue';
import Instructions from './components/Instructions.vue';
import EasyGame from './components/Easy.vue';
import IntermediateGame from './components/Intermediate.vue';
import HardGame from './components/Hard.vue';
import HighScores from './components/HighScores.vue';

export default {
  components: {
    appGameMode: GameMode,
    appInstructions: Instructions,
    appEasyGame: EasyGame,
    appIntermediateGame: IntermediateGame,
    appHardGame: HardGame,
    appHighScores: HighScores
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
</style>
