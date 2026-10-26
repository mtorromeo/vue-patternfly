<template>
  <li
    :id="item.id"
    :class="[styles.treeViewListItem, { [styles.modifiers.expanded]: expanded }]"
    :aria-expanded="expanded"
    role="treeitem"
    tabindex="-1"
    :aria-checked="checkbox ? isCheckboxChecked : undefined"
    :aria-selected="checkbox ? undefined : isSelected"
    :aria-disabled="fullyDisabled || undefined"
  >
    <div :class="styles.treeViewContent">
      <component
        :is="nodeComponent"
        :id="checkbox || (tree?.selectableNodes.value && hasChildren) ? `label-${randomId}` : undefined"
        :class="[
          styles.treeViewNode,
          { [styles.modifiers.current]: isSelected, [styles.modifiers.disabled]: item.disabled },
        ]"
        :for="checkbox ? randomId : undefined"
        :type="nodeComponent === 'button' ? 'button' : undefined"
        :disabled="nodeComponent === 'button' ? item.disabled : undefined"
        @click="onNodeClick"
      >
        <span :class="styles.treeViewNodeContainer">
          <component
            :is="toggleComponent"
            v-if="hasChildren"
            :class="[styles.treeViewNodeToggle, { [styles.modifiers.disabled]: toggleDisabledClass }]"
            :aria-labelledby="checkbox || tree?.selectableNodes.value ? `label-${randomId}` : undefined"
            :disabled="toggleComponent === 'button' ? item.toggleDisabled : undefined"
            :type="toggleComponent === 'button' ? 'button' : undefined"
            tabindex="-1"
            @click="onToggleClick"
          >
            <span :class="styles.treeViewNodeToggleIcon"><angle-right-icon /></span>
          </component>

          <span v-if="checkbox" :class="styles.treeViewNodeCheck">
            <input
              v-bind="checkAttrs"
              :id="randomId"
              type="checkbox"
              :checked="isCheckboxChecked"
              :indeterminate.prop="item.checkAttrs?.checked === null"
              :disabled="item.disabled || item.checkAttrs?.disabled"
              tabindex="-1"
              @change="tree?.check($event, item, parentItem)"
              @click.stop
            />
          </span>

          <span v-if="icon" :class="styles.treeViewNodeIcon">
            <component :is="expanded ? (expandedIcon ?? icon) : icon" />
          </span>

          <span v-if="compact" :class="styles.treeViewNodeContent">
            <span v-if="item.title" :class="styles.treeViewNodeTitle">{{ item.title }}</span>
            <node-text />
          </span>
          <node-text v-else />

          <span v-if="badgeContent !== undefined" :class="styles.treeViewNodeCount">
            <pf-badge read v-bind="item.badgeAttrs">{{ badgeContent }}</pf-badge>
          </span>
        </span>
      </component>

      <div v-if="action" :class="styles.treeViewAction">
        <component :is="action" />
      </div>
    </div>

    <slot v-if="hasChildren && (expanded || animations)" :inert="!expanded" />
  </li>
</template>

<script lang="ts">
interface Props {
  /** The data of the item */
  item: TreeViewDataItem;
  /** The data of the parent item */
  parentItem?: TreeViewDataItem;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { Comment, computed, h, inject, ref, useId, watch, type VNode } from 'vue';
import PfBadge from '../Badge.vue';
import { TreeViewKey, type TreeViewDataItem } from './common';

defineOptions({
  name: 'PfTreeViewListItem',
});

const props = defineProps<Props>();

defineSlots<{
  /** The nested list of the children of the item */
  default?: (props: { inert: boolean }) => VNode[];
}>();

const tree = inject(TreeViewKey, undefined);
const randomId = `${tree?.selectableNodes.value ? 'selectable-id' : 'checkbox-id'}-${useId()}`;

const hasChildren = computed(() => !!props.item.children);
const checkbox = computed(() => props.item.checkbox ?? !!tree?.checkboxes.value);
const compact = computed(() => !!tree?.compact.value);
const animations = computed(() => !!tree?.animations.value);
const icon = computed(() => props.item.icon ?? tree?.icon.value);
const expandedIcon = computed(() => props.item.expandedIcon ?? tree?.expandedIcon.value);

const expanded = ref(props.item.defaultExpanded ?? !!tree?.defaultAllExpanded.value);
watch(
  () => tree?.allExpanded.value,
  allExpanded => {
    if (allExpanded !== undefined) {
      expanded.value = allExpanded;
    }
  },
  { immediate: true },
);
watch(
  () => props.item.defaultExpanded ?? tree?.defaultAllExpanded.value,
  defaultExpanded => {
    if (tree?.allExpanded.value === undefined && defaultExpanded) {
      expanded.value = true;
    }
  },
);

const nodeComponent = computed(() => {
  if (checkbox.value) {
    return 'label';
  }
  return tree?.selectableNodes.value ? 'div' : 'button';
});
const toggleComponent = computed(() => (checkbox.value || tree?.selectableNodes.value ? 'button' : 'span'));
const toggleDisabledClass = computed(
  () => props.item.toggleDisabled || (nodeComponent.value === 'button' && props.item.disabled),
);
const fullyDisabled = computed(
  () =>
    (nodeComponent.value === 'button' && props.item.disabled) ||
    (nodeComponent.value !== 'button' && props.item.disabled && props.item.toggleDisabled),
);

const checkAttrs = computed(() => {
  const { checked: _checked, ...attrs } = props.item.checkAttrs ?? {};
  return attrs;
});
const isCheckboxChecked = computed(() => props.item.checkAttrs?.checked ?? false);

const isSelected = computed(() => {
  const activeItems = tree?.activeItems.value;
  const compareItems = tree?.compareItems.value;
  return (
    (!hasChildren.value || !!tree?.selectableNodes.value) &&
    !!activeItems?.length &&
    activeItems.some(active => !!compareItems && !!active && compareItems(active, props.item))
  );
});

const badgeContent = computed(() => {
  if (!(props.item.badge ?? tree?.badges.value)) {
    return undefined;
  }
  if (props.item.customBadgeContent !== undefined) {
    return props.item.customBadgeContent;
  }
  return props.item.children?.length;
});

const action = computed(() => {
  const vnodes = tree?.action.value?.({ item: props.item, parentItem: props.parentItem });
  return vnodes?.some(vnode => vnode.type !== Comment) ? () => vnodes : undefined;
});

// the text of the node, a button when the nodes are selectable
function NodeText() {
  return tree?.selectableNodes.value
    ? h(
        'button',
        { tabindex: -1, class: styles.treeViewNodeText, type: 'button', disabled: props.item.disabled },
        props.item.name,
      )
    : h('span', { class: styles.treeViewNodeText }, props.item.name);
}

function toggle(event: Event) {
  if (expanded.value) {
    tree?.collapse(event, props.item, props.parentItem);
  } else {
    tree?.expand(event, props.item, props.parentItem);
  }
  expanded.value = !expanded.value;
}

function onToggleClick(event: MouseEvent) {
  if (props.item.toggleDisabled) {
    return;
  }
  if (tree?.selectableNodes.value || checkbox.value) {
    toggle(event);
  }
  if (tree?.selectableNodes.value) {
    event.stopPropagation();
  }
}

function onNodeClick(event: MouseEvent) {
  if (checkbox.value || props.item.disabled) {
    return;
  }
  tree?.select(event, props.item, props.parentItem);
  // calling preventDefault in the select listener prevents the node from toggling
  if (!tree?.selectableNodes.value && hasChildren.value && !event.defaultPrevented) {
    toggle(event);
  }
}
</script>
