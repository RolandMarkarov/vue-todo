<template>
  <div id="app">

    <div class="content">
      <header-title/>
      <todo/>
    </div>
  </div>
</template>

<script>

  import HeaderTitle from "./components/HeaderTitle";
  import Todo from "./components/Todo";

  export default {
    name: 'App',
    components: {
      Todo,
      HeaderTitle
    },
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    padding: 20px;

  }

  .content {
    margin: 0 auto;
    width: 30vw;
    border-radius: 5px;
    overflow: hidden;
  }
</style>
