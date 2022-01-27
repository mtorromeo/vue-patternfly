<template>
  <pf-button variant="link" inline>
    <slot />
  </pf-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PfButton from '../Button.vue';

export default defineComponent({
  name: 'PfAlertActionLink',
  components: { PfButton },
});
</script>
