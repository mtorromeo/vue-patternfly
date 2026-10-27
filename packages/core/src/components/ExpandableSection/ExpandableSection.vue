<template>
  <define-toggle>
    <component :is="toggleWrapper" :class="`${styles.expandableSection}__toggle`">
      <pf-button
        v-bind="toggleAttrs"
        :id="effectiveToggleId"
        variant="link"
        :inline="isTruncate"
        :aria-controls="effectiveContentId"
        :aria-expanded="expanded"
        @click="expanded = !expanded"
      >
        <template v-if="!isTruncate && !noToggleIcon" #icon>
          <span :class="styles.expandableSectionToggleIcon">
            <slot name="toggle-icon">
              <pf-angle-down-icon />
            </slot>
          </span>
        </template>
        <template v-if="$slots['toggle-text'] || computedToggleText" #default>
          <slot name="toggle-text" :expanded="expanded">
            {{ computedToggleText }}
          </slot>
        </template>
      </pf-button>
    </component>
  </define-toggle>

  <div
    v-bind="{ ...ouiaProps, ...$attrs }"
    :class="[
      styles.expandableSection,
      detached && direction && [directionClassMap[direction], 'pf-m-detached'],
      {
        [styles.modifiers.expanded]: expanded,
        [styles.modifiers.truncate]: isTruncate,
        [styles.modifiers.displayLg]: large,
        [styles.modifiers.limitWidth]: widthLimited,
        [styles.modifiers.indented]: indented,
      },
    ]"
  >
    <toggle v-if="!detached && !isTruncate" />
    <div
      ref="expandableContentRef"
      :id="effectiveContentId"
      :class="styles.expandableSectionContent"
      :hidden="!isTruncate && !expanded"
      :aria-labelledby="effectiveToggleId"
      role="region"
      :style="{
        [lineClamp.name]: typeof truncate === 'number' && truncate > 0 ? truncate : undefined,
      }"
    >
      <slot />
    </div>
    <toggle v-if="!detached && isTruncate && hasToggle" />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import { devWarn } from '../../helpers/dev';
import lineClamp from '@patternfly/react-tokens/dist/esm/c_expandable_section_m_truncate__content_LineClamp';
import PfAngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import PfButton from '../Button.vue';
import { computed, onUpdated, ref, useId, watch, type HTMLAttributes, type Ref } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { createReusableTemplate, useElementSize } from '@vueuse/core';

defineOptions({
  name: 'PfExpandableSection',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Text that appears in the attached toggle */
  toggleText?: string;

  /** Text that appears in the attached toggle when expanded (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
  toggleTextExpanded?: string;

  /** Text that appears in the attached toggle when collapsed (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
  toggleTextCollapsed?: string;

  /** Indicates the expandable section has a detached toggle */
  detached?: boolean;

  /** ID of the content of the expandable section. When detached, it must match the contentId of the pf-expandable-section-toggle. */
  contentId?: string;

  /** ID of the toggle, which gives the content its accessible name via aria-labelledby. When detached, it must match the toggleId of the pf-expandable-section-toggle. */
  toggleId?: string;

  /** Flag for disclosure styling. */
  large?: boolean;

  /** Flag to indicate the width of the component is limited. Set to true for disclosure styling. */
  widthLimited?: boolean;

  /** Flag to indicate if the content is indented. */
  indented?: boolean;

  /** Truncates the expandable content, to the given number of lines or to 3 lines when true */
  truncate?: boolean | number;

  /** Sets the direction of the expandable animation when detached. If this prop is not passed, animation will not occur. */
  direction?: 'up' | 'down';

  /** The HTML element to use for the toggle wrapper. Use a heading level when the toggle text should function as a heading. */
  toggleWrapper?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /** Hides the toggle icon. Make sure the toggle text still conveys the expanded state. */
  noToggleIcon?: boolean;

  /** Additional attributes for the toggle button, like aria-label and aria-labelledby */
  toggleAttrs?: ComponentProps<typeof PfButton>;
}

const props = withDefaults(defineProps<Props>(), {
  toggleWrapper: 'div',
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
const generatedContentId = useId();
const generatedToggleId = useId();
const effectiveContentId = computed(() => props.contentId ?? generatedContentId);
const effectiveToggleId = computed(() => props.toggleId ?? generatedToggleId);

if (props.detached && !props.toggleId) {
  devWarn(
    'ExpandableSection: The toggleId value must be passed in and must match the toggleId of the ExpandableSectionToggle.',
  );
}

/** Flag to indicate if the content is expanded */
const expanded = defineModel<boolean>('expanded', { default: false });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  /** Content of the attached toggle, in place of the toggle text */
  'toggle-text'?: (props: { expanded: boolean }) => any;
  /** Icon of the attached toggle, when not truncated */
  'toggle-icon'?: (props?: Record<never, never>) => any;
}>();

const directionClassMap = {
  up: styles.modifiers.expandTop,
  down: styles.modifiers.expandBottom,
};

const [DefineToggle, Toggle] = createReusableTemplate();
const expandableContentRef: Ref<HTMLDivElement | undefined> = ref();
const { width: expandableContentWidth } = useElementSize(expandableContentRef);
const hasToggle = ref(true);
const isTruncate = computed(() => props.truncate !== undefined && props.truncate !== false);

const computedToggleText = computed(() => {
  if (expanded.value && props.toggleTextExpanded) {
    return props.toggleTextExpanded;
  }
  if (!expanded.value && props.toggleTextCollapsed) {
    return props.toggleTextCollapsed;
  }
  return props.toggleText;
});

watch([expandableContentWidth, () => props.truncate], checkToggleVisibility, { flush: 'post' });
onUpdated(checkToggleVisibility);

function checkToggleVisibility() {
  if (!isTruncate.value || !expandableContentRef.value) {
    return;
  }
  const maxLines = typeof props.truncate === 'number' && props.truncate ? props.truncate : parseInt(lineClamp.value);
  const totalLines =
    expandableContentRef.value.scrollHeight / parseInt(getComputedStyle(expandableContentRef.value).lineHeight);
  hasToggle.value = totalLines > maxLines;
}
</script>
