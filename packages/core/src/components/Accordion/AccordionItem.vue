<template>
  <component v-bind="ouiaProps" :is="toggleComponent || (accordion?.dl ? 'dt' : (typeof accordion?.level === 'string' ? accordion?.level : `h${accordion?.level}`))">
    <button
      v-bind="$attrs"
      type="button"
      :class="[
        styles.accordionToggle, {
          [styles.modifiers.expanded]: managedExpanded,
        },
      ]"
      :aria-expanded="managedExpanded"
      @click="handleClick($event as PointerEvent)"
    >
      <span :class="styles.accordionToggleText">
        <slot name="toggle">{{ title }}</slot>
      </span>
      <span :class="styles.accordionToggleIcon">
        <angle-right-icon />
      </span>
    </button>
  </component>

  <component
    v-bind="$attrs"
    :is="contentComponent || (accordion?.dl ? 'dd' : 'div')"
    :class="[
      styles.accordionExpandableContent, {
        [styles.modifiers.fixed]: fixed,
        [styles.modifiers.expanded]: managedExpanded,
      },
    ]"
    :hidden="!managedExpanded"
  >
    <div :class="styles.accordionExpandableContentBody">
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { inject, type ButtonHTMLAttributes } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useManagedProp } from '../../use';
import { AccordionKey } from './Accordion.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfAccordionItem',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'aria-expanded'> {
  title?: string;
  toggleComponent?: string;
  contentComponent?: string;
  fixed?: boolean;
  expanded?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'update:expanded', value: boolean): void;
  (name: 'click', event: PointerEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  toggle?: (props?: Record<never, never>) => any;
}>();

const accordion = inject(AccordionKey, undefined);
const managedExpanded = useManagedProp('expanded', false);

function handleClick(event: PointerEvent) {
  managedExpanded.value = !managedExpanded.value;
  emit('click', event);
}
</script>
