<template>
  <nav
    :class="[styles.nav, {
      [styles.modifiers.light]: theme === 'light',
      [styles.modifiers.horizontal]: horizontal,
      [styles.modifiers.tertiary]: variant === 'tertiary',
      [styles.modifiers.scrollable]: scrollable,
    }]"
    :aria-label="ariaLabel || variant === 'tertiary' ? 'Local' : 'Global'"
  >
    <slot />
  </nav>
</template>

<script>
import {ref, computed, provide} from 'vue';
import _styles from '@patternfly/react-styles/css/components/Nav/nav';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'Nav',

  props: {
    theme: {
      type: String,
      default: 'dark',
      validate: v => ['dark', 'light'].includes(v),
    },
    variant: {
      type: String,
      default: '',
      validate: v => ['', 'default', 'horizontal', 'tertiary'].includes(v),
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },

  setup(props, {emit}) {
    const scrollable = ref(false);
    provide('scrollable', scrollable);

    const horizontal = computed(() => ['horizontal', 'tertiary'].includes(props.variant))
    provide('horizontal', horizontal);

    provide('onSelect', (e, groupId, itemId) => emit('select', e, groupId, itemId));

    return {horizontal, scrollable};
  },

  data() {
    return {
      styles,
    };
  },
};
</script>
