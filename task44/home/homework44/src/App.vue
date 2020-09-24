<template>
  <div id="app">
    <Card />
    <Cart />
  </div>
</template>

<script>
import Card from "./components/Card";
import Cart from "./components/Cart";

export default {
  name: "App",
  components: {
    Card,
    Cart,
  },
};
</script>

<style>
</style>
