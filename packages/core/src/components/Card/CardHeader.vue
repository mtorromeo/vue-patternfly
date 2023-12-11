<template>
  <div
    v-bind="(ouiaProps as any)"
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
import PfAngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import PfButton, { type Props as ButtonProps } from '../Button.vue';
import { type HTMLAttributes, inject } from 'vue';
import { CardExpandableKey, CardExpandedKey } from './Card.vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfCardHeader',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Whether to right-align expandable toggle button */
  toggleRightAligned?: boolean;

  /** Additional props for expandable toggle button */
  toggleButtonAttrs?: ButtonProps,
}

const props = withDefaults(defineProps<Props>(), {
  toggleButtonAttrs: () => ({}),
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
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
