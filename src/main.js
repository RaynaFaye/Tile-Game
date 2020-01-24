import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('timeDisplay', value => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
