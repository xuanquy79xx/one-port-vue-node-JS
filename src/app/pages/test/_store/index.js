export default {
  KEY_NAME: '_TEST',
  namespaced: true,
  state: {
    title: 'default'
  },
  getters: {
    title: state => state.title,
  },
  mutations: {
    CHANGE_TITLE(state, title) {
      state.title = title;
    }
  },
  actions: {
    change_title({ commit }, title) {
      commit('CHANGE_TITLE', title);
    }
  }
}
