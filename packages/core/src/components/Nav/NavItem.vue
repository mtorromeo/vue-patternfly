<template>
  <component
    :is="component"
    :class="[styles.navItem, itemClass, {
      [(styles.modifiers.flyout || 'pf-m-flyout')]: $slots.flyout,
    }]"
    v-bind="itemAttrs"
    @keydown="handleFlyout"
    @mouseover="flyoutVisible = !!$slots.flyout"
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
      <span v-if="$slots.flyout" :class="styles.navToggle">
        <span :class="styles.navToggleIcon">
          <pf-angle-right-icon aria-hidden />
        </span>
      </span>
    </component>

    <slot v-if="flyoutVisible" name="flyout" />
  </component>
</template>

<script>
import { watchEffect, markRaw } from 'vue';
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';

export default {
  name: 'PfNavItem',

  components: {
    PfAngleRightIcon,
  },

  inject: {
    onSelect: {
      default: null,
    },
    sidebar: {
      default: () => ({ sidebarOpen: false }),
    },
    flyoutRef: {
      default: null,
    },
  },

  inheritAttrs: false,

  props: {
    component: {
      type: [String, Object],
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
    showflyout: true,
    select(e, groupId, itemId) {
      if (!(e instanceof Event) || typeof groupId === 'undefined' || typeof itemId === 'undefined') {
        console.warn('Invalid select event payload!');
        return false;
      }
      return true;
    },
  },

  setup() {
    return {
      styles: markRaw(styles),
    };
  },

  data() {
    return {
      flyoutTarget: null,
    };
  },

  computed: {
    linkTag() {
      if (this.linkComponent) {
        return this.linkComponent;
      }
      return this.to === null ? 'a' : 'router-link';
    },

    flyoutVisible: {
      get() {
        return this === this.flyoutRef.value;
      },
      set(visible) {
        this.flyoutRef.value = visible ? this : null;
        if (visible) {
          this.$emit('showflyout');
        }
      },
    },
  },

  created() {
    watchEffect(() => {
      if (!this.flyoutTarget) {
        return;
      }
      if (this.flyoutVisible) {
        const flyoutMenu = this.flyoutTarget.nextElementSibling;
        const flyoutItems = Array.from(flyoutMenu.getElementsByTagName('UL')[0].children).filter(
          el => !(el.classList.contains('pf-m-disabled') || el.classList.contains('pf-c-divider')),
        );
        flyoutItems[0].firstChild.focus();
      } else {
        this.flyoutTarget.focus();
      }
    });
  },

  mounted() {
    window.addEventListener('click', this.flyoutClick);
  },

  beforeUnmount() {
    window.removeEventListener('click', this.flyoutClick);
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

    handleFlyout(e) {
      if (!this.$slots.flyout) {
        return;
      }

      if (e.key === ' ' || e.key === 'ArrowRight') {
        e.stopPropagation();
        e.preventDefault();
        if (!this.flyoutVisible) {
          this.flyoutVisible = true;
          this.flyoutTarget = e.target;
        }
      }

      if (e.key === 'Escape' || e.key === 'ArrowLeft') {
        if (this.flyoutVisible) {
          e.stopPropagation();
          e.preventDefault();
          let closestFlyout = e.target.closest('.pf-c-nav__item.pf-m-flyout');
          if (e.target.parentElement === closestFlyout) {
            closestFlyout = closestFlyout.parentElement.closest('.pf-c-nav__item.pf-m-flyout');
          }

          if (closestFlyout) {
            closestFlyout.firstChild.focus();
          }

          this.flyoutVisible = false;
        }
      }
    },

    flyoutClick(e) {
      const closestItem = e.target.closest('.pf-c-nav__item');
      if (!closestItem) {
        this.flyoutVisible = !!this.$slots.flyout;
      }
    },
  },
};
</script>
