<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.textInputGroup,
      {
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.plain]: plain,
        [styles.modifiers.success]: validated === 'success',
        [styles.modifiers.warning]: validated === 'warning',
        [styles.modifiers.error]: validated === 'error',
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export * from './common';

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Adds disabled styling and a disabled context value which text input group main hooks into for the input itself */
  disabled?: boolean;
  /** Flag to indicate the toggle has no border or background */
  plain?: boolean;
  /** Value to indicate if the text input group is modified to show that validation state.
   * If set to success, warning, or error, the group will show that state and the main input a status icon.
   * If set to default, no validation styling is applied (use to clear a prior validation state).
   */
  validated?: InputValidateState;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import type { HTMLAttributes } from 'vue';
import { computed, provide } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { InputValidateState } from '../../input';
import { TextInputGroupKey } from './common';

defineOptions({
  name: 'PfTextInputGroup',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();

provide(TextInputGroupKey, {
  disabled: computed(() => props.disabled),
  validated: computed(() => props.validated),
});
</script>
