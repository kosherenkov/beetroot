<template>
  <div id="app">
    <Header />
    <About />
    <Products />
    <Accordeon />
    <Reviews />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Accordeon from "./components/Accordeon";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    About,
    Products,
    Accordeon,
    Reviews,
    Footer
  }
};
</script>

<style></style>
