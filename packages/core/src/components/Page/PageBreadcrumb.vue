<template>
  <section
    v-bind="ouiaProps"
    :class="[
      styles.pageMainBreadcrumb,
      ...classesFromBreakpointProps($props, ['sticky'], styles, { vertical: true }),
      {
        [styles.modifiers.limitWidth]: isWidthLimited,
        [styles.modifiers.shadowTop]: shadowTop,
        [styles.modifiers.shadowBottom]: shadowBottom,
        [styles.modifiers.overflowScroll]: overflowScroll,
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
  </section>
</template>

<script lang="ts">
interface Props extends OUIAProps, StickyBreakpointProps, /* @vue-ignore */ Omit<HTMLAttributes, 'tabindex'> {
  /** Limits the width of the breadcrumb */
  widthLimited?: boolean;
  /** Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value */
  maxWidth?: string;
  /** Flag indicating if PageBreadcrumb should have a shadow at the top */
  shadowTop?: boolean;
  /** Flag indicating if PageBreadcrumb should have a shadow at the bottom */
  shadowBottom?: boolean;
  /** Flag indicating if the PageBreadcrumb has a scrolling overflow. Requires an aria-label. */
  overflowScroll?: boolean;
  /** Renders the content without a PfPageBody wrapper, to pass multiple custom PfPageBody children */
  noBodyWrapper?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { type StickyBreakpointProps, classesFromBreakpointProps } from '../../breakpoints';
import { computed, useAttrs, watchEffect, type HTMLAttributes, type VNode } from 'vue';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfPageBody from './PageBody.vue';

defineOptions({
  name: 'PfPageBreadcrumb',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const isWidthLimited = computed(() => props.widthLimited || isDefined(props.maxWidth));

const attrs = useAttrs();
watchEffect(() => {
  if (props.overflowScroll && !attrs['aria-label']) {
    console.warn('PageBreadcrumb: An accessible aria-label is required when hasOverflowScroll is set to true.');
  }
});
</script>
