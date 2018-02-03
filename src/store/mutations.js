// src/store/mutations.js
export const types = {
  UPDATE_CURRENT_NOTE: 'UPDATE_CURRENT_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  EDIT_NOTE: 'EDIT_NOTE',
  UPDATE_NOTE: 'UPDATE_NOTE',
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
  [types.EDIT_NOTE](state, aNote) {
    const index = state.noteList.indexOf(aNote);
    if (index >= 0) {
      state.editIndex = index;
      state.editNote = state.noteList[index];
    }
  },
  [types.UPDATE_NOTE](state, aNote) {
    const index = state.editIndex;
    if (index >= 0) {
      state.editNote = null;
      state.noteList.splice(index, 1, aNote);
      state.editIndex = -1;
    }
  },
};
