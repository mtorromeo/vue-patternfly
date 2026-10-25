<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.drawerSection,
      {
        [styles.modifiers.plain]: plain,
        [styles.modifiers.noBackground]: colorVariant === 'no-background',
        [styles.modifiers.secondary]: colorVariant === 'secondary',
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** @beta Flag indicating that the drawer section should use plain styles. */
  plain?: boolean;
  /** Color variant of the background of the drawer Section. `no-background` is deprecated: use `plain` instead. */
  colorVariant?: 'no-background' | 'default' | 'secondary';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDrawerSection',
});

const props = withDefaults(defineProps<Props>(), {
  colorVariant: 'default',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
