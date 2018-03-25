// test/components/NoteList.spec.js

import Vue from 'vue';
import Vuex from 'vuex';
import NoteList from '../../chapter-3/components/NoteList.vue';

describe('NoteList.vue', () => {
  let store;
  let noteList;

  function newNoteListCmp() {
    const Constructor = Vue.extend(NoteList);
    return new Constructor({
      store,
    }).$mount();
  }

  beforeEach(() => {
    Vue.use(Vuex);

    noteList = [];
    store = new Vuex.Store({
      state: { noteList },
    });
  });

  it('should expose store.noteList', () => {
    const noteListCmp = newNoteListCmp();

    expect(noteListCmp.notes).toBe(noteList);
  });

  it('should cycle through noteList', () => {
    noteList.push({});
    noteList.push({});

    const noteListCmp = newNoteListCmp();

    const contents =
      noteListCmp.$el.querySelectorAll('.note');
    expect(contents.length).toBe(2);
  });
});
