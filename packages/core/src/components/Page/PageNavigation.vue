<template>
  <section
    :class="[
      styles.pageMainNav,
      ...classesFromBreakpointProps($props, [
        'sticky',
      ], styles, { vertical: true }),
      {
        [styles.modifiers.limitWidth]: isWidthLimited,
        [styles.modifiers.shadowTop]: shadowTop,
        [styles.modifiers.shadowBottom]: shadowBottom,
        [styles.modifiers.overflowScroll]: overflowScroll,
      }
    ]"
    :style="{
      '--pf-c-page--section--m-limit-width--MaxWidth': maxWidth,
    }"
    :tabindex="overflowScroll ? 0 : undefined"
  >
    <div v-if="isWidthLimited" :class="styles.pageMainBody">
      <slot />
    </div>
    <slot v-else />
  </section>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { type StickyBreakpointProps, classesFromBreakpointProps } from '../../breakpoints';
import { computed, type HTMLAttributes } from 'vue';
import { isDefined } from '@vueuse/shared';

defineOptions({
  name: 'PfPageNavigation',
});

export interface Props extends StickyBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  /** Limits the width of the breadcrumb */
  widthLimited?: boolean;
  /** Limits the width of the section and sets the --pf-c-page--section--m-limit-width--MaxWidth variable to this value */
  maxWidth?: string;
  /** Flag indicating if PageBreadcrumb should have a shadow at the top */
  shadowTop?: boolean;
  /** Flag indicating if PageBreadcrumb should have a shadow at the bottom */
  shadowBottom?: boolean;
  /** Flag indicating if the PageBreadcrumb has a scrolling overflow */
  overflowScroll?: boolean;
}

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isWidthLimited = computed(() => props.widthLimited || isDefined(props.maxWidth));
</script>
