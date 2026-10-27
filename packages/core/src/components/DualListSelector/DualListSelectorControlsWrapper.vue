<template>
  <div
    ref="wrapper"
    :class="styles.dualListSelectorControls"
    tabindex="0"
    role="group"
    :aria-label="messages.dualListSelectorControls"
    @keydown="handleKeys"
  >
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DualListSelector/dual-list-selector';
import { usePfMessages } from '../../messages';
import { useTemplateRef, type HTMLAttributes, type VNode } from 'vue';

defineOptions({
  name: 'PfDualListSelectorControlsWrapper',
});
const messages = usePfMessages();

defineProps<Props>();

defineSlots<{
  /** pf-dual-list-selector-control elements */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const wrapper = useTemplateRef('wrapper');

// moves the focus to the previous or next enabled control with the up and down arrows, wrapping around
function handleKeys(event: KeyboardEvent) {
  if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
    return;
  }
  event.preventDefault();
  const controls = Array.from(wrapper.value?.getElementsByTagName('button') ?? []).filter(el => !el.disabled);
  if (!controls.length) {
    return;
  }
  const index = controls.findIndex(el => el === document.activeElement);
  const increment = event.key === 'ArrowUp' ? -1 : 1;
  // from the wrapper itself, start from the first or the last control
  const next =
    index < 0 ? (increment > 0 ? 0 : controls.length - 1) : (index + increment + controls.length) % controls.length;
  controls[next]?.focus();
}
</script>
