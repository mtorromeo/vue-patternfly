<template>
  <div :class="styles.wizardHeader">
    <div v-if="!closeHidden" :class="styles.wizardClose">
      <pf-button variant="plain" :aria-label="closeButtonAriaLabel" @click="emit('close', $event)">
        <template #icon>
          <xmark-icon />
        </template>
      </pf-button>
    </div>
    <div :class="styles.wizardTitle">
      <h2 :id="titleId" :class="styles.wizardTitleText">
        <slot name="title">{{ title || '\u00a0' }}</slot>
      </h2>
    </div>
    <component
      :is="descriptionComponent"
      v-if="description || $slots.description"
      :id="descriptionId"
      :class="styles.wizardDescription"
    >
      <slot name="description">{{ description }}</slot>
    </component>
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Title of the wizard, replaced by the title slot */
  title?: string;
  /** Description of the wizard, replaced by the description slot */
  description?: string;
  /** Component type of the description */
  descriptionComponent?: 'div' | 'p';
  /** Flag indicating whether the close button should be hidden */
  closeHidden?: boolean;
  /** Aria-label applied to the X (Close) button */
  closeButtonAriaLabel?: string;
  /** id for the title */
  titleId?: string;
  /** id for the description */
  descriptionId?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import type { HTMLAttributes, VNode } from 'vue';
import PfButton from '../Button.vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';

defineOptions({
  name: 'PfWizardHeader',
});

withDefaults(defineProps<Props>(), {
  descriptionComponent: 'div',
});

const emit = defineEmits<{
  (name: 'close', event: PointerEvent): void;
}>();

defineSlots<{
  /** Title of the wizard */
  title?: (props?: Record<never, never>) => VNode[];
  /** Description of the wizard */
  description?: (props?: Record<never, never>) => VNode[];
}>();
</script>
