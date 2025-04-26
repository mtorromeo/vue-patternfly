<template>
  <input
    v-if="selectableInput || name"
    class="pf-v5-screen-reader"
    type="checkbox"
    :name="name"
    :checked="selected"
    :disabled="selectableDisabled"
    tabindex="-1"
    @change="emit('change', $event)"
  >
  <component
    :is="component"
    v-bind="{...ouiaProps, ...$attrs}"
    :class="[styles.card, ...selectableModifiers, {
      [styles.modifiers.compact]: compact,
      [styles.modifiers.expanded]: expanded,
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
export const CardExpandedKey = Symbol('CardExpandedKey') as InjectionKey<Ref<boolean | undefined>>;
export const CardExpandableKey = Symbol('CardExpandableKey') as InjectionKey<ComputedRef<boolean>>;

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'tabindex'> {
  /** Content rendered inside the Card */
  component?: string | Component;

  /** Modifies the card to include compact styling. Should not be used with isLarge. */
  compact?: boolean;

  /** Modifies the card to include selectable styling */
  selectable?: boolean;

  /** Specifies the card is selectable, and applies the new raised styling on hover and select */
  selectableRaised?: boolean;

  /** Flag indicating that the card should render a hidden input to make it selectable */
  selectableInput?: boolean;

  /** Modifies a raised selectable card to have disabled styling */
  selectableDisabled?: boolean;

  /** Name of the optional hidden input that tracks the selected status */
  name?: string;

  /** Modifies the card to include flat styling */
  flat?: boolean;

  /** Modifies the card to include rounded styling */
  rounded?: boolean;

  /** Modifies the card to be large. Should not be used with isCompact. */
  large?: boolean;

  /** Cause component to consume the available height of its container */
  fullHeight?: boolean;

  /** Modifies the card to include plain styling; this removes border and background */
  plain?: boolean;

  /** Modifies the card to be expandable */
  expandable?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import { provide, computed, type Component, type InjectionKey, type ComputedRef, type HTMLAttributes, type Ref } from 'vue';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfCard',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'article',
  expanded: undefined,
  selected: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** Flag indicating if a card is expanded. Modifies the card to be expandable. */
const expanded = defineModel<boolean>('expanded');

/** Modifies the card to include selected styling */
const selected = defineModel<boolean>('selected', { default: false });

const emit = defineEmits<{
  (name: 'click', e: PointerEvent): void;
  (name: 'change', e: Event): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  badge?: (props?: Record<never, never>) => any;
}>();

provide(CardExpandedKey, expanded);
provide(CardExpandableKey, computed(() => props.expandable || isDefined(expanded.value)));

const selectableModifiers = computed(() => {
  if (props.selectableDisabled) {
    return [styles.modifiers.nonSelectableRaised];
  }
  if (props.selectableRaised) {
    return [styles.modifiers.selectableRaised, selected.value && styles.modifiers.selectedRaised];
  }
  if (props.selectable) {
    return [styles.modifiers.selectable, selected.value && styles.modifiers.selected];
  }
  return [];
});

function onClick(e: PointerEvent)  {
  selected.value = !selected.value;
  emit('click', e);
}
</script>
