<template>
  <div class="popup">
    <VueTabs class="popup__tab">
      <VTab title="Sing up">
        <div class="popup__header">
          <h2 class="popup__title">Sing Up for Free</h2>
        </div>
        <form class="popup__content">
          <input type="text" placeholder="Name" class="popup__input" />
          <input type="email" placeholder="Email" class="popup__input" />
          <input type="password" placeholder="Password" class="popup__input" />
          <div class="popup__footer">
            <button type="submit" class="footer__buttons">Sing in</button>
            <button @click="closePopup" class="footer__buttons">Close</button>
          </div>
        </form>
      </VTab>
      <VTab title="Log in">
        <div class="popup__header">
          <h2 class="popup__title">Log in</h2>
        </div>
        <form class="popup__content">
          <input type="email" placeholder="Email" class="popup__input" />
          <input type="password" placeholder="Password" class="popup__input" />
          <div class="popup__footer">
            <button type="submit" class="footer__buttons">Log In</button>
            <button @click="closePopup" class="footer__buttons">Close</button>
          </div>
        </form>
      </VTab>
    </VueTabs>

    <!-- <slot></slot> -->
  </div>
</template>
<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

export default {
  components: {
    VueTabs,
    VTab
  },
  methods: {
    closePopup() {
      this.$emit("closePopup");
    }
  }
};
</script>
