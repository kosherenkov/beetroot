<template>
  <div id="app">
    <Header />
    <About />
    <Products />
  </div>
</template>

<script>
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";

export default {
  name: "App",
  components: {
    Header,
    About,
    Products,
  },
};
</script>

<style>
</style>
