<template>
  <doc-page title="Pagination">
    <component-title name="pf-pagination" />

    <story-canvas title="Example">
      <pf-pagination
        v-model:page="page"
        v-model:per-page="perPage"
        :count="333"
      />
    </story-canvas>

    <story-canvas title="Inset">
      <pf-pagination
        v-model:page="page"
        v-model:per-page="perPage"
        :count="333"
        inset="none"
        inset-md="md"
        inset-lg="2xl"
      />
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const page = ref(1);
const perPage = ref(10);
</script>
