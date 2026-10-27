<template>
  <component
    :is="component"
    ref="textRef"
    :class="[wrapModifier && styles.modifiers[wrapModifier], styles.tableText]"
    @mouseenter="tooltipDefaultBehavior ? undefined : updateTooltip()"
  >
    <slot />
  </component>
  <pf-tooltip
    v-if="tooltipText"
    :trigger-ref="() => textElement"
    :content="tooltipText"
    v-bind="{
      ...(tooltipDefaultBehavior ? {} : { visible, 'onUpdate:visible': (v: boolean) => (visible = v) }),
      ...tooltipAttrs,
    }"
  />
</template>

<script setup lang="ts">
defineOptions({
  name: 'PfTableText',
});

const props = withDefaults(defineProps<Props>(), {
  component: 'span',
  tooltip: '',
});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const textRef = useTemplateRef<ComponentPublicInstance | HTMLElement>('textRef');
const textElement = computed(() => {
  const el = unrefElement(textRef);
  return el instanceof HTMLElement ? el : undefined;
});
const truncatedText = ref('');
const visible = ref(false);
const tooltipText = computed(() => (props.tooltipDefaultBehavior ? props.tooltip : truncatedText.value));

function updateTooltip() {
  const el = textElement.value;
  truncatedText.value = isOverflowing(el) ? props.tooltip || el.innerText : '';
  visible.value = !!truncatedText.value;
}

watch(
  () => [props.focused, props.tooltipDefaultBehavior],
  () => {
    if (props.tooltipDefaultBehavior) {
      return;
    }
    if (props.focused) {
      updateTooltip();
    } else {
      truncatedText.value = '';
      visible.value = false;
    }
  },
);
</script>

<script lang="ts">
import {
  computed,
  ref,
  useTemplateRef,
  watch,
  type Component,
  type ComponentPublicInstance,
  type HTMLAttributes,
} from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import { unrefElement } from '@vueuse/core';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { PfTooltip } from '@vue-patternfly/core';
import { isOverflowing, type CellModifier } from './common';

interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Element to render as the table text */
  component?: 'span' | 'div' | 'nav' | string | Component;
  /** Determines which wrapping modifier to apply to the table text */
  wrapModifier?: CellModifier;
  /** Text to display on the tooltip. Truncated text shows its own content when not set. */
  tooltip?: string;
  /** Additional props passed to the tooltip */
  tooltipAttrs?: Omit<ComponentProps<typeof PfTooltip>, 'content'>;
  /** Determines if the table text is focused by parent component, showing the tooltip when the text is truncated */
  focused?: boolean;
  /** Determines if tooltip should have normal visibility behavior. If false, the tooltip will only be shown when the text is not entirely visible */
  tooltipDefaultBehavior?: boolean;
}
</script>
