<template>
  <li
    :class="[
      styles.wizardNavItem,
      { [styles.modifiers.expandable]: expandable, [styles.modifiers.expanded]: expandable && expandedState },
    ]"
  >
    <component
      :is="component"
      v-bind="ouiaProps"
      :id="id"
      :href="component === 'a' ? href : undefined"
      :target="component === 'a' ? target : undefined"
      :tabindex="component === 'a' && disabled ? -1 : undefined"
      :disabled="component === 'a' ? undefined : disabled"
      :class="[
        styles.wizardNavLink,
        {
          [styles.modifiers.current]: current,
          [styles.modifiers.disabled]: disabled,
          [styles.modifiers.danger]: status === 'error',
          [styles.modifiers.success]: status === 'success',
          [styles.modifiers.warning]: status === 'warning',
        },
      ]"
      :aria-disabled="disabled ? true : undefined"
      :aria-current="current && !$slots.default ? 'step' : false"
      :aria-expanded="expandable ? expandedState : undefined"
      @click="handleClick"
    >
      <template v-if="status !== 'default'">
        <span class="pf-v6-screen-reader">, {{ status }}</span>
        <span :class="styles.wizardNavLinkStatusIcon">
          <circle-exclamation-icon v-if="status === 'error'" />
          <circle-check-icon v-else-if="status === 'success'" />
          <triangle-exclamation-icon v-else-if="status === 'warning'" />
        </span>
      </template>
      <span :class="styles.wizardNavLinkMain">
        <template v-if="expandable">
          <span :class="`${styles.wizard}__nav-link-text`">
            <slot name="content">{{ content }}</slot>
          </span>
          <span :class="styles.wizardNavLinkToggle">
            <span :class="styles.wizardNavLinkToggleIcon">
              <angle-down-icon :aria-label="`${current ? 'Collapse' : 'Expand'} step icon`" />
            </span>
          </span>
        </template>
        <slot v-else name="content">{{ content }}</slot>
      </span>
    </component>
    <slot />
  </li>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<LiHTMLAttributes, 'onClick' | 'id'> {
  /** The content to display in the navigation item, replaced by the content slot */
  content?: string;
  /** Whether the navigation item is the currently active item */
  current?: boolean;
  /** Whether the navigation item is disabled */
  disabled?: boolean;
  /** Whether the navigation item has been visited */
  visited?: boolean;
  /** The step index passed with the click event */
  stepIndex: number;
  /** Component used to render the navigation item */
  component?: 'button' | 'a';
  /** An optional url to use for when using an anchor component */
  href?: string;
  /** Where to display the linked URL when using an anchor component */
  target?: string;
  /** Flag indicating that this navigation item has child steps and is expandable */
  expandable?: boolean;
  /** The id of the navigation item button or link */
  id?: string;
  /** Used to determine the icon displayed next to content. Default has no icon. */
  status?: WizardStepStatus;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { devError } from '../../helpers/dev';
import { ref, watch, type LiHTMLAttributes, type VNode } from 'vue';
import CircleExclamationIcon from '@vue-patternfly/icons/circle-exclamation-icon';
import CircleCheckIcon from '@vue-patternfly/icons/circle-check-icon';
import TriangleExclamationIcon from '@vue-patternfly/icons/triangle-exclamation-icon';
import AngleDownIcon from '@vue-patternfly/icons/angle-down-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { WizardStepStatus } from './common';

defineOptions({
  name: 'PfWizardNavItem',
});

const props = withDefaults(defineProps<Props>(), {
  content: '',
  component: 'button',
  status: 'default',
  ouiaSafe: true,
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'click', event: MouseEvent, stepIndex: number): void;
}>();

defineSlots<{
  /** Nested pf-wizard-nav with the `inner-list` flag, for sub-steps */
  default?: (props?: Record<never, never>) => VNode[];
  /** The content to display in the navigation item */
  content?: (props?: Record<never, never>) => VNode[];
}>();

if (props.component === 'a' && !props.href) {
  devError('WizardNavItem: When using an anchor, please provide an href');
}

const expandedState = ref(false);

watch(
  () => props.current,
  current => (expandedState.value = current),
  { immediate: true },
);

function handleClick(event: MouseEvent) {
  event.stopPropagation();
  if (props.expandable) {
    expandedState.value = !expandedState.value || props.current;
  } else {
    emit('click', event, props.stepIndex);
  }
}
</script>
