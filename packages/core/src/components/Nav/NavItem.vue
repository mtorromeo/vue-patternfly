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
      :tabindex="tabindex || sidebar.sidebarOpen ? null : '-1'"
      v-bind="$attrs"
      @click="select"
    >
      <slot />
    </component>
  </component>
</template>

<script>
import styles from '@patternfly/react-styles/css/components/Nav/nav';

export default {
  name: 'PfNavItem',

  inject: {
    onSelect: {
      default: null,
    },
    sidebar: {
      default: () => ({sidebarOpen: false}),
    },
  },

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
    tabindex: {
      type: [String, Number],
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
      if (this.onSelect) {
        this.onSelect(e, this.groupId, this.itemId);
      }
    },
  },
};
</script>
