<template>
  <label
    v-bind="labelAttrs"
    :class="[styles.switch, $attrs.class, {
      [styles.modifiers.reverse]: reversed,
    }]"
  >
    <input
      v-bind="$attrs"
      :class="styles.switchInput"
      type="checkbox"
      :checked="checked"
      @change="$emit('update:checked', ($event.currentTarget as HTMLInputElement).checked)"
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
        <CheckIcon no-vertical-align />
      </div>
    </span>
  </label>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Switch/switch';
import CheckIcon from '@vue-patternfly/icons/dist/esm/icons/check-icon';
import type { HTMLAttributes, InputHTMLAttributes } from 'vue';

defineOptions({
  name: 'PfSwitch',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ InputHTMLAttributes {
    checked?: boolean;

    /** Flag to reverse the layout of toggle and label (toggle on right). */
    reversed?: boolean;

    /** Text value for the label when on */
    label?: string;

    /** Text value for the label when off */
    labelOff?: string;

    labelAttrs?: HTMLAttributes;
}

defineProps<Props>();

defineEmits<{
  (name: 'update:checked', value: boolean): void;
}>();
</script>
