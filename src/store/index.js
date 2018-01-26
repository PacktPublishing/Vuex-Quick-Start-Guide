// store/index.js

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  state: {
    noteList: [
      { title: 'title A', content: 'content 1' },
      { title: 'title B', content: 'content 2' },
    ],
  },
  strict: debug,
});

export default store;
