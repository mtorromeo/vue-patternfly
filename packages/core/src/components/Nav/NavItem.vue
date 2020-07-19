<template>
  <component :is="component" :class="[styles.navItem, itemClass]" :tag="component === 'router-link' ? 'li' : null" v-bind="itemAttrs">
    <component :is="linkComponent" :class="[styles.navLink, {[styles.modifiers.current]: active}]" :aria-current="active ? 'page' : null" v-bind="$attrs" @click="select">
      <slot />
    </component>
  </component>
</template>

<script>
import _styles from '@patternfly/react-styles/css/components/Nav/nav';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'NavItem',

  inject: ['onSelect'],

  inheritAttrs: false,

  props: {
    component: {
      type: String,
      default: 'li',
    },
    linkComponent: {
      type: String,
      default: 'a',
    },
    groupId: {
      type: String,
      default: null,
    },
    itemId: {
      type: String,
      default: null,
    },
    active: Boolean,
    preventDefault: Boolean,
    itemClass: {
      type: [String, Array, Object],
      default: '',
    },
    itemAttrs: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      styles,
    };
  },

  methods: {
    select(e) {
      if (e && this.preventDefault) {
        e.preventDefault();
      }
      this.$emit('select', e, this.groupId, this.itemId);
      this.onSelect(e, this.groupId, this.itemId);
    },
  },
};
</script>
