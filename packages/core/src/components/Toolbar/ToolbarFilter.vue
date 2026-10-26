<template>
  <pf-toolbar-item v-if="!hideToolbarItem" v-bind="$attrs">
    <slot />
  </pf-toolbar-item>
  <teleport v-if="mounted && teleportTarget" :to="teleportTarget">
    <pf-toolbar-item
      v-if="$slots.labels || labels.length"
      v-show="slotLabels.length || labels.length"
      v-bind="ouiaProps"
      variant="label-group"
    >
      <pf-label-group
        :key="category"
        :category="category"
        :closable="!!onDeleteLabelGroup"
        :collapsed-text="labelGroupCollapsedText"
        :expanded-text="labelGroupExpandedText"
        @click="onDeleteLabelGroup?.(category)"
      >
        <slot name="labels">
          <pf-label
            v-for="label of labels"
            :key="labelKey(label)"
            :variant="typeof label === 'string' ? 'outline' : undefined"
            @close="emit('deleteLabel', category, labelKey(label))"
            >{{ labelLabel(label) }}</pf-label
          >
        </slot>
      </pf-label-group>
    </pf-toolbar-item>
  </teleport>
</template>

<script lang="ts" setup>
import PfLabelGroup from '../Label/LabelGroup.vue';
import PfLabel from '../Label/Label.vue';
import PfToolbarItem from './ToolbarItem.vue';
import { ToolbarLabelGroupContentRefKey, ToolbarExpandedKey, ToolbarUpdateNumberFiltersKey } from './Toolbar.vue';
import { ToolbarContentLabelContainerRefKey } from './ToolbarContent.vue';
import { inject, ref, onMounted, onUpdated, onUnmounted, computed, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { provideChildrenTracker } from '../../use';
import { LabelKey } from '../Label/common';
import type { ComponentProps } from 'vue-component-type-helpers';

export type FilterLabel =
  | {
      key: string;
      label: string;
    }
  | string;

defineOptions({
  name: 'PfToolbarFilter',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfToolbarItem>, 'ouiaId' | 'ouiaSafe'> {
  /** Applied filters displayed as labels in the label group of the category, replaced by the labels slot */
  labels?: FilterLabel[];
  /** Unique category name used as the label of the label group */
  category?: string;
  /** Flag to hide the toolbar item, showing only the label group */
  hideToolbarItem?: boolean;
  /** Customizable "Show Less" text string for the label group */
  labelGroupExpandedText?: string;
  /** Customizable template string for the label group. Use variable "${remaining}" for the overflow label count. */
  labelGroupCollapsedText?: string;
  /** Callback to close the entire label group. When set, the label group has a close button. */
  onDeleteLabelGroup?: (category?: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  labels: (): FilterLabel[] => [],
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'deleteLabel', category: string | undefined, labelKey: string): void;
}>();

defineSlots<{
  /** Content of the toolbar item associated with the label group, such as the filter control */
  default?: (props?: Record<never, never>) => VNode[];
  /** Custom labels of the label group, replacing the labels prop */
  labels?: (props?: Record<never, never>) => VNode[];
}>();

const expanded = inject(ToolbarExpandedKey);
const updateNumberFilters = inject(ToolbarUpdateNumberFiltersKey);
const labelContainerRef = inject(ToolbarContentLabelContainerRefKey);
const labelGroupContentRef = inject(ToolbarLabelGroupContentRefKey);
const mounted = ref(false);

const slotLabels = provideChildrenTracker(LabelKey);
const teleportTarget = computed(() => (expanded?.value ? labelContainerRef?.value : labelGroupContentRef?.value));

onMounted(() => {
  if (props.category) {
    updateNumberFilters?.(props.category, slotLabels.length || props.labels.length);
  }
  mounted.value = true;
});

onUpdated(() => {
  if (props.category) {
    updateNumberFilters?.(props.category, slotLabels.length || props.labels.length);
  }
});

onUnmounted(() => {
  if (props.category) {
    updateNumberFilters?.(props.category, 0);
  }
});

function labelKey(label: FilterLabel) {
  return typeof label === 'string' ? label : label.key;
}

function labelLabel(label: FilterLabel) {
  return typeof label === 'string' ? label : label.label;
}
</script>
