<template>
  <div v-bind="ouiaProps" :class="[variantClass, styles.toolbarGroup, styles.modifiers.toggleGroup, breakpointClasses]">
    <div :class="styles.toolbarToggle">
      <pf-button
        variant="plain"
        aria-label="Show Filters"
        :aria-expanded="expanded"
        :aria-haspopup="expanded && isContentPopup"
        @click="toggleExpanded"
      >
        <slot name="icon" />
      </pf-button>
    </div>
    <teleport v-if="expanded && expandableRef" :to="expandableRef">
      <slot />
    </teleport>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { classesFromBreakpointProps, type BreakpointProps } from '../../breakpoints';
import { toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import globalBreakpointLg from '@patternfly/react-tokens/dist/js/t_global_breakpoint_lg';
import PfButton from '../Button.vue';
import { useWindowSize } from '@vueuse/core';
import { computed, inject } from 'vue';
import { ToolbarExpandedKey, ToolbarToggleExpandedKey } from './Toolbar.vue';
import { ToolbarContentExpandableRefKey } from './ToolbarContent.vue';
import type PfToolbarGroup from './ToolbarGroup.vue';
import { useOUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfToolbarToggleGroup',
});

interface Props extends ComponentProps<typeof PfToolbarGroup>, BreakpointProps {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();

const { width: windowWidth } = useWindowSize();
const expanded = inject(ToolbarExpandedKey);
const toggleExpanded = inject(ToolbarToggleExpandedKey);
const expandableRef = inject(ToolbarContentExpandableRefKey);

const breakpointClasses = computed(() => {
  return [
    ...classesFromBreakpointProps(props, ['visibility'], styles, { short: true }),
    ...classesFromBreakpointProps(props, ['spacer', 'spaceItems', 'align'], styles),
    ...classesFromBreakpointProps(props, [''], styles),
  ];
});

const variantClass = computed(() => {
  return props.variant ? styles.modifiers[toCamelCase(props.variant)] : null;
});

const isContentPopup = computed(() => {
  const lgBreakpointValue = parseInt(globalBreakpointLg.value);
  return windowWidth.value < lgBreakpointValue;
});
</script>
