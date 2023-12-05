<template>
  <div :class="styles.emptyStateIcon" :style="{ '--pf-v5-c-empty-state__icon--Color': hasSpinner ? undefined : color }">
    <render />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import { findChildrenVNodes, vnodeTypeIsComponent } from '../../util';
import { mergeProps, ref, type SVGAttributes } from 'vue';

defineOptions({
  name: 'PfEmptyStateIcon',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ Omit<SVGAttributes, 'size'> {
  /** Changes the color of the icon.  */
  color?: string;
}

defineProps<Props>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const hasSpinner = ref(false);

function render() {
  hasSpinner.value = false;

  if (!slots.default) {
    return;
  }

  const children = findChildrenVNodes(slots.default());
  return children.map(vnode => {
    let ariaHidden = 'true';
    if (vnodeTypeIsComponent(vnode.type) && vnode.type.name === 'PfSpinner') {
      ariaHidden = 'false';
      hasSpinner.value = true;
    }
    vnode.props = mergeProps({
      'aria-hidden': ariaHidden,
    }, vnode.props ?? {});
    return vnode;
  });
}
</script>