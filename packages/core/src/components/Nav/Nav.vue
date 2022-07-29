<template>
  <component
    :is="variant === 'subnav' ? 'section' : 'nav'"
    :class="{
      [styles.nav]: variant !== 'subnav',
      [styles.navSubnav]: variant === 'subnav',
      [styles.modifiers.light]: theme === 'light',
      [styles.modifiers.horizontal]: horizontal,
      [styles.modifiers.tertiary]: variant === 'tertiary',
      [styles.modifiers.horizontalSubnav]: variant === 'horizontal-subnav',
      [styles.modifiers.scrollable]: scrollable,
    }"
    :aria-label="ariaLabel || variant === 'tertiary' ? 'Local' : 'Global'"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { ref, provide, markRaw, defineComponent, PropType, InjectionKey, Ref } from 'vue';
import styles from '@patternfly/react-styles/css/components/Nav/nav';

export const NavScrollablelKey = Symbol('NavScrollablelKey') as InjectionKey<Ref<boolean>>;
export const NavHorizontalKey = Symbol('NavHorizontalKey') as InjectionKey<boolean>;
export const NavOnSelectKey = Symbol('NavOnSelectKey') as InjectionKey<(event: Event, groupId: string, itemId: string) => void>;
export const NavFlyoutRefKey = Symbol('NavFlyoutRefKey') as InjectionKey<Ref<HTMLElement | null>>;

export default defineComponent({
  name: 'PfNav',

  props: {
    theme: {
      type: String as PropType<'dark' | 'light'>,
      default: 'dark',
      validator: (v: any) => ['dark', 'light'].includes(v),
    },
    variant: {
      type: String as PropType<'default' | 'horizontal' | 'tertiary' | 'horizontal-subnav' | 'subnav'>,
      default: 'default',
      validator: (v: any) => ['', 'default', 'horizontal', 'tertiary', 'horizontal-subnav', 'subnav'].includes(v),
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },

  emits: ['select'],

  setup(props, { emit }) {
    const scrollable = ref(false);
    provide(NavScrollablelKey, scrollable);

    const horizontal = ['horizontal', 'tertiary', 'horizontal-subnav'].includes(props.variant);
    provide(NavHorizontalKey, horizontal);

    provide(NavOnSelectKey, (e, groupId, itemId) => emit('select', e, groupId, itemId));

    const flyoutRef: Ref<HTMLElement | null> = ref(null);
    provide(NavFlyoutRefKey, flyoutRef);

    return {
      horizontal,
      scrollable,
      styles: markRaw(styles) as typeof styles,
    };
  },
});
</script>
