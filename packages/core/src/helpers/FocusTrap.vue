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
const { activate, deactivate, pause, unpause } = useFocusTrap(target, { ...props.focusTrapOptions, immediate: false });

watch([target, () => props.active, () => props.paused], ([el, active, paused]) => {
  if (!el) {
    return;
  }
  if (active) {
    activate();
    if (paused) {
      pause();
    } else {
      unpause();
    }
  } else {
    deactivate();
  }
}, { flush: 'post' });
</script>
