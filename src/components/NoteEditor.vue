// src/components/NoteEditor.vue
<template>
  <div>
    <input v-model="content" type="text" class="content"/>
  </div>
</template>
<script>
  import { types } from '../store/mutations';

  const { UPDATE_CURRENT_NOTE } = types;
  export default {
    computed: {
      content: {
        get() {
          return this.$store.state.currentNote;
        },
        set(value) {
          console.log('AAAA');
          this.$store.commit(UPDATE_CURRENT_NOTE, value);
        },
      },
    },
  };
</script>
<style></style>