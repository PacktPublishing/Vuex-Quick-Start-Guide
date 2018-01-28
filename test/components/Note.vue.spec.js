// test/components/Note.spec.js
import Vue from 'vue';
import Note from '../../src/components/Note.vue';

describe('Note.vue', () => {
  let note;

  beforeEach(() => {
    note = { title: 'title', content: 'content' };
  });

  function newNoteCmp() {
    const Constructor = Vue.extend(Note);
    return new Constructor({
      propsData: { note },
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
});
