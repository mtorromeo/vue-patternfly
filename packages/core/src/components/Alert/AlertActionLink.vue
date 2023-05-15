<template>
  <pf-button variant="link" inline>
    <slot />
  </pf-button>
</template>

<script lang="ts" setup>
import PfButton from '../Button.vue';

defineOptions({
  name: 'PfAlertActionLink',
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();
</script>
