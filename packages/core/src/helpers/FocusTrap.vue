<template>
  <div ref="target">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useFocusTrap, type UseFocusTrapOptions } from '@vueuse/integrations/useFocusTrap';
import { watch, ref, type Ref, type HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfFocusTrap',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  active?: boolean;
  paused?: boolean;
  focusTrapOptions?: UseFocusTrapOptions;
}

const props = defineProps<Props>();

const target: Ref<HTMLDivElement | undefined> = ref();
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
