<template>
  <input
    v-if="selectableInput || name"
    class="pf-screen-reader"
    type="checkbox"
    :name="name"
    :checked="managedSelected"
    :disabled="selectableDisabled"
    tabindex="-1"
    @change="$emit('change', $event)"
  >
  <component
    :is="component"
    :class="[styles.card, ...selectableModifiers, {
      [styles.modifiers.compact]: compact,
      [styles.modifiers.expanded]: managedExpanded,
      [styles.modifiers.flat]: flat,
      [styles.modifiers.rounded]: rounded,
      [styles.modifiers.displayLg]: large && !compact,
      [styles.modifiers.fullHeight]: fullHeight,
      [styles.modifiers.plain]: plain,
    }]"
    :tabindex="selectable || selectableRaised ? '0' : undefined"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Card/card';

import { provide, computed, defineComponent, type DefineComponent, type PropType, type InjectionKey, type Ref, type ComputedRef, markRaw } from 'vue';
import { useManagedProp } from '../../use';

export const CardExpandedKey = Symbol('CardExpandedKey') as InjectionKey<Ref<boolean>>;
export const CardExpandableKey = Symbol('CardExpandableKey') as InjectionKey<ComputedRef<boolean>>;

export default defineComponent({
  name: 'PfCard',

  props: {
    /** Content rendered inside the Card */
    component: {
      type: [String, Object] as PropType<string | DefineComponent>,
      default: 'article',
    },

    /** Modifies the card to include compact styling. Should not be used with isLarge. */
    compact: Boolean,

    /** Modifies the card to include selectable styling */
    selectable: Boolean,

    /** Specifies the card is selectable, and applies the new raised styling on hover and select */
    selectableRaised: Boolean,

    /** Flag indicating that the card should render a hidden input to make it selectable */
    selectableInput: Boolean,

    /** Modifies a raised selectable card to have disabled styling */
    selectableDisabled: Boolean,

    /** Name of the optional hidden input that tracks the selected status */
    name: String,

    /** Modifies the card to include selected styling */
    selected: {
      type: Boolean,
      default: null,
    },

    /** Modifies the card to include flat styling */
    flat: Boolean,

    /** Modifies the card to include rounded styling */
    rounded: Boolean,

    /** Modifies the card to be large. Should not be used with isCompact. */
    large: Boolean,

    /** Cause component to consume the available height of its container */
    fullHeight: Boolean,

    /** Modifies the card to include plain styling; this removes border and background */
    plain: Boolean,

    /** Modifies the card to be expandable */
    expandable: Boolean,

    /** Flag indicating if a card is expanded. Modifies the card to be expandable. */
    expanded: {
      type: Boolean,
      default: null,
    },
  },

  emits: ['update:expanded', 'update:selected', 'click', 'change'],

  setup(props) {
    const managedExpanded = useManagedProp('expanded', false);
    provide(CardExpandedKey, managedExpanded);
    provide(CardExpandableKey, computed(() => props.expandable || props.expanded !== null));
    return {
      styles: markRaw(styles) as typeof styles,
      managedExpanded,
      managedSelected: useManagedProp('selected', false),
    };
  },

  computed: {
    selectableModifiers() {
      if (this.selectableDisabled) {
        return [styles.modifiers.nonSelectableRaised];
      }
      if (this.selectableRaised) {
        return [styles.modifiers.selectableRaised, this.managedSelected && styles.modifiers.selectedRaised];
      }
      if (this.selectable) {
        return [styles.modifiers.selectable, this.managedSelected && styles.modifiers.selected];
      }
      return [];
    },
  },

  methods: {
    onClick(e: MouseEvent | TouchEvent)  {
      this.managedSelected = !this.managedSelected;
      this.$emit('click', e);
    },
  },
});
</script>
