<template>
  <component :is="otherControls ? 'void' : 'div'" :class="styles.dataListItemControl">
    <div :class="styles.dataListCheck">
      <input
        v-model="managedChecked"
        type="checkbox"
        :disabled="disabled"
        :aria-invalid="invalid"
      >
    </div>
  </component>
</template>

<script lang="ts">
import styles from '@patternfly/react-styles/css/components/DataList/data-list';

import { defineComponent, markRaw } from "vue";
import { useManagedProp } from '../../use';

export default defineComponent({
  name: 'PfDataListCheck',

  props: {
    otherControls: Boolean,
    disabled: Boolean,
    invalid: Boolean,
    checked: {
      type: Boolean,
      default: undefined,
    },
  },

  emits: {
    'update:checked': (checked: boolean) => typeof checked === 'boolean',
  },

  setup() {
    return {
      styles: markRaw(styles) as typeof styles,
      managedChecked: useManagedProp('checked', false),
    };
  },
});
</script>
