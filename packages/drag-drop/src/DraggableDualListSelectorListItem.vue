<template>
  <li
    :id="String(id)"
    ref="el"
    :class="[
      styles.dualListSelectorListItem,
      { [dragStyles.droppable]: dragging, [dragStyles.modifiers.dragging]: dragging },
    ]"
    role="presentation"
  >
    <div :class="[styles.dualListSelectorListItemRow, { [styles.modifiers.selected]: selected }]">
      <pf-drag-button ref="handle" :class="styles.dualListSelectorDraggable" />
      <span
        :class="styles.dualListSelectorItem"
        :aria-selected="selected"
        role="option"
        tabindex="-1"
        @click="handleClick"
        @keydown="handleKeydown"
      >
        <span :class="styles.dualListSelectorItemMain">
          <span :class="styles.dualListSelectorItemText">
            <slot />
          </span>
        </span>
      </span>
    </div>
  </li>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ Omit<LiHTMLAttributes, 'id'> {
  /** Id of the draggable object */
  id: string | number;
  /** Position of the draggable object in its drop zone */
  index?: number;
  /** Id of the drop zone holding the draggable object */
  group?: string;
  /** @hide Rendered as the drag overlay copy, which does not register with the drag and drop manager */
  overlay?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import dragStyles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { computed, inject, useTemplateRef, type LiHTMLAttributes, type VNode } from 'vue';
import { useSortable } from '@dnd-kit/vue/sortable';
import { DualListSelectorPaneKey } from '@vue-patternfly/core/components/DualListSelector/common';
import PfDragButton from './DragButton.vue';

defineOptions({
  name: 'PfDraggableDualListSelectorListItem',
});

const props = withDefaults(defineProps<Props>(), {
  index: 0,
});

/** Flag indicating the option is selected, toggled when the option is clicked */
const selected = defineModel<boolean>('selected', { default: false });

const emit = defineEmits<{
  /** Fired when the option is clicked, or activated with Enter or Space */
  (name: 'optionSelect', event: MouseEvent, id: string): void;
}>();

defineSlots<{
  /** Content of the option */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const pane = inject(DualListSelectorPaneKey, undefined);

const el = useTemplateRef('el');
const handle = useTemplateRef('handle');

const sortable = props.overlay
  ? undefined
  : useSortable({
      id: () => props.id,
      index: () => props.index,
      group: () => props.group,
      element: el,
      handle: () => handle.value?.el,
      // the options move instantly, without the sort animation
      transition: null,
    });

const dragging = computed(() => !!sortable?.isDragSource.value);

function handleClick(event: MouseEvent) {
  const id = String(props.id);
  if (pane) {
    pane.focusedOption.value = id;
  }
  selected.value = !selected.value;
  emit('optionSelect', event, id);
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === ' ' || event.key === 'Enter') {
    (document.activeElement as HTMLElement | null)?.click();
    event.preventDefault();
  }
}
</script>
