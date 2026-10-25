<template>
  <button
    v-bind="ouiaProps"
    :class="[styles.dataListItemDraggableButton, { [styles.modifiers.disabled]: disabled }]"
    :type="type"
    :disabled="disabled"
  >
    <span :class="styles.dataListItemDraggableIcon">
      <grip-vertical-icon />
    </span>
  </button>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ Omit<ButtonHTMLAttributes, 'type' | 'disabled'> {
  /** Sets button type */
  type?: 'button' | 'submit' | 'reset';
  /** Flag indicating if drag is disabled for the item */
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/DataList/data-list';
import type { ButtonHTMLAttributes } from 'vue';
import GripVerticalIcon from '@vue-patternfly/icons/grip-vertical-icon';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfDataListDragButton',
});

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });
</script>
