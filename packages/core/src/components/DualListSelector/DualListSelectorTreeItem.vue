<template>
  <li
    :id="item.id"
    :class="[
      styles.dualListSelectorListItem,
      {
        [styles.modifiers.expandable]: !!item.children,
        [styles.modifiers.expanded]: expanded,
        [styles.modifiers.disabled]: disabled,
      },
    ]"
    :aria-selected="item.checked ?? undefined"
    role="treeitem"
    :aria-expanded="expanded ? 'true' : undefined"
  >
    <div
      :class="[
        styles.dualListSelectorListItemRow,
        styles.modifiers.check,
        { [styles.modifiers.selected]: item.checked },
      ]"
    >
      <div :class="styles.dualListSelectorItem" tabindex="-1" @click="disabled ? undefined : check($event)">
        <span :class="styles.dualListSelectorItemMain">
          <div
            v-if="item.children"
            :class="styles.dualListSelectorItemToggle"
            tabindex="-1"
            @click.stop="expanded = !expanded"
            @keydown="handleToggleKeydown"
          >
            <span :class="styles.dualListSelectorItemToggleIcon">
              <angle-right-icon />
            </span>
          </div>
          <span :class="styles.dualListSelectorItemCheck">
            <input
              type="checkbox"
              :checked="item.checked || false"
              :indeterminate="item.checked === null"
              tabindex="-1"
              v-bind="item.checkAttrs"
              @change="check($event)"
              @click.stop
              @keydown="handleCheckKeydown"
            />
          </span>
          <span :class="styles.dualListSelectorItemText">{{ item.text }}</span>
          <span v-if="badge && item.children" :class="styles.dualListSelectorItemCount">
            <pf-badge v-bind="item.badgeAttrs">{{ flattenTree(item.children).length }}</pf-badge>
          </span>
        </span>
      </div>
    </div>
    <slot v-if="item.children && (expanded || animations)" :inert="!expanded" />
  </li>
</template>

<script lang="ts">
interface Props {
  /** Data of the option */
  item: DualListSelectorTreeItemData;
  /** Flag indicating this option is expanded by default */
  defaultExpanded?: boolean;
  /** Flag indicating this option has a badge */
  badge?: boolean;
  /** Flag indicating whether the option is disabled */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { computed, inject, ref, watch, type VNode } from 'vue';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import PfBadge from '../Badge.vue';
import { DualListSelectorKey, DualListSelectorPaneKey, flattenTree, type DualListSelectorTreeItemData } from './common';

defineOptions({
  name: 'PfDualListSelectorTreeItem',
});

const props = defineProps<Props>();

const emit = defineEmits<{
  (name: 'optionCheck', event: Event, checked: boolean, itemData: DualListSelectorTreeItemData): void;
}>();

defineSlots<{
  /** The nested pf-dual-list-selector-tree of the children, inert while collapsed */
  default?: (props: { inert: boolean }) => VNode[];
}>();

const dualListSelector = inject(DualListSelectorKey, undefined);
const pane = inject(DualListSelectorPaneKey, undefined);

const animations = computed(() => !!dualListSelector?.animations.value);

const expanded = ref(!!props.defaultExpanded);
watch(
  () => props.defaultExpanded,
  value => (expanded.value = !!value),
);

function check(event: Event) {
  // the checkbox reflects the checked state of the data, which the parent updates on the event
  if (event.target instanceof HTMLInputElement) {
    event.target.checked = !!props.item.checked;
  }
  emit('optionCheck', event, !props.item.checked, props.item);
  if (pane) {
    pane.focusedOption.value = props.item.id;
  }
}

function handleToggleKeydown(event: KeyboardEvent) {
  if (event.key === ' ' || event.key === 'Enter') {
    (document.activeElement as HTMLElement | null)?.click();
    event.preventDefault();
  }
}

function handleCheckKeydown(event: KeyboardEvent) {
  if (event.key === ' ' || event.key === 'Enter') {
    check(event);
    event.preventDefault();
  }
}
</script>
