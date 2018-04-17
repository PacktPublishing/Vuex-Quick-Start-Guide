// test/store/actions.spec.js
import actions from '../../Chapter04/store/actions';
import { types } from '../../Chapter04/store/mutations';
import api from '../../Chapter04/api/api-mock';

describe('EveryNote root actions', () => {
  it('should have addNote action', () => {
    const { addNote } = actions;
    const mockContext = {
      commit: jasmine.createSpy('commit'),
    };
    const aNote = {};

    addNote(mockContext, aNote);

    expect(mockContext.commit)
      .toHaveBeenCalledWith(types.ADD_NOTE, aNote);
  });

  it('should have deleteNote action', () => {
    const { deleteNote } = actions;
    const mockContext = {
      commit: jasmine.createSpy('commit'),
    };
    const aNote = {};

    deleteNote(mockContext, aNote);

    expect(mockContext.commit)
      .toHaveBeenCalledWith(types.DELETE_NOTE, aNote);
  });

  it('should have editNote action', () => {
    const { editNote } = actions;
    const mockContext = {
      commit: jasmine.createSpy('commit'),
    };
    const aNote = {};

    editNote(mockContext, aNote);

    expect(mockContext.commit)
      .toHaveBeenCalledWith(types.EDIT_NOTE, aNote);
  });

  it('should have updateNote action', () => {
    const { updateNote } = actions;
    const mockContext = {
      commit: jasmine.createSpy('commit'),
    };
    const aNote = {};

    updateNote(mockContext, aNote);

    expect(mockContext.commit)
      .toHaveBeenCalledWith(types.UPDATE_NOTE, aNote);
  });

  it('should have loadNotesFromServer action', (done) => {
    const { loadNotesFromServer } = actions;
    const mockContext = {
      commit: jasmine.createSpy('commit'),
    };
    const aNote = {};
    spyOn(api, 'fetchAllNotes').and.returnValue(Promise.resolve([aNote]));

    loadNotesFromServer(mockContext).then(() => {
      expect(mockContext.commit)
        .toHaveBeenCalledWith(types.ADD_NOTE, aNote);
      done();
    });
  });
});
