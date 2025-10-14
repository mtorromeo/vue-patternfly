<template>
  <div v-bind="ouiaProps" :class="[styles.toolbarExpandableContent, { [styles.modifiers.expanded]: expanded }]">
    <pf-toolbar-group>
      <slot />
    </pf-toolbar-group>

    <pf-toolbar-group v-if="numberOfFilters">
      <slot name="label-container" />
      <pf-toolbar-item v-if="showClearFiltersButton">
        <pf-button variant="link" inline @click="clearAllFilters ?? undefined">{{ clearFiltersButtonText }}</pf-button>
      </pf-toolbar-item>
    </pf-toolbar-group>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { inject, type HTMLAttributes } from 'vue';
import PfButton from '../Button.vue';
import { ToolbarClearAllFiltersKey, ToolbarNumberOfFiltersKey } from './Toolbar.vue';
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
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  'label-container'?: (props?: Record<never, never>) => any;
}>();

const numberOfFilters = inject(ToolbarNumberOfFiltersKey);
const clearAllFilters = inject(ToolbarClearAllFiltersKey);
</script>
