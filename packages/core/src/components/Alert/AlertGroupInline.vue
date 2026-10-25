<template>
  <ul
    v-bind="ouiaProps"
    role="list"
    :class="[
      styles.alertGroup,
      {
        [styles.modifiers.toast]: toast,
      },
    ]"
    :aria-live="liveRegion ? 'polite' : undefined"
    :aria-atomic="liveRegion ? false : undefined"
  >
    <component :is="fragment(renderChildren())" />

    <li v-if="overflowMessage">
      <button :class="styles.alertGroupOverflowButton" @click="emit('overflowClick', $event as PointerEvent)">
        {{ overflowMessage }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** @beta Flag to animate the alerts when they are added and dismissed. Dynamically added alerts should be
   * prepended to the list. */
  animations?: boolean;
  /** Toast notifications are positioned at the top right corner of the viewport */
  toast?: boolean;
  /** Turns the container into a live region so that changes to content within the alert group, such as appending an
   * alert, are reliably announced to assistive technology. */
  liveRegion?: boolean;
  /** Custom text to show for the overflow message */
  overflowMessage?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Alert/alert-group';
import { computed, h, provide, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import { findChildrenVNodes, fragment } from '../../util';
import PfAlertGroupItem from './AlertGroupItem.vue';
import { AlertGroupKey } from './common';

defineOptions({
  name: 'PfAlertGroupInline',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** Function to call if user clicks on overflow message */
  (name: 'overflowClick', e: PointerEvent): void;
}>();

const slots = defineSlots<{
  /** Alerts to be rendered in the alert group */
  default?: (props?: Record<never, never>) => VNode[];
}>();

provide(AlertGroupKey, {
  animations: computed(() => props.animations),
});

function renderChildren() {
  const children = findChildrenVNodes(slots.default?.({}));
  return children.map((child, index) => h(PfAlertGroupItem, { key: child.key ?? index }, () => child));
}
</script>
