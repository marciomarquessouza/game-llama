import Vuex from 'vuex';
import Vue from 'vue';

import {
  messages,
  user,
} from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messages,
    user,
  },
});
