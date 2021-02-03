<template>
  <pf-page-section variant="light">
    <pf-title>Pagination</pf-title>

    <pf-title class="example-heading" h="3">
      Top
    </pf-title>
    <pf-pagination
      v-model:page="page"
      v-model:per-page="perPage"
      :count="523"
      widget-id="pagination-options-menu-top"
    />

    <pf-title class="example-heading" h="3">
      Bottom
    </pf-title>

    <pf-title class="example-heading" h="3">
      Disabled
    </pf-title>

    <pf-title class="example-heading" h="3">
      No items
    </pf-title>

    <pf-title class="example-heading" h="3">
      One page
    </pf-title>

    <pf-title class="example-heading" h="3">
      Compact
    </pf-title>
    <pf-pagination
      v-model:page="page"
      v-model:per-page="perPage"
      :count="523"
      widget-id="pagination-options-menu-top"
      compact
    />

    <pf-title class="example-heading" h="3">
      Sticky
    </pf-title>
  </pf-page-section>
</template>

<script>
export default {
  name: 'PaginationPage',

  data() {
    return {
      page: 1,
      perPage: 20,
    };
  },
};
</script>
