<template>
  <header v-bind="ouiaProps" :class="styles.loginMainHeader">
    <pf-title v-if="title" :h="2" size="3xl">
      {{ title }}
    </pf-title>
    <p v-if="subtitle" :class="styles.loginMainHeaderDesc">
      {{ subtitle }}
    </p>
    <div v-if="$slots.utilities" :class="styles.loginMainHeaderUtilities">
      <slot name="utilities" />
    </div>
    <slot />
  </header>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue';
import PfTitle from '../Title.vue';
import styles from '@patternfly/react-styles/css/components/Login/login';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfLoginMainHeader',
});

export interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
  /** Title for the login main header */
  title?: string;
  /** Subtitle that contains the text, URL, and URL text for the login main header */
  subtitle?: string;
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});

defineSlots<{
  default: (props?: Record<never, never>) => any;
  utilities: (props?: Record<never, never>) => any;
}>();
</script>
