import Vue from 'vue';
import App from './App.vue';
import './filters/convertDate.js';
import './filters/calculateTravelTime.js';
import './filters/getTime.js';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
