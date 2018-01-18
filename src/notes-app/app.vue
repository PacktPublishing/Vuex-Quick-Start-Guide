<template>
  <div class="app">App {{vue}} <span class="version">v{{version}}</span></div>
</template>
<script>
  export default {
    data() {
      return {
        vue: 'Vue'
      }
    },
    computed: {
      version() {
        return this.$store.state.version;
      }
    }
  };
</script>
<style>
  .app {
    background-image: url("./background.jpeg");
  }

  .version {
    font-weight: bold;
  }
</style>