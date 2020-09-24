<template>
  <div>
    <header>
      <Header :title="title"></Header>
    </header>

    <!-- <button v-for="page in pages" :key="page.title" @click="changeButton(page.title)">{{page.title}}</button> -->
    <nav>
      <Menu v-for="page in pages" :title="page.title" :key="page.title" @newTitle="title = $event" />
    </nav>
    <main>
      <component :is="title"></component>
    </main>
  </div>
</template>

<script>
import Header from "./header.vue";
import Menu from "./Menu.vue";

import Home from "./Home.vue";
import AboutUs from "./AboutUs.vue";
import Shop from "./Shop.vue";

export default {
  components: {
    Header: Header,
    Menu: Menu,
    Home: Home,
    AboutUs: AboutUs,
    Shop: Shop,
  },
  data() {
    return {
      title: "Home",
      pages: [{ title: "Home" }, { title: "Shop" }, { title: "AboutUs" }],
    };
  },
  methods: {
    changeButton: function (newTitle) {
      this.title = newTitle;
    },
    a: function () {
      console.log("newTitle");
    },
  },
};
</script>

<style>
</style>