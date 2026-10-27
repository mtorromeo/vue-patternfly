<template>
  <component
    :is="nested ? 'ul' : PassThrough"
    v-bind="nested ? { class: styles.dualListSelectorList, role: 'group', inert: inert || undefined } : {}"
  >
    <pf-dual-list-selector-tree-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      :default-expanded="item.defaultExpanded ?? defaultAllExpanded"
      :badge="item.badge ?? badges"
      :disabled="item.disabled ?? managedDisabled"
      @option-check="(event, checked, itemData) => emit('optionCheck', event, checked, itemData)"
    >
      <template v-if="item.children" #default="{ inert: childInert }">
        <pf-dual-list-selector-tree
          nested
          :inert="childInert"
          :data="item.children"
          :badges="badges"
          :default-all-expanded="defaultAllExpanded"
          :disabled="disabled"
          @option-check="(event, checked, itemData) => emit('optionCheck', event, checked, itemData)"
        />
      </template>
    </pf-dual-list-selector-tree-item>
  </component>
</template>

<script lang="ts">
interface Props {
  /** Options of the tree, or a function returning them */
  data: DualListSelectorTreeItemData[] | (() => DualListSelectorTreeItemData[]);
  /** Flag indicating if all options with children have badges, unless their `badge` is set. */
  badges?: boolean;
  /** Sets the default expanded state of the options, unless their `defaultExpanded` is set. */
  defaultAllExpanded?: boolean;
  /** Flag indicating if the tree is disabled; defaults to the disabled state of the pane. */
  disabled?: boolean;
  /** @hide Flag indicating if the tree is nested in an option */
  nested?: boolean;
  /** @hide Flag indicating the nested tree is not interactive, as a collapsed list rendered for the animations */
  inert?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { computed, inject } from 'vue';
import PassThrough from '../../helpers/PassThrough.vue';
import PfDualListSelectorTreeItem from './DualListSelectorTreeItem.vue';
import { DualListSelectorPaneKey, type DualListSelectorTreeItemData } from './common';

defineOptions({
  name: 'PfDualListSelectorTree',
});

const props = withDefaults(defineProps<Props>(), {
  disabled: undefined,
});

const emit = defineEmits<{
  /** Fired when an option is checked or unchecked, with its new checked state and its data */
  (name: 'optionCheck', event: Event, checked: boolean, itemData: DualListSelectorTreeItemData): void;
}>();

const pane = inject(DualListSelectorPaneKey, undefined);

const items = computed(() => (typeof props.data === 'function' ? props.data() : props.data));
const managedDisabled = computed(() => props.disabled ?? !!pane?.disabled.value);
</script>
