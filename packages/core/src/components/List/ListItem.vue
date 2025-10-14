<template>
  <li v-bind="ouiaProps" :class="{[styles.listItem]: $slots.icon}">
    <span v-if="$slots.icon" :class="styles.listItemIcon">
      <slot name="icon" />
    </span>
    <slot />
  </li>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/List/list';
import type { LiHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfListItem',
});

interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  icon: (props?: Record<never, never>) => any;
}>();
</script>
