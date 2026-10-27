<template>
  <ul
    :class="styles.dualListSelectorList"
    v-bind="
      hasOptions
        ? {
            role: dualListSelector?.tree.value ? 'tree' : 'listbox',
            'aria-multiselectable': true,
            'aria-labelledby': pane?.statusId.value,
            'aria-activedescendant': pane?.focusedOption.value || undefined,
          }
        : {}
    "
    :aria-disabled="pane?.disabled.value ? 'true' : undefined"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { computed, inject, type HTMLAttributes, type VNode } from 'vue';
import { findChildrenVNodes } from '../../util';
import { DualListSelectorKey, DualListSelectorPaneKey } from './common';

defineOptions({
  name: 'PfDualListSelectorList',
});

defineProps<Props>();

const slots = defineSlots<{
  /** pf-dual-list-selector-list-item elements, or a pf-dual-list-selector-tree */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const dualListSelector = inject(DualListSelectorKey, undefined);
const pane = inject(DualListSelectorPaneKey, undefined);

const hasOptions = computed(() => findChildrenVNodes(slots.default?.()).length > 0);
</script>
