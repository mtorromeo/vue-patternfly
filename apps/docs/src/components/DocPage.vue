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

<script lang="ts" setup>
import { onMounted } from 'vue';

const props = defineProps<{
  title?: string;
}>();

onMounted(() => {
  if (props.title) {
    document.title = `VuePatternfly 4 • ${props.title}`;
  } else {
    document.title = `VuePatternfly 4`;
  }
});
</script>
