<template>
  <component
    :is="to ? 'router-link' : PassThrough"
    v-slot="routerCtx"
    :to="to"
    :replace="replace"
    custom
  >
    <component
      v-bind="{...ouiaProps, ...$attrs}"
      :is="buttonComponent"
      ref="elRef"
      :type="buttonComponent === 'button' ? type : null"
      :disabled="effectiveDisabled"
      :aria-expanded="expanded"
      :aria-disabled="effectiveDisabled || ariaDisabled"
      :class="[styles.button, styles.modifiers[variant], {
        [styles.modifiers.block]: block,
        [styles.modifiers.disabled]: disabled,
        [styles.modifiers.ariaDisabled]: ariaDisabled,
        [styles.modifiers.inline]: inline && variant === 'link',
        [styles.modifiers.danger]: danger && (variant === 'link' || variant === 'secondary'),
        [styles.modifiers.noPadding]: noPadding && variant === 'plain',
        [styles.modifiers.small]: small,
        [styles.modifiers.displayLg]: large,
        [styles.modifiers.progress]: isDefined(loading),
        [styles.modifiers.inProgress]: loading,
        [styles.modifiers[state as NonNullable<typeof state>]]: state && variant === 'stateful',
        [styles.modifiers.settings]: settings,
        [styles.modifiers.favorite]: favorite,
        [styles.modifiers.favorited]: favorited && favorite,
        [styles.modifiers.hamburger]: hamburger,
        [styles.modifiers[hamburgerVariant as NonNullable<typeof hamburgerVariant>]]: hamburger && hamburgerVariant,
      }]"
      :tabindex="tabIdx"
      :role="buttonComponent !== 'button' ? 'button' : null"
      :href="href || (buttonComponent === 'a' ? (routerCtx as RouterLinkContext|undefined)?.href : null)"
      @click="onClick($event, (routerCtx as RouterLinkContext|undefined)?.navigate)"
    >
      <span v-if="loading" :class="styles.buttonProgress">
        <pf-spinner size="md" :aria-valuetext="spinnerAriaValueText" />
      </span>

      <slot v-if="iconPosition === 'end'" />
      <span v-if="$slots.icon || favorite || settings || hamburger" :class="[styles.buttonIcon, {[styles.modifiers.start]: iconPosition === 'start', [styles.modifiers.end]: iconPosition === 'end'}]">
        <template v-if="favorite">
          <span class="pf-v6-c-button__icon-favorite">
            <outlined-star-icon />
          </span>
          <span class="pf-v6-c-button__icon-favorited">
            <star-icon />
          </span>
        </template>
        <gear-icon v-else-if="settings" />
        <svg v-else-if="hamburger" viewBox="0 0 10 10" :class="[styles.buttonHamburgerIcon, 'pf-v6-svg']" width="1em" height="1em">
          <path :class="styles.buttonHamburgerIconTop" d="M1,1 L9,1"></path>
          <path :class="styles.buttonHamburgerIconMiddle" d="M1,5 L9,5"></path>
          <path :class="styles.buttonHamburgerIconArrow" d="M1,5 L1,5 L1,5"></path>
          <path :class="styles.buttonHamburgerIconBottom" d="M9,9 L1,9"></path>
        </svg>
        <slot v-else name="icon" />
      </span>
      <slot v-if="iconPosition !== 'end'" />

      <span v-if="$slots.badge" :class="[styles.buttonCount, badgeClass]">
        <slot name="badge" />
      </span>
    </component>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Button/button';
import PfSpinner from './Spinner.vue';
import PassThrough from '../helpers/PassThrough.vue';
import type { RouteLocationRaw, useLink } from 'vue-router';
import { useOUIAProps, type OUIAProps } from '../helpers/ouia';
import { type Component, type UnwrapRef, computed, type AnchorHTMLAttributes, type ButtonHTMLAttributes, useTemplateRef, type ComponentPublicInstance } from 'vue';
import { isDefined } from '@vueuse/shared';
import GearIcon from '@vue-patternfly/icons/gear-icon';
import StarIcon from '@vue-patternfly/icons/star-icon';
import OutlinedStarIcon from '@vue-patternfly/icons/outlined-star-icon';

type RouterLinkContext = UnwrapRef<ReturnType<typeof useLink>>;

defineOptions({
  name: 'PfButton',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<AnchorHTMLAttributes, 'onClick'>, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'onClick' | 'aria-pressed' | 'role'> {
  /** Sets the base component to render. defaults to button */
  component?: string | Component;
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
  /** Adds favorite styling to a button */
  favorite?: boolean;
  /** Flag indicating whether the button is favorited or not, only when favorite is true. */
  favorited?: boolean;
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Adds button variant styles */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'link' | 'plain' | 'control' | 'stateful';
  /** Sets state of the stateful button variant. Default is "unread" */
  state?: 'read' | 'unread' | 'attention';
  /** Applies no padding on a plain button variant. Use when plain button is placed inline with text */
  noPadding?: boolean;
  /** Sets position of the link icon */
  iconPosition?: 'start' | 'end';
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
  /** Flag indicating whether content the button controls is expanded or not. Required when hamburger is true. */
  expanded?: boolean;
  /** Flag indicating the button is a settings button. This will override the icon property. */
  settings?: boolean;
  /** Flag indicating the button is a hamburger button. This will override the icon property. */
  hamburger?: boolean;
  /** Adjusts and animates the hamburger icon to indicate what will happen upon clicking the button. */
  hamburgerVariant?: 'expand' | 'collapse';

  // router-link attributes
  /** Route Location the link should navigate to when clicked on. */
  to?: RouteLocationRaw;
  /** Calls `router.replace` instead of `router.push`. */
  replace?: boolean;
  href?: string;
  ariaCurrent?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  iconPosition: 'start',
  component: 'auto',
  loading: undefined,
});

const emit = defineEmits<{
  (name: 'click', e: PointerEvent): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  badge?: (props?: Record<never, never>) => any;
}>();

const el = useTemplateRef<HTMLElement | ComponentPublicInstance>('elRef');
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

function onClick(e: PointerEvent, navigate: RouterLinkContext['navigate'] | undefined) {
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
