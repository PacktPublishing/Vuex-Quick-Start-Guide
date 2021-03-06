// test/components/App.spec.js
import Vue from 'vue';
import Vuex from 'vuex';
import App from '../../Chapter04/components/App.vue';

describe('App.vue', () => {
  let store;
  let noteList;
  let currentNote;

  function newAppCmp() {
    const Constructor = Vue.extend(App);
    store = new Vuex.Store({
      state: { currentNote, noteList },
      actions: {
        loadNotesFromServer() {},
      },
    });

    return new Constructor({
      store,
    }).$mount();
  }

  beforeEach(() => {
    Vue.use(Vuex);
    noteList = [];
    currentNote = { title: '', content: '' };
  });

  it('should update store.currentNote ' +
    'on onAddDone event', () => {
    const app = newAppCmp();
    spyOn(app.$store, 'dispatch');
    const aNote = {};

    app.onAddDone(aNote);

    expect(app.$store.dispatch)
      .toHaveBeenCalledWith('addNote', aNote);
  });
});
