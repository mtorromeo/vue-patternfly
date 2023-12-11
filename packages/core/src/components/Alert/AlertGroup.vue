<template>
  <teleport :disabled="!toast" :to="appendTo">
    <pf-alert-group-inline v-bind="{...ouiaProps, ...$attrs}" :toast="toast">
      <slot />
    </pf-alert-group-inline>
  </teleport>
</template>

<script lang="ts" setup>
import PfAlertGroupInline from './AlertGroupInline.vue';
import type { ComponentProps } from '../../util';
import type { RendererElement } from 'vue';
import { useOUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfAlertGroup',
  inheritAttrs: false,
});

export interface Props extends /* @vue-ignore */ ComponentProps<typeof PfAlertGroupInline> {
  /** Toast notifications are positioned at the top right corner of the viewport */
  toast?: boolean;
  /** Determine where the alert is appended to */
  appendTo?: string | RendererElement | null | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  appendTo: 'body',
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();
</script>
