// src/api/api-mock.js
export default {
  fetchAllNotes() {
    return Promise.resolve([
      { title: 'title A', content: 'content 1' },
      { title: 'title B', content: 'content 2' },
    ]);
  },
};
