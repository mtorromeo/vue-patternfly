<template>
  <button v-bind="ouiaProps" :class="styles.menuToggleButton" type="button">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import type { ButtonHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuToggleAction',
});

export interface Props extends OUIAProps, /* @vue-ignore */ ButtonHTMLAttributes {}

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
