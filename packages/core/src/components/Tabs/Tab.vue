<template>
  <teleport :disabled="!tabListRef" :to="tabListRef">
    <li
      v-bind="ouiaProps as any"
      :class="[styles.tabsItem, {
        [styles.modifiers.current]: key === activeKey,
      }]">
      <pf-tab-button
        :id="`pf-tab-${typeof key === 'symbol' ? (key.description ?? '') : key}-${String(idSuffix)}`"
        :class="[styles.tabsLink, {
          [styles.modifiers.disabled]: disabled && href,
          [styles.modifiers.ariaDisabled]: ariaDisabled,
        }]"
        :href="href"
        :target="target"
        :disabled="disabled && !href"
        :tabindex="disabled || ariaDisabled ? (href ? -1 : undefined) : undefined"
        :aria-disabled="disabled || ariaDisabled"
        :aria-controls="`pf-tab-section-${String(key)}-${String(idSuffix)}`"
        :aria-selected="activeKey === key"
        role="tab"
        @click="handleClick($event as PointerEvent)"
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
    </li>
  </teleport>

  <pf-tab-content
    v-if="!contentRef && (!mountOnEnter || keepAlive)"
    v-show="key === activeKey"
    :id="`pf-tab-section-${String(key)}-${String(idSuffix)}`"
    :key="key"
    v-bind="$attrs"
  >
    <slot />
  </pf-tab-content>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { computed, getCurrentInstance, inject, ref, watch, watchEffect } from 'vue';
import { TabsKey, TabsProvideKey } from './Tabs.vue';
import PfTabTitleIcon from './TabTitleIcon.vue';
import PfTabTitleText from './TabTitleText.vue';
import PfTabButton from './TabButton.vue';
import PfTabContent, { type Props as PfTabContentProps } from './TabContent.vue';
import { useChildrenTracker } from '../../use';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTab',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ PfTabContentProps {
  /** Content rendered in the tab title. */
  title?: string;
  /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
  href?: string;
  /** Link target */
  target?: string;
  /** Adds disabled styling and disables the button using the disabled html attribute */
  disabled?: boolean;
  /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
  ariaDisabled?: boolean;
  contentRef?: InstanceType<typeof PfTabContent>;
  /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
  mountOnEnter?: boolean;
  /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
  unmountOnExit?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'click', event: PointerEvent): void;
  (name: 'enter'): void;
  (name: 'leave'): void;
}>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  icon?: (props?: Record<never, never>) => any;
  title?: (props?: Record<never, never>) => any;
}>();

const instance = getCurrentInstance();
const fallbackKey = Symbol();
const key = computed(() => instance?.vnode.key ?? fallbackKey);
const tabs = inject(TabsProvideKey);

useChildrenTracker(TabsKey, key);

const activeKey = tabs?.activeKey;
const tabListRef = tabs?.tabListRef;
const idSuffix = tabs?.idSuffix;
const keepAlive = ref(false);

watch([key, activeKey], () => {
  if (key.value === activeKey?.value) {
    keepAlive.value = true;
    emit('enter');
  } else if (keepAlive.value) {
    if (props.unmountOnExit) {
      keepAlive.value = false;
    }
    emit('leave');
  }
}, { immediate: true });

watchEffect(() => {
  const tabContent = props.contentRef;
  if (tabContent) {
    tabContent.hidden = key.value !== activeKey?.value;
  }
});

function handleClick(event: PointerEvent) {
  if (activeKey) {
    activeKey.value = key.value;
  }
  emit('click', event);
}

defineExpose({
  key,
});
</script>
