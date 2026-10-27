<template>
  <doc-page title="Drag and drop">
    <template #description
      ><b>Drag and drop</b> lets users reorder items in a list, or move them between lists, by dragging them with a
      pointer or with the keyboard.</template
    >

    <template #apidocs>
      <component-info name="PfDragDropSort" />
      <component-info name="PfDragDropContainer" />
      <component-info name="PfDroppable" />
    </template>

    <pre v-md>
      Note: this drag and drop implementation lives in its own package at [@vue-patternfly/drag-drop](https://www.npmjs.com/package/@vue-patternfly/drag-drop)!

      ## Differences from patternfly-react
      - Built on [`@dnd-kit/vue`](https://dndkit.com/vue) instead of the React-only `@dnd-kit/core` and `@dnd-kit/sortable`. The sensors (pointer activated after 8px, keyboard), the drag overlay and the screen reader instructions work as upstream, but the drag handles are described as `draggable` instead of `sortable`, and the `sensors`, `modifiers` and `plugins` props take `@dnd-kit/dom` values instead of the `DndContext` props.
      - The items are bound with `v-model:items` on `pf-drag-drop-sort` and `pf-drag-drop-container`, which updates the model on drop; the `drop`, `drag`, `container-move` and `cancel` events replace `onDrop`, `onDrag`, `onContainerMove` and `onCancel`, with the same arguments. During a drag the container renders the moved items itself and commits them on drop, so the parent does not need to store the items on `container-move`, nor restore them on `cancel`.
      - The content of each item is rendered by the `#item="{ item }"` slot, defaulting to the `content` string of the `DraggableObject`, instead of a `content` React node; `attrs` replaces `props`, bound to the wrapper of the item.
      - The `component` prop replaces `wrapper` (e.g. `component="pf-data-list"`); unknown attributes of `pf-droppable` and `pf-drag-drop-sort` are bound to it, instead of cloning a `wrapper` element or passing it as `children`.
      - `variant` takes `default` or `data-list` instead of `default` or `DataList`. `pf-droppable` uses the variant of its `pf-drag-drop-container` unless it sets its own.
      - `overlay-attrs` replaces `overlayProps`, and `append-to` takes a selector or an element instead of a function.
      - The `DualListSelectorList` variant and its demos are not ported yet: they need the dual list selector component.

      See [common differences from patternfly-react](#/).

      ## Sorting examples
    </pre>

    <story-canvas title="Basic drag and drop sorting">
      <pf-drag-drop-sort v-model:items="basicItems" />
    </story-canvas>

    <story-canvas title="Multiple drop zones">
      <pf-drag-drop-container v-model:items="containerItems">
        <h1>group 1</h1>
        <pf-droppable id="container1" :items="containerItems.container1" />
        <br />
        <h1>group 2</h1>
        <pf-droppable id="container2" :items="containerItems.container2" />
      </pf-drag-drop-container>
    </story-canvas>

    <pre v-md>
      ## Sorting demos

      To enable drag and drop for compatible components, use `pf-drag-drop-sort` with the `variant` and the `component` that wraps the items, and bind the sortable items with `v-model:items`. `pf-drag-drop-sort` renders the items inside the component, so it takes no other children; the `#item` slot renders the content of each item.
    </pre>

    <story-canvas title="Drag and drop sortable data list">
      <template #intro>
        <pre v-md>
          To enable reordering in a `pf-data-list`, set the `component` of `pf-drag-drop-sort` to `pf-data-list` and the `variant` to `data-list`.
        </pre>
      </template>

      <pf-drag-drop-sort
        v-model:items="dataListItems"
        variant="data-list"
        component="pf-data-list"
        :overlay-attrs="{ compact: true }"
        aria-label="draggable data list example"
        compact
      >
        <template #item="{ item }">
          <pf-data-list-control>
            <pf-data-list-check
              :id="`check-drag-${item.content}`"
              :aria-labelledby="item.content"
              :name="item.content"
              other-controls
            />
          </pf-data-list-control>
          <pf-data-list-cell>
            <span :id="item.content">{{ item.content }}</span>
          </pf-data-list-cell>
        </template>
      </pf-drag-drop-sort>
    </story-canvas>

    <pre v-md>
      ## Multiple drop zone demos

      To enable multiple drop zones, wrap the components with `pf-drag-drop-container`, place one or more `pf-droppable` within the container, and set the `variant` on the container. All the draggable items are bound to `pf-drag-drop-container` with `v-model:items`, keyed by the id of their drop zone, and each `pf-droppable` is passed its own items.

      `pf-droppable` renders the items itself, so it takes no children besides the `#item` slot. To render the items in a component instead of a `div`, set its `component`.
    </pre>

    <story-canvas title="Data list">
      <template #intro>
        <pre v-md>
          To enable multiple drop zones with `pf-data-list` components, place one or more `pf-droppable` with `component="pf-data-list"` within `pf-drag-drop-container`, and set the `variant` of the container to `data-list`.
        </pre>
      </template>

      <pf-drag-drop-container v-model:items="dataListGroups" variant="data-list" :overlay-attrs="{ compact: true }">
        <pf-grid gutter>
          <pf-grid-item :span="6">
            <h1>group 1</h1>
            <pf-droppable
              id="group1"
              :items="dataListGroups.group1"
              component="pf-data-list"
              aria-label="draggable data list example"
              compact
            >
              <template #item="{ item }">
                <pf-data-list-control>
                  <pf-data-list-check
                    :id="`check-dragdrop-${item.content}`"
                    :aria-labelledby="`group-${item.content}`"
                    :name="item.content"
                    other-controls
                  />
                </pf-data-list-control>
                <pf-data-list-cell>
                  <span :id="`group-${item.content}`">{{ item.content }}</span>
                </pf-data-list-cell>
              </template>
            </pf-droppable>
          </pf-grid-item>
          <pf-grid-item :span="6">
            <h1>group 2</h1>
            <pf-droppable
              id="group2"
              :items="dataListGroups.group2"
              component="pf-data-list"
              aria-label="draggable data list example"
              compact
            >
              <template #item="{ item }">
                <pf-data-list-control>
                  <pf-data-list-check
                    :id="`check-dragdrop-${item.content}`"
                    :aria-labelledby="`group-${item.content}`"
                    :name="item.content"
                    other-controls
                  />
                </pf-data-list-control>
                <pf-data-list-cell>
                  <span :id="`group-${item.content}`">{{ item.content }}</span>
                </pf-data-list-cell>
              </template>
            </pf-droppable>
          </pf-grid-item>
        </pf-grid>
      </pf-drag-drop-container>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { DraggableObject } from '@vue-patternfly/drag-drop';

const basicItems = ref<DraggableObject[]>([
  { id: 'basic-1', content: 'one' },
  { id: 'basic-2', content: 'two' },
  { id: 'basic-3', content: 'three' },
]);

const containerItems = ref<Record<string, DraggableObject[]>>({
  container1: [
    { id: 'button-1', content: 'one' },
    { id: 'button-2', content: 'two' },
    { id: 'button-3', content: 'three' },
  ],
  container2: [
    { id: 'button-4', content: 'four' },
    { id: 'button-5', content: 'five' },
    { id: 'button-6', content: 'six' },
  ],
});

const getItems = (from: number, count: number): DraggableObject[] =>
  Array.from({ length: count }, (_, idx) => from + idx).map(idx => ({
    id: `data-list-item-${idx}`,
    content: `item-${idx}`,
  }));

const dataListItems = ref(getItems(0, 10));

const dataListGroups = ref<Record<string, DraggableObject[]>>({
  group1: getItems(0, 5),
  group2: getItems(5, 5),
});
</script>
