<template>
  <label
    v-bind="{ ...ouiaProps, ...labelAttrs }"
    :class="[
      styles.switch,
      $attrs.class,
      {
        [styles.modifiers.reverse]: reversed,
      },
    ]"
    :for="id"
  >
    <input
      :id="id"
      v-bind="{ ...$attrs, class: undefined }"
      :name="name"
      :disabled="disabled"
      :class="styles.switchInput"
      type="checkbox"
      role="switch"
      :checked="checked"
      :aria-labelledby="labelledby"
      @change="checked = ($event.currentTarget as HTMLInputElement).checked"
    />
    <input
      v-if="name && isDefined(offValue) && !checked"
      :name="name"
      type="hidden"
      :value="offValue"
      :disabled="disabled"
    />

    <template v-if="hasLabel">
      <span :class="styles.switchToggle">
        <span v-if="checkIcon" :class="styles.switchToggleIcon">
          <check-icon />
        </span>
      </span>
      <span :id="labelId" :class="styles.switchLabel" aria-hidden="true">
        <slot name="label">{{ label }}</slot>
      </span>
    </template>

    <span v-else :class="styles.switchToggle">
      <div :class="styles.switchToggleIcon">
        <check-icon />
      </div>
    </span>
  </label>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'type' | 'onChange' | 'autocomplete'> {
  /** Id of the switch input. Generated when not set. */
  id?: string;
  /** Flag to show if the switch has a check icon. */
  checkIcon?: boolean;
  /** Flag to reverse the layout of toggle and label (label at start, toggle at end). */
  reversed?: boolean;
  /** Text value for the visible label, replaced by the label slot. It must not change with the switch state. */
  label?: string;
  /** Additional attributes for the label wrapping the switch */
  labelAttrs?: HTMLAttributes;
  /** Value submitted by a hidden input when the switch is unchecked */
  offValue?: string;
  /** Form element name */
  name?: string;
  /** Flag to show if the switch is disabled. */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Switch/switch';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import { computed, useAttrs, useId, useSlots, type HTMLAttributes, type InputHTMLAttributes, type VNode } from 'vue';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfSwitch',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  id: () => useId(),
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

/** Flag to show if the switch is checked. */
const checked = defineModel<boolean>('checked', { default: false });

defineSlots<{
  /** Visible label, replacing the label prop */
  label?: (props?: Record<never, never>) => VNode[];
}>();

const attrs = useAttrs();
const slots = useSlots();
const hasLabel = computed(() => props.label !== undefined || !!slots.label);

// like upstream: the input is labelled by the visible label unless an aria-label or aria-labelledby is set
const labelledby = computed(() => {
  const ariaLabel = attrs['aria-label'];
  const ariaLabelledby = attrs['aria-labelledby'];
  const hasAccessibleName = hasLabel.value || ariaLabel || ariaLabelledby;
  if (!hasAccessibleName || (ariaLabel && !ariaLabelledby)) {
    return undefined;
  }
  return ariaLabelledby ? String(ariaLabelledby) : `${props.id}-label`;
});
const labelId = computed(() =>
  labelledby.value && !attrs['aria-label'] && !attrs['aria-labelledby'] ? `${props.id}-label` : undefined,
);

if (!hasLabel.value && !attrs['aria-label'] && !attrs['aria-labelledby']) {
  console.error('Switch: Switch requires at least one of label, aria-labelledby, or aria-label props to be specified');
}
</script>
