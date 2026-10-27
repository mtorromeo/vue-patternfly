<template>
  <drag-drop-provider
    :sensors="sensors"
    :modifiers="modifiers"
    :plugins="plugins"
    @drag-start="handleDragStart"
    @drag-over="handleDragOver"
    @drag-end="handleDragEnd"
  >
    <slot />
    <teleport :to="appendTo">
      <drag-overlay>
        <template #default="{ source }">
          <div
            v-if="overlayItem(source.id)"
            :class="[styles.draggable, styles.modifiers.dragging]"
            style="
              --pf-v6-c-draggable--m-dragging--BackgroundColor: var(
                --pf-t--global--background--color--floating--default
              );
            "
          >
            <pf-data-list v-if="variant === 'data-list'" aria-label="draggable overlay" v-bind="overlayAttrs">
              <pf-draggable-data-list-item :id="source.id" overlay v-bind="overlayItem(source.id)?.item.attrs">
                <component :is="overlayContent(source.id)" />
              </pf-draggable-data-list-item>
            </pf-data-list>
            <pf-draggable v-else :id="source.id" overlay v-bind="overlayItem(source.id)?.item.attrs">
              <component :is="overlayContent(source.id)" />
            </pf-draggable>
          </div>
        </template>
      </drag-overlay>
    </teleport>
  </drag-drop-provider>
</template>

<script lang="ts">
type Modifiers = NonNullable<DragDropProviderProps['modifiers']> extends Customizable<infer M> ? M : never;
type Plugins = NonNullable<DragDropProviderProps['plugins']>;

const defaultSensors: Sensors = [
  PointerSensor.configure({
    activationConstraints: [new PointerActivationConstraints.Distance({ value: 8 })],
  }),
  KeyboardSensor,
];

const defaultModifiers: Customizable<Modifiers> = defaults => [...defaults, RestrictToWindow];
</script>

<script lang="ts" setup generic="T extends DraggableObject = DraggableObject">
import styles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { provide, shallowRef, toRef, type HTMLAttributes, type Slot, type VNode } from 'vue';
import type { Customizable, UniqueIdentifier } from '@dnd-kit/abstract';
import {
  KeyboardSensor,
  PointerActivationConstraints,
  PointerSensor,
  type DragDropManager,
  type Sensors,
} from '@dnd-kit/dom';
import { RestrictToWindow } from '@dnd-kit/dom/modifiers';
import { move } from '@dnd-kit/helpers';
import { DragDropProvider, DragOverlay, type DragDropProviderProps } from '@dnd-kit/vue';
import { PfDataList } from '@vue-patternfly/core';
import PfDraggable from './Draggable.vue';
import PfDraggableDataListItem from './DraggableDataListItem.vue';
import {
  DragDropContainerKey,
  findContainer,
  type DragDropContainerDragCancelEvent,
  type DragDropContainerDragEndEvent,
  type DragDropContainerDragOverEvent,
  type DragDropContainerDragStartEvent,
  type DragDropVariant,
  type DraggableObject,
} from './common';

defineOptions({
  name: 'PfDragDropContainer',
});

const props = withDefaults(
  defineProps<{
    /** Determines which component wraps the draggable objects of the drop zones and of the drag overlay */
    variant?: DragDropVariant;
    /** Attributes bound to the pf-data-list of the drag overlay in the `data-list` variant, e.g. `{ compact: true }` */
    overlayAttrs?: Record<string, unknown> & HTMLAttributes;
    /** The parent container to append the drag overlay to. Defaults to document.body. */
    appendTo?: string | HTMLElement;
    /** dnd-kit sensors, replacing the default pointer (activated after 8px) and keyboard sensors */
    sensors?: Sensors;
    /** dnd-kit modifiers, by default the dnd-kit ones plus the restriction to the window edges */
    modifiers?: Customizable<Modifiers>;
    /** dnd-kit plugins */
    plugins?: Plugins;
  }>(),
  {
    variant: 'default',
    overlayAttrs: undefined,
    appendTo: 'body',
    sensors: () => defaultSensors,
    modifiers: () => defaultModifiers,
    plugins: undefined,
  },
);

/** Draggable objects of every drop zone, keyed by the zone ids; updated when an item is dropped */
const items = defineModel<Record<string, T[]>>('items', { required: true });

const emit = defineEmits<{
  /** Fired when the user begins dragging a draggable object */
  (name: 'drag', event: DragDropContainerDragStartEvent): void;
  /** Fired when an item is dragged to another drop zone, with the items as they would be dropped */
  (name: 'containerMove', event: DragDropContainerDragOverEvent, items: Record<string, T[]>): void;
  /** Fired when the user drops a draggable object that changed position, with the new items */
  (name: 'drop', event: DragDropContainerDragEndEvent, items: Record<string, T[]>): void;
  /** Fired when the drag is cancelled, with the items as they were before the drag */
  (name: 'cancel', event: DragDropContainerDragCancelEvent, items: Record<string, T[]>): void;
}>();

defineSlots<{
  /** Content containing one or more pf-droppable zones */
  default?: (props?: Record<never, never>) => VNode[];
}>();

/** Items moved by the drag in progress, rendered by the drop zones until the drop commits them */
const dragItems = shallowRef<Record<string, T[]>>();
const itemSlots = new Map<string, () => Slot | undefined>();

provide(DragDropContainerKey, {
  dragItems,
  variant: toRef(props, 'variant'),
  registerItemSlot(id, slot) {
    itemSlots.set(id, slot);
    return () => itemSlots.delete(id);
  },
});

function overlayItem(id: UniqueIdentifier) {
  const current = dragItems.value ?? items.value;
  const zone = findContainer(current, id);
  const item = zone === undefined ? undefined : current[zone].find(item => item.id === id);
  return zone === undefined || !item ? undefined : { zone, item };
}

function overlayContent(id: UniqueIdentifier) {
  const found = overlayItem(id);
  if (!found) {
    return;
  }
  const slot = itemSlots.get(found.zone)?.();
  return () => (slot ? slot({ item: found.item }) : found.item.content);
}

function handleDragStart(event: DragDropContainerDragStartEvent) {
  dragItems.value = items.value;
  emit('drag', event);
}

function handleDragOver(event: DragDropContainerDragOverEvent, _manager: DragDropManager) {
  const { source } = event.operation;
  const previous = dragItems.value ?? items.value;
  const next = move(previous, event);
  if (!source || next === previous) {
    return;
  }

  // the items are rendered from the new state: the optimistic sorting of dnd-kit must not move the elements too
  event.preventDefault();
  dragItems.value = next;

  if (findContainer(previous, source.id) !== findContainer(next, source.id)) {
    emit('containerMove', event, next);
  }
}

function handleDragEnd(event: DragDropContainerDragEndEvent, _manager: DragDropManager) {
  const previous = items.value;
  const next = dragItems.value ?? previous;
  dragItems.value = undefined;

  if (event.canceled) {
    emit('cancel', event, previous);
    return;
  }

  if (next !== previous) {
    items.value = next;
    emit('drop', event, next);
  }
}
</script>
