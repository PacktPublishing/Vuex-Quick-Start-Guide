// src/main.js
import Vue from 'vue';
import Vuex from 'vuex';
import app from './app.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    version: '1.0.0',
  },
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  template: '<app></app>',
  components: { app },
});
