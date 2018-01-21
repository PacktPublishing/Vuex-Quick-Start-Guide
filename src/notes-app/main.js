import Vue from 'vue';
import app from '../components/app.vue';
import store from './store';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  store,
  render: h => h(app),
});
