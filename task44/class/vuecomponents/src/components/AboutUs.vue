<template>
  <div>
    <h1>This is AboutUs Template</h1>
    <input type="text" v-model="searchString" />
    <div v-for="a in filterSearch" :key="a.title">{{a.title}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        { title: "27 сайтів з задачками" },
        { title: "Робота в гугл" },
        { title: "26 сайтів з задачками" },
        { title: "20 сайтів з задачками" },
        { title: "Робота в фейсбук" },
      ],
      searchString: "",
    };
  },
  computed: {
    filterSearch: function () {
      let arr = this.articles;
      let searchText = this.searchString;

      arr = arr.filter(function (item) {
        if (item.title.indexOf(searchText) !== -1) {
          return item;
        }
      });

      return arr;
    },
  },
};
</script>