<template>
  <div
    :class="[styles.textInputGroup, {
      [styles.modifiers.disabled]: disabled,
      [styles.modifiers.plain]: plain,
    }]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export const TextInputGroupDisabledKey = Symbol('TextInputGroupDisabledKey') as InjectionKey<boolean | undefined>;

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Adds disabled styling and a disabled context value which text input group main hooks into for the input itself */
  disabled?: boolean;
  /** Flag to indicate the toggle has no border or background */
  plain?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TextInputGroup/text-input-group';
import type { HTMLAttributes } from 'vue';
import { type InjectionKey, provide } from 'vue';

defineOptions({
  name: 'PfTextInputGroup',
});

const props = defineProps<Props>();

provide(TextInputGroupDisabledKey, props.disabled);
</script>
