// test/store/store.spec.js
import store from '../../src/store';

describe('EveryNote main store', () => {
  it('should have a list of notes', () => {
    expect(Array.isArray(store.state.noteList)).toBe(true);
  });

  it('should have currentNote property', () => {
    const { state } = store;
    expect(state.currentNote.title).not.toBe(undefined);
    expect(state.currentNote.content).not.toBe(undefined);
  });
});
