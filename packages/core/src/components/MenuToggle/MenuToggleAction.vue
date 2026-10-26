<template>
  <button v-bind="ouiaProps" :class="styles.menuToggleButton" type="button">
    <slot />
  </button>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type'> {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/MenuToggle/menu-toggle';
import type { ButtonHTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMenuToggleAction',
});

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
</script>
