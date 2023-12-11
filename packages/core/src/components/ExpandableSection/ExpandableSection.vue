<template>
  <div
    v-bind="(ouiaProps as any)"
    :class="[styles.expandableSection, {
      [styles.modifiers.expanded]: managedExpanded,
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
      :aria-expanded="managedExpanded"
      @click="managedExpanded = !managedExpanded"
    >
      <span :class="styles.expandableSectionToggleIcon">
        <angle-right-icon aria-hidden />
      </span>
      <span :class="styles.expandableSectionToggleText">{{ computedToggleText }}</span>
    </button>

    <div :id="contentId" :class="styles.expandableSectionContent" :hidden="!managedExpanded">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ExpandableSection/expandable-section';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import { useManagedProp } from '../../use';
import { computed, type HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfExpandableSection',
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

const props = withDefaults(defineProps<Props>(), {
  expanded: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  (name: 'update:expanded', value: boolean): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

const managedExpanded = useManagedProp('expanded', false);

const computedToggleText = computed(() => {
  if (managedExpanded.value && props.toggleTextExpanded) {
    return props.toggleTextExpanded;
  }
  if (!managedExpanded.value && props.toggleTextCollapsed) {
    return props.toggleTextCollapsed;
  }
  return props.toggleText;
});
</script>
