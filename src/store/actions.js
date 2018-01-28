// src/store/actions
import { types } from './mutations';

export default {
  addNote({ commit }, aNote) {
    commit(types.ADD_NOTE, aNote);
  },
  deleteNote({ commit }, aNote) {
    commit(types.DELETE_NOTE, aNote);
  },
};
