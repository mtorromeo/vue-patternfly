<template>
  <component
    v-bind="ouiaProps"
    :is="dl ? 'dl' : 'div'" :class="[styles.accordion, {
      [styles.modifiers.bordered]: bordered,
      [styles.modifiers.displayLg]: large,
    }]">
    <slot />
  </component>
</template>

<script lang="ts">
export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Heading level to use */
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | number;
  /** Flag to indicate whether use definition list or div */
  dl?: boolean;
  /** Flag to indicate the accordion had a border */
  bordered?: boolean;
  /** Large display size variant. */
  large?: boolean;
}

export const AccordionKey = Symbol('AccordionKey') as InjectionKey<{
  dl: Props['dl'];
  level: Props['level'];
}>;
</script>

<script lang="ts" setup>
import { type InjectionKey, provide, type HTMLAttributes } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfAccordion',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const props = withDefaults(defineProps<Props>(), {
  level: 3,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

provide(AccordionKey, {
  dl: props.dl,
  level: props.level,
});
</script>
