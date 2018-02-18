// src/api/api-mock.js
export default {
  fetchAllNotes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 1000);
    });
  },
};
