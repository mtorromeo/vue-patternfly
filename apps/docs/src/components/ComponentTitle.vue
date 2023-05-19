<template>
  <pf-title :h="2" size="2xl">
    {{ camelName }}
    <code>{{ name }}</code>
  </pf-title>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { ComponentProps, PfTitle } from '@vue-patternfly/core';

interface Props extends /* @vue-ignore */ ComponentProps<typeof PfTitle> {
  name: string;
}

const props = defineProps<Props>();

const camelize = (s: string) =>
  s.toUpperCase().replace("-", "").replace("_", "");

const camelName = computed(() =>
  props.name.charAt(0).toUpperCase() +
  props.name.substring(1).replace(/([-_][a-z])/gi, camelize),
);
</script>
