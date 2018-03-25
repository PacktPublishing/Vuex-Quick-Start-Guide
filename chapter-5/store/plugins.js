// src/store/plugins.js
import { types } from '../../chapter-3/store/mutations';
import analytics from '../../chapter-3/gtag';
import undoRedoFactory from './undo-redo-plugin';

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

const undoRedo = undoRedoFactory({
  statePropsToExclude: ['route'],
  mutationsToExclude:
    [types.UPDATE_LAST_EDIT_DATE,
      'route/ROUTE_CHANGED',
      types.EDIT_NOTE],
});

export default [lastEditDate, googleAnalytics, undoRedo];
