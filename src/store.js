import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedGame: 'appInstructions',
    timerActive: '',
    timerCount: 0,
    easy: false,
    medium: false,
    hard: false
  },
  mutations: {
    timer(state) {
      state.timerCount = 0;
      state.timerActive = setInterval(() => {
        state.timerCount++;
      }, 1000);
    },
    timerEasy(state) {
      state.selectedGame = 'appEasyGame';
      state.easy = true;
    },
    timerInt(state) {
      state.selectedGame = 'appIntermediateGame';
      state.medium = true;
    },
    timerHard(state) {
      state.selectedGame = 'appHardGame';
      state.hard = true;
    },
    showHighScores(state) {
      state.selectedGame = 'appHighScores';
    },
    resetGameState(state) {
      clearInterval(state.timerActive);
      state.easy = false;
      state.medium = false;
      state.hard = false;
    }
  },
  actions: {
    startTimerEasy({ commit }) {
      commit('resetGameState');
      commit('timerEasy');
      commit('timer');
    },
    startTimerInt({ commit }) {
      commit('resetGameState');
      commit('timerInt');
      commit('timer');
    },
    startTimerHard({ commit }) {
      commit('resetGameState');
      commit('timerHard');
      commit('timer');
    },
    stopTimer({ commit }) {
      commit('showHighScores');
      commit('resetGameState');
    }
  }
});
