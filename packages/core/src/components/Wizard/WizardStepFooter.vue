<template>
  <!-- rendered by the wizard in place of its footer -->
</template>

<script lang="ts">
interface Props extends WizardFooterAttrs {
  /** Renders the default slot as the whole footer, without wrapping it in a pf-wizard-footer-wrapper */
  unwrapped?: boolean;
}
</script>

<script lang="ts" setup>
import { h, onBeforeUnmount, onWatcherCleanup, watchEffect, type VNode } from 'vue';
import PfWizardFooterWrapper from './WizardFooterWrapper.vue';
import { useWizardContext, type WizardFooterAttrs, type WizardFooterSlotProps } from './common';

defineOptions({
  name: 'PfWizardStepFooter',
  inheritAttrs: false,
});

// booleans default to undefined so that the defaults of the wizard and the step are kept
const props = withDefaults(defineProps<Props>(), {
  nextDisabled: undefined,
  backDisabled: undefined,
  backHidden: undefined,
  cancelHidden: undefined,
});

const slots = defineSlots<{
  /** Replaces the footer of the wizard, otherwise the props are applied to the default footer */
  default?: (props: WizardFooterSlotProps) => VNode[];
}>();

const { setFooter } = useWizardContext();

watchEffect(() => {
  const { unwrapped, ...footerAttrs } = props;
  // the slot is read when the wizard renders its footer, keeping its content reactive
  setFooter(
    slots.default
      ? footerProps =>
          unwrapped ? slots.default?.(footerProps) : h(PfWizardFooterWrapper, null, () => slots.default?.(footerProps))
      : Object.fromEntries(Object.entries(footerAttrs).filter(([, value]) => value !== undefined)),
  );
  onWatcherCleanup(() => setFooter(null));
});

onBeforeUnmount(() => setFooter(null));
</script>
