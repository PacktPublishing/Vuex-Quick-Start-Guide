// test/components/Note.spec.js
import Vue from 'vue';
import Vuex from 'vuex';
import Note from '../../chapter-4/components/Note.vue';

describe('Note.vue', () => {
  let note;
  let store;
  beforeEach(() => {
    Vue.use(Vuex);
    note = { title: 'title', content: 'content' };
  });

  function newNoteCmp() {
    const Constructor = Vue.extend(Note);
    store = new Vuex.Store({
      state: {},
    });
    return new Constructor({
      propsData: { note },
      store,
    }).$mount();
  }

  it('should render a note', () => {
    const { title, content } = note;

    const noteCmp = newNoteCmp();

    const { $el } = noteCmp;
    const titleEl = $el.querySelector('.title');
    const contentEl = $el.querySelector('.content');
    expect(titleEl.textContent.trim()).toBe(title);
    expect(contentEl.textContent.trim()).toBe(content);
  });

  it('should emit deleteNote on delete tap', () => {
    const noteCmp = newNoteCmp();
    spyOn(store, 'dispatch');

    noteCmp.onDelete();

    expect(store.dispatch)
      .toHaveBeenCalledWith('deleteNote', note);
  });

  it('should emit editNote on edit tap', () => {
    const noteCmp = newNoteCmp();
    spyOn(store, 'dispatch');

    noteCmp.onEdit();

    expect(store.dispatch)
      .toHaveBeenCalledWith('editNote', note);
  });
});
