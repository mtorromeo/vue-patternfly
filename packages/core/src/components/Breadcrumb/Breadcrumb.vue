<template>
  <nav v-bind="ouiaProps" :class="styles.breadcrumb" :aria-label="ariaLabel">
    <ol :class="styles.breadcrumbList">
      <slot-with-dividers />
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { findChildrenVNodes } from '../../util';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfBreadcrumb',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  ariaLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  ariaLabel: 'Breadcrumb',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

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
