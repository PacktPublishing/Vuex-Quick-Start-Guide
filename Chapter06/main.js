// src/main.js
import 'normalize.css';
import Vue from 'vue';
import store from './store';
import router from './router';
import '../chapter-4/main.css';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  router,
});
