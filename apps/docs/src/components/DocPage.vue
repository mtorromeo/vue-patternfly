<template>
  <pf-page-section variant="light">
    <div class="doc-content">
      <pf-title v-if="title" size="4xl">{{ title }}</pf-title>
      <slot />
    </div>
  </pf-page-section>
</template>

<style scoped>
.doc-content {
  max-width: 832px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'DocPage',

  props: {
    title: String,
  },

  mounted() {
    if (this.title) {
      document.title = `VuePatternfly 4 • ${this.title}`;
    } else {
      document.title = `VuePatternfly 4`;
    }
  },
});
</script>
