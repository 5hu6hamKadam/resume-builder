import { SET_DIALOG, CLEAR_DIALOG } from './mutation.type';
const state = {
  content: '',
};

const mutations = {
  [SET_DIALOG](state, content) {
    state.content = content;
  },
  [CLEAR_DIALOG](state) {
    state.content = '';
  },
};
export default {
  state,
  mutations,
};
