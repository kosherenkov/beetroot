<template>
  <div v-if="isActive">
    <h1>{{name}}</h1>
    <h3>{{description}}</h3>
  </div>
</template>

<script>
export default {
  props: ["name", "description", "isActive"],
};
// data() {
// return {
// name: "Alex",
//description: "This is Admin",
//};
//},
//};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
