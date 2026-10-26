<template>
  <header
    v-bind="ouiaProps"
    :class="[styles.masthead, { [styles.modifiers.docked]: variant === 'docked' }, breakpointClasses]"
  >
    <slot />
  </header>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Masthead/masthead';
import { computed, type HTMLAttributes } from 'vue';
import { classesFromBreakpointProps, type InsetBreakpointProps } from '../../breakpoints';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfMasthead',
});

interface Props extends OUIAProps, InsetBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Display type at various breakpoints. Without display props, it is inline from the md breakpoint. */
  display?: 'inline' | 'stack';
  displaySm?: 'inline' | 'stack';
  displayMd?: 'inline' | 'stack';
  displayLg?: 'inline' | 'stack';
  displayXl?: 'inline' | 'stack';
  display2xl?: 'inline' | 'stack';
  /** Indicates the variant of the masthead. Use docked for the content of the dock of a docked page. */
  variant?: 'default' | 'docked';
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const breakpointClasses = computed(() => {
  const hasDisplay = [
    props.display,
    props.displaySm,
    props.displayMd,
    props.displayLg,
    props.displayXl,
    props.display2xl,
  ].some(d => d !== undefined);
  // without display props, the masthead is stacked on mobile and inline from md
  return classesFromBreakpointProps(
    hasDisplay ? props : { ...props, displayMd: 'inline' },
    ['inset', 'display'],
    styles,
  );
});
</script>
