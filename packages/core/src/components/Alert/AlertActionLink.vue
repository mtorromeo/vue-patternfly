<template>
  <pf-button variant="link" inline>
    <slot />
  </pf-button>
</template>

<script>
import PfButton from '../Button.vue';

export default {
  name: 'PfAlertActionLink',
  components: {PfButton},
};
</script>
