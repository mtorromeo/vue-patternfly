<template>
  <header
    v-bind="(ouiaProps as any)"
    :class="[
      styles.masthead,
      classesFromBreakpointProps($props, ['inset', 'display'], styles),
    ]"
  >
    <slot />
  </header>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import type { HTMLAttributes } from 'vue';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMasthead',
});

export interface Props extends OUIAProps, InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Display type at various breakpoints */
  display?: 'inline' | 'stack';
  displaySm?: 'inline' | 'stack';
  displayMd?: 'inline' | 'stack';
  displayLg?: 'inline' | 'stack';
  displayXl?: 'inline' | 'stack';
  displayXl2?: 'inline' | 'stack';
}

const props = withDefaults(defineProps<Props>(), {
  display: 'inline',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
