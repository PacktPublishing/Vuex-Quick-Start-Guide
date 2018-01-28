// src/components/App.vue
<template>
  <div class="app">
    <div>EveryNote app</div>
    <note-editor></note-editor>
    <note-list></note-list>
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
<style>
  .app {
    font-family: "Times New Roman", Times, serif;
    background-image: url("background.jpeg");
  }
</style>