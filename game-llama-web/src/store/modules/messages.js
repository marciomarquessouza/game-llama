import mochData from '@/data.json';

export default {
  state: {
    ...mochData,
    authId: 'NnooaWj4KHVxbhKwO1pEdfaQDsD2',
    hasMessage: false,
  },
  getters: {
    userMessages(state) {
      return state.users[state.authId].messages;
    },
    messages(state) {
      return state.messages;
    },
    hasMessage(state) {
      return state.hasMessage;
    },
  },
  actions: {
    checkNewMessages(context) {
      const MESSAGE_STATUS = [];
      Object.values(context.state.messages)
        .map(message => (MESSAGE_STATUS.push(message.status)));
      context.commit('setHasMessage', MESSAGE_STATUS.includes('new'));
    },
    setHasMessages(context, status = false) {
      context.commit('setHasMessage', status);
    },
  },
  mutations: {
    setHasMessage(state, status) {
      state.hasMessage = status;
    },
  },
};
