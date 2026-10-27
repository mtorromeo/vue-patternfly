<template>
  <slot />
</template>

<script lang="ts">
interface Props {
  /** Name of the step's navigation item, replaced by the name slot */
  name?: string;
  /** Unique identifier */
  id: string | number;
  /** Flag to disable the step's navigation item */
  disabled?: boolean;
  /** Flag to determine whether the step is hidden */
  hidden?: boolean;
  /** Flag to determine whether a parent step can expand or not */
  expandable?: boolean;
  /** Used to determine the icon next to the step's navigation item */
  status?: WizardStepStatus;
  /** Properties of the step's navigation item, such as `component: 'a'` and an `href` */
  navItemAttrs?: WizardNavItemAttrs;
  /** Properties of the default footer for this step, merged over the wizard's ones */
  footerAttrs?: WizardFooterAttrs;
  /** Properties of the pf-wizard-body wrapping the content, such as `noPadding` */
  bodyAttrs?: WizardBodyAttrs;
}
</script>

<script lang="ts" setup>
import type { VNode } from 'vue';
import type {
  WizardBodyAttrs,
  WizardFooterAttrs,
  WizardFooterSlotProps,
  WizardNavItemAttrs,
  WizardStepStatus,
  WizardStepType,
} from './common';

defineOptions({
  name: 'PfWizardStep',
});

defineProps<Props>();

defineSlots<{
  /** Content of the step, or the pf-wizard-step sub-steps of a parent step */
  default?: (props?: Record<never, never>) => VNode[];
  /** Name of the step, rendered in its navigation item and in the toggle */
  name?: (props?: Record<never, never>) => VNode[];
  /** Replaces the footer while the step is active */
  footer?: (props: WizardFooterSlotProps) => VNode[];
  /** Replaces the navigation item of the step */
  'nav-item'?: (props: {
    step: WizardStepType;
    activeStep: WizardStepType | undefined;
    steps: WizardStepType[];
    goToStepByIndex: (index: number) => void;
  }) => VNode[];
}>();
</script>
