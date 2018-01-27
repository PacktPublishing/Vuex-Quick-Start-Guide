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
});
