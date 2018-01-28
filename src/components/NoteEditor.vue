// src/components/NoteEditor.vue
<template>
  <div>
    <input v-model="title" type="text" class="title"
           placeholder="title"/>
    <input v-model="content" type="text" class="content"
           placeholder="content"/>
    <button @click="addNote">Add note</button>
  </div>
</template>
<script>
  import { types } from '../store/mutations';

  const { UPDATE_CURRENT_NOTE } = types;
  export default {
    computed: {
      content: {
        get() {
          return this.$store.state.currentNote.content;
        },
        set(value) {
          const newContent = {
            title: this.title,
            content: value,
          };
          this.$store.commit(UPDATE_CURRENT_NOTE, newContent);
        },
      },
      title: {
        get() {
          return this.$store.state.currentNote.title;
        },
        set(value) {
          const newContent = {
            title: value,
            content: this.content,
          };
          this.$store.commit(UPDATE_CURRENT_NOTE, newContent);
        },
      },
    },
    methods: {
      addNote() {
        if (this.title !== '' || this.content !== '') {
          const newNote = {
            title: this.title,
            content: this.content,
          };

          this.$store.dispatch('addNote', newNote);
        }
      },
    },
  };
</script>
<style></style>