import Vue from 'vue';
import App from './App.vue';
import store from './store';
import JwPagination from 'jw-vue-pagination';

Vue.config.productionTip = false;
Vue.component('jw-pagination', JwPagination);

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
