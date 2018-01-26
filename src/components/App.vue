// components/App.vue

<template>
  <div class="app">
    <div>EveryNote app</div>
    <note-list></note-list>
  </div>
</template>
<script>
  import NoteList from './NoteList.vue';

  export default {
    components: {
      NoteList,
    },
  };
</script>
<style>
  .app {
    font-family: "Times New Roman", Times, serif;
    background-image: url("background.jpeg");
  }
</style>