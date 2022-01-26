import Vue from 'vue';

Vue.filter('getTime', function (date) {
  const time = date.slice(-5);
  return time;
});
