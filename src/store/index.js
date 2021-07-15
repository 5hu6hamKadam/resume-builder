import Vue from 'vue';
import Vuex from 'vuex';
import resume from './resume.module';
import dialog from './dialog.module';
import theme from './theme.module';
Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    resume,
    dialog,
    theme,
  },
  plugins: [createPersistedState()],
});
