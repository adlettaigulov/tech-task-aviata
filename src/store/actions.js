import axios from 'axios';

export default {
  getPackages({ commit }, payload) {
    axios
      .get(`https://registry.npmjs.org/-/v1/search?text=${payload}&size=100`)
      .then((response) => {
        commit('SET_PACKAGES', response.data);
      });
  },
};
