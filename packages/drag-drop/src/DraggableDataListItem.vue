<template>
  <li
    :id="String(id)"
    ref="el"
    :class="[styles.dataListItem, { [dragStyles.droppable]: dragging, [dragStyles.modifiers.dragging]: dragging }]"
  >
    <pf-data-list-item-row>
      <pf-data-list-control>
        <pf-drag-button ref="handle" :class="styles.dataListItemDraggableButton" />
      </pf-data-list-control>
      <slot />
    </pf-data-list-item-row>
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
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import dragStyles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { computed, useTemplateRef, type LiHTMLAttributes, type VNode } from 'vue';
import { useSortable } from '@dnd-kit/vue/sortable';
import { PfDataListControl, PfDataListItemRow } from '@vue-patternfly/core';
import PfDragButton from './DragButton.vue';

defineOptions({
  name: 'PfDraggableDataListItem',
});

const props = withDefaults(defineProps<Props>(), {
  index: 0,
});

defineSlots<{
  /** Controls and cells of the data list item, after the drag button */
  default?: (props?: Record<never, never>) => VNode[];
}>();

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
    });

const dragging = computed(() => !!sortable?.isDragSource.value);
</script>
