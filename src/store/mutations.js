// src/store/mutations.js
export const types = {
  UPDATE_CURRENT_NOTE: 'UPDATE_CURRENT_NOTE',
  ADD_NOTE: 'ADD_NOTE',
};

export const mutations = {
  [types.UPDATE_CURRENT_NOTE](state, { title, content }) {
    state.currentNote = { title, content };
  },
  [types.ADD_NOTE](state, aNote) {
    state.noteList.push(aNote);
  },
};
