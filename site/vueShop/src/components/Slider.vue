<template>
  <div>
    <div class="products__slider">
      <VueSlickCarousel v-bind="settings">
        <Card
          v-for="product in products"
          :key="product.title"
          :options="product.options"
          :image="product.image"
          :title="product.title"
          :price="product.price"
        />
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import Card from "./Card";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
export default {
  data() {
    return {
      products: [
        {
          options: ["S", "M", "L"],
          image:
            "https://i1.rozetka.ua/goods/13590317/colins_8681597671464_images_13590317965.jpg",
          title: "T-shirt",
          price: "320"
        },
        {
          options: ["S", "M", "L"],
          image:
            "https://i1.rozetka.ua/goods/13590317/colins_8681597671464_images_13590317965.jpg",
          title: "T-shirt2",
          price: "320"
        },
        {
          options: ["S", "M", "L"],
          image:
            "https://i1.rozetka.ua/goods/13590317/colins_8681597671464_images_13590317965.jpg",
          title: "T-shirt3",
          price: "320"
        }
      ],
      settings: {
        dots: false,
        arrows: true,
        slidesToShow: 3
      }
    };
  },
  components: {
    Card,
    VueSlickCarousel
  }
};
</script>
<style>
.products__slider {
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
</style>
