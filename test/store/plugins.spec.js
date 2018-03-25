// test/store/mutations.spec.js
import { lastEditDate, googleAnalytics } from '../../chapter-3/store/plugins';
import { types } from '../../chapter-3/store/mutations';
import GtagAnalytics from '../../chapter-3/gtag';

describe('EveryNote plugins', () => {
  let storeMock;

  beforeEach(() => {
    storeMock = {
      subscribe: jasmine.createSpy('subscribe'),
      commit: jasmine.createSpy('commit'),
      state: {},
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

  describe('googleAnalytics', () => {
    const path = 'aPagePath';
    beforeEach(() => {
      storeMock.state.route = {
        path,
      };
      spyOn(GtagAnalytics, 'sendEvent');
      spyOn(GtagAnalytics, 'sendPageView');
    });

    it('should send a gtag event for each mutation', () => {
      googleAnalytics(storeMock);
      const type = 'aType';

      const firstCall = storeMock.subscribe.calls.first();
      const subscribeCallback = firstCall.args[0];
      subscribeCallback({ type });

      expect(GtagAnalytics.sendEvent)
        .toHaveBeenCalledWith(type);
    });

    it('should send a page view on ROUTE_CHANGED', () => {
      googleAnalytics(storeMock);
      const type = 'route/ROUTE_CHANGED';

      const firstCall = storeMock.subscribe.calls.first();
      const subscribeCallback = firstCall.args[0];
      subscribeCallback({ type }, storeMock.state);

      expect(GtagAnalytics.sendPageView)
        .toHaveBeenCalledWith(path);
    });
  });
});
