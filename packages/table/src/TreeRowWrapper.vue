<template>
  <pf-tr
    :aria-level="level"
    :aria-posinset="posinset"
    :aria-setsize="setsize"
    :aria-expanded="!!expanded"
    :hidden="hidden"
    :class="{
      [styles.modifiers.expanded]: expanded,
      [stylesTreeView.modifiers.treeViewDetailsExpanded]: detailsExpanded,
    }"
  >
    <slot />
  </pf-tr>
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTreeRowWrapper',
});

const props = defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

/** Flag indicating the node is expanded and its children are visible */
const expanded = defineModel<boolean | undefined>('expanded', { default: undefined });
/** Flag indicating the row's details are visible in responsive view. Shows the details toggle when bound. */
const detailsExpanded = defineModel<boolean | undefined>('detailsExpanded', { default: undefined });
/** Checked state of the row checkbox, null for indeterminate. Shows the checkbox when bound. */
const checked = defineModel<boolean | null | undefined>('checked', { default: undefined });

provide(TreeRowKey, {
  level: computed(() => props.level),
  setsize: computed(() => props.setsize),
  expanded,
  detailsExpanded,
  checked,
});
</script>

<script lang="ts">
import { computed, provide } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import styles from '@patternfly/react-styles/css/components/Table/table';
import stylesTreeView from '@patternfly/react-styles/css/components/Table/table-tree-view';
import PfTr from './Tr.vue';
import { TreeRowKey } from './common';

interface Props extends /* @vue-ignore */ Omit<ComponentProps<typeof PfTr>, 'hidden' | 'expanded'> {
  /** How many levels deep this node is nested, starting from 1 */
  level?: number;
  /** Position of this node amongst its siblings, starting from 1 */
  posinset?: number;
  /** Number of children of this node. The expand toggle is shown when greater than 0. */
  setsize?: number;
  /** Flag indicating the node's parent is collapsed and this node is hidden */
  hidden?: boolean;
}
</script>
