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
});
