<template>
  <header :class="[styles.modalBoxHeader, {
    [styles.modifiers.help]: $slots.help,
  }]">
    <slot v-if="!$slots.help" />

    <template v-else name="help">
      <div :class="styles.modalBoxHeaderMain">
        <slot />
      </div>
      <div class="pf-c-modal-box__header-help">
        <slot name="help" />
      </div>
    </template>
  </header>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import { defineComponent, markRaw } from 'vue';

export default defineComponent({
  name: 'PfModalHeader',

  setup() {
    return {
      styles: markRaw(styles),
    };
  },
});
</script>
