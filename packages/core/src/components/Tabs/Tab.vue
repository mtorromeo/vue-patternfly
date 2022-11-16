<template>
  <teleport :disabled="!tabListRef" :to="tabListRef">
    <li
      :class="[styles.tabsItem, {
        [styles.modifiers.current]: key === activeKey,
      }]">
      <button
        :id="`pf-tab-${String(key )}-${String(idSuffix)}`"
        type="button"
        :class="[styles.tabsLink, {
          [styles.modifiers.disabled]: disabled && href,
          [styles.modifiers.ariaDisabled]: ariaDisabled,
        }]"
        :disabled="disabled && !href"
        :aria-disabled="disabled || ariaDisabled"
        :aria-controls="`pf-tab-section-${String(key)}-${String(idSuffix)}`"
        :tabindex="disabled || ariaDisabled ? (href ? -1 : undefined) : undefined"
        @click="handleTabClick?.(key)"
      >
        <pf-tab-title-text v-if="title">
          {{ title }}
        </pf-tab-title-text>
        <slot v-else />
      </button>
    </li>
  </teleport>

  <pf-tab-content
    v-if="!contentRef && (!mountOnEnter || keepAlive)"
    v-show="key === activeKey"
    :id="`pf-tab-section-${String(key)}-${String(idSuffix)}`"
    :key="key"
  >
    <slot />
  </pf-tab-content>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { computed, defineComponent, getCurrentInstance, inject, markRaw, ref, watch, watchEffect, type PropType } from 'vue';
import { TabsProvideKey } from './Tabs.vue';
import PfTabTitleText from './TabTitleText.vue';
import PfTabContent from './TabContent.vue';

export default defineComponent({
  name: 'PfTab',

  components: {
    PfTabTitleText,
    PfTabContent,
  },

  props: {
    /** Content rendered in the tab title. */
    title: {
      type: String,
      default: null,
    },

    /** URL associated with the Tab. A Tab with an href will render as an <a> instead of a <button>. A Tab inside a <Tabs component="nav"> should have an href. */
    href: {
      type: String,
      default: null,
    },

    /** Adds disabled styling and disables the button using the disabled html attribute */
    disabled: Boolean,
    /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
    ariaDisabled: Boolean,

    contentRef: Object as PropType<InstanceType<typeof PfTabContent> | undefined>,

    /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
    mountOnEnter: Boolean,

    /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
    unmountOnExit: Boolean,
  },

  setup(props) {
    const instance = getCurrentInstance();
    const key = computed(() => instance?.vnode.key ?? Symbol());
    const tabs = inject(TabsProvideKey);

    const keepAlive = ref(false);
    watch([key, tabs?.activeKey], () => {
      if (key.value === tabs?.activeKey?.value) {
        keepAlive.value = true;
      } else if (props.unmountOnExit) {
        keepAlive.value = false;
      }
    }, { immediate: true });

    watchEffect(() => {
      const tabContent = props.contentRef;
      if (tabContent) {
        tabContent.hidden = key.value !== tabs?.activeKey?.value;
      }
    });

    return {
      keepAlive,
      tabListRef: tabs?.tabListRef,
      key,
      activeKey: tabs?.activeKey,
      styles: markRaw(styles) as typeof styles,
      idSuffix: tabs?.idSuffix,
      handleTabClick: tabs?.handleTabClick,
    };
  },
});
</script>
