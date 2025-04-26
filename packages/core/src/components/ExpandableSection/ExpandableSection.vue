<template>
  <div
    v-bind="(ouiaProps as any)"
    :class="[styles.expandableSection, {
      [styles.modifiers.expanded]: expanded,
      [styles.modifiers.active]: active,
      [styles.modifiers.detached]: detached,
      [styles.modifiers.displayLg]: large,
      [styles.modifiers.limitWidth]: widthLimited,
    }]"
  >
    <button
      v-if="!detached"
      :class="styles.expandableSectionToggle"
      type="button"
      :aria-controls="contentId"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      <span :class="styles.expandableSectionToggleIcon">
        <angle-right-icon aria-hidden />
      </span>
      <span :class="styles.expandableSectionToggleText">{{ computedToggleText }}</span>
    </button>

    <div :id="contentId" :class="styles.expandableSectionContent" :hidden="!expanded">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { computed, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfExpandableSection',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Text that appears in the attached toggle */
  toggleText?: string;

  /** Text that appears in the attached toggle when expanded (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
  toggleTextExpanded?: string;

  /** Text that appears in the attached toggle when collapsed (will override toggleText if both are specified; used for uncontrolled expandable with dynamic toggle text) */
  toggleTextCollapsed?: string;

  /** Forces active state */
  active?: boolean;

  /** Indicates the expandable section has a detached toggle */
  detached?: boolean;

  /** ID of the content of the expandable section */
  contentId?: string;

  /** Flag for disclosure styling. */
  large?: boolean;

  /** Flag to indicate the width of the component is limited. Set to true for disclosure styling. */
  widthLimited?: boolean;
}

const props = defineProps<Props>()
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

/** Flag to indicate if the content is expanded */
const expanded = defineModel<boolean>('expanded', { default: false });

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const computedToggleText = computed(() => {
  if (expanded.value && props.toggleTextExpanded) {
    return props.toggleTextExpanded;
  }
  if (!expanded.value && props.toggleTextCollapsed) {
    return props.toggleTextCollapsed;
  }
  return props.toggleText;
});
</script>
