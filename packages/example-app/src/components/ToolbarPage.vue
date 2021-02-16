<template>
  <pf-page-section variant="light">
    <pf-title>Toolbar</pf-title>

    <pf-title class="example-heading" h="3">
      Items
    </pf-title>
    <pf-toolbar>
      <pf-toolbar-content>
        <pf-toolbar-item>
          <pf-input-group>
            <input class="pf-c-form-control" type="search" aria-label="search input example">
            <pf-button variant="control" aria-label="search button for search input">
              <SearchIcon />
            </pf-button>
          </pf-input-group>
        </pf-toolbar-item>

        <pf-toolbar-item>
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>

        <pf-toolbar-item variant="separator" />

        <pf-toolbar-item>
          <pf-button variant="primary">
            Action
          </pf-button>
        </pf-toolbar-item>
      </pf-toolbar-content>
    </pf-toolbar>

    <pf-title class="example-heading" h="3">
      Examples with toggle groups and filters
    </pf-title>
    <pf-toolbar class="pf-m-toggle-group-container">
      <pf-toolbar-content>
        <pf-toolbar-toggle-group breakpoint="xl">
          <template #icon>
            <FilterIcon />
          </template>

          <pf-toolbar-item>
            <pf-input-group>
              <input class="pf-c-form-control" type="search" aria-label="search input example">
              <pf-button variant="control" aria-label="search button for search input">
                <SearchIcon />
              </pf-button>
            </pf-input-group>
          </pf-toolbar-item>

          <pf-toolbar-group variant="filter-group">
            <pf-toolbar-item>
              <select />
            </pf-toolbar-item>

            <pf-toolbar-item>
              <select />
            </pf-toolbar-item>
          </pf-toolbar-group>
        </pf-toolbar-toggle-group>
      </pf-toolbar-content>
    </pf-toolbar>
  </pf-page-section>
</template>

<script>
import SearchIcon from '@vue-patternfly4/icons/dist/esm/icons/search-icon';
import FilterIcon from '@vue-patternfly4/icons/dist/esm/icons/filter-icon';

export default {
  name: 'ToolbarPage',

  components: {
    FilterIcon,
    SearchIcon,
  },
};
</script>
