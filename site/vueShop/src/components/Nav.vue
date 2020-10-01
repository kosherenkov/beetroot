<template>
  <nav class="nav">
    <router-link to="/" class="nav__link">Home</router-link>
    <router-link to="/products" class="nav__link">Products</router-link>
  </nav>
</template>
<style>
.nav {
  margin-left: auto;
}
.nav__link {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 0 0.15em;
  margin-left: 35px;
}

.nav__link:hover {
  color: #00bdb2;
}
</style>
