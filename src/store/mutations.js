// src/store/mutations.js
export const types = {
  UPDATE_CURRENT_NOTE: 'UPDATE_CURRENT_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
};

export const mutations = {
  [types.UPDATE_CURRENT_NOTE](state, { title, content }) {
    state.currentNote = { title, content };
  },
  [types.ADD_NOTE](state, aNote) {
    state.noteList.push(aNote);
  },
  [types.DELETE_NOTE](state, aNote) {
    const index = state.noteList.indexOf(aNote);
    if (index >= 0) {
      state.noteList.splice(index, 1);
    }
  },
};
