// src/store/plugins.js
import { types } from './mutations';

export const lastEditDate = (store) => {
  store.subscribe((mutation) => {
    if (mutation.type !== types.UPDATE_LAST_EDIT_DATE) {
      store.commit(types.UPDATE_LAST_EDIT_DATE);
    }
  });
};

export default [lastEditDate];
