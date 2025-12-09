<template>
  <div v-bind="ouiaProps" :class="styles.login">
    <div :class="styles.loginContainer">
      <slot name="header" />
      <main :class="styles.loginMain">
        <slot />
      </main>
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import styles from '@patternfly/react-styles/css/components/Login/login';
import type { HTMLAttributes } from 'vue';
import { useOUIAProps, type OUIAProps } from '../../helpers/ouia';

defineOptions({
  name: 'PfLogin',
});

interface Props extends OUIAProps, /* @vue-ignore */ HTMLAttributes {
}

const props = defineProps<Props>();
const ouiaProps = useOUIAProps({id: props.ouiaId, safe: props.ouiaSafe});
</script>
