<template>
  <pf-label>&lt;{{ name }}&gt; / &lt;{{ kebabName }}&gt;</pf-label>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { PfTitle } from '@vue-patternfly/core';
import type { ComponentProps } from 'vue-component-type-helpers';

interface Props extends /* @vue-ignore */ ComponentProps<typeof PfTitle> {
  name: string;
  test?: object;
}

const props = defineProps<Props>();

const kebabName = computed(() =>
  props.name.charAt(0).toLowerCase() +
  props.name.substring(1).replace(/([A-Z])/g, (s: string) => `-${s.toLowerCase()}`),
);
</script>
