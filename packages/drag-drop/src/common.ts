import type { DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/vue';
import type { InjectionKey, Ref, Slot } from 'vue';

export type DragDropContainerDragStartEvent = DragStartEvent;
export type DragDropContainerDragOverEvent = DragOverEvent;
export type DragDropContainerDragEndEvent = DragEndEvent;
/** A cancelled drag ends with a `DragEndEvent` whose `canceled` flag is set */
export type DragDropContainerDragCancelEvent = DragEndEvent;
export type DragDropSortDragStartEvent = DragStartEvent;
export type DragDropSortDragEndEvent = DragEndEvent;

export interface DraggableObject {
  /** Unique id of the draggable object */
  id: string | number;
  /** Text rendered in the draggable object when no `item` slot is given */
  content?: string;
  /** Attributes bound to the rendered wrapper of the draggable object */
  attrs?: Record<string, unknown>;
}

/**
 * Determines which component wraps the draggable objects.
 * `default` wraps each draggable object in a div with a drag button,
 * `data-list` wraps it in a data list item whose first control is the drag button.
 */
export type DragDropVariant = 'default' | 'data-list';

export interface DragDropContainerProvide {
  /** Items of every drop zone moved by the drag in progress, undefined when idle */
  dragItems: Readonly<Ref<Record<string, DraggableObject[]> | undefined>>;
  variant: Ref<DragDropVariant>;
  /** Registers the `item` slot of a drop zone, used to render its items in the drag overlay */
  registerItemSlot(id: string, slot: () => Slot | undefined): () => void;
}

export const DragDropContainerKey = Symbol('DragDropContainerKey') as InjectionKey<DragDropContainerProvide>;

export function findContainer(items: Record<string, DraggableObject[]>, id: string | number) {
  if (id in items) {
    return String(id);
  }
  return Object.keys(items).find(key => items[key].some(item => item.id === id));
}
