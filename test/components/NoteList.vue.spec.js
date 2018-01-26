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

    const contents =
      noteListCmp.$el.querySelectorAll('.content');
    expect(contents.length).toBe(2);
  });

  it('should render notes inside noteList', () => {
    const title = 'Note title';
    const content = 'Note content';
    noteList.push({ title, content });

    const noteListCmp = newNoteListCmp();

    const { $el } = noteListCmp;
    const titleEl = $el.querySelector('.title');
    const contentEl = $el.querySelector('.content');
    expect(titleEl.textContent).toBe(title);
    expect(contentEl.textContent).toBe(content);
  });
});
