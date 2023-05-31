<template>
  <component
    :is="to ? 'router-link' : (PassThrough as Component)"
    v-slot="routerCtx"
    :to="to"
    :replace="replace"
    custom
  >
    <component
      v-bind="{...$attrs, ...ouiaProps}"
      :is="buttonComponent"
      ref="el"
      :type="buttonComponent === 'button' ? type : null"
      :disabled="effectiveDisabled"
      :aria-disabled="effectiveDisabled || ariaDisabled"
      :class="[styles.button, styles.modifiers[variant], {
        [styles.modifiers.block]: block,
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.ariaDisabled]: ariaDisabled,
        [styles.modifiers.active]: active || (routerCtx as RouterLinkContext|undefined)?.isActive,
        [styles.modifiers.inline]: inline && variant === 'link',
        [styles.modifiers.danger]: danger && (variant === 'link' || variant === 'secondary'),
        [styles.modifiers.small]: small,
        [styles.modifiers.displayLg]: large,
        [styles.modifiers.progress]: isDefined(loading),
        [styles.modifiers.inProgress]: loading,
      }]"
      :aria-current="(routerCtx as RouterLinkContext|undefined)?.isExactActive ? ariaCurrentValue : null"
      :aria-pressed="active || (routerCtx as RouterLinkContext|undefined)?.isActive || null"
      :tabindex="tabIdx"
      :role="buttonComponent !== 'button' ? 'button' : null"
      :href="href || (buttonComponent === 'a' ? (routerCtx as RouterLinkContext|undefined)?.href : null)"
      @click="onClick($event, (routerCtx as RouterLinkContext|undefined)?.navigate)"
    >
      <span v-if="loading" :class="styles.buttonProgress">
        <pf-spinner size="md" :aria-valuetext="spinnerAriaValueText" />
      </span>
      <span
        v-if="variant !== 'plain' && $slots.icon && iconPosition === 'left'"
        :class="[styles.buttonIcon, styles.modifiers.start]"
      >
        <slot name="icon" />
      </span>
      <slot />
      <span
        v-if="variant !== 'plain' && $slots.icon && iconPosition === 'right'"
        :class="[styles.buttonIcon, styles.modifiers.end]"
      >
        <slot name="icon" />
      </span>
      <span v-if="$slots.badge" :class="[styles.buttonCount, badgeClass]">
        <slot name="badge" />
      </span>
    </component>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Button/button';
import PfSpinner from './Spinner.vue';
import PassThrough from '../helpers/PassThrough';
import type { RouteLocationRaw, useLink } from 'vue-router';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import { type Component, type UnwrapRef, type Ref, ref, computed, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'vue';
import { isDefined } from '@vueuse/shared';

type RouterLinkContext = UnwrapRef<ReturnType<typeof useLink>>;

defineOptions({
  name: 'PfButton',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'onClick'>, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'onClick'> {
  /** Sets the base component to render. defaults to button */
  component?: string | Component;
  /** Adds active styling to button. */
  active?: boolean;
  /** Adds block styling to button */
  block?: boolean;
  /** Adds disabled styling and disables the button using the disabled html attribute */
  disabled?: boolean;
  /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
  ariaDisabled?: boolean;
  /** Adds progress styling to button */
  loading?: boolean;
  /** Text describing that current loading status or progress */
  spinnerAriaValueText?: string;
  /** Accessible label for the spinner to describe what is loading */
  spinnerAriaLabel?: string;
  /** Id of element which describes what is being loaded */
  spinnerAriaLabelledBy?: string;
  /** Events to prevent when the button is in an aria-disabled state */
  inoperableEvents?: string[];
  /** Adds inline styling to a link button */
  inline?: boolean;
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Adds button variant styles */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control';
  /** Sets position of the link icon */
  iconPosition?: 'left' | 'right';
  /** Sets the button tabindex. */
  tabindex?: number;
  /** Adds small styling to the button */
  small?: boolean;
  /** Adds large styling to the button */
  large?: boolean;
  /** Adds danger styling to secondary or link button variants */
  danger?: boolean;
  /** Class name for the badge container */
  badgeClass?: string;

  // router-link attributes
  /** Route Location the link should navigate to when clicked on. */
  to?: RouteLocationRaw;
  /** Calls `router.replace` instead of `router.push`. */
  replace?: boolean;
  href?: string;
  ariaCurrentValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  iconPosition: 'left',
  component: 'auto',
});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent | TouchEvent): void;
}>();

defineSlots<{
  default?: (props: Record<never, never>) => any;
  icon?: (props: Record<never, never>) => any;
  badge?: (props: Record<never, never>) => any;
}>();

const el: Ref<HTMLElement | undefined> = ref();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe, variant: props.variant});

const buttonComponent = computed(() => {
  if (props.component !== 'auto') {
    return props.component;
  }
  return (props.href || props.to) ? 'a' : 'button';
});

const effectiveDisabled = computed(() => {
  return props.loading || props.disabled || null;
});

const tabIdx = computed(() => {
  if (props.tabindex) {
    return props.tabindex;
  }
  if (props.disabled) {
    return props.component === 'button' ? null : -1;
  }
  if (!props.ariaDisabled && props.component === 'span') {
    return 0;
  }
  return null;
});

function onClick(e: MouseEvent | TouchEvent, navigate: RouterLinkContext['navigate'] | undefined) {
  if (effectiveDisabled.value) {
    e.preventDefault();
    return;
  }

  if (navigate) {
    navigate(e as MouseEvent);
    return;
  }

  emit('click', e);
}

defineExpose({
  el,
});
</script>
