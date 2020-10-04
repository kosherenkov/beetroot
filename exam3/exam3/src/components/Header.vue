<template>
  <header class="header">
    <Popup v-if="popupVisible" @closePopup="closePopup" />
    <div class="nav__wrap" :class="{ nav__scroll: navScroll > 100 }">
      <!-- v-scroll="handleScroll"-->
      <nav class="nav__burger">
        <transition name="fade" mode="out-in">
          <span class="icon-bars" v-if="!show" @click="show = !show"></span>
          <span class="icon-close" v-else @click="show = !show"></span>
        </transition>
        <transition name="fade">
          <ul v-if="show">
            <a href="#"><li>Home</li></a>
            <a href="#products"><li>Products</li></a>
            <a href="#faqs"><li>faqs</li></a>
            <a href="#footer__contact"><li>Contact us</li></a>
          </ul>
        </transition>
      </nav>
      <nav class="nav">
        <ul class="nav__items">
          <a href="#">
            <li class="nav__item">home</li>
          </a>
          <a href="#products">
            <li class="nav__item">products</li>
          </a>
          <a href="#faqs">
            <li class="nav__item">faqs</li>
          </a>
          <a href="#footer__contact">
            <li class="nav__item">contact us</li>
          </a>
        </ul>
      </nav>
      <div class="logo">CBD</div>
      <div class="header__search">
        <button class="header__btn" @click="showPopup">
          Login
        </button>
        <div class="container-3">
          <span class="icon-search"></span>
          <input class="search" placeholder="Search..." type="search" />
        </div>
        <p class="header__cart">
          cart
          <span>(0)</span>
        </p>
      </div>
    </div>
    <div class="conteiner">
      <div class="header__content">
        <h2 class="header__title">enhancing life</h2>
        <h2 class="header__title">excellingin care</h2>
        <h3 class="header__subtitle">choose wisely. Choose CBD.</h3>
        <button class="content__btn">
          Start shopping
          <span class="icon-minus"></span>
        </button>
        <a href="#" class="header__link">
          See all products
          <span class="icon-long-arrow-right"></span>
        </a>
      </div>
    </div>
  </header>
</template>
<script>
import Popup from "./Popup";
export default {
  components: {
    Popup
  },
  data() {
    return {
      navScroll: null,
      items: ["HOME", "PRODUCTS", "FAQ", "CONTACT US"],
      show: false,
      popupVisible: false
    };
  },
  methods: {
    updateScroll() {
      this.navScroll = window.scrollY;
    },
    showPopup() {
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>
