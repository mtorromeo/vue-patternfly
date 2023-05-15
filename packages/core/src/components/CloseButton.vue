<template>
  <pf-button variant="plain" aria-label="Close" @click="emit('click', $event)">
    <xmark-icon />
  </pf-button>
</template>

<script lang="ts" setup>
import PfButton from './Button.vue';
import XmarkIcon from '@vue-patternfly/icons/dist/esm/icons/xmark-icon';

defineOptions({
  name: 'PfCloseButton',
});

const emit = defineEmits<{
  (name: 'click', e: Event): any;
}>();
</script>
