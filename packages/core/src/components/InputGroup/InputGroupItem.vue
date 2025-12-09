<template>
  <div
    v-bind="ouiaProps"
    :class="[
      styles.inputGroupItem, {
        [styles.modifiers.plain]: plain,
        [styles.modifiers.fill]: fill,
        [styles.modifiers.box]: box,
        [styles.modifiers.disabled]: disabled,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfInputGroupItem',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Enables box styling to the input group item */
  box?: boolean;
  /** Flag to indicate if the input group item is plain. */
  plain?: boolean;
  /** Flag to indicate if the input group item should fill the available horizontal space */
  fill?: boolean;
  /** Flag to indicate if the input group item is disabled. */
  disabled?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
