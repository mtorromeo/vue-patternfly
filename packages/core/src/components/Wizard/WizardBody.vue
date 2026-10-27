<template>
  <component
    :is="component"
    :ref="setWrapper"
    :tabindex="hasScrollbar ? 0 : shouldFocusContent ? -1 : undefined"
    :role="component === 'div' && hasScrollbar ? 'region' : undefined"
    :aria-label="hasScrollbar ? ariaLabel || messages.wizardBodyContent(activeStep?.name) : undefined"
    :aria-labelledby="hasScrollbar ? ariaLabelledby : undefined"
    :class="styles.wizardMain"
  >
    <div :class="[styles.wizardMainBody, { [styles.modifiers.noPadding]: noPadding }]">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Flag to remove the default body padding */
  noPadding?: boolean;
  /** Accessible name of the wrapper element, applied only when the content overflows and renders a scrollbar */
  ariaLabel?: string;
  /** Ids of the elements naming the wrapper element, applied only when the content overflows and renders a scrollbar */
  ariaLabelledby?: string;
  /** Component used as the wrapping content container */
  component?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { usePfMessages } from '../../messages';
import { computed, inject, onMounted, ref, type ComponentPublicInstance, type HTMLAttributes, type VNode } from 'vue';
import { useDebounceFn, useResizeObserver } from '@vueuse/core';
import { WizardContextKey } from './common';

defineOptions({
  name: 'PfWizardBody',
});
const messages = usePfMessages();

withDefaults(defineProps<Props>(), {
  component: 'div',
});

defineSlots<{
  /** Content of the step */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const wizard = inject(WizardContextKey, null);
const activeStep = computed(() => wizard?.activeStep.value);
const shouldFocusContent = computed(() => !!wizard?.shouldFocusContent.value);

const wrapper = ref<HTMLElement | null>(null);
const hasScrollbar = ref(false);
let previousWidth: number | undefined;

function setWrapper(el: Element | ComponentPublicInstance | null) {
  wrapper.value = el instanceof HTMLElement ? el : null;
  if (wizard) {
    wizard.mainWrapperRef.value = wrapper.value;
  }
}

function checkScrollbar() {
  if (!wrapper.value) {
    return;
  }
  const { offsetWidth, offsetHeight, scrollHeight } = wrapper.value;
  if (previousWidth !== offsetWidth) {
    previousWidth = offsetWidth;
    hasScrollbar.value = offsetHeight < scrollHeight;
  }
}

onMounted(() => {
  if (wrapper.value) {
    hasScrollbar.value = wrapper.value.offsetHeight < wrapper.value.scrollHeight;
    previousWidth = wrapper.value.offsetWidth;
  }
});
useResizeObserver(wrapper, useDebounceFn(checkScrollbar, 250));
</script>
