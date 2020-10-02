<template>
  <section class="products" id="products">
    <h2 class="products__title">cbd featured products</h2>
    <div class="products__slider">
      <VueSlickCarousel :arrows="true" :dots="false" v-bind="settings">
        <Card v-for="(prod, i) in products" :prod="prod" :index="i" :key="i" />
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import Card from "./Card";

export default {
  name: "Products",

  components: {
    Card,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 940,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      products: [
        {
          title: "CBD 500 mg Orange Flavor Tincture",
          image: "./../../static/img/slider_products/slide1.jpg",
          price: 44.99
        },
        {
          title: "Black ICE CBD Muscle Rub 200 mg",
          image: "./../../static/img/slider_products/slide2.jpg",
          price: 12.99
        },
        {
          title: "CBD+Curcumin Coffee 750 mg",
          image: "./../../static/img/slider_products/slide3.jpg",
          price: 145.99
        },
        {
          title: "CBD+Curcumin Coffee 750 mg",
          image: "./../../static/img/slider_products/slide1.jpg",
          price: 23.99
        }
      ]
    };
  }
};
</script>
