// src/components/Note.vue
<template>
  <div class="note">
    <div class="title">{{note.title}}</div>
    <div class="content" style="white-space: pre-line;">
      {{note.content}}
    </div>
  </div>
</template>
<script>
  export default {
    props: ['note'],
  };
</script>
<style scoped>
  .note {
    display: inline-block;
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
  }
</style>