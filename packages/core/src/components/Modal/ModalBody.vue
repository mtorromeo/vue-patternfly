<template>
  <div v-bind="ouiaProps" :class="styles.modalBoxBody" :role="role">
    <slot />
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import { computed, useAttrs, type HTMLAttributes, type VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfModalBody',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const attrs = useAttrs();
// a labelled body is a region, unless it is given another role
const role = computed(() => {
  if (typeof attrs.role === 'string') {
    return attrs.role;
  }
  return attrs['aria-label'] ? 'region' : undefined;
});

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
