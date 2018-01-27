// test/store/mutations.spec.js
import { mutations, types } from '../../src/store/mutations';

describe('EveryNote root mutations', () => {
  it('should update current note text', () => {
    const updateCurrentNote
      = mutations[types.UPDATE_CURRENT_NOTE];
    const state = { currentNote: '' };

    updateCurrentNote(state, 'New note content');

    expect(state.currentNote).toBe('New note content');
  });
});
