// src/store/actions
import { types } from './mutations';

export default {
  addNote({ commit }, aNote) {
    commit(types.ADD_NOTE, aNote);
  },
  deleteNote({ commit }, aNote) {
    commit(types.DELETE_NOTE, aNote);
  },
  editNote({ commit }, aNote) {
    commit(types.EDIT_NOTE, aNote);
  },
  updateNote({ commit }, aNote) {
    commit(types.UPDATE_NOTE, aNote);
  },
};
