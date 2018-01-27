// store/mutations.js
export const types = {
  UPDATE_CURRENT_NOTE: 'UPDATE_CURRENT_NOTE',
};

export const mutations = {
  [types.UPDATE_CURRENT_NOTE](state, { title, content }) {
    state.currentNote = { title, content };
  },
};
