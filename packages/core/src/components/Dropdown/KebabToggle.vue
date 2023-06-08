<template>
  <pf-toggle :aria-label="ariaLabel">
    <ellipsis-vertical-icon />
  </pf-toggle>
</template>

<script lang="ts" setup>
import { default as PfToggle, type Props as ToggleProps } from './Toggle.vue';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';

defineOptions({
  name: 'PfKebabToggle',
});

export interface Props extends /* @vue-ignore */ ToggleProps {
  ariaLabel?: string,
}

withDefaults(defineProps<Props>(), {
  ariaLabel: 'Actions',
});
</script>
