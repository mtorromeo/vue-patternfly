<template>
  <component v-bind="ouiaProps" :is="otherControls ? 'pass-through' : 'div'" :class="styles.dataListItemControl">
    <div :class="styles.dataListCheck">
      <input
        v-bind="$attrs"
        v-model="checked"
        type="checkbox"
      >
    </div>
  </component>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import type { InputHTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListCheck',
  inheritAttrs: false,
});

interface Props extends OUIAProps, /* @vue-ignore */ Omit<InputHTMLAttributes, 'type'> {
  otherControls?: boolean;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const checked = defineModel<boolean>('expanded', { default: false });
</script>
