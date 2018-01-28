// src/components/NoteEditor.vue
<template>
  <div class="container">
    <div class="centered">
      <input v-model="title" type="text" class="title"
             placeholder="title"/><br>
      <textarea v-model="content" class="content" rows="3"
                placeholder="content"></textarea><br>
      <div class="buttons">
        <button @click="addNote" class="add">Add note</button>
      </div>
    </div>
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
        this.title = '';
        this.content = '';
      },
    },
  };
</script>
<style scoped>
  .title, .content {
    border: none;
    width: calc(100% - 20px);
    padding: 10px;
    display: inline-block;
  }

  .title {
    font-weight: bold;
  }

  .container {
    text-align: center;
    margin-top: 0px;
  }

  .container .centered {
    display: inline-block;
    width: 80%;
    text-align: left;
    background-color: white;
    box-shadow: 3px 3px 5px grey;
  }

  .buttons {
    padding: 10px;
  }

</style>