// src/components/NoteList.vue

<template>
  <div class="container">
    <div v-for="note in notes" class="note">
      <div class="title">{{note.title}}</div>
      <div class="content">{{note.content}}</div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState({
      notes: 'noteList',
    }),
  };
</script>
<style scoped>
  .container {
    position: relative;
    margin-top: 10px;
  }

  .note {
    display: inline-block;
    border: 1px solid grey;
    background-color: FloralWhite;
    width: 240px;
    padding: 10px;
    margin-right: 5px;
    margin-top: 5px;
    box-shadow: 3px 3px 5px grey;
  }

  .title {
    font-weight: bold;
  }
</style>