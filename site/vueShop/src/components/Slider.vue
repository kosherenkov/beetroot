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
  position: relative;
}

.products__slider.slick-arrow {
  position: absolute;
  top: 0;
  right: 0;
  color: transparent;
  font-size: 0;
  background: transparent;
  border: none;
  background-image: url("data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='chevron-right' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' class='svg-inline--fa fa-chevron-right fa-w-10'%3E%3Cpath fill='%23aa9b77' d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z' class=''%3E%3C/path%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
}
</style>
