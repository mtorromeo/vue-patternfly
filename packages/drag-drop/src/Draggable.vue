<template>
  <div ref="el" :class="{ [styles.droppable]: dragging, [styles.modifiers.dragging]: dragging }">
    <pf-drag-button ref="handle" v-bind="dragButtonAriaLabel ? { 'aria-label': dragButtonAriaLabel } : {}" />
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, 'id'> {
  /** Id of the draggable object */
  id: string | number;
  /** Position of the draggable object in its drop zone */
  index?: number;
  /** Id of the drop zone holding the draggable object */
  group?: string;
  /** @hide Rendered as the drag overlay copy, which does not register with the drag and drop manager */
  overlay?: boolean;
  /** Accessible name of the drag button. */
  dragButtonAriaLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DragDrop/drag-drop';
import { computed, useTemplateRef, type HTMLAttributes, type VNode } from 'vue';
import { useSortable } from '@dnd-kit/vue/sortable';
import PfDragButton from './DragButton.vue';

defineOptions({
  name: 'PfDraggable',
});

const props = withDefaults(defineProps<Props>(), {
  index: 0,
});

defineSlots<{
  /** Content of the draggable object */
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
