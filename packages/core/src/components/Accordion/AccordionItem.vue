<template>
  <component v-bind="ouiaProps" :is="toggleComponent || (accordion?.dl ? 'dt' : (typeof accordion?.level === 'string' ? accordion?.level : `h${accordion?.level}`))">
    <button
      v-bind="$attrs"
      type="button"
      :class="[
        styles.accordionToggle, {
          [styles.modifiers.expanded]: expanded,
        },
      ]"
      :aria-expanded="expanded"
      @click="handleClick($event as PointerEvent)"
    >
      <span v-if="accordion?.togglePosition === 'start'" :class="styles.accordionToggleIcon">
        <angle-right-icon />
      </span>
      <span :class="styles.accordionToggleText">
        <slot name="toggle">{{ title }}</slot>
      </span>
      <span v-if="accordion?.togglePosition === 'end'" :class="styles.accordionToggleIcon">
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
        [styles.modifiers.expanded]: expanded,
      },
    ]"
    :hidden="!expanded"
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
import { AccordionKey } from './Accordion.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfAccordionItem',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'aria-expanded'> {
  title?: string;
  toggleComponent?: string;
  contentComponent?: string;
  fixed?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const expanded = defineModel<boolean>('expanded', { default: false });

const emit = defineEmits<{
  (name: 'click', event: PointerEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  toggle?: (props?: Record<never, never>) => any;
}>();

const accordion = inject(AccordionKey, undefined);

function handleClick(event: PointerEvent) {
  expanded.value = !expanded.value;
  emit('click', event);
}
</script>
