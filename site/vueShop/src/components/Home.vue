<template>
  <div class="home">
    <Bunner />
    <Slider />
  </div>
</template>

<script>
import Bunner from "./Bunner";
import Slider from "./Slider";
export default {
  name: "Home",
  data() {
    return {
      msg: "This is Home"
    };
  },
  components: {
    Bunner: Bunner,
    Slider: Slider
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
