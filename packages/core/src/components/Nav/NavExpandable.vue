<template>
  <li
    :class="[styles.navItem, styles.modifiers.expandable, {
      [styles.modifiers.expanded]: realExpanded,
      [styles.modifiers.current]: active,
    }]"
    @click="handleToggle"
  >
    <button
      :id="srText ? null : validId"
      ref="expandable"
      type="button"
      :class="styles.navLink"
      :aria-expanded="realExpanded"
      @click.prevent
      @mousedown.prevent
    >
      {{ title }}
      <span :class="styles.navToggle">
        <span :class="styles.navToggleIcon">
          <AngleRightIcon aria-hidden="true" />
        </span>
      </span>
    </button>
    <section
      :class="styles.navSubnav"
      :aria-labelledby="validId"
      :hidden="realExpanded ? null : true"
    >
      <h2 v-if="srText" :id="validId" :class="a11yStyles.screenReader">{{ srText }}</h2>
      <ul :class="styles.navList">
        <slot />
      </ul>
    </section>
  </li>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Nav/nav';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

import AngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { getUniqueId } from '../../util';
import { defineComponent, markRaw, type Ref, ref } from 'vue';

export default defineComponent({
  name: 'PfNavExpandable',

  components: {
    AngleRightIcon,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    srText: {
      type: String,
      default: '',
    },
    groupId: {
      type: [String, Number],
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    active: Boolean,
    managed: Boolean,
    expanded: Boolean,
  },

  emits: {
    'update:expanded': (value: boolean, groupId: string | number) => value !== undefined && groupId !== undefined,
  },

  setup(props) {
    const expandable: Ref<HTMLButtonElement> = ref(null);
    return {
      expandable,
      styles: markRaw(styles) as typeof styles,
      a11yStyles: markRaw(a11yStyles) as typeof a11yStyles,
      expandedState: ref(props.expanded),
    };
  },

  data(this: void) {
    return {
      scrollViewAtStart: false,
      scrollViewAtEnd: false,
    };
  },

  computed: {
    validId() {
      return this.id || getUniqueId();
    },

    realExpanded: {
      get() {
        return this.managed ? this.expandedState : this.expanded;
      },

      set(value: boolean) {
        if (this.managed) {
          this.expandedState = value;
        } else {
          this.$emit('update:expanded', value, this.groupId);
        }
      },
    },
  },

  methods: {
    handleToggle(e: Event) {
      if (!(e.target instanceof Element)) {
        return;
      }
      // Item events can bubble up, ignore those
      if (!this.expandable?.contains(e.target)) {
        return;
      }
      this.realExpanded = !this.realExpanded;
    },
  },
});
</script>
