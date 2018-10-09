import mochData from '@/data.json';

export default {
  state: {
    ...mochData,
    authId: 'NnooaWj4KHVxbhKwO1pEdfaQDsD2',
    hasMessage: false,
  },
  getters: {
    authUser(state) {
      return state.users[state.authId];
    },
    users(state) {
      return state.users;
    },
  },
  actions: {

  },
  mutations: {

  },
};
