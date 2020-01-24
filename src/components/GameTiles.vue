<template>
    <div>
      <component :is="this.$store.state.selectedGame"></component>
    </div>
</template>

<script>
import Instructions from './Instructions.vue';
import EasyGame from './Easy.vue';
import IntermediateGame from './Intermediate.vue';
import HardGame from './Hard.vue';
export default {
  components: {
    appInstructions: Instructions,
    appEasyGame: EasyGame,
    appIntermediateGame: IntermediateGame,
    appHardGame: HardGame
  }
};
</script>