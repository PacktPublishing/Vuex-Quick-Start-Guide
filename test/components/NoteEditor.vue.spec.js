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

  it('should have addNote method', () => {
    const editorCmp = newNoteEditorCmp();
    spyOn(store, 'dispatch');

    editorCmp.addNote();

    expect(store.dispatch)
      .toHaveBeenCalledWith('addNote', currentNote);
  });

  it('should not add empty notes', () => {
    const editorCmp = newNoteEditorCmp();
    spyOn(store, 'dispatch');
    currentNote.title = '';
    currentNote.content = '';

    editorCmp.addNote();

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
