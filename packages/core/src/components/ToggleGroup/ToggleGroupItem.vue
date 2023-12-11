<template>
  <div v-bind="(ouiaProps as any)" :class="styles.toggleGroupItem">
    <button
      :id="buttonId"
      type="button"
      :class="[styles.toggleGroupButton, { [styles.modifiers.selected]: effectiveSelected }]"
      :aria-pressed="effectiveSelected"
      :aria-label="ariaLabel"
      :disabled="disabled ?? injectedDisabled"
      @click="onClick"
    >
      <span v-if="$slots.icon" :class="styles.toggleGroupIcon">
        <slot name="icon" />
      </span>
      <span v-if="$slots.default || text" :class="styles.toggleGroupText">
        <slot>{{ text }}</slot>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
export interface Props<T> extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Text rendered inside the toggle group item */
  text?: string;
  value?: T;
  /** Flag indicating if the toggle group item is disabled */
  disabled?: boolean;
  /** Flag indicating if the toggle group item is selected */
  selected?: boolean;
  /** required when icon is used with no supporting text */
  ariaLabel?: string;
  /** Optional id for the button within the toggle group item */
  buttonId?: string;
}
</script>

<script lang="ts" setup generic="T = string | number">
import styles from '@patternfly/react-styles/css/components/ToggleGroup/toggle-group';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { inject, computed, ref, type HTMLAttributes } from 'vue';
import { ToggleGroupDisabledKey, ToggleGroupSelectionKey } from './ToggleGroup.vue';
import { isDefined } from '@vueuse/shared';

defineOptions({
  name: 'PfToggleGroupItem',
});

const props = withDefaults(defineProps<Props<T>>(), {
  selected: undefined,
  disabled: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent | TouchEvent): void;
  (name: 'update:selected', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
}>();

const injectedDisabled = inject(ToggleGroupDisabledKey, undefined);
const selection = inject(ToggleGroupSelectionKey, undefined);

const innerSelected = ref(false);

const effectiveSelected = computed({
  get(): boolean {
    if (isDefined(props.selected)) {
      return props.selected;
    }

    if (!isDefined(selection)) {
      return innerSelected.value;
    }

    const value = props.value ?? props.text;
    if (!isDefined(value)) {
      return false;
    }

    if (Array.isArray(selection.value)) {
      return selection.value.includes(value);
    }
    return selection.value === value;
  },

  set(to: boolean) {
    emit('update:selected', to);

    if (isDefined(props.selected)) {
      return;
    }

    if (selection === undefined) {
      innerSelected.value = to;
      return;
    }

    const value = props.value ?? props.text;
    if (!isDefined(value)) {
      return;
    }

    if (Array.isArray(selection.value)) {
      if (to) {
        if (!selection.value.includes(value)) {
          selection.value = [...selection.value, value];
        }
      } else {
        const idx = selection.value.indexOf(value);
        if (idx >= 0) {
          selection.value.splice(idx, 1);
        }
      }
    } else if (to) {
      selection.value = value;
    } else {
      selection.value = undefined;
    }
  },
});

function onClick(e: MouseEvent | TouchEvent) {
  emit('click', e);
  effectiveSelected.value = !effectiveSelected.value;
}
</script>
