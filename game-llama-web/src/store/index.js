import Vuex from 'vuex';
import Vue from 'vue';
import mochData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...mochData,
    authId: 'NnooaWj4KHVxbhKwO1pEdfaQDsD2',
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
