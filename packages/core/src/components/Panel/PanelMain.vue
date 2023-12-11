<template>
  <div
    v-bind="(ouiaProps as any)"
    :class="styles.panelMain"
    :style="{ '--pf-v5-c-panel__main--MaxHeight': maxHeight }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPanelMain',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Max height of the panel main div as a string with the value and unit */
  maxHeight?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
