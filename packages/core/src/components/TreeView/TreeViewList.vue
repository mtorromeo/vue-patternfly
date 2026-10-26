<template>
  <ul
    :id="id"
    :class="`${styles.treeView}__list`"
    :role="parentItem ? 'group' : 'tree'"
    :aria-multiselectable="parentItem ? undefined : multiSelectable"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledby"
    :inert="inert || undefined"
  >
    <pf-tree-view-list-item v-for="item in data" :key="item.id ?? item.name" :item="item" :parent-item="parentItem">
      <template v-if="item.children" #default="{ inert: childInert }">
        <pf-tree-view-list :data="item.children" :parent-item="item" :inert="childInert" />
      </template>
    </pf-tree-view-list-item>
  </ul>
</template>

<script lang="ts">
interface Props {
  /** The items of the list */
  data: TreeViewDataItem[];
  /** The parent item of a nested list */
  parentItem?: TreeViewDataItem;
  /** Id of the list */
  id?: string;
  /** Flag indicating whether multiple nodes can be selected, set on the root list */
  multiSelectable?: boolean;
  /** Accessible name of the root list */
  ariaLabel?: string;
  /** Id of the element labelling the root list */
  ariaLabelledby?: string;
  /** Flag indicating the list is not interactive, as a collapsed nested list rendered for the animations */
  inert?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import PfTreeViewListItem from './TreeViewListItem.vue';
import type { TreeViewDataItem } from './common';

defineOptions({
  name: 'PfTreeViewList',
});

defineProps<Props>();
</script>
