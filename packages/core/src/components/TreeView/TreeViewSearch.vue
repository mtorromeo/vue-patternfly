<template>
  <div :class="[styles.treeViewSearch, $attrs.class]">
    <div :class="[formStyles.formControl, formStyles.modifiers.icon]">
      <input
        v-bind="{ ...$attrs, class: undefined }"
        v-model="value"
        :name="name"
        :placeholder="placeholder"
        type="search"
        @input="emit('search', $event)"
      />
      <div :class="formStyles.formControlUtilities">
        <div :class="formStyles.formControlIcon">
          <magnifying-glass-icon />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
interface Props extends /* @vue-ignore */ HTMLAttributes {
  /** Name of the search input */
  name?: string;
  /** Placeholder of the search input */
  placeholder?: string;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/TreeView/tree-view';
import formStyles from '@patternfly/react-styles/css/components/FormControl/form-control';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfTreeViewSearch',
  inheritAttrs: false,
});

defineProps<Props>();

/** Value of the search input */
const value = defineModel<string>({ default: '' });

const emit = defineEmits<{
  /** Emitted on every input in the search field */
  (name: 'search', event: Event): void;
}>();
</script>
