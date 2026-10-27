<template>
  <li
    v-if="!overflowing"
    ref="el"
    :class="[
      styles.tabsItem,
      {
        [styles.modifiers.current]: key === activeKey,
        [styles.modifiers.action]: closable || $slots.actions,
        [styles.modifiers.disabled]: disabled || ariaDisabled,
      },
    ]"
    role="presentation"
  >
    <component
      :is="tooltip || $slots.tooltip ? PfTooltip : PassThrough"
      v-bind="tooltip || $slots.tooltip ? { ...tooltipAttrs, content: tooltip } : {}"
    >
      <template v-if="$slots.tooltip" #content>
        <slot name="tooltip" />
      </template>
      <pf-tab-button
        :id="`pf-tab-${stringKey}-${toValue(idSuffix)}`"
        v-bind="ouiaProps"
        :class="[
          styles.tabsLink,
          {
            [styles.modifiers.disabled]: disabled && href,
            [styles.modifiers.ariaDisabled]: ariaDisabled,
          },
        ]"
        :href="href"
        :target="target"
        :disabled="disabled && !href"
        :tabindex="disabled && href ? -1 : undefined"
        :aria-disabled="disabled || ariaDisabled"
        :aria-controls="ariaControls"
        :aria-selected="activeKey === key"
        role="tab"
        @click="handleClick"
        @keypress="ariaDisabled && $event.preventDefault()"
      >
        <pf-tab-title-icon v-if="$slots.icon">
          <slot name="icon" />
        </pf-tab-title-icon>
        <slot name="title">
          <pf-tab-title-text v-if="title">
            {{ title }}
          </pf-tab-title-text>
        </slot>
      </pf-tab-button>
    </component>

    <slot name="actions" />
    <pf-tab-action
      v-if="closable"
      :aria-label="closeButtonAriaLabel || messages.tabClose"
      :disabled="closeDisabled"
      @click="tabs?.close($event, key)"
    >
      <xmark-icon />
    </pf-tab-action>
  </li>

  <teleport v-if="contentTargetRef && !contentRef" :to="contentTargetRef">
    <pf-tab-content
      v-if="!effectiveMountOnEnter || keepAlive"
      v-show="key === activeKey"
      :id="`pf-tab-section-${stringKey}-${toValue(idSuffix)}`"
      :key="key"
      :aria-labelledby="`pf-tab-${stringKey}-${toValue(idSuffix)}`"
      v-bind="$attrs"
    >
      <slot />
    </pf-tab-content>
  </teleport>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<ComponentProps<typeof PfTabContent>, 'ouiaId' | 'ouiaSafe'> {
  /** Uniquely identifies the tab. Defaults to the key of the component. */
  eventKey?: number | string;
  /** Content rendered in the tab title, replaced by the title slot. */
  title?: string;
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
  href?: string;
  /** Link target */
  target?: string;
  /** Adds disabled styling and disables the button using the disabled html attribute */
  disabled?: boolean;
  /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute. The tab stays focusable but cannot be selected. */
  ariaDisabled?: boolean;
  /** Tab content defined outside of the Tabs component, hidden when the tab is not active */
  contentRef?: { hidden: boolean } | null;
  /** Id of the tab content defined outside of the Tabs component */
  contentId?: string;
  /** Waits until the first "enter" transition to mount tab children (add them to the DOM). Defaults to the Tabs value. */
  mountOnEnter?: boolean;
  /** Unmounts tab children (removes them from the DOM) when they are no longer visible. Defaults to the Tabs value. */
  unmountOnExit?: boolean;
  /** Content of a tooltip shown on the tab. The `tooltip` slot can be used for rich content. */
  tooltip?: string;
  /** Additional attrs passed to the tooltip, such as its `position` */
  tooltipAttrs?: Omit<ComponentProps<typeof PfTooltip>, 'content'>;
  /** Aria-label for the close button added when the Tabs have a close listener */
  closeButtonAriaLabel?: string;
  /** Flag indicating the close button should be disabled */
  closeDisabled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { usePfMessages } from '../../messages';
import { computed, getCurrentInstance, inject, ref, toValue, useId, watch, watchEffect, type VNode } from 'vue';
import { TabsKey, TabsProvideKey } from './common';
import PfTabTitleIcon from './TabTitleIcon.vue';
import PfTabTitleText from './TabTitleText.vue';
import PfTabButton from './TabButton.vue';
import PfTabContent from './TabContent.vue';
import PfTabAction from './TabAction.vue';
import PfTooltip from '../Tooltip/Tooltip.vue';
import PassThrough from '../../helpers/PassThrough.vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import { useChildrenTracker } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfTab',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<Props>(), {
  mountOnEnter: undefined,
  unmountOnExit: undefined,
});
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  (name: 'click', event: MouseEvent): void;
  (name: 'enter'): void;
  (name: 'leave'): void;
}>();

const slots = defineSlots<{
  /** Content of the tab panel */
  default?: (props?: Record<never, never>) => VNode[];
  /** Icon of the tab title */
  icon?: (props?: Record<never, never>) => VNode[];
  /** Title of the tab, replacing the title prop */
  title?: (props?: Record<never, never>) => VNode[];
  /** Actions rendered beside the tab title, such as pf-tab-action */
  actions?: (props?: Record<never, never>) => VNode[];
  /** Content of a tooltip shown on the tab */
  tooltip?: (props?: Record<never, never>) => VNode[];
}>();

const instance = getCurrentInstance();
const el = ref<HTMLLIElement>();
const fallbackKey = Symbol();
const key = computed(() => props.eventKey ?? instance?.vnode.key ?? fallbackKey);
const tabs = inject(TabsProvideKey, undefined);
const overflowing = ref(false);

useChildrenTracker(TabsKey, {
  key,
  el,
  overflowing,
  title: () => props.title,
  renderTitle: () => slots.title?.() ?? props.title,
  href: () => props.href,
  disabled: () => !!(props.disabled || props.ariaDisabled),
});

const activeKey = tabs?.activeKey;
const contentTargetRef = tabs?.contentTargetRef;
const idSuffix = tabs?.idSuffix;
const closable = computed(() => !!toValue(tabs?.closable));
const effectiveMountOnEnter = computed(() => props.mountOnEnter ?? !!toValue(tabs?.mountOnEnter));
const effectiveUnmountOnExit = computed(() => props.unmountOnExit ?? !!toValue(tabs?.unmountOnExit));
const keepAlive = ref(false);
const stringKey = computed(() =>
  typeof key.value === 'symbol' ? (key.value.description ?? useId()) : String(key.value),
);

// the tab panel is not rendered when it is mounted lazily and not active
const ariaControls = computed(() => {
  if ((effectiveMountOnEnter.value || effectiveUnmountOnExit.value) && key.value !== activeKey?.value) {
    return undefined;
  }
  return props.contentId ?? `pf-tab-section-${stringKey.value}-${toValue(idSuffix)}`;
});

watch(
  [key, () => activeKey?.value],
  () => {
    if (key.value === activeKey?.value) {
      keepAlive.value = true;
      emit('enter');
    } else if (keepAlive.value) {
      if (effectiveUnmountOnExit.value) {
        keepAlive.value = false;
      }
      emit('leave');
    }
  },
  { immediate: true },
);

watchEffect(() => {
  const tabContent = props.contentRef;
  if (tabContent) {
    tabContent.hidden = key.value !== activeKey?.value;
  }
});

// the width of the tab changes with its title and actions
watch([() => props.title, () => !!slots.actions], () => tabs?.setAccentStyles(true));

function handleClick(event: MouseEvent) {
  if (props.ariaDisabled) {
    event.preventDefault();
    return;
  }
  if (event.currentTarget instanceof HTMLAnchorElement && event.currentTarget.hasAttribute('href')) {
    event.preventDefault();
    if (toValue(tabs?.nav)) {
      window.history.pushState(null, '', event.currentTarget.href);
    }
  }
  tabs?.select(event, key.value);
  emit('click', event);
}

defineExpose({
  key,
});
</script>
