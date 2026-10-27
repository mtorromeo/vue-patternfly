<template>
  <pf-drag-drop-container
    v-model:items="containerItems"
    :variant="variant"
    :overlay-attrs="overlayAttrs"
    :append-to="appendTo"
    @drag="handleDrag"
    @drop="handleDrop"
  >
    <pf-droppable :id="dropZoneId" :items="items" :component="component" v-bind="$attrs">
      <template v-if="$slots.item" #item="{ item }">
        <slot name="item" :item="item" />
      </template>
    </pf-droppable>
  </pf-drag-drop-container>
</template>

<script lang="ts">
import type { Component, HTMLAttributes } from 'vue';
import type { DragDropVariant } from './common';

// unknown attributes are bound to the wrapping component, e.g. `compact` of pf-data-list
interface Props extends /* @vue-ignore */ Record<string, unknown> {
  /** Id of the drop zone */
  id?: string;
  /** Element or component wrapping the draggable objects, e.g. pf-data-list; unknown attributes are bound to it */
  component?: string | Component;
  /** Determines which component wraps each draggable object */
  variant?: DragDropVariant;
  /** Attributes bound to the pf-data-list of the drag overlay in the `data-list` variant, e.g. `{ compact: true }` */
  overlayAttrs?: Record<string, unknown> & HTMLAttributes;
  /** The parent container to append the drag overlay to. Defaults to document.body. */
  appendTo?: string | HTMLElement;
}
</script>

<script lang="ts" setup generic="T extends DraggableObject = DraggableObject">
import { computed, type VNode } from 'vue';
import PfDragDropContainer from './DragDropContainer.vue';
import PfDroppable from './Droppable.vue';
import type { DragDropSortDragEndEvent, DragDropSortDragStartEvent, DraggableObject } from './common';

defineOptions({
  name: 'PfDragDropSort',
  inheritAttrs: false,
});

// destructured defaults: withDefaults cannot infer them on props open to any attribute
const {
  id = 'droppable',
  component = 'div',
  variant = 'default',
  overlayAttrs,
  appendTo = 'body',
} = defineProps<Props>();

/** Sorted array of draggable objects, updated when an item is dropped */
const items = defineModel<T[]>('items', { required: true });

const emit = defineEmits<{
  /** Fired when the user begins dragging a draggable object */
  (name: 'drag', event: DragDropSortDragStartEvent, oldIndex: number): void;
  /** Fired when the user drops a draggable object that changed position */
  (name: 'drop', event: DragDropSortDragEndEvent, items: T[], oldIndex: number, newIndex: number): void;
}>();

defineSlots<{
  /** Content of each draggable object, defaulting to its `content` */
  item?: (props: { item: T }) => VNode[];
}>();

const dropZoneId = computed(() => id);

const containerItems = computed({
  get: () => ({ [dropZoneId.value]: items.value }),
  set: value => {
    items.value = value[dropZoneId.value];
  },
});

function indexOf(list: T[], id: string | number) {
  return list.findIndex(item => item.id === id);
}

// the model is updated before the drop event: the old index comes from the items at drag start
let oldIndex = -1;

function handleDrag(event: DragDropSortDragStartEvent) {
  const id = event.operation.source?.id;
  oldIndex = id === undefined ? -1 : indexOf(items.value, id);
  emit('drag', event, oldIndex);
}

function handleDrop(event: DragDropSortDragEndEvent, newItems: Record<string, T[]>) {
  const id = event.operation.source?.id;
  const sorted = newItems[dropZoneId.value];
  emit('drop', event, sorted, oldIndex, id === undefined ? -1 : indexOf(sorted, id));
}
</script>
