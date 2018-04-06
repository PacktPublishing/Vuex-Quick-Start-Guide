// src/main.js
import 'normalize.css';
import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import './main.css';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
