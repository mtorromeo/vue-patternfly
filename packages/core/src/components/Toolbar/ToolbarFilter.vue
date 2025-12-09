<template>
  <pf-toolbar-item v-if="!hideToolbarItem" v-bind="$attrs">
    <slot />
  </pf-toolbar-item>
  <teleport v-if="mounted && teleportTarget" :to="teleportTarget">
    <pf-toolbar-item v-if="slotLabels.length || labels.length" v-bind="ouiaProps" variant="label-group">
      <pf-label-group
        :key="category"
        :category="category"
        closable
        :collapsed-text="labelGroupCollapsedText"
        :expanded-text="labelGroupExpandedText"
        @click="emit('deleteLabelGroup', category)"
      >
        <slot name="labels">
          <pf-label
            v-for="label of labels"
            :key="labelKey(label)"
            variant="outline"
            @close="emit('deleteLabel', category, labelKey(label))"
          >{{ labelLabel(label) }}</pf-label>
        </slot>
      </pf-label-group>
    </pf-toolbar-item>
    <slot v-else name="labels" />
  </teleport>
</template>

<script lang="ts" setup>
import PfLabelGroup from '../Label/LabelGroup.vue';
import PfLabel from '../Label/Label.vue';
import PfToolbarItem from './ToolbarItem.vue';
import { ToolbarLabelGroupContentRefKey, ToolbarExpandedKey, ToolbarUpdateNumberFiltersKey } from './Toolbar.vue';
import { ToolbarContentLabelContainerRefKey } from './ToolbarContent.vue';
import { inject, ref, onMounted, onUpdated, computed } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { provideChildrenTracker } from '../../use';
import { LabelKey } from '../Label/common';
import type { ComponentProps } from 'vue-component-type-helpers';

export type FilterLabel = {
  key: string;
  label: string;
} | string;

defineOptions({
  name: 'PfToolbarFilter',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfToolbarItem>, 'ouiaId' | 'ouiaSafe'> {
  labels?: FilterLabel[];
  category?: string;
  hideToolbarItem?: boolean;
  /** Customizable "Show Less" text string for the label group */
  labelGroupExpandedText?: string;
  /** Customizable template string for the label group. Use variable "${remaining}" for the overflow label count. */
  labelGroupCollapsedText?: string;
  /** Content to be rendered inside the data toolbar item associated with the label group */
}

const props = withDefaults(defineProps<Props>(), {
  labels: (): FilterLabel[] => [],
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'deleteLabel', category: string | undefined, labelKey: string): void;
  (name: 'deleteLabelGroup', category?: string): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  labels?: (props?: Record<never, never>) => any;
}>();

const expanded = inject(ToolbarExpandedKey);
const updateNumberFilters = inject(ToolbarUpdateNumberFiltersKey);
const labelContainerRef = inject(ToolbarContentLabelContainerRefKey);
const labelGroupContentRef = inject(ToolbarLabelGroupContentRefKey);
const mounted = ref(false);

const slotLabels = provideChildrenTracker(LabelKey);
const teleportTarget = computed(() => expanded?.value ? labelContainerRef?.value : labelGroupContentRef?.value);

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

function labelKey(label: FilterLabel) {
  return typeof label === 'string' ? label : label.key;
}

function labelLabel(label: FilterLabel) {
  return typeof label === 'string' ? label : label.label;
}
</script>
