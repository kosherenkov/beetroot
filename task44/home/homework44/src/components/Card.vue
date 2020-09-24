<template>
  <div class="products">
    <div class="products__item" v-for="prod in products" :key="prod.title">
      <div class="products__image">
        <img v-bind:src="`assets/${prod.image}`" alt />
      </div>
      <h3 class="product__title">{{prod.title}}</h3>
      <div class="product__price">{{prod.price}}</div>
      <button class="btn" v-on:click="addToCard(prod)">Add to card</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      methods: {
        addToCard: function (prod) {
          this.total += prod.price;
          let inCard = false;
          for (let i = 0; i < this.card.length; i++) {
            if (this.card[i].id === prod.id) {
              inCard = true;
              this.card[i].quantity++;
              break;
            }
          }
          if (!inCard) {
            this.card.push({
              id: prod.id,
              title: prod.title,
              price: prod.price,
              quantity: 1,
            });
          }
        },
      },

      filters: {
        currency(price) {
          return "$" + price.toFixed(2);
        },
      },
      products: [
        { id: 1, title: "Product One", price: 9.99, image: "image1.jpg" },
        { id: 2, title: "Product Two", price: 12.99, image: "image2.jpg" },
        { id: 3, title: "Product Three", price: 8.0, image: "image3.jpg" },
        { id: 4, title: "Product Four", price: 10.5, image: "image4.jpg" },
      ],
      total: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  display: flex;
  justify-content: center;
}

.products__item {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
  justify-content: center;
  align-items: center;
}

.products__image {
  max-width: 150px;
}

.products__image img {
  width: 100%;
  height: 100%;
}

.quantity {
  display: flex;
}

.emty_card {
  text-align: center;
}

.card {
  display: flex;
  justify-content: center;
}
</style>
