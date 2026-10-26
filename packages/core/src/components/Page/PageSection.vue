<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :class="[
      ...classesFromBreakpointProps($props, ['padding'], styles, { short: true }),
      ...classesFromBreakpointProps($props, ['sticky'], styles, { vertical: true }),
      variantTypes[type],
      {
        [styles.modifiers.stickyTopBase]: stickyBase === 'top',
        [styles.modifiers.stickyBottomBase]: stickyBase === 'bottom',
        [styles.modifiers.stickyTopStuck]: stickyStuck && stickyBase === 'top',
        [styles.modifiers.stickyBottomStuck]: stickyStuck && stickyBase === 'bottom',
        [styles.modifiers.secondary]: type === 'default' && variant === 'secondary',
        [styles.modifiers.noFill]: filled === false,
        [styles.modifiers.fill]: filled === true,
        [styles.modifiers.limitWidth]: isWidthLimited,
        [styles.modifiers.alignCenter]: isWidthLimited && centerAligned && type !== 'subnav',
        [styles.modifiers.shadowTop]: shadowTop,
        [styles.modifiers.shadowBottom]: shadowBottom,
        [styles.modifiers.overflowScroll]: overflowScroll,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.noPlainOnGlass]: noPlainOnGlass,
      },
    ]"
    :style="{
      '--pf-v6-c-page--section--m-limit-width--MaxWidth': maxWidth,
    }"
    :tabindex="overflowScroll ? 0 : undefined"
  >
    <slot v-if="noBodyWrapper" />
    <pf-page-body v-else>
      <slot />
    </pf-page-body>
  </component>
</template>

<script lang="ts">
const variantTypes = {
  default: styles.pageMainSection,
  subnav: styles.pageMainSubnav,
  breadcrumb: styles.pageMainBreadcrumb,
  tabs: styles.pageMainTabs,
  wizard: styles.pageMainWizard,
};

interface Props
  extends OUIAProps, PaddingBreakpointProps, StickyBreakpointProps, /* @vue-ignore */ Omit<HTMLAttributes, 'tabindex'> {
  /** Section background color variant. This will only apply when the type prop has the "default" value. */
  variant?: 'default' | 'secondary';
  /** Section type variant */
  type?: keyof typeof variantTypes;
  /** Enables the page section to fill the available vertical space if true, or disable filling if false. */
  filled?: boolean;
  /** Limits the width of the section */
  widthLimited?: boolean;
  /** Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value */
  maxWidth?: string;
  /** Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work  */
  centerAligned?: boolean;
  /** Applies the base sticky positioning to the top or bottom of the scroll parent container. */
  stickyBase?: 'top' | 'bottom';
  /** Flag indicating if the section has stuck styling, applied when the section is not at the edge of the scroll parent container. */
  stickyStuck?: boolean;
  /** Modifier indicating if PageSection should have a shadow at the top */
  shadowTop?: boolean;
  /** Modifier indicating if PageSection should have a shadow at the bottom */
  shadowBottom?: boolean;
  /** Flag indicating if the PageSection has a scrolling overflow. Requires an aria-label. */
  overflowScroll?: boolean;
  /** Renders the content without a PfPageBody wrapper, to pass multiple custom PfPageBody children */
  noBodyWrapper?: boolean;
  /** Adds plain styling to the page section. */
  plain?: boolean;
  /** Prevents the page section from automatically applying plain styling when glass theme is enabled. */
  noPlainOnGlass?: boolean;
  /** Sets the base component to render. Defaults to section */
  component?: string | Component;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { type PaddingBreakpointProps, type StickyBreakpointProps, classesFromBreakpointProps } from '../../breakpoints';
import { computed, useAttrs, watchEffect, type Component, type HTMLAttributes, type VNode } from 'vue';
import { isDefined } from '@vueuse/shared';
import PfPageBody from './PageBody.vue';

defineOptions({
  name: 'PfPageSection',
});

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  type: 'default',
  filled: undefined,
  component: 'section',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const isWidthLimited = computed(() => props.widthLimited || isDefined(props.maxWidth));

const attrs = useAttrs();
watchEffect(() => {
  if (props.overflowScroll && !attrs['aria-label']) {
    console.warn('PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.');
  }
});
</script>
