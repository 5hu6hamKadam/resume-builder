import { SET_THEME } from './mutation.type';
const state = { isDark: false };
const mutations = {
  [SET_THEME](state, isDark) {
    state.isDark = isDark;
  },
};
export default {
  state,
  mutations,
};
