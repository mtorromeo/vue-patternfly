<template>
  <component
    v-bind="ouiaProps"
    :is="dl ? 'dl' : 'div'"
    :class="[
      styles.accordion,
      {
        [styles.modifiers.bordered]: bordered,
        [styles.modifiers.noPlainOnGlass]: noPlainOnGlass,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.toggleStart]: togglePosition === 'start',
        [styles.modifiers.displayLg]: large,
      },
    ]"
    :role="!dl && $attrs['aria-label'] ? 'region' : undefined"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export { AccordionKey, AccordionItemKey, type AccordionProvide, type AccordionItemProvide } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Heading level to use for the toggles when the accordion is not a definition list */
  level?: AccordionHeadingLevel;
  /** Flag to render the accordion as a definition list instead of a div with headings */
  dl?: boolean;
  /** Flag to indicate the accordion had a border */
  bordered?: boolean;
  /** @beta Flag to prevent the accordion from automatically applying plain styling when glass theme is enabled. */
  noPlainOnGlass?: boolean;
  /** @beta Flag to add plain styling to the accordion. */
  plain?: boolean;
  /** Large display size variant. */
  large?: boolean;
  /** Sets the toggle icon position for all accordion toggles. */
  togglePosition?: 'start' | 'end';
}
</script>

<script lang="ts" setup>
import { computed, provide, type HTMLAttributes, type VNode } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { AccordionKey, type AccordionHeadingLevel } from './common';

defineOptions({
  name: 'PfAccordion',
});

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const props = withDefaults(defineProps<Props>(), {
  level: 3,
  togglePosition: 'end',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

provide(AccordionKey, {
  toggleContainer: computed(() => {
    if (props.dl) {
      return 'dt';
    }
    return typeof props.level === 'string' ? props.level : `h${props.level}`;
  }),
  contentContainer: computed(() => (props.dl ? 'dd' : 'div')),
  togglePosition: computed(() => props.togglePosition),
});
</script>
