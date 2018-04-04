// src/app.vue
<template>
  <div class="app">App <span class="version">v{{version}}</span></div>
</template>
<script>
  export default {
    computed: {
      version() {
        return this.$store.state.version;
      },
    },
  };
</script>
<style>
  .app {
    color: white;
    font-family: "Times New Roman", Times, serif;
    background-image: url("./background.jpg");
  }
</style>