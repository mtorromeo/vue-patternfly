<template>
  <pf-label>&lt;{{ camelName }}&gt; / &lt;{{ name }}&gt;</pf-label>
  <br><br>
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
