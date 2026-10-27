<template>
  <pf-button
    ref="button"
    variant="plain"
    aria-label="Drag button"
    :type="type"
    :disabled="disabled"
    style="touch-action: none"
  >
    <template #icon>
      <span :class="styles.dataListItemDraggableIcon">
        <grip-vertical-icon />
      </span>
    </template>
  </pf-button>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'disabled'> {
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Flag indicating if drag is disabled for the item */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { computed, useTemplateRef, type ButtonHTMLAttributes, type ComponentPublicInstance } from 'vue';
import { PfButton } from '@vue-patternfly/core';
import GripVerticalIcon from '@vue-patternfly/icons/grip-vertical-icon';

defineOptions({
  name: 'PfDragButton',
});

withDefaults(defineProps<Props>(), {
  type: 'button',
});

// PfButton exposes its root element, rendered through a router-link fragment
const button = useTemplateRef<{ el?: HTMLElement | ComponentPublicInstance | null }>('button');

defineExpose({
  /** The button element, used as the drag handle */
  el: computed(() => button.value?.el),
});
</script>
