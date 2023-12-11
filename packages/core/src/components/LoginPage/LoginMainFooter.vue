<template>
  <div v-bind="(ouiaProps as any)" :class="styles.loginMainFooter">
    <slot />
    <ul v-if="$slots.social" :class="styles.loginMainFooterLinks">
      <slot name="social" />
    </ul>
    <div v-if="$slots.signup || $slots.forgotCredentials" :class="styles.loginMainFooterBand">
      <slot name="signup" />
      <slot name="forgotCredentials" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfLoginMainFooter',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  social: (props?: Record<never, never>) => any;
  signup: (props?: Record<never, never>) => any;
  forgotCredentials: (props?: Record<never, never>) => any;
}>();
</script>
