<template>
  <li
    :id="managedId"
    :class="[styles.dualListSelectorListItem, { [styles.modifiers.disabled]: managedDisabled }]"
    :aria-selected="selected"
    role="option"
    tabindex="-1"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <div :class="[styles.dualListSelectorListItemRow, { [styles.modifiers.selected]: selected }]">
      <div v-if="draggable && !managedDisabled" :class="styles.dualListSelectorDraggable">
        <pf-button variant="plain" component="span">
          <template #icon>
            <grip-vertical-icon style="vertical-align: -0.3em" />
          </template>
        </pf-button>
      </div>
      <span :class="styles.dualListSelectorItem">
        <span :class="styles.dualListSelectorItemMain">
          <span :class="styles.dualListSelectorItemText">
            <slot />
          </span>
        </span>
      </span>
    </div>
  </li>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ Omit<LiHTMLAttributes, 'draggable'> {
  /** ID of the option, generated if not set */
  id?: string;
  /** Flag indicating this item shows a drag handle, for reordering. */
  draggable?: boolean;
  /** Flag indicating the option is disabled; defaults to the disabled state of the pane. */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { computed, inject, useId, type LiHTMLAttributes, type VNode } from 'vue';
import GripVerticalIcon from '@vue-patternfly/icons/grip-vertical-icon';
import PfButton from '../Button.vue';
import { DualListSelectorPaneKey } from './common';

defineOptions({
  name: 'PfDualListSelectorListItem',
});

const props = withDefaults(defineProps<Props>(), {
  disabled: undefined,
});

/** Flag indicating the option is selected, toggled when the option is clicked */
const selected = defineModel<boolean>('selected', { default: false });

const emit = defineEmits<{
  /** Fired when the option is clicked, or activated with Enter or Space */
  (name: 'optionSelect', event: MouseEvent, id: string): void;
}>();

defineSlots<{
  /** Content of the option */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const pane = inject(DualListSelectorPaneKey, undefined);

const generatedId = useId();
const managedId = computed(() => props.id ?? generatedId);
const managedDisabled = computed(() => props.disabled ?? !!pane?.disabled.value);

function handleClick(event: MouseEvent) {
  if (managedDisabled.value) {
    return;
  }
  if (pane) {
    pane.focusedOption.value = managedId.value;
  }
  selected.value = !selected.value;
  emit('optionSelect', event, managedId.value);
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === ' ' || event.key === 'Enter') {
    (document.activeElement as HTMLElement | null)?.click();
    event.preventDefault();
  }
}
</script>
