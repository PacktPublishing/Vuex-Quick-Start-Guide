// src/components/App.vue
<template>
  <div class="app">
    <div class="header">EveryNote</div>
    <div class="body">
      <note-editor></note-editor>
      <note-list></note-list>
    </div>
  </div>
</template>
<script>
  import NoteList from './NoteList.vue';
  import NoteEditor from './NoteEditor.vue';

  export default {
    components: {
      NoteList,
      NoteEditor,
    },
  };
</script>
<style scoped>
  .app {
    position: relative;
  }

  .header {
    padding: 10px;
    font-size: 25px;
    background-color: aliceblue;
    margin-bottom: 5px;
  }

  .body {
    padding: 5px;
  }
</style>