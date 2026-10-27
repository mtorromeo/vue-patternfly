<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.pageMainGroup,
      ...classesFromBreakpointProps($props, ['sticky'], styles, { vertical: true }),
      {
        [styles.modifiers.stickyTopBase]: stickyBase === 'top',
        [styles.modifiers.stickyBottomBase]: stickyBase === 'bottom',
        [styles.modifiers.stickyTopStuck]: stickyStuck && stickyBase === 'top',
        [styles.modifiers.stickyBottomStuck]: stickyStuck && stickyBase === 'bottom',
        [styles.modifiers.noFill]: filled === false,
        [styles.modifiers.fill]: filled === true,
        [styles.modifiers.shadowTop]: shadowTop,
        [styles.modifiers.shadowBottom]: shadowBottom,
        [styles.modifiers.overflowScroll]: overflowScroll,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.noPlainOnGlass]: noPlainOnGlass,
      },
    ]"
    :tabindex="overflowScroll ? 0 : undefined"
    :role="overflowScroll ? 'region' : undefined"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { devWarn } from '../../helpers/dev';
import { type StickyBreakpointProps, classesFromBreakpointProps } from '../../breakpoints';
import { useAttrs, watchEffect, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPageGroup',
});

interface Props extends OUIAProps, StickyBreakpointProps, /* @vue-ignore */ Omit<HTMLAttributes, 'tabindex' | 'role'> {
  /** Applies the base sticky positioning to the top or bottom of the scroll parent container. */
  stickyBase?: 'top' | 'bottom';
  /** Flag indicating if the group has stuck styling, applied when the group is not at the edge of the scroll parent container. */
  stickyStuck?: boolean;
  /** Enables the page group to fill the available vertical space if true, or disable filling if false. */
  filled?: boolean;
  /** Modifier indicating if PageGroup should have a shadow at the top */
  shadowTop?: boolean;
  /** Modifier indicating if PageGroup should have a shadow at the bottom */
  shadowBottom?: boolean;
  /** Flag indicating if the PageGroup has a scrolling overflow. Requires an aria-label. */
  overflowScroll?: boolean;
  /** Adds plain styling to the page group. */
  plain?: boolean;
  /** Prevents the page group from automatically applying plain styling when glass theme is enabled. */
  noPlainOnGlass?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  filled: undefined,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const attrs = useAttrs();
watchEffect(() => {
  if (props.overflowScroll && !attrs['aria-label']) {
    devWarn('PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.');
  }
});
</script>
