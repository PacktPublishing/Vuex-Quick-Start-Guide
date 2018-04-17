// src/components/App.vue
<template>
  <div class="app">
    <div class="header">EveryNote</div>
    <div class="body">
      <note-editor :note="$store.state.currentNote"
                   @editDone="onAddDone"/>
      <note-list/>
    </div>
    <div class="overlay" v-if="$store.state.editNote">
      <note-editor class="note-editor" @editDone="onEditDone"
                   :note="$store.state.editNote"/>
    </div>
    <div>
      <button @click="undo">Undo</button>
      <button @click="redo">Redo</button>
    </div>
  </div>
</template>
<script>
  import NoteList from '../../Chapter04/components/NoteList.vue';
  import NoteEditor from '../../Chapter04/components/NoteEditor.vue';

  export default {
    created() {
      this.$store.dispatch('loadNotesFromServer');
    },
    components: {
      NoteList,
      NoteEditor,
    },
    methods: {
      onAddDone(note) {
        this.$store.dispatch('addNote', note);
      },
      onEditDone(note) {
        this.$store.dispatch('updateNote', note);
      },
      undo() {
        this.$store.commit('undoRedo/undo');
      },
      redo() {
        this.$store.commit('undoRedo/redo');
      },
    },
  };
</script>
<style scoped>
  .app {
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

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(229, 229, 229, 0.75);
  }

  .note-editor {
    position: absolute;
    width: 100%;
    top: 20%;
  }
</style>