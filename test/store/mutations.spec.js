// test/store/mutations.spec.js
import { mutations, types } from '../../src/store/mutations';

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
});
