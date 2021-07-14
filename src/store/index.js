import Vue from 'vue';
import Vuex from 'vuex';
import resume from './resume.module';
import dialog from './dialog.module';
Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    resume,
    dialog,
  },
  plugins: [createPersistedState()],
});
