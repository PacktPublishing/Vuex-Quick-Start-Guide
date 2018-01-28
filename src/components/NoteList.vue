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
<style>
  .title {
    font-weight: bold;
  }
</style>