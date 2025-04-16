<template>
  <component v-bind="ouiaProps" :is="otherControls ? 'pass-through' : 'div'" :class="styles.dataListItemControl">
    <div :class="styles.dataListCheck">
      <input
        v-bind="$attrs"
        v-model="managedChecked"
        type="checkbox"
      >
    </div>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import { useManagedProp } from '../../use';
import type { InputHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListCheck',
  inheritAttrs: false,
});

export interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'type'> {
  otherControls?: boolean;
  checked?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  checked: undefined,
});
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineEmits<{
  (name: 'update:checked', checked: boolean): void;
}>();

const managedChecked = useManagedProp('checked', false);
</script>
