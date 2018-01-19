import Vue from 'vue';
import Test from './dummy.vue';

describe('test.vue', function () {
  it('should have correct message', function () {
    expect(Test.data().msg).toBe('A message');
  });

  it('should render correct message', function () {
    const vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': Test
      }
    }).$mount();
    expect(vm.$el.querySelector('.app').textContent).toBe('A message');
  })
});