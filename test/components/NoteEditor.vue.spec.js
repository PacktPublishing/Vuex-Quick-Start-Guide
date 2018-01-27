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
    currentNote = { title: 'title', content: 'content' };
    store = new Vuex.Store({
      state: { currentNote },
    });
  });

  it('should expose currentNote.content as content', () => {
    const editorCmp = newNoteEditorCmp();

    expect(editorCmp.content).toBe(currentNote.content);
  });

  it('should expose currentNote.content setter', () => {
    const editorCmp = newNoteEditorCmp();
    store.commit = jasmine.createSpy('commit spy');
    const newContent = 'A new content';

    editorCmp.content = newContent;

    const expected = {
      title: currentNote.title,
      content: newContent,
    };
    expect(store.commit)
      .toHaveBeenCalledWith(UPDATE_CURRENT_NOTE, expected);
  });

  it('should expose currentNote.title as title', () => {
    const editorCmp = newNoteEditorCmp();

    expect(editorCmp.title).toBe(currentNote.title);
  });

  it('should expose currentNote.title setter', () => {
    const editorCmp = newNoteEditorCmp();
    store.commit = jasmine.createSpy('commit spy');
    const newTitle = 'A new title';

    editorCmp.title = newTitle;

    const expected = {
      title: newTitle,
      content: currentNote.content,
    };
    expect(store.commit)
      .toHaveBeenCalledWith(UPDATE_CURRENT_NOTE, expected);
  });

  it('should render current note inside the editor', () => {
    const editorCmp = newNoteEditorCmp();

    const { $el } = editorCmp;
    const contentEl = $el.querySelector('.content');
    const titleEl = $el.querySelector('.title');
    expect(contentEl.value).toBe(currentNote.content);
    expect(titleEl.value).toBe(currentNote.title);
  });
});
