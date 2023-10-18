<template>
  <header
    :class="[styles.modalBoxHeader, {
      [styles.modifiers.help]: $slots.help,
    }]"
  >
    <slot v-if="!$slots.help" />

    <template v-else>
      <div :class="styles.modalBoxHeaderMain">
        <slot />
      </div>
      <div class="pf-v5-c-modal-box__header-help">
        <slot name="help" />
      </div>
    </template>
  </header>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfModalHeader',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {}

defineProps<Props>();

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  help?: (props?: Record<never, never>) => any;
}>();
</script>
