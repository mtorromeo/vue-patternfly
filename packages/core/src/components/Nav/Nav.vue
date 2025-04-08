<template>
  <nav
    v-bind="ouiaProps"
    :class="[styles.nav, {
      [styles.modifiers.horizontal]: horizontal,
      [styles.modifiers.subnav]: variant === 'horizontal-subnav',
      [styles.modifiers.scrollable]: scrollable,
    }]"
    :aria-label="ariaLabel || variant === 'horizontal-subnav' ? 'Local' : 'Global'"
  >
    <slot />
  </nav>
</template>

<script lang="ts">
export const NavScrollableKey = Symbol('NavScrollableKey') as InjectionKey<Ref<boolean>>;
export const NavHorizontalKey = Symbol('NavHorizontalKey') as InjectionKey<boolean>;
export const NavOnSelectKey = Symbol('NavOnSelectKey') as InjectionKey<(event: Event, groupId: string | undefined, itemId: string | undefined) => void>;
export const NavFlyoutRefKey = Symbol('NavFlyoutRefKey') as InjectionKey<Ref<HTMLElement | null>>;
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onSelect'> {
  theme?: 'dark' | 'light';
  variant?: 'default' | 'horizontal' | 'horizontal-subnav';
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import { ref, provide, type InjectionKey, type Ref, type HTMLAttributes } from 'vue';
import styles from '@patternfly/react-styles/css/components/Nav/nav';

defineOptions({
  name: 'PfNav',
});

const props = withDefaults(defineProps<Props>(), {
  theme: 'dark',
  variant: 'default',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'select', e: Event, groupId: string | undefined, itemId: string | undefined): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const scrollable = ref(false);
provide(NavScrollableKey, scrollable);

const horizontal = ['horizontal', 'horizontal-subnav'].includes(props.variant);
provide(NavHorizontalKey, horizontal);

provide(NavOnSelectKey, (e, groupId, itemId) => emit('select', e, groupId, itemId));

const flyoutRef: Ref<HTMLElement | null> = ref(null);
provide(NavFlyoutRefKey, flyoutRef);
</script>
