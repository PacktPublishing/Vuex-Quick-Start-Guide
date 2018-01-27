// test/store/store.spec.js
import store from '../../src/store';

describe('EveryNote main store', () => {
  it('should have a list of notes', () => {
    expect(Array.isArray(store.state.noteList)).toBe(true);
  });

  it('should have currentNote property', () => {
    expect(store.state.currentNote).not.toBe(undefined);
  });
});
