// test/components/NoteEditor.spec.js
import Vue from 'vue';
import Vuex from 'vuex';
import NoteEditor from '../../src/components/NoteEditor.vue';
import { types } from '../../src/store/mutations';

const { UPDATE_CURRENT_NOTE } = types;
describe('NoteEditor component', () => {
  let store;
  let currentNote;

  function newNoteEditorCmp() {
    const Constructor = Vue.extend(NoteEditor);
    store = new Vuex.Store({
      state: { currentNote },
    });
    return new Constructor({
      store,
    }).$mount();
  }

  beforeEach(() => {
    Vue.use(Vuex);
    currentNote = 'Some text';
    store = new Vuex.Store({
      state: { currentNote },
    });
  });

  it('should expose store.currentNote as content', () => {
    const editorCmp = newNoteEditorCmp();

    expect(editorCmp.content).toBe(currentNote);
  });

  it('should expose content setter', () => {
    const editorCmp = newNoteEditorCmp();
    store.commit = jasmine.createSpy('commit spy');
    const newContent = 'A new content';

    editorCmp.content = newContent;

    expect(store.commit)
      .toHaveBeenCalledWith(UPDATE_CURRENT_NOTE, newContent);
  });

  it('should render current note inside the editor', () => {
    const editorCmp = newNoteEditorCmp();

    const { $el } = editorCmp;
    const contentEl = $el.querySelector('.content');
    expect(contentEl.value).toBe(currentNote);
  });
});
