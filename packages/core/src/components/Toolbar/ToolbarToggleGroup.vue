<template>
  <div v-bind="ouiaProps" :class="[variantClass, styles.toolbarGroup, styles.modifiers.toggleGroup, breakpointClasses]">
    <div :class="styles.toolbarToggle">
      <pf-button
        variant="plain"
        aria-label="Show Filters"
        :aria-expanded="expanded || undefined"
        :aria-haspopup="expanded && isContentPopup"
        :aria-controls="expanded ? expandableContentId : undefined"
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
import { devError } from '../../helpers/dev';
import { toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { globalBreakpoints } from './common';
import PfButton from '../Button.vue';
import { useWindowSize } from '@vueuse/core';
import { computed, inject, type VNode } from 'vue';
import { ToolbarContainerWidthKey, ToolbarExpandedKey, ToolbarToggleExpandedKey } from './Toolbar.vue';
import { ToolbarContentExpandableIdKey, ToolbarContentExpandableRefKey } from './ToolbarContent.vue';
import type { Props as ToolbarGroupProps } from './ToolbarGroup.vue';
import { useOUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfToolbarToggleGroup',
});

interface Props extends ToolbarGroupProps, BreakpointProps {}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const slots = defineSlots<{
  /** Items collapsed into the expandable content below the breakpoint */
  default?: (props?: Record<never, never>) => VNode[];
  /** Icon of the toggle shown when the toggle group has collapsed down */
  icon?: (props?: Record<never, never>) => VNode[];
}>();

if (!props.sm && !props.md && !props.lg && !props.xl && !props.xl2 && !slots.icon) {
  devError('ToolbarToggleGroup will not be visible without a breakpoint or toggleIcon.');
}

const { width: windowWidth } = useWindowSize();
const expanded = inject(ToolbarExpandedKey);
const toggleExpanded = inject(ToolbarToggleExpandedKey);
const expandableRef = inject(ToolbarContentExpandableRefKey);
const expandableContentId = inject(ToolbarContentExpandableIdKey, undefined);
const containerWidth = inject(ToolbarContainerWidthKey, undefined);

const breakpointClasses = computed(() => {
  return [
    ...classesFromBreakpointProps(props, ['visibility', 'rowWrap'], styles, { short: true }),
    ...classesFromBreakpointProps(props, ['visibilityAtHeight'], styles, { short: true, vertical: true }),
    ...classesFromBreakpointProps(props, ['align', 'gap', 'columnGap', 'rowGap', 'flexGrow'], styles),
    ...classesFromBreakpointProps(props, [''], styles),
  ];
});

const variantClass = computed(() => {
  return props.variant ? styles.modifiers[toCamelCase(props.variant)] : null;
});

const isContentPopup = computed(() => {
  return (containerWidth?.value ?? windowWidth.value) < globalBreakpoints.lg;
});
</script>
