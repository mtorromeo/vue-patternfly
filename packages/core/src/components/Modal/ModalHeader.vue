<template>
  <header
    v-bind="(ouiaProps as any)"
    :class="[styles.modalBoxHeader, {
      [styles.modifiers.help]: $slots.help,
    }]"
  >
    <slot v-if="!$slots.help" />

    <template v-else>
      <div :class="styles.modalBoxHeaderMain">
        <slot />
      </div>
      <div :class="`${styles.modalBoxHeader}-help`">
        <slot name="help" />
      </div>
    </template>
  </header>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/ModalBox/modal-box';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfModalHeader',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default?: (props?: Record<never, never>) => any;
  help?: (props?: Record<never, never>) => any;
}>();
</script>
