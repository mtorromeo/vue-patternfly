<template>
  <doc-page title="Pagination">
    <template #description>A <b>pagination</b> component gives users more navigational capability on pages with content views.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Pagination/Pagination.vue" />
      <component-info src="packages/core/src/components/Pagination/PaginationNavigation.vue" />
      <component-info src="packages/core/src/components/Pagination/PaginationOptionsMenu.vue" />
    </template>

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
