<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header: Header
  }
};
</script>

<style>
#app {
}

body {
  font-family: "Quicksand";
  font-size: 16px;
  line-height: 1.3;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.text__lg {
  font-size: 20px;
}
</style>
