<template>
  <div class="card__wrap">
    <div class="product__wrap">
      <div class="product__body">
        <img src="./../assets/img/slider_products/starts.jpg" alt="" />
        <h2 class="product__title">{{ prod.title }}</h2>
        <img :src="prod.image" alt="slide" class="product__img" />
      </div>
      <div class="product__footer">
        <p class="footer__price">${{ prod.price }}</p>
        <button class="footer__btn">shop ——</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["prod", "index"],
  data() {
    return {};
  }
};
</script>
