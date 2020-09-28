<template>
  <div
    :class="open ? 'faq open' : 'faq'"
    @click="$emit('toggleOpen', index)"
    class="faq__wrapper"
  >
    <div class="faq__question">{{ faq.question }}</div>
    <div class="faq__answer">{{ faq.answer }}</div>
  </div>
</template>
<script>
export default {
  name: "FAQ",
  props: ["faq", "index", "open"]
};
</script>
