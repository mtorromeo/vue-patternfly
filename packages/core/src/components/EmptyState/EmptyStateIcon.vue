<template>
  <div v-bind="ouiaProps" :class="styles.emptyStateIcon" :style="{ [cssIconColor.name]: hasSpinner ? undefined : color }">
    <render />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/EmptyState/empty-state';
import cssIconColor from '@patternfly/react-tokens/dist/esm/c_empty_state__icon_Color';
import { findChildrenVNodes, vnodeTypeIsComponent } from '../../util';
import { mergeProps, ref, type SVGAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfEmptyStateIcon',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<SVGAttributes, 'size'> {
  /** Changes the color of the icon.  */
  color?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

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
