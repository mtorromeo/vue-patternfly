<template>
  <pf-divider component="li" />
</template>

<script lang="ts" setup>
import PfDivider from '../Divider.vue';
import type { ComponentProps } from '../../util';

defineOptions({
  name: 'PfNavItemSeparator',
});

export interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfDivider>, 'component'> {
}

defineProps<Props>();
</script>
