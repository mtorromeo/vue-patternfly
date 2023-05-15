<template>
  <pf-title h="2" size="2xl">
    {{ camelName }}
    <code>{{ name }}</code>
  </pf-title>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  name: string;
}>();

const camelize = (s: string) =>
  s.toUpperCase().replace("-", "").replace("_", "");

const camelName = computed(() =>
  props.name.charAt(0).toUpperCase() +
  props.name.substring(1).replace(/([-_][a-z])/gi, camelize),
);
</script>
