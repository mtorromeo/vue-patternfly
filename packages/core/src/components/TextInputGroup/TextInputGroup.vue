<template>
  <div
    v-bind="ouiaProps"
    :class="[styles.textInputGroup, {
      [styles.modifiers.disabled]: disabled,
      [styles.modifiers.plain]: plain,
      [styles.modifiers[validated as NonNullable<typeof validated>]]: validated,
    }]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export const TextInputGroupDisabledKey = Symbol('TextInputGroupDisabledKey') as InjectionKey<boolean | undefined>;

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Adds disabled styling and a disabled context value which text input group main hooks into for the input itself */
  disabled?: boolean;
  /** Flag to indicate the toggle has no border or background */
  plain?: boolean;
  /** Status variant of the text input group. */
  validated?: 'success' | 'warning' | 'error';
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import type { HTMLAttributes } from 'vue';
import { type InjectionKey, provide } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTextInputGroup',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
}>();

provide(TextInputGroupDisabledKey, props.disabled);
</script>
