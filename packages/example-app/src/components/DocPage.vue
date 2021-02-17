<template>
  <pf-page-section variant="light">
    <div class="doc-content">
      <pf-title size="4xl">
        {{ title }}
      </pf-title>

      <slot />
    </div>
  </pf-page-section>
</template>

<script>
export default {
  name: 'DocPage',

  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.doc-content {
  max-width: 832px;
}
</style>
