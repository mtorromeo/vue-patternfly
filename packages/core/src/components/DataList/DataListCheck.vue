<template>
  <component
    :is="otherControls ? PassThrough : 'div'"
    :class="otherControls ? undefined : [styles.dataListItemControl, $attrs.class]"
  >
    <div :class="[styles.dataListCheck, otherControls ? $attrs.class : undefined]">
      <pf-checkbox
        v-bind="{ ...$attrs, class: undefined }"
        v-model="checked"
        :ouia-id="ouiaId"
        :ouia-safe="ouiaSafe"
        :disabled="disabled"
        :invalid="invalid"
        label-wrapped
      />
    </div>
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'type' | 'autocomplete' | 'checked'> {
  /** Flag to indicate if other controls are used in the pf-data-list-item: the check is not wrapped in its own control */
  otherControls?: boolean;
  /** Flag to show if the checkbox is disabled */
  disabled?: boolean;
  /** Flag to show if the checkbox selection is invalid */
  invalid?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import type { InputHTMLAttributes } from 'vue';
import type { OUIAProps } from '../../helpers/ouia';
import PassThrough from '../../helpers/PassThrough.vue';
import PfCheckbox from '../Checkbox.vue';

defineOptions({
  name: 'PfDataListCheck',
  inheritAttrs: false,
});

defineProps<Props>();

/** Flag to show if the checkbox is checked. */
const checked = defineModel<boolean | null>('checked', { default: false });
</script>
