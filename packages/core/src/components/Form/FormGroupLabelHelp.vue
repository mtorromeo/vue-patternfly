<template>
  <pf-button component="span" inline variant="plain" no-padding @keydown="onKeydown">
    <template #icon>
      <circle-question-icon />
    </template>
  </pf-button>
</template>

<script lang="ts">
/** Pass an aria-label: it is the accessible name of the help button. */
interface Props extends /* @vue-ignore */ ComponentProps<typeof PfButton> {}
</script>

<script lang="ts" setup>
import type { ComponentProps } from 'vue-component-type-helpers';
import CircleQuestionIcon from '@vue-patternfly/icons/circle-question-icon';
import PfButton from '../Button.vue';

/** A help button for the `label-help` slot of pf-form-group. It should be wrapped or linked to a pf-popover. */
defineOptions({
  name: 'PfFormGroupLabelHelp',
});

defineProps<Props>();

function onKeydown(event: KeyboardEvent) {
  if (event.key === ' ' || event.key === 'Enter') {
    event.preventDefault();
    (event.currentTarget as HTMLElement | null)?.click();
  }
}
</script>
