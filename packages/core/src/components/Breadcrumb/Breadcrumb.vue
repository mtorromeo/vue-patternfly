<template>
  <nav :class="styles.breadcrumb" :aria-label="ariaLabel">
    <ol :class="styles.breadcrumbList">
      <slot-with-dividers />
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { findChildrenVNodes } from '../../util';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfBreadcrumb',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  ariaLabel?: string;
}

withDefaults(defineProps<Props>(), {
  ariaLabel: 'Breadcrumb',
});

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const slotWithDividers = ()=>
  findChildrenVNodes(slots.default?.({}))
    .map((n, index) => {
      if (n.props) {
        n.props.showDivider = index > 0;
      }
      return n;
    });
</script>
