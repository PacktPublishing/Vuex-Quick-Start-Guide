// test/components/NoteList.spec.js

import Vue from 'vue';
import Vuex from 'vuex';
import NoteList from '../../src/components/NoteList.vue';

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

    expect(noteListCmp.$el.querySelectorAll('.content').length).toBe(2);
  });

  it('should render notes inside noteList', () => {
    const title = 'Note title';
    const content = 'Note content';
    noteList.push({ title, content });

    const noteListCmp = newNoteListCmp();

    expect(noteListCmp.$el.querySelector('.title').textContent).toBe(title);
    expect(noteListCmp.$el.querySelector('.content').textContent).toBe(content);
  });
});

