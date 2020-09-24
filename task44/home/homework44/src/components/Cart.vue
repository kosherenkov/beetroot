<template>
  <div class="card" v-if="card.length > 0">
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in card" :key="item.title">
          <td>{{item.title}}</td>
          <td>{{item.price}}</td>
          <td>
            {{item.quantity}}
            <div class="quantity">
              <button @click="add(item)">+</button>
              <button @click="sub(item)">-</button>
            </div>
          </td>

          <td>{{item.price * item.quantity | currency}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3"></td>
          <td>Total: {{total}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
  <div class="emty__card" v-else>
    <h2>You cart is emty</h2>
  </div>
</template>


<script>
export default {
  name: "Cart",
  data() {
    return {
      card: [],
    };
  },
};
</script>
<style>
.emty__card {
  display: flex;
  justify-content: center;
}
</style>