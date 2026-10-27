<template>
  <div :class="[styles.dualListSelectorPane, chosen ? styles.modifiers.chosen : 'pf-m-available']">
    <div v-if="title || $slots.title" :class="styles.dualListSelectorHeader">
      <div :class="`${styles.dualListSelector}__title`">
        <div :class="styles.dualListSelectorTitleText">
          <slot name="title">{{ title }}</slot>
        </div>
      </div>
    </div>
    <div v-if="$slots.actions || $slots['search-input']" :class="styles.dualListSelectorTools">
      <div v-if="$slots['search-input']" :class="styles.dualListSelectorToolsFilter">
        <slot name="search-input" />
      </div>
      <div v-if="$slots.actions" :class="styles.dualListSelectorToolsActions">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="status || $slots.status" :class="styles.dualListSelectorStatus">
      <div :id="statusId" :class="styles.dualListSelectorStatusText">
        <slot name="status">{{ status }}</slot>
      </div>
    </div>
    <div
      ref="menu"
      :class="styles.dualListSelectorMenu"
      tabindex="0"
      :style="listMinHeight ? { [cssMenuMinHeight.name]: listMinHeight } : undefined"
      @keydown="handleKeys"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ Omit<HTMLAttributes, 'title'> {
  /** ID of the pane, generated if not set; it prefixes the id of the status */
  id?: string;
  /** Flag indicating if this pane is the chosen pane. */
  chosen?: boolean;
  /** Status to display above the list of the pane, labelling it. */
  status?: string;
  /** Title of the pane. */
  title?: string;
  /** Flag indicating whether the pane is disabled: its list is marked as disabled and its options default to disabled. */
  disabled?: boolean;
  /** Minimum height of the list of options rendered in the pane. **/
  listMinHeight?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import cssMenuMinHeight from '@patternfly/react-tokens/dist/esm/c_dual_list_selector__menu_MinHeight';
import { computed, inject, provide, ref, useId, useTemplateRef, type HTMLAttributes, type VNode } from 'vue';
import { DualListSelectorKey, DualListSelectorPaneKey } from './common';

defineOptions({
  name: 'PfDualListSelectorPane',
});

const props = defineProps<Props>();

defineSlots<{
  /** A pf-dual-list-selector-list, and possibly an empty state shown in its place */
  default?: (props?: Record<never, never>) => VNode[];
  /** Title of the pane, replacing the `title` prop */
  title?: (props?: Record<never, never>) => VNode[];
  /** Status of the pane, replacing the `status` prop */
  status?: (props?: Record<never, never>) => VNode[];
  /** A search input placed above the list at the top of the pane, before the actions */
  'search-input'?: (props?: Record<never, never>) => VNode[];
  /** Actions placed above the list, e.g. a sort button and a kebab dropdown */
  actions?: (props?: Record<never, never>) => VNode[];
}>();

const dualListSelector = inject(DualListSelectorKey, undefined);

const generatedId = useId();
const statusId = computed(() => `${props.id ?? generatedId}-status`);
const focusedOption = ref('');
const menu = useTemplateRef('menu');

provide(DualListSelectorPaneKey, {
  chosen: computed(() => props.chosen),
  disabled: computed(() => props.disabled),
  statusId,
  focusedOption,
});

// moves the focus to the previous or next option with the up and down arrows, wrapping around
function handleKeys(event: KeyboardEvent) {
  if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
    return;
  }
  event.preventDefault();
  if (!menu.value || (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')) {
    return;
  }

  const options = dualListSelector?.tree.value
    ? Array.from(
        menu.value.querySelectorAll(
          `.${styles.dualListSelectorItemToggle}, .${styles.dualListSelectorItemCheck} > input`,
        ),
      ).filter(el => !el.closest(`.${styles.dualListSelectorList}[inert]`))
    : Array.from(menu.value.getElementsByTagName('li')).filter(el => !el.classList.contains(styles.modifiers.disabled));
  if (!options.length) {
    return;
  }

  const active = document.activeElement;
  const index = options.findIndex(el => el === active);
  const increment = event.key === 'ArrowUp' ? -1 : 1;
  // from the menu itself, start from the first or the last option
  const next =
    index < 0 ? (increment > 0 ? 0 : options.length - 1) : (index + increment + options.length) % options.length;
  const target = options[next];
  if (target instanceof HTMLElement) {
    focusedOption.value = target.closest(`.${styles.dualListSelectorListItem}`)?.id ?? '';
    target.focus();
  }
}
</script>
