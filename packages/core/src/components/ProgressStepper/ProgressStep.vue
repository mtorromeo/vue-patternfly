<template>
  <li
    v-bind="ouiaProps"
    :id="stepId"
    :class="[
      styles.progressStepperStep,
      variant ? variantStyle[variant] : undefined,
      {
        [styles.modifiers.current]: current,
      },
    ]"
    role="listitem"
    :aria-current="current ? 'step' : undefined"
  >
    <div :class="styles.progressStepperStepConnector">
      <span :class="styles.progressStepperStepIcon">
        <slot name="icon">
          <component :is="variantIcons[variant]" v-if="variant && variantIcons[variant]" />
        </slot>
      </span>
    </div>

    <div :class="styles.progressStepperStepMain">
      <component
        :is="$slots.popover ? 'button' : 'div'"
        :id="effectiveTitleId"
        ref="titleRef"
        :type="$slots.popover ? 'button' : undefined"
        :class="[styles.progressStepperStepTitle, { [styles.modifiers.helpText]: $slots.popover }]"
        :aria-labelledby="$slots.popover ? `${stepId} ${effectiveTitleId}` : undefined"
      >
        <slot />
        <slot name="popover" :trigger="title" />
      </component>

      <div v-if="description || $slots.description" :class="styles.progressStepperStepDescription">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ LiHTMLAttributes {
  /** Variant of the progress step. Each variant has a default icon. */
  variant?: 'default' | 'success' | 'info' | 'pending' | 'warning' | 'danger';
  /** Flag indicating the progress step is the current step. */
  current?: boolean;
  /** Description text of a progress step, replaced by the description slot. */
  description?: string;
  /** ID of the title of the progress step. Generated when not set, like the id of the step. */
  titleId?: string;
}

const variantIcons: Partial<Record<NonNullable<Props['variant']>, Component>> = {
  success: CircleCheckIcon,
  info: ResourcesFullIcon,
  warning: TriangleExclamationIcon,
  danger: CircleExclamationIcon,
};

const variantStyle = {
  default: '',
  info: styles.modifiers.info,
  success: styles.modifiers.success,
  pending: styles.modifiers.pending,
  warning: styles.modifiers.warning,
  danger: styles.modifiers.danger,
};
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ProgressStepper/progress-stepper';
import { computed, useAttrs, useId, useTemplateRef, type Component, type LiHTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import ResourcesFullIcon from '@vue-patternfly/icons/resources-full-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';

defineOptions({
  name: 'PfProgressStep',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Title of the progress step */
  default?: (props?: Record<never, never>) => VNode[];
  /** Custom icon of the progress step, overriding the variant icon */
  icon?: (props?: Record<never, never>) => VNode[];
  /** Description of the progress step, replacing the description prop */
  description?: (props?: Record<never, never>) => VNode[];
  /** A help popover for the step, such as a pf-popover with trigger as trigger-ref. The title becomes its trigger button. */
  popover?: (props: { trigger: HTMLElement | null }) => VNode[];
}>();

const title = useTemplateRef<HTMLElement>('titleRef');

// the step and its title get generated ids, which label the title button of the popover
const attrs = useAttrs();
const generatedId = useId();
const stepId = computed(() => (typeof attrs.id === 'string' ? attrs.id : generatedId));
const effectiveTitleId = computed(() => props.titleId ?? `${stepId.value}-title`);
</script>
