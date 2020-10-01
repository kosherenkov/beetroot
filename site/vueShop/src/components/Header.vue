<template>
  <header class="header">
    <a href="/"><img src="@/assets/img/shoose.png" alt="shoose"/></a>
    <Nav />
  </header>
</template>

<script>
import Nav from "./Nav";
export default {
  components: {
    Nav: Nav
  }
};
</script>
<style>
.header {
  background: linear-gradient(
    to bottom,
    #264b7e 0%,
    #2d5a96c9 50%,
    #2d538600 100%
  );
  width: 100%;
  display: flex;
  align-items: center;
  padding: 40px 65px;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
