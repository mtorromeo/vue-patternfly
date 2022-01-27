<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Card/card';

import { h, provide, computed, resolveDynamicComponent, defineComponent, DefineComponent, PropType, InjectionKey, Ref, ComputedRef } from 'vue';
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

    /** Modifies the card to include hover styles on :hover */
    hoverable: Boolean,

    /** Modifies the card to include compact styling. Should not be used with isLarge. */
    compact: Boolean,

    /** Modifies the card to include selectable styling */
    selectable: Boolean,

    /** Modifies the card to include selected styling */
    selected: Boolean,

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

  emits: ['update:expanded'],

  setup(props) {
    const managedExpanded = useManagedProp('expanded', false);
    provide(CardExpandedKey, managedExpanded);
    provide(CardExpandableKey, computed(() => props.expandable || props.expanded !== null));
    return {
      managedExpanded,
    };
  },

  render() {
    const component = resolveDynamicComponent(this.component) as DefineComponent;
    return h(component, {
      class: [styles.card, {
        [styles.modifiers.hoverable]: this.hoverable,
        [styles.modifiers.compact]: this.compact,
        [styles.modifiers.selectable]: this.selectable,
        [styles.modifiers.selected]: this.selected && this.selectable,
        [styles.modifiers.expanded]: this.managedExpanded,
        [styles.modifiers.flat]: this.flat,
        [styles.modifiers.rounded]: this.rounded,
        [styles.modifiers.displayLg]: this.large && !this.compact,
        [styles.modifiers.fullHeight]: this.fullHeight,
        [styles.modifiers.plain]: this.plain,
      }],
    }, this.$slots);
  },
});
</script>
