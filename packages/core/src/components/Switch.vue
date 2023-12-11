<template>
  <label
    v-bind="{...ouiaProps, ...labelAttrs}"
    :class="[styles.switch, $attrs.class, {
      [styles.modifiers.reverse]: reversed,
    }]"
  >
    <input
      v-bind="$attrs"
      :name="name"
      :disabled="disabled"
      :class="styles.switchInput"
      type="checkbox"
      :checked="managedChecked"
      @change="managedChecked = ($event.currentTarget as HTMLInputElement).checked"
    >
    <input
      v-if="name && isDefined(offValue) && !managedChecked"
      :name="name"
      type="hidden"
      :value="offValue"
      :disabled="disabled"
    >

    <template v-if="label">
      <span :class="styles.switchToggle" />
      <span :class="[styles.switchLabel, styles.modifiers.on]" aria-hidden="true">{{ label }}</span>
      <span
        :class="[styles.switchLabel, styles.modifiers.off]"
        aria-hidden="true"
      >{{ labelOff ? labelOff : label }}</span>
    </template>

    <span v-else :class="styles.switchToggle">
      <div :class="styles.switchToggleIcon" aria-hidden="true">
        <CheckIcon />
      </div>
    </span>
  </label>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Switch/switch';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import type { HTMLAttributes, InputHTMLAttributes } from 'vue';
import { useManagedProp } from '../use';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfSwitch',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'type' | 'onChange'> {
  checked?: boolean;

  /** Flag to reverse the layout of toggle and label (toggle on right). */
  reversed?: boolean;

  /** Text value for the label when on */
  label?: string;

  /** Text value for the label when off */
  labelOff?: string;

  labelAttrs?: HTMLAttributes;

  offValue?: string;
  name?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  checked: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  (name: 'update:checked', value: boolean): void;
}>();

defineSlots<Record<string, never>>();

const managedChecked = useManagedProp('checked', false);
</script>
