// src/api/api-mock.js
export default {
  fetchAllNotes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { title: 'title A', content: 'content 1' },
          { title: 'title B', content: 'content 2' },
        ]);
      }, 1000);
    });
  },
};
