<template>
  <div ref="el" :class="[styles.toolbarGroup, breakpointClasses, variantClass]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { classesFromBreakpointProps, type AlignBreakpointProps, type VisibilityBreakpointProps, type SpacerBreakpointProps, type SpaceItemsBreakpointProps } from '../../breakpoints';
import { toCamelCase } from '../../util';
import styles from '@patternfly/react-styles/css/components/Toolbar/toolbar';
import { computed, onMounted, type HTMLAttributes, ref, type Ref } from 'vue';

defineOptions({
  name: 'PfToolbarGroup',
});

export interface Props extends VisibilityBreakpointProps, AlignBreakpointProps, SpacerBreakpointProps, SpaceItemsBreakpointProps, /* @vue-ignore */ HTMLAttributes {
  variant?: 'filter-group' | 'icon-button-group' | 'button-group';
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (name: 'clear-all-filters'): void;
  (name: 'mounted', el: HTMLDivElement): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const el: Ref<HTMLDivElement | undefined> = ref();

const breakpointClasses = computed(() => {
  return [
    ...classesFromBreakpointProps(props, ['visibility'], styles, { short: true }),
    ...classesFromBreakpointProps(props, ['spacer', 'spaceItems', 'align'], styles),
  ];
});

const variantClass = computed(() => {
  return props.variant ? styles.modifiers[toCamelCase(props.variant)] : null;
});

onMounted(() => {
  if (el.value) {
    emit('mounted', el.value);
  }
});
</script>
