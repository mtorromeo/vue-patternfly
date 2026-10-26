<template>
  <div v-bind="ouiaProps" :class="styles.hint">
    <div v-if="$slots.actions" :class="[styles.hintActions, { [styles.modifiers.noOffset]: actionsNoOffset }]">
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

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag indicating that the actions have no offset */
  actionsNoOffset?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Actions of the hint */
  actions?: (props?: Record<never, never>) => any;
}>();
</script>
