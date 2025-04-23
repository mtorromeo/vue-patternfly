<template>
  <span
    ref="helpTextRef"
    v-bind="(ouiaProps as any)"
    :class="[styles.descriptionListText, styles.modifiers.helpText]"
    role="button"
    type="button"
    @keydown="handleKeys"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DescriptionList/description-list';
import { useTemplateRef, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDescriptionListTermHelpTextButton',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const helpText = useTemplateRef('helpTextRef');

function handleKeys(event: KeyboardEvent) {
  if (!helpText.value || helpText.value !== (event.target as HTMLElement)) {
    return;
  }

  const key = event.key;
  if (key === 'Enter' || key === ' ') {
    event.preventDefault();
    helpText.value.click();
  }
}
</script>
