// src/components/Note.vue
<template>
  <div class="note">
    <div class="title">{{note.title}}</div>
    <div class="content"
         style="white-space: pre-line;" v-text="note.content">
    </div>
    <div class="icons">
      <img class="edit" src="./edit.svg"
           @click="onEdit"/>
      <img class="delete" src="./delete.svg"
           @click="onDelete"/>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['note'],
    methods: {
      onDelete() {
        this.$store.dispatch('deleteNote', this.note);
      },
      onEdit() {
        this.$store.dispatch('editNote', this.note);
      },
    },
  };
</script>
<style scoped>
  .note {
    display: inline-block;
    position: relative;
    border: 1px solid grey;
    background-color: FloralWhite;
    padding: 10px;
    margin-right: 5px;
    margin-top: 5px;
    box-shadow: 3px 3px 5px grey;
    width: 240px;
    float: left;
  }

  .title {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .content {
    font-size: 25px;
  }

  .icons {
    margin-top: 5px;
    width: 100%;
  }

  .delete, .edit {
    width: 24px;
    height: 24px;
    opacity: 0.6;
  }

  .delete {
    float: right;
  }
</style>