<template>
  <component
    v-bind="ouiaProps"
    :is="component"
    :class="[
      ...classesFromBreakpointProps($props, [
        'padding',
      ], styles, { short: true }),
      ...classesFromBreakpointProps($props, [
        'sticky',
      ], styles, { vertical: true }),
      variantTypes[type],
      {
        [styles.modifiers.secondary]: variant === 'secondary',
        [styles.modifiers.noFill]: filled === false,
        [styles.modifiers.fill]: filled === true,
        [styles.modifiers.limitWidth]: isWidthLimited,
        [styles.modifiers.alignCenter]: isWidthLimited && centerAligned && type !== 'subnav',
        [styles.modifiers.shadowTop]: shadowTop,
        [styles.modifiers.shadowBottom]: shadowBottom,
        [styles.modifiers.overflowScroll]: overflowScroll,
      }
    ]"
    :style="{
      '--pf-v6-c-page--section--m-limit-width--MaxWidth': maxWidth,
    }"
    :tabindex="overflowScroll ? 0 : undefined"
  >
    <div v-if="isWidthLimited" :class="styles.pageMainBody">
      <slot />
    </div>
    <slot v-else />
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { type PaddingBreakpointProps, type StickyBreakpointProps, classesFromBreakpointProps } from '../../breakpoints';
import { computed, type Component, type HTMLAttributes } from 'vue';
import { isDefined } from '@vueuse/shared';

const variantTypes = {
  default: styles.pageMainSection,
  subnav: styles.pageMainSubnav,
  breadcrumb: styles.pageMainBreadcrumb,
  tabs: styles.pageMainTabs,
  wizard: styles.pageMainWizard,
};

defineOptions({
  name: 'PfPageSection',
});

export interface Props extends OUIAProps, PaddingBreakpointProps, StickyBreakpointProps, /* @vue-ignore */ Omit<HTMLAttributes, 'tabindex'> {
  /** Section background color variant */
  variant?: 'default' | 'secondary';
  /** Section type variant */
  type?: keyof typeof variantTypes;
  /** Enables the page section to fill the available vertical space */
  filled?: boolean;
  /** Limits the width of the section */
  widthLimited?: boolean;
  /** Limits the width of the section and sets the --pf-v6-c-page--section--m-limit-width--MaxWidth variable to this value */
  maxWidth?: string;
  /** Flag indicating if the section content is center aligned. Either widthLimited or maxWidth must be set for this to work  */
  centerAligned?: boolean;
  /** Modifier indicating if PageSection should have a shadow at the top */
  shadowTop?: boolean;
  /** Modifier indicating if PageSection should have a shadow at the bottom */
  shadowBottom?: boolean;
  /** Flag indicating if the PageSection has a scrolling overflow */
  overflowScroll?: boolean;
  /** Sets the base component to render. Defaults to section */
  component?: string | Component;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  type: 'default',
  filled: undefined,
  component: 'section' as any,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const isWidthLimited = computed(() => props.widthLimited || isDefined(props.maxWidth));
</script>
