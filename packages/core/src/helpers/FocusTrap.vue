<template>
  <div v-bind="ouiaProps" ref="targetRef">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useFocusTrap, type UseFocusTrapOptions } from '@vueuse/integrations/useFocusTrap';
import { watch, type HTMLAttributes, useTemplateRef } from 'vue';
import { useOUIAProps, type OUIAProps } from './ouia';

defineOptions({
  name: 'PfFocusTrap',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  active?: boolean;
  paused?: boolean;
  focusTrapOptions?: UseFocusTrapOptions;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const target = useTemplateRef('targetRef');
const { activate, deactivate, pause, unpause } = useFocusTrap(target, {
  immediate: props.active,
  ...props.focusTrapOptions,
});

if (props.paused) {
  pause();
}

watch(() => props.active, () => {
  if (props.active) {
    activate();
  } else {
    deactivate();
  }
});

watch(() => props.paused, () => {
  if (props.paused) {
    pause();
  } else {
    unpause();
  }
});
</script>
