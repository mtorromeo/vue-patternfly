<template>
  <component
    :is="labelWrapped ? 'label' : 'div'"
    :class="[styles.radio, {
      [styles.modifiers.standalone]: !labelWrapped && !(label || $slots.label),
    }]"
    :for="labelWrapped ? id : undefined"
  >
    <sort>
      <sort-by :weight="labelBeforeButton ? -1 : 1">
        <component
          :is="labelWrapped ? 'span' : 'label'"
          :class="[styles.radioLabel, {
            [styles.modifiers.disabled]: disabled,
          }]"
          :for="labelWrapped ? undefined : id"
        >
          <slot name="label">{{ label }}</slot>
        </component>
      </sort-by>

      <input
        :id="id"
        v-bind="{...ouiaProps, ...$attrs}"
        type="radio"
        :class="styles.radioInput"
        :aria-invalid="!valid"
        :disabled="disabled"
        :checked="checked"
        :aria-label="(label || $slots.label) ? undefined : ariaLabel"
        @change="(e: Event) => emit('change', e)"
      >
    </sort>

    <span v-if="description || $slots.description" :class="styles.radioDescription">
      <slot name="description">{{ description }}</slot>
    </span>

    <span v-if="body || $slots.body" :class="styles.radioBody">
      <slot name="body">{{ body }}</slot>
    </span>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Radio/radio';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import Sort from '../helpers/Sort.vue';
import SortBy from '../helpers/SortBy.vue';

defineOptions({
  name: 'PfRadio',
  inheritAttrs: false,
});

const props = defineProps<{
  /** Id of the radio. */
  id?: string;
  /** Flag to show if the radio label is wrapped on small screen. */
  labelWrapped?: boolean;
  /** Flag to show if the radio label is shown before the radio button. */
  labelBeforeButton?: boolean;
  /** Flag to show if the radio is checked. */
  checked?: boolean;
  /** Flag to show if the radio is disabled. */
  disabled?: boolean;
  /** Flag to show if the radio selection is valid or invalid. */
  valid?: boolean;
  /** Label text of the radio. */
  label?: string;
  /** Name for group of radios */
  name: string;
  /** Aria label for the radio. */
  ariaLabel?: string;
  /** Description text of the radio. */
  description?: string;
  /** Body of the radio. */
  body?: string;
} & OUIAProps>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
  label?: (props: Record<never, never>) => any;
  description?: (props: Record<never, never>) => any;
  body?: (props: Record<never, never>) => any;
}>();

const emit = defineEmits<{
  (name: 'change', e: Event): void;
}>();

const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
