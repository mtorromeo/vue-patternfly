<template>
  <component :is="otherControls ? 'pass-through' : 'div'" :class="styles.dataListItemControl">
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

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { useManagedProp } from '../../use';

defineOptions({
  name: 'PfDataListCheck',
});

withDefaults(defineProps<{
  otherControls?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  checked?: boolean;
}>(), {
  checked: undefined,
});

defineEmits<{
  (name: 'update:checked', checked: boolean): void;
}>();

const managedChecked = useManagedProp('checked', false);
</script>
