<template>
  <div v-bind="ouiaProps" :class="[styles.toolbarExpandableContent, { [styles.modifiers.expanded]: expanded }]">
    <pf-toolbar-group>
      <slot />
    </pf-toolbar-group>

    <pf-toolbar-group v-if="numberOfFilters">
      <slot name="label-container" />
      <pf-toolbar-item v-if="showClearFiltersButton && !customLabelGroupContent">
        <pf-button variant="link" inline @click="clearAllFilters?.()">{{ clearFiltersButtonText }}</pf-button>
      </pf-toolbar-item>
      <component :is="customLabelGroupContent" v-if="customLabelGroupContent" />
    </pf-toolbar-group>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { computed, inject, type HTMLAttributes, type VNode } from 'vue';
import PfButton from '../Button.vue';
import { ToolbarClearAllFiltersKey, ToolbarCustomLabelGroupContentKey, ToolbarNumberOfFiltersKey } from './Toolbar.vue';
import PfToolbarGroup from './ToolbarGroup.vue';
import PfToolbarItem from './ToolbarItem.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbarExpandableContent',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  expanded?: boolean;
  showClearFiltersButton?: boolean;
  clearFiltersButtonText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  clearFiltersButtonText: 'Clear all filters',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
  'label-container'?: (props?: Record<never, never>) => VNode[];
}>();

const numberOfFilters = inject(ToolbarNumberOfFiltersKey);
const clearAllFilters = inject(ToolbarClearAllFiltersKey);
const customLabelGroupContentRender = inject(ToolbarCustomLabelGroupContentKey, undefined);
const customLabelGroupContent = computed(() => customLabelGroupContentRender?.value);
</script>
