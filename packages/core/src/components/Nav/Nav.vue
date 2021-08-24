<template>
  <nav
    :class="[styles.nav, {
      [styles.modifiers.light]: theme === 'light',
      [styles.modifiers.horizontal]: horizontal,
      [styles.modifiers.tertiary]: variant === 'tertiary',
      [styles.modifiers.horizontalSubnav]: variant === 'horizontal-subnav',
      [styles.modifiers.scrollable]: scrollable,
    }]"
    :aria-label="ariaLabel || variant === 'tertiary' ? 'Local' : 'Global'"
  >
    <slot />
  </nav>
</template>

<script>
import { ref, provide } from 'vue';
import styles from '@patternfly/react-styles/css/components/Nav/nav';

export default {
  name: 'PfNav',

  props: {
    theme: {
      type: String,
      default: 'dark',
      validator: v => ['dark', 'light'].includes(v),
    },
    variant: {
      type: String,
      default: '',
      validator: v => ['', 'default', 'horizontal', 'tertiary', 'horizontal-subnav'].includes(v),
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },

  emits: ['select'],

  setup(props, { emit }) {
    const scrollable = ref(false);
    provide('scrollable', scrollable);

    const horizontal = ['horizontal', 'tertiary', 'horizontal-subnav'].includes(props.variant);
    provide('horizontal', horizontal);

    provide('onSelect', (e, groupId, itemId) => emit('select', e, groupId, itemId));

    return { horizontal, scrollable };
  },

  data() {
    return {
      styles,
    };
  },
};
</script>
