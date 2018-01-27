export const types = {
  UPDATE_CURRENT_NOTE: 'UPDATE_CURRENT_NOTE',
};

export const mutations = {
  [types.UPDATE_CURRENT_NOTE](state, newContent) {
    state.currentNote = newContent;
  },
};
