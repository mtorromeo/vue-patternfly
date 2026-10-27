<template>
  <component
    :is="href ? 'a' : 'span'"
    ref="wrapperRef"
    :href="href"
    :class="[styles.truncate, { [styles.modifiers.fixed]: byMaxChars }]"
    :tabindex="truncated && !href && !tooltipAttrs?.triggerRef ? 0 : undefined"
  >
    <template v-if="!byMaxChars">
      <span
        v-if="position !== 'middle'"
        ref="textRef"
        :class="position === 'start' ? styles.truncateEnd : styles.truncateStart"
      >
        {{ position === 'start' ? `\u200e${content}\u200e` : content }}
      </span>
      <template v-else>
        <span ref="textRef" :class="styles.truncateStart">{{ middleSlices ? middleSlices[0] : content }}</span>
        <span v-if="middleSlices" :class="styles.truncateEnd">{{ middleSlices[1] }}</span>
      </template>
    </template>

    <span v-else-if="!truncated" :class="`${styles.truncate}__text`">{{ content }}</span>
    <template v-else-if="position === 'start'">
      <span class="pf-v6-screen-reader">{{ content.slice(0, -maxChars) }}</span>
      <span :class="`${styles.truncate}__omission`" aria-hidden="true">{{ omissionContent }}</span>
      <span :class="`${styles.truncate}__text`">{{ content.slice(-maxChars) }}</span>
    </template>
    <template v-else-if="position === 'end'">
      <span :class="`${styles.truncate}__text`">{{ content.slice(0, maxChars) }}</span>
      <span :class="`${styles.truncate}__omission`" aria-hidden="true">{{ omissionContent }}</span>
      <span class="pf-v6-screen-reader">{{ content.slice(maxChars) }}</span>
    </template>
    <template v-else>
      <span :class="`${styles.truncate}__text`">{{ content.slice(0, middleStart) }}</span>
      <span :class="`${styles.truncate}__omission`" aria-hidden="true">{{ omissionContent }}</span>
      <span class="pf-v6-screen-reader">{{ content.slice(middleStart, middleEnd) }}</span>
      <span :class="`${styles.truncate}__text`">{{ content.slice(middleEnd) }}</span>
    </template>

    <!-- the tooltip is teleported to the body: it is placed here to keep a single root element -->
    <pf-tooltip
      v-if="truncated"
      :position="tooltipPosition"
      :content="content"
      :trigger-ref="triggerElement"
      v-bind="tooltipAttrs"
    />
  </component>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Text to truncate */
  content: string;
  /** An href to turn the truncate wrapper into an anchor element. For more custom control, pass a triggerRef in tooltipAttrs. */
  href?: string;
  /** The number of characters displayed in the second half of a middle truncation. Overridden by maxCharsDisplayed. */
  trailingNumChars?: number;
  /**
   * The maximum number of characters to display before truncating. This will always truncate content when its length
   * exceeds this value, and container width/resizing will not affect truncation.
   */
  maxCharsDisplayed?: number;
  /** The content signifying the omission of characters with maxCharsDisplayed. Defaults to an ellipsis. */
  omissionContent?: string;
  /** Where the text will be truncated */
  position?: 'start' | 'middle' | 'end';
  /** Tooltip position */
  tooltipPosition?: Placement;
  /** Additional attributes passed to the tooltip, such as a triggerRef to show the tooltip on another element. */
  tooltipAttrs?: Omit<ComponentProps<typeof PfTooltip>, 'content'>;
}

// the minimum number of characters before the trailing ones of a middle truncation
const minWidthCharacters = 12;
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Truncate/truncate';
import { devWarn } from '../helpers/dev';
import { computed, onMounted, ref, useTemplateRef, watch, type HTMLAttributes } from 'vue';
import { useDebounceFn, useResizeObserver } from '@vueuse/core';
import type { ComponentProps } from 'vue-component-type-helpers';
import PfTooltip from './Tooltip/Tooltip.vue';
import type { Placement } from '../helpers/FloatingUi.vue';

defineOptions({
  name: 'PfTruncate',
});

const props = withDefaults(defineProps<Props>(), {
  trailingNumChars: 7,
  omissionContent: '…',
  position: 'end',
  tooltipPosition: 'top',
});

defineSlots<Record<string, never>>();

const wrapper = useTemplateRef<HTMLElement>('wrapperRef');
const text = useTemplateRef<HTMLElement>('textRef');

if (props.maxCharsDisplayed !== undefined && props.maxCharsDisplayed <= 0) {
  devWarn('Truncate: the maxCharsDisplayed must be greater than 0, otherwise no content will be visible.');
}

const byMaxChars = computed(() => (props.maxCharsDisplayed ?? 0) > 0);
const maxChars = computed(() => props.maxCharsDisplayed ?? 0);
const middleStart = computed(() => Math.floor(maxChars.value / 2));
const middleEnd = computed(() => Math.ceil(maxChars.value / 2) * -1);

const middleSlices = computed(() => {
  const { content, trailingNumChars } = props;
  if (content.length - trailingNumChars <= minWidthCharacters) {
    return undefined;
  }
  return [content.slice(0, content.length - trailingNumChars), content.slice(-trailingNumChars)] as const;
});

// the tooltip is shown on its triggerRef, or on the truncate wrapper
const triggerElement = computed(() => props.tooltipAttrs?.triggerRef ?? wrapper.value);

const observedTruncated = ref(true);
const truncated = computed(() => (byMaxChars.value ? props.content.length > maxChars.value : observedTruncated.value));

function actualWidth(element: Element) {
  const style = getComputedStyle(element);
  const px = (value: string) => parseFloat(value) || 0;
  return (
    px(style.width) -
    px(style.paddingLeft) -
    px(style.paddingRight) -
    px(style.borderRightWidth) -
    px(style.borderLeftWidth)
  );
}

function updateTruncated() {
  const parent = wrapper.value?.parentElement;
  if (byMaxChars.value || !parent || !text.value) {
    return;
  }
  let textWidth = text.value.scrollWidth;
  // not laid out yet
  if (!textWidth) {
    return;
  }
  if (props.position === 'middle') {
    // estimate the width of the trailing characters too
    textWidth += (textWidth / props.content.length) * props.trailingNumChars;
  }
  observedTruncated.value = textWidth >= actualWidth(parent);
}

const debouncedUpdate = useDebounceFn(updateTruncated, 500);
useResizeObserver(() => wrapper.value?.parentElement, debouncedUpdate);
onMounted(updateTruncated);
watch(
  () => [props.content, props.position, props.trailingNumChars],
  () => setTimeout(updateTruncated),
);

defineExpose({
  /** The truncate wrapper element */
  el: wrapper,
});
</script>
