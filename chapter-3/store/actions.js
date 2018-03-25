// src/store/actions
import { types } from './mutations';
import api from '../api/api-mock';

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
  loadNotesFromServer({ commit }) {
    return api.fetchAllNotes().then((notes) => {
      notes.forEach(note => commit(types.ADD_NOTE, note));
    });
  },
};
