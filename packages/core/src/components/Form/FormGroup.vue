<template>
  <component v-bind="ouiaProps" :is="fieldset ? 'fieldset' : 'div'" :class="styles.formGroup">
    <div
      v-if="label || $slots.label"
      :class="[styles.formGroupLabel, {
        [styles.modifiers.info]: labelInfo || $slots['label-info'],
        [styles.modifiers.noPaddingTop]: noPaddingTop,
      }]"
    >
      <component
        :is="(labelInfo || $slots['label-info']) ? 'div' : PassThrough"
        :class="styles.formGroupLabelMain"
      >
        <label :class="styles.formLabel" :for="fieldId">
          <span :class="styles.formLabelText">
            <slot name="label">{{ label }}</slot>
          </span>
          <span v-if="required" :class="styles.formLabelRequired" aria-hidden="true">{{ ' *' }}</span>
        </label>
        {{ ' ' }}
        <slot name="label-icon" />
      </component>

      <div v-if="labelInfo || $slots['label-info']" :class="styles.formGroupLabelInfo">
        <slot name="label-info">{{ labelInfo }}</slot>
      </div>
    </div>

    <div
      :class="[styles.formGroupControl, {
        [styles.modifiers.inline]: inline,
        [styles.modifiers.stack]: stack,
      }]"
    >
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Form/form';
import type { FieldsetHTMLAttributes } from 'vue';
import PassThrough from '../../helpers/PassThrough.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfFormGroup',
});

export interface Props extends OUIAProps, /* @vue-ignore */ FieldsetHTMLAttributes {
  fieldset?: boolean;

    /** Label text before the field. */
  label?: string;

  /** Additional label information displayed after the label. */
  labelInfo?: string;

  /** Sets the FormGroup required. */
  required?: boolean,

  inline?: boolean,

  /** Sets the FormGroupControl to be stacked */
  stack?: boolean,

  /** Removes top spacer from label. */
  noPaddingTop?: boolean,

  /** ID of the included field. It has to be the same for proper working. */
  fieldId?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  label?: (props?: Record<never, never>) => any;
  'label-icon'?: (props?: Record<never, never>) => any;
  'label-info'?: (props?: Record<never, never>) => any;
}>();
</script>
