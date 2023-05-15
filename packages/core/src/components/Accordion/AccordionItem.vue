<template>
  <component :is="toggleComponent || (accordion?.dl ? 'dt' : (typeof accordion?.level === 'string' ? accordion?.level : `h${accordion?.level}`))">
    <button
      v-bind="$attrs"
      type="button"
      :class="[
        styles.accordionToggle, {
          [styles.modifiers.expanded]: managedExpanded,
        },
      ]"
      :aria-expanded="managedExpanded"
      @click="managedExpanded = !managedExpanded"
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
      styles.accordionExpandedContent, {
        [styles.modifiers.fixed]: fixed,
        [styles.modifiers.expanded]: managedExpanded,
      },
    ]"
    :hidden="!managedExpanded"
  >
    <div :class="styles.accordionExpandedContentBody">
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { inject } from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { useManagedProp } from '../../use';
import { AccordionKey } from './Accordion.vue';

defineOptions({
  name: 'PfAccordionItem',
});

defineProps<{
  title?: string;
  toggleComponent?: string;
  contentComponent?: string;
  fixed?: boolean;
  expanded?: boolean;
}>();

defineEmits<{
  (name: 'expanded', value: boolean): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
  toggle?: (props: Record<never, never>) => any;
}>();

const accordion = inject(AccordionKey, undefined);
const managedExpanded = useManagedProp('expanded', false);
</script>
