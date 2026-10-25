<template>
  <pf-button v-bind="ouiaProps" variant="plain" :aria-label="ariaLabel || defaultAriaLabel" @click="onClick">
    <template #icon>
      <xmark-icon />
    </template>
  </pf-button>
</template>

<script lang="ts">
interface Props
  extends
    OUIAProps,
    /* @vue-ignore */ Omit<ComponentProps<typeof PfButton>, 'variant' | 'ouiaId' | 'ouiaSafe' | 'onClick'> {
  /** Accessible label for the close button. Defaults to "Close <variant label> <title>" from the alert. */
  ariaLabel?: string;
  /** Variant label for the default aria-label, replacing the one of the alert: "Close <variantLabel> alert: <title>". */
  variantLabel?: string;
}
</script>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import PfButton from '../Button.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { AlertGroupItemKey, AlertKey } from './common';

defineOptions({
  name: 'PfAlertActionCloseButton',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** A callback for when the close button is clicked, after the alert slid out in an animated alert group. */
  (name: 'close', event: MouseEvent): void;
}>();

const alert = inject(AlertKey, undefined);
const groupItem = inject(AlertGroupItemKey, undefined);

// the variant label of the alert already ends with "alert:"
const defaultAriaLabel = computed(() =>
  props.variantLabel
    ? `Close ${props.variantLabel} alert: ${alert?.title.value}`
    : `Close ${alert?.variantLabel.value} ${alert?.title.value}`,
);

function onClick(event: MouseEvent) {
  if (groupItem) {
    groupItem.dismiss(() => emit('close', event));
  } else {
    emit('close', event);
  }
}
</script>
