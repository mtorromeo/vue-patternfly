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
      role="switch"
      :checked="checked"
      @change="checked = ($event.currentTarget as HTMLInputElement).checked"
    >
    <input
      v-if="name && isDefined(offValue) && !checked"
      :name="name"
      type="hidden"
      :value="offValue"
      :disabled="disabled"
    >

    <template v-if="label">
      <span :class="styles.switchToggle">
        <div v-if="checkIcon" :class="styles.switchToggleIcon" aria-hidden="true">
          <check-icon />
        </div>
      </span>
      <span :class="styles.switchLabel" aria-hidden="true">{{ label }}</span>
    </template>

    <span v-else :class="styles.switchToggle">
      <div :class="styles.switchToggleIcon" aria-hidden="true">
        <check-icon />
      </div>
    </span>
  </label>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Switch/switch';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import type { HTMLAttributes, InputHTMLAttributes } from 'vue';
import { isDefined } from '@vueuse/shared';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';

defineOptions({
  name: 'PfSwitch',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'type' | 'onChange'> {
  /** Flag to show if the switch has a check icon. */
  checkIcon?: boolean;

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

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const checked = defineModel<boolean>('checked', { default: false });

defineSlots<Record<string, never>>();
</script>
