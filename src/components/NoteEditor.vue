// src/components/NoteEditor.vue
<template>
  <div class="container">
    <div class="centered">
      <input v-model="title" type="text" class="title"
             placeholder="title"/><br>
      <textarea v-model="content" class="content"
                rows="3" placeholder="content"></textarea><br>
      <div class="buttons">
        <button @click="onEditDone" class="done">Done</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['note'],
    data() {
      return {
        title: this.note.title,
        content: this.note.content,
      };
    },
    methods: {
      onEditDone() {
        if (this.title !== '' || this.content !== '') {
          this.$emit('editDone', {
            title: this.title,
            content: this.content,
          });
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
    margin-top: 0;
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