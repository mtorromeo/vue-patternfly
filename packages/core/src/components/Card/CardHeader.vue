<template>
  <div
    :class="[styles.cardHeader, {
      [styles.modifiers.toggleRight]: toggleRightAligned,
    }]"
  >
    <slot v-if="toggleRightAligned" />

    <div v-if="expandable" :class="styles.cardHeaderToggle">
      <pf-button variant="plain" v-bind="toggleButtonAttrs" @click="toggle">
        <span :class="styles.cardHeaderToggleIcon">
          <pf-angle-right-icon aria-hidden />
        </span>
      </pf-button>
    </div>
    <slot v-if="!toggleRightAligned" />
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Card/card';
import PfAngleRightIcon from '@vue-patternfly/icons/dist/esm/icons/angle-right-icon';
import { default as PfButton, type Props as ButtonProps } from '../Button.vue';
import { type HTMLAttributes, inject } from 'vue';
import { CardExpandableKey, CardExpandedKey } from './Card.vue';

defineOptions({
  name: 'PfCardHeader',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Whether to right-align expandable toggle button */
  toggleRightAligned?: boolean;

  /** Additional props for expandable toggle button */
  toggleButtonAttrs?: ButtonProps,
}

withDefaults(defineProps<Props>(), {
  toggleButtonAttrs: () => ({}),
});

defineSlots<{
  default?: (props: Record<never, never>) => any;
}>();

const expandable = inject(CardExpandableKey);
const expanded = inject(CardExpandedKey);

function toggle() {
  if (expanded) {
    expanded.value = !expanded.value;
  }
}

defineExpose({
  toggle,
});
</script>
