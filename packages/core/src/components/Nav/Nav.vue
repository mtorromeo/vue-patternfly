<template>
  <nav
    v-bind="ouiaProps"
    ref="navRef"
    :class="[
      styles.nav,
      {
        [styles.modifiers.horizontal]: horizontal,
        [styles.modifiers.subnav]: variant === 'horizontal-subnav',
        [styles.modifiers.scrollable]: scrollable,
        [styles.modifiers.docked]: variant === 'docked',
        [styles.modifiers.expanded]: variant === 'docked' && expanded,
      },
    ]"
    :aria-label="ariaLabel || (variant === 'horizontal-subnav' ? 'Local' : 'Global')"
  >
    <slot />
  </nav>
</template>

<script lang="ts">
export { NavScrollableKey, NavHorizontalKey, NavOnSelectKey, NavFlyoutRefKey } from './common';

interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onSelect' | 'onToggle'> {
  /** The nav variant to use. Docked is in beta. */
  variant?: 'default' | 'horizontal' | 'horizontal-subnav' | 'docked';
  /** Accessible label for the nav when there are multiple navs on the page */
  ariaLabel?: string;
  /** Flag indicating the docked nav should display text. Only applies when variant is docked. */
  expanded?: boolean;
}
</script>

<script lang="ts" setup>
import { computed, ref, provide, useTemplateRef, type Ref, type HTMLAttributes, type VNode } from 'vue';
import type { RouteLocationRaw } from 'vue-router';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import {
  NavElementKey,
  NavFlyoutRefKey,
  NavHorizontalKey,
  NavOnSelectKey,
  NavOnToggleKey,
  NavScrollableKey,
  type NavId,
} from './common';

defineOptions({
  name: 'PfNav',
});

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** An item was selected */
  (
    name: 'select',
    event: Event,
    groupId: NavId | undefined,
    itemId: NavId | undefined,
    to: RouteLocationRaw | undefined,
  ): void;
  /** An expandable was expanded or collapsed */
  (name: 'toggle', event: Event, groupId: NavId | undefined, expanded: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const scrollable = ref(false);
provide(NavScrollableKey, scrollable);

const horizontal = computed(() => ['horizontal', 'horizontal-subnav'].includes(props.variant));
provide(NavHorizontalKey, horizontal);

provide(NavOnSelectKey, (event, groupId, itemId, to) => emit('select', event, groupId, itemId, to));
provide(NavOnToggleKey, (event, groupId, expanded) => emit('toggle', event, groupId, expanded));

const flyoutRef: Ref<HTMLElement | null> = ref(null);
provide(NavFlyoutRefKey, flyoutRef);

provide(NavElementKey, useTemplateRef<HTMLElement>('navRef'));
</script>
