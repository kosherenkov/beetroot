<template>
  <article>
    <header class="tabs">
      <ul class="tab__items">
        <li v-for="tab in tabs" class="tab__item">
          <div
            class="nav-item"
            :class="{ isActive: tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>
<script>
export default {
  data: () => {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },

  created() {
    this.tabs = this.$children;
  },
};
</script>
