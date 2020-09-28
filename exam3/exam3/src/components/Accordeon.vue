<template>
  <section class="section__faq" id="faqs">
    <div class="conteiner">
      <h2 class="faq__title">Frequently asked questions</h2>
      <div class="faqs">
        <FAQ
          v-for="(faq, i) in faqs"
          :faq="faq"
          :index="i"
          :key="i"
          :open="faq.open"
          @toggleOpen="toggleOpen"
        />
      </div>
    </div>
  </section>
</template>
<script>
import FAQ from "./FAQ";

export default {
  components: {
    FAQ
  },
  data() {
    return {
      faqs: [
        {
          question: "What is Cannabidiol (CBD)?",
          answer:
            "Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. (1)",
          open: false
        },
        {
          question: "Is Hemp-Derived Cannabidiol (CBD) Legal?",
          answer:
            "Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. (2)",
          open: false
        },
        {
          question: "Are there any negative side effects?",
          answer:
            "Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. (3)",
          open: false
        },
        {
          question: "Do you offer a return policy?",
          answer:
            "Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. (4)",
          open: false
        }
      ]
    };
  },
  methods: {
    toggleOpen: function(index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      });
    }
  }
};
</script>
