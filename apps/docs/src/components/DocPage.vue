<template>
  <pf-page-section variant="light" translate="no">
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
import type { ComponentProps, PfPageSection } from '@vue-patternfly/core';

export interface Props extends /* @vue-ignore */ ComponentProps<typeof PfPageSection> {
  title?: string;
}

const props = defineProps<Props>();

onMounted(() => {
  if (props.title) {
    document.title = `VuePatternFly • ${props.title}`;
  } else {
    document.title = `VuePatternFly`;
  }
});
</script>
