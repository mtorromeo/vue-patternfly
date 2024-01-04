<template>
  <ul
    v-bind="ouiaProps"
    :class="[styles.alertGroup, {
      [styles.modifiers.toast]: toast,
    }]"
    :aria-live="liveRegion ? 'polite' : undefined"
    :aria-atomic="liveRegion ? false : undefined"
  >
    <render-children />

    <li v-if="overflowMessage">
      <button :class="styles.alertGroupOverflowButton" @click="emit('overflow-click', $event as PointerEvent)">
        {{ overflowMessage }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Alert/alert-group';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { h, type HTMLAttributes } from 'vue';
import { findChildrenVNodes } from '../../util';

defineOptions({
  name: 'PfAlertGroupInline',
});// expands object types one level deep

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<HTMLAttributes, 'aria-live' | 'aria-atomic'> {
  toast?: boolean;
  liveRegion?: boolean;
  overflowMessage?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  (name: 'overflow-click', e: PointerEvent): void;
}>();

const slots = defineSlots<{
  default?: (props?: Record<never, never>) => any;
}>();

function renderChildren() {
  const children = findChildrenVNodes(slots.default?.({}));
  return children.map((e, index) => h('li', { key: index }, e));
}
</script>
