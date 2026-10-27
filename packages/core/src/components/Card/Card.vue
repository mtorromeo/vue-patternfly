<template>
  <component
    :is="component"
    :id="id"
    v-bind="{ ...ouiaProps, ...$attrs }"
    :class="[
      styles.card,
      ...selectableModifiers,
      {
        [styles.modifiers.compact]: compact,
        [styles.modifiers.expanded]: expanded,
        [styles.modifiers.displayLg]: large && !compact,
        [styles.modifiers.fullHeight]: fullHeight,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.glass]: glass,
        [styles.modifiers.secondary]: variant === 'secondary',
        [styles.modifiers.disabled]: disabled,
      },
    ]"
    @click="onCardClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'onClick'> {
  /** ID of the Card. Also used to derive the ids of the card title and subtitle. */
  id?: string;

  /** Content rendered inside the Card */
  component?: string | Component;

  /** Modifies the card to include compact styling. Should not be used with isLarge. */
  compact?: boolean;

  /** Modifies the card to include selectable styling */
  selectable?: boolean;

  /** Flag indicating that the card is clickable and contains some action that triggers on click. Implied by onClick and to. */
  clickable?: boolean;

  /** Flag indicating that the card should render an input to make it selectable. `true` renders it visually hidden. */
  selectableInput?: boolean | 'hidden' | 'visible';

  /** Renders the selectable input as a radio instead of a checkbox, for groups of single selectable cards. */
  selectableSingle?: boolean;

  /** Name of the optional input that tracks the selected status */
  name?: string;

  /** Additional attributes (id, aria-label, aria-labelledby, ...) for the selectable input or the clickable-only action */
  selectableAttrs?: Record<string, unknown>;

  /** Link to navigate to when a clickable-only card is clicked. */
  to?: string;

  /** Flag to indicate whether a clickable-only card's link should open in a new tab/window. */
  external?: boolean;

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

  /** Modifies the card to include glass styling when glass theme is enabled */
  glass?: boolean;

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
import { devError, devWarn } from '../../helpers/dev';
import { provide, computed, watch, onScopeDispose, type Component, type HTMLAttributes } from 'vue';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { CardKey, cardRadioGroups } from './common';

defineOptions({
  name: 'PfCard',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  component: 'div',
  selectableAttrs: () => ({}),
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Flag indicating if a card is expanded. Modifies the card to be expandable. */
const expanded = defineModel<boolean | undefined>('expanded', { default: undefined });

/** Modifies the card to include selected styling */
const selected = defineModel<boolean>('selected', { default: false });

const emit = defineEmits<{
  (name: 'change', e: Event): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

if (props.compact && props.large) {
  devWarn('Card: Cannot use compact with large. Defaulting to compact');
}

const clickable = computed(() => props.clickable || !!props.onClick || isDefined(props.to));
const hasInput = computed(() => !!props.selectableInput || !!props.name);

if (
  (hasInput.value || (clickable.value && !props.selectable)) &&
  !props.selectableAttrs['aria-label'] &&
  !props.selectableAttrs['aria-labelledby']
) {
  devError(
    `Card: ${hasInput.value ? 'Cards with a selectable input' : 'Clickable-only cards'} must have either the aria-label or aria-labelledby attribute passed in selectableAttrs in order to provide an accessible name to the clickable element.`,
  );
}

provide(CardKey, {
  cardId: computed(() => props.id),
  clickable,
  selectable: computed(() => props.selectable || hasInput.value),
  disabled: computed(() => props.disabled),
  expandable: computed(() => props.expandable || isDefined(expanded.value)),
  expanded,
  selectableAction: computed(() => {
    if (!hasInput.value && !(clickable.value && !props.selectable)) {
      return null;
    }
    return {
      single: props.selectableSingle,
      name: props.name,
      hidden: hasInput.value && props.selectableInput !== 'visible',
      checked: selected,
      attrs: props.selectableAttrs,
      to: props.to,
      external: props.external,
      onChange: (e: Event) => emit('change', e),
    };
  }),
});

// Radios don't notify the inputs they uncheck, so the cards of a group deselect each other
const radioGroup = computed(() => (props.selectableSingle && props.name ? props.name : undefined));
function leaveRadioGroup(name: string | undefined) {
  const group = name ? cardRadioGroups.get(name) : undefined;
  group?.delete(selected);
  if (name && group?.size === 0) {
    cardRadioGroups.delete(name);
  }
}
watch(
  radioGroup,
  (name, oldName) => {
    leaveRadioGroup(oldName);
    if (name) {
      cardRadioGroups.set(name, (cardRadioGroups.get(name) ?? new Set()).add(selected));
    }
  },
  { immediate: true },
);
onScopeDispose(() => leaveRadioGroup(radioGroup.value));
watch(selected, value => {
  if (value && radioGroup.value) {
    for (const other of cardRadioGroups.get(radioGroup.value) ?? []) {
      if (other !== selected) {
        other.value = false;
      }
    }
  }
});

const selectableModifiers = computed(() => {
  if (props.selectable && clickable.value) {
    return [
      styles.modifiers.selectable,
      styles.modifiers.clickable,
      (selected.value || props.clicked) && styles.modifiers.current,
    ];
  }
  if (props.selectable) {
    return [styles.modifiers.selectable, selected.value && styles.modifiers.selected];
  }
  if (clickable.value) {
    return [styles.modifiers.clickable, props.clicked && styles.modifiers.current];
  }
  return [];
});

function onCardClick(e: PointerEvent) {
  if (!props.disabled) {
    props.onClick?.(e);
  }
}
</script>
