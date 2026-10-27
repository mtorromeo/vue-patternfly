<template>
  <span :class="[styles.tabsItemAction, $attrs.class]">
    <pf-button
      ref="buttonRef"
      v-bind="{ ...$attrs, ...ouiaProps, class: undefined }"
      type="button"
      variant="plain"
      :aria-label="ariaLabel ?? messages.tabAction"
      :disabled="disabled"
    >
      <template #icon>
        <span :class="styles.tabsItemActionIcon"><slot /></span>
      </template>
    </pf-button>
  </span>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type'> {
  /** Flag indicating if the tab action is disabled */
  disabled?: boolean;
  /** Accessible label for the tab action. Defaults to the `tabAction` message. */
  ariaLabel?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Tabs/tabs';
import { usePfMessages } from '../../messages';
import { computed, useTemplateRef, type ButtonHTMLAttributes, type VNode } from 'vue';
import PfButton from '../Button.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfTabAction',
  inheritAttrs: false,
});

const props = defineProps<Props>();
const messages = usePfMessages();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  /** Icon of the tab action */
  default?: (props?: Record<never, never>) => VNode[];
}>();

const button = useTemplateRef('buttonRef');

defineExpose({
  /** The action button element, for example to use as the trigger of a popover */
  el: computed(() => button.value?.el ?? undefined),
});
</script>
