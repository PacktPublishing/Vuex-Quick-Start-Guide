// loaded-later-moudle.js
export default function moduleFactory(store) {
  Vue.component('later', {
    template: '<div>later</div>',
  });

  store.registerModule('loadedLater', {});

  setTimeout(() => {
    store.state.currentView = 'later';
  }, 500);
}
