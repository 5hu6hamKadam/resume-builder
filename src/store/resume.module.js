import { SAVE_FORM, ADD_FORM } from './mutation.type';
import Vue from 'vue';
const state = {};

const mutations = {
  [SAVE_FORM](state, { formData, name }) {
    state[name] = formData;
  },
  [ADD_FORM](state, { formData, name }) {
    if (state[name] && state[name].length) {
      Vue.$log.info(
        'ResumeModule | state form has length and entering with formData',
        formData
      );
      Vue.set(state, name, [...state[name], formData]);
    } else {
      Vue.$log.info('ResumeModule | state Form length is falsy');
      state[name] = [...formData];
    }
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
};
