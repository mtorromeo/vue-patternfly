<template>
  <component
    :is="component"
    v-bind="{...ouiaProps, ...$attrs}"
    :class="[styles.card, ...selectableModifiers, {
      [styles.modifiers.compact]: compact,
      [styles.modifiers.expanded]: expanded,
      [styles.modifiers.displayLg]: large && !compact,
      [styles.modifiers.fullHeight]: fullHeight,
      [styles.modifiers.plain]: plain,
      [styles.modifiers.secondary]: variant === 'secondary',
      [styles.modifiers.disabled]: disabled,
    }]"
    :tabindex="selectable ? '0' : undefined"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export const CardExpandedKey = Symbol('CardExpandedKey') as InjectionKey<Ref<boolean | undefined>>;
export const CardExpandableKey = Symbol('CardExpandableKey') as InjectionKey<ComputedRef<boolean>>;
export const CardCheckboxKey = Symbol('CardCheckboxKey') as InjectionKey<ComputedRef<{
  name: string | undefined;
  hidden: boolean;
  checked: Ref<boolean>;
  disabled: boolean | undefined;
  onChange: (e: Event) => void;
} | null>>;

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'tabindex' | 'onClick'> {
  /** Content rendered inside the Card */
  component?: string | Component;

  /** Modifies the card to include compact styling. Should not be used with isLarge. */
  compact?: boolean;

  /** Modifies the card to include selectable styling */
  selectable?: boolean;

  /** Flag indicating that the card should render a hidden input to make it selectable */
  selectableInput?: boolean | 'hidden' | 'visible';

  /** Name of the optional hidden input that tracks the selected status */
  name?: string;

  /** Flag indicating whether a card that is either only clickable or that is both clickable and selectable
   * is currently clicked and has clicked styling.
   */
  clicked?: boolean;

  /** Modifies the card to be large. Should not be used with isCompact. */
  large?: boolean;

  /** Cause component to consume the available height of its container */
  fullHeight?: boolean;

  /** Modifies the card to include plain styling; this removes border and background */
  plain?: boolean;

  /** Modifies the card to be expandable */
  expandable?: boolean;

  /** Flag indicating that a clickable or selectable card is disabled. */
  disabled?: boolean;

  /** Card background color variant */
  variant?: 'default' | 'secondary';

  onClick?: (e: PointerEvent) => void;
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
  component: 'div',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** Flag indicating if a card is expanded. Modifies the card to be expandable. */
const expanded = defineModel<boolean>('expanded');

/** Modifies the card to include selected styling */
const selected = defineModel<boolean>('selected', { default: false });

const emit = defineEmits<{
  (name: 'change', e: Event): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  badge?: (props?: Record<never, never>) => any;
}>();

provide(CardExpandedKey, expanded);
provide(CardExpandableKey, computed(() => props.expandable || isDefined(expanded.value)));
provide(CardCheckboxKey, computed(() => {
  if (!props.selectableInput && !props.name) {
    return null;
  }
  return {
    name: props.name,
    hidden: props.selectableInput !== 'visible',
    checked: selected,
    disabled: props.disabled,
    onChange: (e: Event) => emit('change', e),
  };
}));

const selectableModifiers = computed(() => {
  if (props.selectable && props.onClick) {
    return [
      styles.modifiers.selectable,
      styles.modifiers.clickable,
      (selected.value || props.clicked) && styles.modifiers.current,
    ];
  }
  if (props.selectable) {
    return [styles.modifiers.selectable, selected.value && styles.modifiers.selected];
  }
  if (props.onClick) {
    return [styles.modifiers.clickable, props.clicked && styles.modifiers.current];
  }
  return [];
});
</script>
