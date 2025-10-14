<template>
  <li
    v-bind="ouiaProps"
    :class="[styles.progressStepperStep, variant ? variantStyle[variant] : undefined, {
      [styles.modifiers.current]: current,
    }]"
    role="listitem"
    :aria-current="current ? 'step' : undefined"
  >
    <div :class="styles.progressStepperStepConnector">
      <span :class="styles.progressStepperStepIcon">
        <slot name="icon">
          <component :is="variant ? variantIcons[variant] : undefined" />
        </slot>
      </span>
    </div>

    <div :class="styles.progressStepperStepMain">
      <component
        :is="popover ? PassThrough : 'div'"
        :class="styles.progressStepperStepTitle"
      >
        <pass-through @children="findReference">
          <slot />
        </pass-through>
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
  /** Description text of a progress step. */
  description?: string;
}

const variantIcons = {
  default: undefined as any,
  pending: undefined as any,
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
import buttonStyles from '@patternfly/react-styles/css/components/Button/button';

import { watch, type LiHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import ResourcesFullIcon from '@vue-patternfly/icons/resources-full-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import PassThrough from '../../helpers/PassThrough.vue';
import { useHtmlElementFromVNodes } from '../../use';
import { vnodeTypeIsComponent } from '../../util';

defineOptions({
  name: 'PfProgressStep',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  description?: (props?: Record<never, never>) => any;
}>();

const { element: popover, findReference } = useHtmlElementFromVNodes(vnode => vnodeTypeIsComponent(vnode.type) && vnode.type.name === 'PfPopover');

watch(popover, () => {
  popover.value?.classList.add(styles.progressStepperStepTitle);
  popover.value?.classList.add(styles.modifiers.helpText);
  popover.value?.classList.remove(buttonStyles.button);
});
</script>
