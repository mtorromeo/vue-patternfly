<template>
  <define-toggle>
    <div v-if="!detached" :class="`${styles.expandableSection}__toggle`">
      <pf-button
        variant="link"
        :inline="Boolean(truncate)"
        :aria-controls="contentId"
        :aria-expanded="managedExpanded"
        @click="managedExpanded = !managedExpanded"
      >
        <span v-if="!truncate" :class="styles.expandableSectionToggleIcon">
          <angle-right-icon aria-hidden />
        </span>
        <slot name="toggle-text">
          {{ computedToggleText }}
        </slot>
      </pf-button>
    </div>
  </define-toggle>

  <div
    v-bind="{...ouiaProps, ...$attrs}"
    :class="[styles.expandableSection, {
      [styles.modifiers.expanded]: managedExpanded,
      [styles.modifiers.truncate]: truncate,
      [styles.modifiers.displayLg]: large,
      [styles.modifiers.limitWidth]: widthLimited,
    }]"
  >
    <toggle v-if="!truncate" />
    <div
      ref="expandableContentRef"
      :id="contentId"
      :class="styles.expandableSectionContent"
      :hidden="!truncate && !managedExpanded"
      role="region"
      :style="{
        [lineClamp.name]: truncate && truncate > 0 ? truncate : undefined
      }"
    >
      <slot />
    </div>
    <toggle v-if="truncate && hasToggle" />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import lineClamp from '@patternfly/react-tokens/dist/esm/c_expandable_section_m_truncate__content_LineClamp';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import PfButton from '../Button.vue';
import { useManagedProp } from '../../use';
import { computed, ref, watch, type HTMLAttributes, type Ref } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { createReusableTemplate, useElementSize } from '@vueuse/core';

defineOptions({
  name: 'PfExpandableSection',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Flag to indicate if the content is expanded */
  expanded?: boolean;

  /** Text that appears in the attached toggle */
  toggleText?: string;

  /** Text that appears in the attached toggle when expanded (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
  toggleTextExpanded?: string;

  /** Text that appears in the attached toggle when collapsed (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
  toggleTextCollapsed?: string;

  /** Indicates the expandable section has a detached toggle */
  detached?: boolean;

  /** ID of the content of the expandable section */
  contentId?: string;

  /** Flag for disclosure styling. */
  large?: boolean;

  /** Flag to indicate the width of the component is limited. Set to true for disclosure styling. */
  widthLimited?: boolean;

  /** Truncates the expandable content to the specified number of lines */
  truncate?: number;
}

const props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  (name: 'update:expanded', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  'toggle-text'?: (props?: Record<never, never>) => any;
}>();

const managedExpanded = useManagedProp('expanded', false);
const [DefineToggle, Toggle] = createReusableTemplate();
const expandableContentRef: Ref<HTMLDivElement | undefined> = ref();
const { width: expandableContentWidth } = useElementSize(expandableContentRef);
const hasToggle = ref(true);

const computedToggleText = computed(() => {
  if (managedExpanded.value && props.toggleTextExpanded) {
    return props.toggleTextExpanded;
  }
  if (!managedExpanded.value && props.toggleTextCollapsed) {
    return props.toggleTextCollapsed;
  }
  return props.toggleText;
});

watch(expandableContentWidth, checkToggleVisibility);

function checkToggleVisibility() {
  if (!expandableContentRef.value) {
    return;
  }
  const maxLines = props.truncate || parseInt(lineClamp.value);
  const totalLines = expandableContentRef.value.scrollHeight / parseInt(getComputedStyle(expandableContentRef.value).lineHeight);
  hasToggle.value = totalLines > maxLines;
}
</script>
