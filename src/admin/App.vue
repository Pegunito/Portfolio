<template>
  <div class="app-container">
    <headline title="Панель администрирования">
      <user />
    </headline>
    <navigation />
  </div>
</template>

<script>
  import headline from "./components/headline";
  import user from "./components/user";
  import navigation from "./components/navigation";

  export default {
    components: {
      headline,
      user,
      navigation
    },
  };
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
</style>

<style lang="pcss" scoped src="./app.pcss"></style>