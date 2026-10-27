<template>
  <nav v-bind="ouiaProps" :class="styles.breadcrumb" :aria-label="ariaLabel ?? messages.breadcrumb">
    <ol :class="styles.breadcrumbList" role="list">
      <slot-with-dividers />
    </ol>
  </nav>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Aria label added to the breadcrumb nav. Defaults to the `breadcrumb` message. */
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { usePfMessages } from '../../messages';
import { findChildrenVNodes } from '../../util';
import { cloneVNode, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfBreadcrumb',
});

const props = withDefaults(defineProps<Props>(), {
  ouiaSafe: true,
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const slots = defineSlots<{
  /** pf-breadcrumb-item and pf-breadcrumb-heading elements */
  default?: (props?: Record<never, never>) => VNode[];
}>();

// every crumb but the first one is preceded by a divider
const slotWithDividers = () =>
  findChildrenVNodes(slots.default?.({})).map((vnode, index) =>
    typeof vnode.type === 'object' ? cloneVNode(vnode, { showDivider: index > 0 }) : vnode,
  );
</script>
