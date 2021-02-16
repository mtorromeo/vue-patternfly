<template>
  <pf-page-section variant="light">
    <pf-title>Toolbar</pf-title>

    <pf-title class="example-heading" h="2">
      Examples
    </pf-title>

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
      Adjusting item spacers
    </pf-title>
    <pf-toolbar>
      <pf-toolbar-content>
        <pf-toolbar-item spacer="none">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item spacer="sm">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item spacer="md">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item spacer="lg">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item variant="separator" />
        <pf-toolbar-item spacer="none" spacer-md="sm" spacer-lg="md" spacer-xl="lg">
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item>
          <pf-button variant="primary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item variant="separator" />
        <pf-toolbar-group space-items="lg">
          <pf-toolbar-item>
            <pf-button variant="secondary">
              Action
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="secondary">
              Action
            </pf-button>
          </pf-toolbar-item>
        </pf-toolbar-group>
      </pf-toolbar-content>
    </pf-toolbar>

    <pf-title class="example-heading" h="3">
      Adjusting toolbar inset
    </pf-title>
    <pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
      <pf-toolbar-content>
        <pf-toolbar-item>
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item>
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item>
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item>
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item variant="separator" />
        <pf-toolbar-item>
          <pf-button variant="secondary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item>
          <pf-button variant="primary">
            Action
          </pf-button>
        </pf-toolbar-item>
        <pf-toolbar-item variant="separator" />
        <pf-toolbar-group>
          <pf-toolbar-item>
            <pf-button variant="secondary">
              Action
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="secondary">
              Action
            </pf-button>
          </pf-toolbar-item>
        </pf-toolbar-group>
      </pf-toolbar-content>
    </pf-toolbar>

    <pf-title class="example-heading" h="3">
      Groups
    </pf-title>
    <pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
      <pf-toolbar-content>
        <pf-toolbar-group variant="filter-group">
          <pf-toolbar-item>
            <select />
          </pf-toolbar-item>
          <pf-toolbar-item>
            <select />
          </pf-toolbar-item>
          <pf-toolbar-item>
            <select />
          </pf-toolbar-item>
        </pf-toolbar-group>
        <pf-toolbar-group variant="icon-button-group">
          <pf-toolbar-item>
            <pf-button variant="plain" aria-label="edit">
              <EditIcon />
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="plain" aria-label="clone">
              <CloneIcon />
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="plain" aria-label="sync">
              <SyncIcon />
            </pf-button>
          </pf-toolbar-item>
        </pf-toolbar-group>
        <pf-toolbar-group variant="button-group">
          <pf-toolbar-item>
            <pf-button variant="primary">
              Action
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="secondary">
              Secondary
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="tertiary">
              Tertiary
            </pf-button>
          </pf-toolbar-item>
        </pf-toolbar-group>
      </pf-toolbar-content>
    </pf-toolbar>

    <pf-title class="example-heading" h="2">
      Examples with toggle groups and filters
    </pf-title>

    <pf-title class="example-heading" h="3">
      Component managed toggle groups
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

    <pf-title class="example-heading" h="3">
      Consumer managed toggle groups
    </pf-title>
    <pf-toolbar v-model:expanded="expanded1" class="pf-m-toggle-group-container">
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

    <pf-title class="example-heading" h="3">
      With filters
    </pf-title>
    <pf-toolbar v-model:expanded="expanded2" class="pf-m-toggle-group-container" collapse-listed-filters-breakpoint="xl" @clear-all-filters="onDelete">
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
            <pf-toolbar-filter category="Status" :chips="filters.status" @delete-chip="onDelete" @delete-chip-group="onDeleteGroup">
              <pf-toolbar-item>
                <select />
              </pf-toolbar-item>
            </pf-toolbar-filter>

            <pf-toolbar-filter category="Risk" :chips="filters.risk" @delete-chip="onDelete">
              <pf-toolbar-item>
                <select />
              </pf-toolbar-item>
            </pf-toolbar-filter>
          </pf-toolbar-group>
        </pf-toolbar-toggle-group>

        <pf-toolbar-group variant="icon-button-group">
          <pf-toolbar-item>
            <pf-button variant="plain" aria-label="edit">
              <EditIcon />
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="plain" aria-label="clone">
              <CloneIcon />
            </pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="plain" aria-label="sync">
              <SyncIcon />
            </pf-button>
          </pf-toolbar-item>
        </pf-toolbar-group>

        <pf-toolbar-item>
          <pf-dropdown v-model:open="dropdownOpen" plain>
            <template #toggle>
              <pf-kebab-toggle />
            </template>

            <pf-dropdown-item key="link">
              Link
            </pf-dropdown-item>
            <pf-dropdown-item key="action" component="button">
              Action
            </pf-dropdown-item>
            <pf-dropdown-item key="disabled link" disabled>
              Disabled Link
            </pf-dropdown-item>
            <pf-dropdown-item key="disabled action" disabled component="button">
              Disabled Action
            </pf-dropdown-item>
            <pf-dropdown-separator key="separator" />
            <pf-dropdown-item key="separated link">
              Separated Link
            </pf-dropdown-item>
            <pf-dropdown-item key="separated action" component="button">
              Separated Action
            </pf-dropdown-item>
          </pf-dropdown>
        </pf-toolbar-item>
      </pf-toolbar-content>
    </pf-toolbar>
  </pf-page-section>
</template>

<script>
import SearchIcon from '@vue-patternfly4/icons/dist/esm/icons/search-icon';
import FilterIcon from '@vue-patternfly4/icons/dist/esm/icons/filter-icon';
import CloneIcon from '@vue-patternfly4/icons/dist/esm/icons/clone-icon';
import EditIcon from '@vue-patternfly4/icons/dist/esm/icons/edit-icon';
import SyncIcon from '@vue-patternfly4/icons/dist/esm/icons/sync-icon';

export default {
  name: 'ToolbarPage',

  components: {
    FilterIcon,
    SearchIcon,
    CloneIcon,
    EditIcon,
    SyncIcon,
  },

  data() {
    return {
      expanded1: false,
      expanded2: false,
      dropdownOpen: false,
      filters: {
        risk: ['Low'],
        status: ['New', 'Pending'],
      },
    };
  },

  methods: {
    onDelete(type, id) {
      if (!type) {
        this.filters = {};
        return;
      }
      type = type.toLowerCase();
      this.filters[type] = this.filters[type].filter(s => s !== id);
    },

    onDeleteGroup(type) {
      this.filters[type.toLowerCase()] = [];
    },
  },
};
</script>
