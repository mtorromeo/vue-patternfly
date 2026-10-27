<template>
  <div
    v-bind="ouiaProps"
    :id="managedId"
    :class="[styles.dualListSelector, { [styles.modifiers.animateExpand]: animations && tree }]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export { DualListSelectorKey, DualListSelectorPaneKey, type DualListSelectorTreeItemData } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** ID of the dual list selector, generated if not set */
  id?: string;
  /** Flag indicating if the dual list selector uses trees instead of simple lists. */
  tree?: boolean;
  /** Flag indicating whether a tree dual list selector has animations. The nested options are always rendered, and inert while collapsed. */
  animations?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { computed, provide, useId, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { DualListSelectorKey } from './common';

defineOptions({
  name: 'PfDualListSelector',
});

const props = withDefaults(defineProps<Props>(), {
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Panes and controls wrapper of the dual list selector */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const generatedId = useId();
const managedId = computed(() => props.id ?? generatedId);

provide(DualListSelectorKey, {
  tree: computed(() => props.tree),
  animations: computed(() => props.animations),
});
</script>
