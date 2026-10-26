<template>
  <div
    ref="treeRef"
    :class="[
      styles.treeView,
      {
        [styles.modifiers.guides]: guides,
        [styles.modifiers.compact]: variant === 'compact' || variant === 'compactNoBackground',
        [styles.modifiers.noBackground]: variant === 'compactNoBackground',
      },
    ]"
    @keydown="checkboxes || selectableNodes ? handleKeysCheckbox($event) : handleKeys($event)"
  >
    <template v-if="$slots.toolbar">
      <slot name="toolbar" />
      <pf-divider />
    </template>
    <pf-tree-view-list
      :id="rootListId"
      :data="data"
      :multi-selectable="multiSelectable"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
    />
  </div>
</template>

<script lang="ts">
export type { TreeViewDataItem, TreeViewCheckAttrs } from './common';

interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, 'onSelect'> {
  /** Data of the tree view. */
  data: TreeViewDataItem[];
  /** Active items of tree view. */
  activeItems?: TreeViewDataItem[];
  /** Sets the expanded state on all tree nodes, overriding default behavior and current internal state. */
  allExpanded?: boolean;
  /** Sets the default expanded behavior. */
  defaultAllExpanded?: boolean;
  /** Comparison function for determining active items. Defaults to comparing the ids. */
  compareItems?: (item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean;
  /** Flag indicating if all nodes in the tree view should have badges. */
  badges?: boolean;
  /** Flag indicating if all nodes in the tree view should have checkboxes. */
  checkboxes?: boolean;
  /** Flag indicating if the tree view has guide lines. */
  guides?: boolean;
  /** Flag indicating that tree nodes should be independently selectable, even when having children. */
  selectableNodes?: boolean;
  /** Flag indicating whether multiple nodes can be selected in the tree view, setting aria-multiselectable on the tree. */
  multiSelectable?: boolean;
  /** Icon for all leaf or unexpanded node items. */
  icon?: Component;
  /** Icon for all expanded node items. */
  expandedIcon?: Component;
  /** ID of the root tree view list. */
  rootListId?: string;
  /** Variant presentation styles for the tree view. */
  variant?: 'default' | 'compact' | 'compactNoBackground';
  /** Flag indicating whether a tree view has animations. The nested items are always rendered, and inert while collapsed. */
  animations?: boolean;
  /** A text string that sets the accessible name of the tree view list. Either this or ariaLabelledby must be set. */
  ariaLabel?: string;
  /** A space separated list of element id's that sets the accessible name of the tree view list. */
  ariaLabelledby?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import {
  computed,
  onMounted,
  provide,
  toRef,
  useSlots,
  useTemplateRef,
  type Component,
  type HTMLAttributes,
  type VNode,
} from 'vue';
import PfDivider from '../Divider.vue';
import PfTreeViewList from './TreeViewList.vue';
import { TreeViewKey, type TreeViewDataItem } from './common';

defineOptions({
  name: 'PfTreeView',
});

const props = withDefaults(defineProps<Props>(), {
  allExpanded: undefined,
  variant: 'default',
  compareItems: (item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => item.id === itemToCheck.id,
});

const emit = defineEmits<{
  /** Emitted when an item is selected. Calling preventDefault on the event prevents the node from toggling. */
  (name: 'select', event: Event, item: TreeViewDataItem, parentItem: TreeViewDataItem | undefined): void;
  /** Emitted when the checkbox of an item changes */
  (name: 'check', event: Event, item: TreeViewDataItem, parentItem: TreeViewDataItem | undefined): void;
  /** Emitted when a node with children is expanded */
  (name: 'expand', event: Event, item: TreeViewDataItem, parentItem: TreeViewDataItem | undefined): void;
  /** Emitted when a node with children is collapsed */
  (name: 'collapse', event: Event, item: TreeViewDataItem, parentItem: TreeViewDataItem | undefined): void;
}>();

defineSlots<{
  /** Toolbar displayed above the tree view, such as a pf-tree-view-search */
  toolbar?: (props?: Record<never, never>) => VNode[];
  /** Action of an item, such as a button or a dropdown, rendered beside every item that the slot renders content for */
  action?: (props: { item: TreeViewDataItem; parentItem: TreeViewDataItem | undefined }) => VNode[];
}>();

const slots = useSlots();
const treeRef = useTemplateRef<HTMLDivElement>('treeRef');

provide(TreeViewKey, {
  activeItems: computed(() => props.activeItems),
  compareItems: toRef(() => props.compareItems) as never,
  allExpanded: computed(() => props.allExpanded),
  defaultAllExpanded: computed(() => props.defaultAllExpanded),
  checkboxes: computed(() => props.checkboxes),
  badges: computed(() => props.badges),
  selectableNodes: computed(() => props.selectableNodes),
  compact: computed(() => props.variant === 'compact' || props.variant === 'compactNoBackground'),
  animations: computed(() => props.animations),
  icon: computed(() => props.icon),
  expandedIcon: computed(() => props.expandedIcon),
  action: computed(() => slots.action),
  select: (event, item, parentItem) => emit('select', event, item, parentItem),
  check: (event, item, parentItem) => emit('check', event, item, parentItem),
  expand: (event, item, parentItem) => emit('expand', event, item, parentItem),
  collapse: (event, item, parentItem) => emit('collapse', event, item, parentItem),
});

// roving tab index: only the first node is reachable with tab
onMounted(() => {
  const tree = treeRef.value;
  if (!tree) {
    return;
  }
  if (props.checkboxes || props.selectableNodes) {
    const firstToggle = tree.getElementsByClassName(styles.treeViewNodeToggle)[0];
    if (firstToggle instanceof HTMLElement) {
      firstToggle.tabIndex = 0;
    }
    if (props.checkboxes) {
      const firstInput = tree.getElementsByTagName('input')[0];
      if (firstInput) {
        firstInput.tabIndex = 0;
      }
    }
    if (props.selectableNodes) {
      const firstText = tree.getElementsByClassName(styles.treeViewNodeText)[0];
      if (firstText instanceof HTMLElement) {
        firstText.tabIndex = 0;
      }
    }
  } else {
    const firstNode = tree.getElementsByClassName(styles.treeViewNode)[0];
    if (firstNode instanceof HTMLElement) {
      firstNode.tabIndex = 0;
    }
  }
});

function visibleNodes() {
  return Array.from(treeRef.value?.getElementsByClassName(styles.treeViewNode) ?? []).filter(
    el => !el.closest(`.${styles.treeView}__list[inert]`),
  );
}

// moves the focus to the previous or next node with the up and down arrows, wrapping around
function moveVertically(
  event: KeyboardEvent,
  elements: Element[],
  isActive: (element: Element) => boolean,
  getFocusable: (element: Element) => Element | null = element => element,
) {
  if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
    return;
  }
  event.preventDefault();
  const index = elements.findIndex(isActive);
  if (index < 0) {
    return;
  }
  const increment = event.key === 'ArrowUp' ? -1 : 1;
  for (let i = 1; i <= elements.length; i++) {
    const target = getFocusable(elements[(index + increment * i + elements.length) % elements.length]!);
    if (target instanceof HTMLElement) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.tabIndex = -1;
      }
      target.tabIndex = 0;
      target.focus();
      return;
    }
  }
}

function handleKeys(event: KeyboardEvent) {
  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.classList.contains(styles.treeViewNode)) {
    return;
  }
  const activeElement = document.activeElement as HTMLElement | null;

  if (event.key === ' ') {
    activeElement?.click();
    event.preventDefault();
  }

  moveVertically(
    event,
    visibleNodes().filter(el => !el.classList.contains(styles.modifiers.disabled)),
    el => el === activeElement,
  );

  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
    return;
  }
  event.preventDefault();
  const expandable = !!activeElement?.firstElementChild?.firstElementChild?.classList.contains(
    styles.treeViewNodeToggle,
  );
  const expanded = !!activeElement?.closest('li')?.classList.contains(styles.modifiers.expanded);
  if (event.key === 'ArrowLeft') {
    if (expandable && expanded) {
      activeElement?.click();
      return;
    }
    // move to the parent node
    const parentList = activeElement?.closest('ul')?.parentElement;
    if (activeElement && parentList?.tagName !== 'DIV') {
      const parentButton = parentList?.querySelector('button');
      activeElement.tabIndex = -1;
      if (parentButton) {
        parentButton.tabIndex = 0;
        parentButton.focus();
      }
    }
  } else if (expandable && !expanded && activeElement) {
    // expand and move to the first child node
    activeElement.tabIndex = -1;
    activeElement.click();
    requestAnimationFrame(() => {
      const child = activeElement.closest('li')?.querySelector('ul > li')?.querySelector('button');
      if (child) {
        child.tabIndex = 0;
        child.focus();
      }
    });
  }
}

function handleKeysCheckbox(event: KeyboardEvent) {
  const activeElement = document.activeElement as HTMLElement | null;

  if (event.key === ' ') {
    activeElement?.click();
    event.preventDefault();
  }

  moveVertically(
    event,
    visibleNodes(),
    el => !!activeElement && el.contains(activeElement),
    el => el.querySelector('button,input'),
  );

  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
    return;
  }
  event.preventDefault();
  // move between the toggle, the checkbox and the text of the node
  const previous = event.key === 'ArrowLeft';
  const sibling = (el: Element | null | undefined) => (previous ? el?.previousElementSibling : el?.nextElementSibling);
  let target: Element | null | undefined;
  if (activeElement?.tagName === 'INPUT') {
    target = sibling(activeElement.parentElement);
  } else {
    target = sibling(activeElement);
    if (target?.tagName === 'SPAN') {
      target = target.firstElementChild;
    }
  }
  if (target instanceof HTMLElement) {
    target.focus();
  }
}
</script>
