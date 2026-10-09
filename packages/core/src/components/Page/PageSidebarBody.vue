<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.pageSidebarBody, {
      [styles.modifiers.pageInsets]: insets,
      [styles.modifiers.noFill]: filled === false,
      [styles.modifiers.fill]: filled,
    }]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating that the page sidebar body should use page insets. */
  insets?: boolean;
  /** Flag indicating that the page sidebar body should fill the available vertical space. */
  filled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Page/page';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfPageSidebarBody',
});

const props = withDefaults(defineProps<Props>(), {
  filled: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
