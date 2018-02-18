// src/store/plugins.js
import { types } from './mutations';
import analytics from '../gtag';

export const lastEditDate = (store) => {
  store.subscribe((mutation) => {
    if (mutation.type !== types.UPDATE_LAST_EDIT_DATE) {
      store.commit(types.UPDATE_LAST_EDIT_DATE);
    }
  });
};

export const googleAnalytics = (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'route/ROUTE_CHANGED') {
      analytics.sendPageView(state.route.path);
    } else {
      analytics.sendEvent(mutation.type);
    }
  });
};

export default [lastEditDate, googleAnalytics];
