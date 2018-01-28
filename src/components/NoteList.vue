// src/components/NoteList.vue
<template>
  <div class="container">
    <note v-for="(note, i) in notes" :note="note" :key="i">
    </note>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import Note from './Note.vue';

  export default {
    components: {
      Note,
    },
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
</style>