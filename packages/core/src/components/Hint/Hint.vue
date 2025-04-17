<template>
  <div v-bind="ouiaProps" :class="styles.hint">
    <div v-if="$slots.actions" :class="styles.hintActions">
      <slot name="actions" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Hint/hint';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfHint',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  actions?: (props?: Record<never, never>) => any;
}>();
</script>
