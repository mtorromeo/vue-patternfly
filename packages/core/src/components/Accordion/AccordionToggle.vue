<template>
  <component v-bind="ouiaProps" :is="component ?? accordion?.toggleContainer.value ?? 'h3'">
    <button
      v-bind="$attrs"
      type="button"
      :class="[
        styles.accordionToggle,
        {
          [styles.modifiers.expanded]: expanded,
        },
      ]"
      :aria-expanded="expanded"
      @click="onClick"
    >
      <span v-if="toggleStart" :class="styles.accordionToggleIcon">
        <angle-down-icon />
      </span>
      <span :class="styles.accordionToggleText">
        <slot />
      </span>
      <span v-if="!toggleStart" :class="styles.accordionToggleIcon">
        <angle-down-icon />
      </span>
    </button>
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'aria-expanded'> {
  /** Container to override the default for toggle: a dt in a definition list, else a heading. */
  component?: string | Component;
}
</script>

<script lang="ts" setup>
import { computed, inject, type ButtonHTMLAttributes, type Component, type VNode } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { AccordionItemKey, AccordionKey } from './common';

defineOptions({
  name: 'PfAccordionToggle',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'click', event: MouseEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const accordion = inject(AccordionKey, undefined);
const item = inject(AccordionItemKey, undefined);

const expanded = computed(() => item?.expanded.value ?? false);
const toggleStart = computed(() => accordion?.togglePosition.value === 'start');

function onClick(event: MouseEvent) {
  if (item) {
    item.expanded.value = !item.expanded.value;
  }
  emit('click', event);
}
</script>
