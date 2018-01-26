// store/index.js

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  state: {},
  strict: debug,
});

export default store;
