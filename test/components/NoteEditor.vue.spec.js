// test/components/NoteEditor.spec.js
import Vue from 'vue';
import NoteEditor from '../../src/components/NoteEditor.vue';

describe('NoteEditor component', () => {
  let note;

  function newNoteEditorCmp() {
    const Constructor = Vue.extend(NoteEditor);
    return new Constructor({
      propsData: { note },
    }).$mount();
  }

  beforeEach(() => {
    note = { title: 'title', content: 'content' };
  });

  it('should init title and content to note prop', () => {
    const editorCmp = newNoteEditorCmp();

    expect(editorCmp.title).not.toBe(undefined);
    expect(editorCmp.title).toBe(note.title);
    expect(editorCmp.content).not.toBe(undefined);
    expect(editorCmp.content).toBe(note.content);
  });

  it('should have onEditDone method ' +
    'that emits the edited note', () => {
    const editorCmp = newNoteEditorCmp();
    spyOn(editorCmp, '$emit');
    const newNote = { title: 'a', content: 'b' };

    editorCmp.title = newNote.title;
    editorCmp.content = newNote.content;
    editorCmp.onEditDone();

    expect(editorCmp.$emit)
      .toHaveBeenCalledWith('editDone', newNote);
  });

  it('should not emit empty notes', () => {
    note.title = '';
    note.content = '';
    const editorCmp = newNoteEditorCmp();
    spyOn(editorCmp, '$emit');

    editorCmp.onEditDone();

    expect(editorCmp.$emit).not.toHaveBeenCalled();
  });

  it('should reset title, content after onEditDone', () => {
    const editorCmp = newNoteEditorCmp();

    editorCmp.onEditDone();

    expect(editorCmp.title).toBe('');
    expect(editorCmp.content).toBe('');
  });
});
