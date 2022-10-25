<template>
  <pf-title h="2" size="2xl">
    {{ camelName }}
    <code>{{ name }}</code>
  </pf-title>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const camelize = (s: string) =>
  s.toUpperCase().replace("-", "").replace("_", "");

export default defineComponent({
  name: "ComponentTitle",

  props: {
    name: {
      type: String,
      required: true,
    },
  },

  computed: {
    camelName() {
      return (
        this.name.charAt(0).toUpperCase() +
        this.name.substring(1).replace(/([-_][a-z])/gi, camelize)
      );
    },
  },
});
</script>
