<template>
  <component
    :is="component"
    :class="[styles.navItem, itemClass]"
    v-bind="itemAttrs"
  >
    <component
      :is="linkTag"
      :class="[styles.navLink, {[styles.modifiers.current]: active}]"
      :aria-current="active ? 'page' : null"
      :to="to"
      :active-class="to ? styles.modifiers.current : null"
      v-bind="$attrs"
      @click="select"
    >
      <slot />
    </component>
  </component>
</template>

<script>
import _styles from '@patternfly/react-styles/css/components/Nav/nav';

// commonjs bug
let styles = _styles.default;

export default {
  name: 'PfNavItem',

  inject: ['onSelect'],

  inheritAttrs: false,

  props: {
    component: {
      type: String,
      default: 'li',
    },
    linkComponent: {
      type: String,
      default: null,
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
    to: {
      type: [String, Object],
      default: null,
    },
  },

  emits: {
    select(e, groupId, itemId) {
      if (!(e instanceof Event) || typeof groupId === 'undefined' || typeof itemId === 'undefined') {
        console.warn('Invalid select event payload!');
        return false;
      }
      return true;
    },
  },

  data() {
    return {
      styles,
    };
  },

  computed: {
    linkTag() {
      if (this.linkComponent) {
        return this.linkComponent;
      }
      return this.to === null ? 'a' : 'router-link';
    },
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
