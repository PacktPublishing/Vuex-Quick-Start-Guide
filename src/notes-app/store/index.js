import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  state: {
    version: '1.0.0'
  },
  strict: debug
});

export default store;