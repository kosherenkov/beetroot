<template>
  <section class="reviews">
    <div class="reviews__slider">
      <SlickCarousel v-bind="settings">
        <div class="review__slide">
          <img src="./../assets/img/arrows.png" alt="" />
          <h2 class="rewies__title">
            I have tried another product after using this one successfully, and
            I am Back for good! The flavour, the lightness of the oil and the
            health benefits I have gotten with this oil are amazing!
          </h2>
          <h2 class="reviews__signature">—— mark j.</h2>
        </div>
        <div class="review__slide">
          <img src="./../assets/img/arrows.png" alt="" class="review__img" />
          <h2 class="rewies__title">
            I have tried another product after using this one successfully, and
            I am Back for good! The flavour, the lightness of the oil and the
            health benefits I have gotten with this oil are amazing!
          </h2>
          <h2 class="reviews__signature">—— mark A.</h2>
        </div>
      </SlickCarousel>
    </div>
  </section>
</template>

<script>
import SlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "Reviews",
  components: {
    SlickCarousel
  },
  data() {
    return {
      settings: {
        arrows: true
      }
    };
  }
};
</script>
