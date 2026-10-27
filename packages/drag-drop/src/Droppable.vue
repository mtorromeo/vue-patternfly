<template>
  <component :is="component" ref="el">
    <template v-for="(item, index) in renderedItems" :key="item.id">
      <pf-draggable-data-list-item
        v-if="managedVariant === 'data-list'"
        :id="item.id"
        :index="index"
        :group="id"
        v-bind="item.attrs"
      >
        <slot name="item" :item="item">{{ item.content }}</slot>
      </pf-draggable-data-list-item>
      <pf-draggable-dual-list-selector-list-item
        v-else-if="managedVariant === 'dual-list-selector'"
        :id="item.id"
        :index="index"
        :group="id"
        v-bind="item.attrs"
      >
        <slot name="item" :item="item">{{ item.content }}</slot>
      </pf-draggable-dual-list-selector-list-item>
      <pf-draggable v-else :id="item.id" :index="index" :group="id" v-bind="item.attrs">
        <slot name="item" :item="item">{{ item.content }}</slot>
      </pf-draggable>
    </template>
  </component>
</template>

<script lang="ts">
import type { Component } from 'vue';
import type { DragDropVariant, DraggableObject } from './common';

// unknown attributes are bound to the wrapping component, e.g. `compact` of pf-data-list
interface Props<T extends DraggableObject> extends /* @vue-ignore */ Record<string, unknown> {
  /** Id of the drop zone, the key of its items in the pf-drag-drop-container items */
  id?: string;
  /** Draggable objects of the drop zone */
  items: T[];
  /** Element or component wrapping the draggable objects, e.g. pf-data-list; unknown attributes are bound to it */
  component?: string | Component;
  /** Determines which component wraps each draggable object; defaults to the variant of the pf-drag-drop-container */
  variant?: DragDropVariant;
}
</script>

<script lang="ts" setup generic="T extends DraggableObject = DraggableObject">
import { computed, inject, onBeforeUnmount, useTemplateRef, type ComponentPublicInstance, type VNode } from 'vue';
import { CollisionPriority } from '@dnd-kit/abstract';
import { useDroppable } from '@dnd-kit/vue';
import PfDraggable from './Draggable.vue';
import PfDraggableDataListItem from './DraggableDataListItem.vue';
import PfDraggableDualListSelectorListItem from './DraggableDualListSelectorListItem.vue';
import { DragDropContainerKey } from './common';

defineOptions({
  name: 'PfDroppable',
});

// destructured defaults: withDefaults cannot infer them on props open to any attribute
const { id = 'droppable', items, component = 'div', variant } = defineProps<Props<T>>();

const slots = defineSlots<{
  /** Content of each draggable object, defaulting to its `content` */
  item?: (props: { item: T }) => VNode[];
}>();

const container = inject(DragDropContainerKey, undefined);

const managedVariant = computed(() => variant ?? container?.variant.value ?? 'default');

// during a drag the container holds the moved items, which are committed to the model on drop
const renderedItems = computed(() => (container?.dragItems.value?.[id] ?? items) as T[]);

const el = useTemplateRef<HTMLElement | ComponentPublicInstance>('el');

useDroppable({
  id: () => id,
  element: el,
  // the draggable objects take precedence: the zone itself is only the target of drops on its empty space
  collisionPriority: CollisionPriority.Low,
});

if (container) {
  onBeforeUnmount(container.registerItemSlot(id, () => slots.item));
}
</script>
