<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.accordionItem,
      {
        [styles.modifiers.expanded]: expanded,
      },
    ]"
  >
    <template v-if="!hasChild(PfAccordionToggle)">
      <pf-accordion-toggle v-bind="toggleAttrs" :component="toggleComponent">
        <slot name="toggle">{{ title }}</slot>
      </pf-accordion-toggle>
      <slot v-if="hasChild(PfAccordionContent)" />
      <pf-accordion-content v-else v-bind="contentAttrs" :component="contentComponent" :fixed="fixed">
        <slot />
      </pf-accordion-content>
    </template>
    <slot v-else />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Text of the toggle rendered when the default slot does not contain a pf-accordion-toggle. */
  title?: string;
  /** Container to override the default for the toggle rendered from title. */
  toggleComponent?: string | Component;
  /** Attributes added to the button of the toggle rendered from title, such as its id. */
  toggleAttrs?: Omit<ComponentProps<typeof PfAccordionToggle>, 'component'>;
  /** Component to use as container of the content wrapping the default slot. */
  contentComponent?: string | Component;
  /** Attributes added to the content wrapping the default slot, such as its id or aria-labelledby. */
  contentAttrs?: HTMLAttributes;
  /** Flag to indicate the content wrapping the default slot is fixed. */
  fixed?: boolean;
}
</script>

<script lang="ts" setup>
import { provide, type Component, type HTMLAttributes, type VNode } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { findChildrenVNodes } from '../../util';
import PfAccordionToggle from './AccordionToggle.vue';
import PfAccordionContent from './AccordionContent.vue';
import { AccordionItemKey } from './common';

defineOptions({
  name: 'PfAccordionItem',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Flag to indicate whether the accordion item is expanded. */
const expanded = defineModel<boolean>('expanded', { default: false });

const slots = defineSlots<{
  /** The item content, wrapped in a pf-accordion-content unless it contains one, or a pf-accordion-toggle and a pf-accordion-content. */
  default?: (props?: Record<never, never>) => VNode[];
  /** Content of the toggle, replacing title. */
  toggle?: (props?: Record<never, never>) => VNode[];
}>();

// slots are not reactive: these run on every render
function hasChild(type: Component) {
  return findChildrenVNodes(slots.default?.()).some(vnode => vnode.type === type);
}

provide(AccordionItemKey, { expanded });
</script>
