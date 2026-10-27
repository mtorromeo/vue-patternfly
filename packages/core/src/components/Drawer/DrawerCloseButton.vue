<template>
  <div v-bind="ouiaProps" :class="styles.drawerClose">
    <pf-button
      variant="plain"
      :aria-label="ariaLabel ?? messages.drawerClose"
      v-bind="restButtonProps"
      @click="emit('close')"
    >
      <template #icon>
        <xmark-icon />
      </template>
    </pf-button>
  </div>
</template>

<script lang="ts">
interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Accessible label for the drawer close button. Defaults to the `drawerClose` message. */
  ariaLabel?: string;
  /** Additional properties passed to the close button */
  buttonProps?: Omit<ComponentProps<typeof PfButton>, 'onClick'>;
}
</script>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { usePfMessages } from '../../messages';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';
import PfButton from '../Button.vue';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import { computed, type HTMLAttributes } from 'vue';
import type { ComponentProps } from 'vue-component-type-helpers';

defineOptions({
  name: 'PfDrawerCloseButton',
});

const props = defineProps<Props>();
const messages = usePfMessages();
const restButtonProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onClick, ...rest } = (props.buttonProps ?? {}) as ComponentProps<typeof PfButton> & { onClick?: unknown };
  return rest;
});
const ouiaProps = useOUIAProps({ id: props.ouiaId, safe: props.ouiaSafe });

const emit = defineEmits<{
  /** A callback for when the close button is clicked  */
  (name: 'close'): void;
}>();
</script>
