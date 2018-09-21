import Vuex from 'vuex';
import Vue from 'vue';
import mochData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...mochData,
    authId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2',
  },
  getters: {
    authUser(state) {
      return state.users[state.authId];
    },
  },
  actions: {

  },
  mutations: {

  },
});
