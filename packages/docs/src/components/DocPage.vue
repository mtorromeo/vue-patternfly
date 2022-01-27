<template>
  <pf-page-section variant="light">
    <div class="doc-content">
      <pf-title size="4xl">{{ title }}</pf-title>
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
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
