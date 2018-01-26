// test/store/store.spec.js

import store from '../../src/store';

describe('EveryNote main store', () => {
  it('should have a list of notes', () => {
    expect(Array.isArray(store.state.noteList)).toBe(true);
  });
});
