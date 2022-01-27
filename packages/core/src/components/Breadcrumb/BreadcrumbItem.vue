<template>
  <li v-bind="liAttrs" :class="styles.breadcrumbItem">
    <span v-if="showDivider" :class="styles.breadcrumbItemDivider">
      <pf-angle-right-icon />
    </span>
    <component
      :is="tag"
      v-bind="$attrs"
      :to="to"
      :href="href"
      :aria-current="ariaCurrent"
      :class="{
        [styles.breadcrumbDropdown]: dropdown,
      }"
      :type="typeof tag === 'string' && ['button', 'pf-button'].includes(tag) ? 'button' : undefined"
    >
      <slot />
    </component>
  </li>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Breadcrumb/breadcrumb';
import { DefineComponent, defineComponent, markRaw, PropType } from 'vue';
import { RouteLocationRaw } from 'vue-router';

import Void from '../Void';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';

export default defineComponent({
  name: 'PfBreadcrumbItem',

  components: {
    PfAngleRightIcon,
  },

  inheritAttrs: false,

  props: {
    /** HREF for breadcrumb link. */
    href: {
      type: String,
      default: undefined,
    },

    /** router-link destination for breadcrumb link. */
    to: {
      type: [String, Object] as PropType<RouteLocationRaw>,
      default: null,
    },

    /** Flag indicating whether the item is active. */
    active: Boolean,

    /** Flag indicating whether the item contains a dropdown. */
    dropdown: Boolean,

    /** Internal prop set by Breadcrumb on all but the first crumb */
    showDivider: Boolean,

    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: null,
    },

    liAttrs: {
      type: Object,
      default: () => ({}),
    },
  },

  setup() {
    return {
      styles: markRaw(styles),
    };
  },

  computed: {
    ariaCurrent() {
      // router-link already handles the aria-current attribute
      return this.active && !this.to ? 'page' : undefined;
    },

    isButton() {
      if (typeof this.component === 'object') {
        return (this.component as DefineComponent).name === 'PfButton';
      }
      return this.component === 'button' || this.component === 'pf-button';
    },

    tag() {
      if (this.component) {
        return this.component;
      }
      if (this.dropdown) {
        return 'span';
      }
      if (this.to) {
        return 'router-link';
      }
      if (this.href) {
        return 'a';
      }
      return Void;
    },
  },
});
</script>
