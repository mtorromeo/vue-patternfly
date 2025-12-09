<template>
  <div
    v-bind="ouiaProps"
    :class="styles.panelMain"
    :style="{ [cssMaxHeight.name]: maxHeight }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Panel/panel';
import cssMaxHeight from '@patternfly/react-tokens/dist/esm/c_panel__main_MaxHeight';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPanelMain',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Max height of the panel main div as a string with the value and unit */
  maxHeight?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();
</script>
