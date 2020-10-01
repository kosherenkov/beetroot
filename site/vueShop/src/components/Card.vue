<template>
  <div class="product">
    <div class="product__panel">
      <v-select :options="options" class="size" placeholder="Size"></v-select>
    </div>
    <div class="product__image">
      <img :src="image" :alt="title" class="product__img" />
    </div>
    <div class="product__info">
      <div class="product__title">{{ title }}</div>
      <div class="product__price">{{ price }}</div>
    </div>
  </div>
</template>
<script>
import "vue-select/dist/vue-select.css";
export default {
  props: ["options", "image", "title", "price"],
  filters: {
    currency(price) {
      return "$" + price.toFixed(2);
    }
  }
};
</script>
<style>
.product {
  background: #f5f6f7;
  padding: 15px;
}

.size {
  width: 5em;
  text-transform: uppercase;
}

.product__image {
  width: 100%;
  padding-top: 60%;
  position: relative;
}
.product__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.product__info {
  display: flex;
  justify-content: space-between;
}

.product__title {
  color: #aa9b7c;
  text-transform: uppercase;
  font-size: 1.125em;
}

.product__price {
  font-size: 1.375em;
}
</style>
