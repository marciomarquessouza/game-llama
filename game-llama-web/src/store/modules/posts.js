import mochData from '@/data.json';

export default {
  state: {
    ...mochData,
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    categories(state) {
      return state.categories;
    },
    types(state) {
      return state.types;
    },
  },
  mutations: {
  },
  actions: {
  },
};
