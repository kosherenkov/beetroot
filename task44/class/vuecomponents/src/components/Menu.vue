<template>
  <div>
    <button @click="changeTitle(title)">{{title}}</button>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    changeTitle: function (title) {
      this.$emit("newTitle", title);
    },
  },
};
</script>