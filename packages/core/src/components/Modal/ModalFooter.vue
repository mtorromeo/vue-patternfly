<template>
  <footer v-bind="ouiaProps" :class="styles.modalBoxFooter">
    <slot />
  </footer>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import type { HTMLAttributes, VNode } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfModalFooter',
});

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

defineSlots<{
  default?: (props?: Record<never, never>) => VNode[];
}>();
</script>
