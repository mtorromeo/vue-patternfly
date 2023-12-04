<template>
  <div :class="styles.loginMainFooter">
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

defineOptions({
  name: 'PfLoginMainFooter',
});

export interface Props extends /* @vue-ignore */ HTMLAttributes {
}

defineProps<Props>();

defineSlots<{
  default: (props?: Record<never, never>) => any;
  social: (props?: Record<never, never>) => any;
  signup: (props?: Record<never, never>) => any;
  forgotCredentials: (props?: Record<never, never>) => any;
}>();
</script>
