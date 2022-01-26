import Vue from 'vue';

Vue.filter('calculateTravelTime', function (time) {
  const hours = Math.floor((time / (60 * 60)) % 24);
  const minutes = Math.floor((time / 60) % 60);
  return `${hours} ч ${minutes} м`;
});
