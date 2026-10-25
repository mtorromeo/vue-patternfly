<template>
  <component
    v-bind="ouiaProps"
    :is="container"
    ref="containerRef"
    :class="[
      styles.accordionExpandableContent,
      {
        [styles.modifiers.fixed]: fixed,
      },
    ]"
    :hidden="!expanded"
    :tabindex="hasScrollbar ? 0 : undefined"
    :role="hasScrollbar && container === 'div' ? 'region' : undefined"
  >
    <slot v-if="customContent" />
    <pf-accordion-expandable-content-body v-else v-bind="bodyAttrs">
      <slot />
    </pf-accordion-expandable-content-body>
  </component>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag to indicate Accordion content is fixed */
  fixed?: boolean;
  /** Component to use as content container: a dd in a definition list, else a div. */
  component?: string | Component;
  /** Flag indicating content is custom. The expandable content body wrapper is removed from the children, so that
   * multiple pf-accordion-expandable-content-body can be rendered as content. */
  customContent?: boolean;
  /** Attributes added to the expandable content body wrapping the children. */
  bodyAttrs?: HTMLAttributes;
}
</script>

<script lang="ts" setup>
import {
  computed,
  inject,
  onMounted,
  ref,
  useTemplateRef,
  watch,
  type Component,
  type ComponentPublicInstance,
  type HTMLAttributes,
  type VNode,
} from 'vue';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfAccordionExpandableContentBody from './AccordionExpandableContentBody.vue';
import { AccordionItemKey, AccordionKey } from './common';

defineOptions({
  name: 'PfAccordionContent',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();

const accordion = inject(AccordionKey, undefined);
const item = inject(AccordionItemKey, undefined);

const container = computed(() => props.component ?? accordion?.contentContainer.value ?? 'div');
const expanded = computed(() => item?.expanded.value ?? false);

const containerRef = useTemplateRef<HTMLElement | ComponentPublicInstance>('containerRef');
const hasScrollbar = ref(false);

// fixed content scrolls when taller than its maximum height, so it must be reachable with the keyboard
function updateScrollbar() {
  const el = containerRef.value instanceof HTMLElement ? containerRef.value : containerRef.value?.$el;
  if (el instanceof HTMLElement && props.fixed && expanded.value) {
    hasScrollbar.value = el.offsetHeight < el.scrollHeight;
  } else if (!props.fixed) {
    hasScrollbar.value = false;
  }
}

onMounted(updateScrollbar);
watch([() => props.fixed, expanded], updateScrollbar, { flush: 'post' });
</script>
