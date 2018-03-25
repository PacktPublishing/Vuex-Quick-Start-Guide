// test/store/mutations.spec.js
import { mutations, types } from '../../chapter-3/store/mutations';

describe('EveryNote root mutations', () => {
  it('should update current note', () => {
    const updateCurrentNote
      = mutations[types.UPDATE_CURRENT_NOTE];
    const state = { currentNote: { title: '', content: '' } };
    const newNote = { title: 'title', content: 'some text' };

    updateCurrentNote(state, newNote);

    expect(state.currentNote).toEqual(newNote);
  });

  it('should add a note to noteList', () => {
    const ADD_NOTE = mutations[types.ADD_NOTE];
    const state = { noteList: [] };
    const newNote = { title: 'title', content: 'some text' };

    ADD_NOTE(state, newNote);

    expect(state.noteList['0']).toBe(newNote);
  });

  it('should delete a note', () => {
    const DELETE_NOTE = mutations[types.DELETE_NOTE];
    const aNote = {};
    const state = { noteList: [aNote] };

    DELETE_NOTE(state, aNote);

    expect(state.noteList.length).toBe(0);
  });

  it('should NOT delete a note if not inside noteList', () => {
    const DELETE_NOTE = mutations[types.DELETE_NOTE];
    const aNote = {};
    const state = { noteList: [aNote] };
    const anotherNote = {};

    DELETE_NOTE(state, anotherNote);

    expect(state.noteList.length).toBe(1);
  });

  it('should set note under editing', () => {
    const EDIT_NOTE = mutations[types.EDIT_NOTE];
    const aNote = {};
    const state = { noteList: [aNote] };

    EDIT_NOTE(state, aNote);

    expect(state.editNote).toBe(aNote);
    expect(state.editIndex).toBe(0);
  });

  it('should update current edited note', () => {
    const UPDATE_NOTE = mutations[types.UPDATE_NOTE];
    const aNote = {};
    const state = { editIndex: 0, noteList: [aNote] };
    const aNewNote = {};

    UPDATE_NOTE(state, aNewNote);

    expect(state.editNote).toBe(null);
    expect(state.editIndex).toBe(-1);
    expect(state.noteList[0]).toBe(aNewNote);
  });
});
