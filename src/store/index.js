// store/index.js
import Vuex from 'vuex';
import Vue from 'vue';
import { mutations } from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  state: {
    noteList: [
      { title: 'title A', content: 'content 1' },
      { title: 'title B', content: 'content 2' },
    ],
    currentNote: { title: '', content: '' },
  },
  mutations,
  strict: debug,
});

export default store;
