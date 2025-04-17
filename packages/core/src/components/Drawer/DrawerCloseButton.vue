<template>
  <div v-bind="ouiaProps" :class="styles.drawerClose">
    <pf-button variant="plain" :aria-label="ariaLabel" @click="emit('close')">
      <template #icon>
        <xmark-icon />
      </template>
    </pf-button>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfButton from '../Button.vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import type { HTMLAttributes } from 'vue';

defineOptions({
  name: 'PfDrawerCloseButton',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Accessible label for the drawer close button */
  ariaLabel?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

const emit = defineEmits<{
  /** A callback for when the close button is clicked  */
  (name: 'close'): void;
}>();
</script>
