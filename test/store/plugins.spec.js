// test/store/mutations.spec.js
import { lastEditDate } from '../../src/store/plugins';
import { types } from '../../src/store/mutations';

describe('EveryNote plugins', () => {
  let storeMock;

  beforeEach(() => {
    storeMock = {
      subscribe: jasmine.createSpy('subscribe'),
      commit: jasmine.createSpy('commit'),
    };
  });

  describe('lastEditDate', () => {
    it('should subscribe to mutations', () => {
      lastEditDate(storeMock);

      expect(storeMock.subscribe)
        .toHaveBeenCalledWith(jasmine.any(Function));
    });

    it('should commit UPDATE_LAST_EDIT_DATE ' +
      'on each mutation', () => {
      lastEditDate(storeMock);

      const firstCall = storeMock.subscribe.calls.first();
      const subscribeCallback = firstCall.args[0];
      subscribeCallback({});

      expect(storeMock.commit)
        .toHaveBeenCalledWith(types.UPDATE_LAST_EDIT_DATE);
    });

    it('should not commit UPDATE_LAST_EDIT_DATE', () => {
      lastEditDate(storeMock);

      const firstCall = storeMock.subscribe.calls.first();
      const subscribeCb = firstCall.args[0];
      subscribeCb({ type: types.UPDATE_LAST_EDIT_DATE });

      expect(storeMock.commit).not.toHaveBeenCalled();
    });
  });
});
