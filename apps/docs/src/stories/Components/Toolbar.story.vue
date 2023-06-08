<template>
  <doc-page title="Toolbar">
    <component-title name="pf-toolbar" />

    <story-canvas title="Default">
      <pf-toolbar>
        <pf-toolbar-content>
          <pf-toolbar-item>
            <pf-input-group>
              <pf-text-input type="search" aria-label="search input example" />
              <pf-button variant="control" aria-label="search button for search input">
                <magnifying-glass-icon />
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
    </story-canvas>

    <story-canvas title="Adjusting toolbar inset">
      <pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
        <pf-toolbar-content>
          <pf-toolbar-item>
            <pf-input-group>
              <pf-text-input type="search" aria-label="search input example" />
              <pf-button variant="control" aria-label="search button for search input">
                <magnifying-glass-icon />
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
    </story-canvas>

    <story-canvas title="Adjusting item spacers">
      <pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
        <pf-toolbar-content>
          <pf-toolbar-item spacer="none">
            <pf-button variant="secondary">Action</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item spacer="sm">
            <pf-button variant="secondary">Action</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item spacer="md">
            <pf-button variant="secondary">Action</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item spacer="lg">
            <pf-button variant="secondary">Action</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item variant="separator" />
          <pf-toolbar-item spacer="none" spacer-md="sm" spacer-lg="md" spacer-xl="lg">
            <pf-button variant="secondary">Action</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="primary">Action</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item variant="separator" />
          <pf-toolbar-group space-items="lg">
            <pf-toolbar-item>
              <pf-button variant="secondary">Action</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="secondary">Action</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Groups">
      <pf-toolbar inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
        <pf-toolbar-content>
          <pf-toolbar-group variant="filter-group">
            <pf-toolbar-item>
              <pf-select v-model:open="selectExpanded1" @clear="void 0">
                <pf-select-option value="Filter 1" placeholder />
                <pf-select-option value="A" />
                <pf-select-option value="B" />
                <pf-select-option value="C" />
              </pf-select>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-select v-model:open="selectExpanded2" @clear="void 0">
                <pf-select-option value="Filter 2" placeholder />
                <pf-select-option value="1" />
                <pf-select-option value="2" />
                <pf-select-option value="3" />
              </pf-select>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-select v-model:open="selectExpanded3" @clear="void 0">
                <pf-select-option value="Filter 3" placeholder />
                <pf-select-option value="I" />
                <pf-select-option value="II" />
                <pf-select-option value="III" />
              </pf-select>
            </pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-group variant="icon-button-group">
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="edit">
                <pen-to-square-icon />
              </pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="clone">
                <CloneIcon />
              </pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="sync">
                <rotate-icon />
              </pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-group variant="button-group">
            <pf-toolbar-item>
              <pf-button variant="primary">Action</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="secondary">Secondary</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="tertiary">Tertiary</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Component managed toggle groups">
      <pf-toolbar class="pf-m-toggle-group-container">
        <pf-toolbar-content>
          <pf-toolbar-toggle-group xl>
            <template #icon>
              <FilterIcon />
            </template>

            <pf-toolbar-item>
              <pf-input-group>
                <pf-text-input type="search" aria-label="search input example" />
                <pf-button variant="control" aria-label="search button for search input">
                  <magnifying-glass-icon />
                </pf-button>
              </pf-input-group>
            </pf-toolbar-item>

            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-item>
                <pf-select>
                  <pf-select-option value="Filter 1" placeholder />
                  <pf-select-option value="A" />
                  <pf-select-option value="B" />
                  <pf-select-option value="C" />
                </pf-select>
              </pf-toolbar-item>

              <pf-toolbar-item>
                <pf-select>
                  <pf-select-option value="Filter 2" placeholder />
                  <pf-select-option value="1" />
                  <pf-select-option value="2" />
                  <pf-select-option value="3" />
                </pf-select>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </pf-toolbar-toggle-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Consumer managed toggle groups">
      <pf-toolbar v-model:expanded="expanded1" class="pf-m-toggle-group-container">
        <pf-toolbar-content>
          <pf-toolbar-toggle-group xl>
            <template #icon>
              <FilterIcon />
            </template>

            <pf-toolbar-item>
              <pf-input-group>
                <pf-text-input type="search" aria-label="search input example" />
                <pf-button variant="control" aria-label="search button for search input">
                  <magnifying-glass-icon />
                </pf-button>
              </pf-input-group>
            </pf-toolbar-item>

            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-item>
                <pf-select>
                  <pf-select-option value="Filter 1" placeholder />
                  <pf-select-option value="A" />
                  <pf-select-option value="B" />
                  <pf-select-option value="C" />
                </pf-select>
              </pf-toolbar-item>

              <pf-toolbar-item>
                <pf-select>
                  <pf-select-option value="Filter 2" placeholder />
                  <pf-select-option value="1" />
                  <pf-select-option value="2" />
                  <pf-select-option value="3" />
                </pf-select>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </pf-toolbar-toggle-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="With filters">
      <pf-toolbar
        v-model:expanded="expanded2"
        class="pf-m-toggle-group-container"
        collapse-listed-filters-breakpoint="xl"
        @clear-all-filters="onDelete"
      >
        <pf-toolbar-content>
          <pf-toolbar-toggle-group xl>
            <template #icon>
              <FilterIcon />
            </template>

            <pf-toolbar-item>
              <pf-input-group>
                <pf-text-input type="search" aria-label="search input example" />
                <pf-button variant="control" aria-label="search button for search input">
                  <magnifying-glass-icon />
                </pf-button>
              </pf-input-group>
            </pf-toolbar-item>

            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-filter
                category="Status"
                :chips="filters.status"
                @delete-chip="onDelete"
                @delete-chip-group="onDeleteGroup"
              >
                <pf-toolbar-item>
                  <pf-select>
                    <pf-select-option value="Filter 1" placeholder />
                    <pf-select-option value="A" />
                    <pf-select-option value="B" />
                    <pf-select-option value="C" />
                  </pf-select>
                </pf-toolbar-item>
              </pf-toolbar-filter>

              <pf-toolbar-filter category="Risk" :chips="filters.risk" @delete-chip="onDelete">
                <pf-toolbar-item>
                  <pf-select>
                    <pf-select-option value="Filter 2" placeholder />
                    <pf-select-option value="1" />
                    <pf-select-option value="2" />
                    <pf-select-option value="3" />
                  </pf-select>
                </pf-toolbar-item>
              </pf-toolbar-filter>
            </pf-toolbar-group>
          </pf-toolbar-toggle-group>

          <pf-toolbar-group variant="icon-button-group">
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="edit">
                <pen-to-square-icon />
              </pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="clone">
                <CloneIcon />
              </pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="sync">
                <rotate-icon />
              </pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>

          <pf-toolbar-item>
            <pf-dropdown v-model:open="dropdownOpen" plain>
              <template #toggle>
                <pf-kebab-toggle />
              </template>

              <pf-dropdown-item key="link">Link</pf-dropdown-item>
              <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
              <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
              <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
              <pf-dropdown-separator key="separator" />
              <pf-dropdown-item key="separated link">Separated Link</pf-dropdown-item>
              <pf-dropdown-item key="separated action" component="button">Separated Action</pf-dropdown-item>
            </pf-dropdown>
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Stacked example">
      <pf-toolbar>
        <pf-toolbar-content>
          <pf-toolbar-toggle-group lg>
            <template #icon>
              <FilterIcon />
            </template>
            <pf-toolbar-item id="stacked-example-resource-select" variant="label">Resource</pf-toolbar-item>
            <pf-toolbar-item>
              <pf-select>
                <pf-select-option value="Filter 1" placeholder />
                <pf-select-option value="A" />
                <pf-select-option value="B" />
                <pf-select-option value="C" />
              </pf-select>
            </pf-toolbar-item>
            <pf-toolbar-item id="stacked-example-status-select" variant="label">Status</pf-toolbar-item>
            <pf-toolbar-item>
              <pf-select>
                <pf-select-option value="Filter 2" placeholder />
                <pf-select-option value="1" />
                <pf-select-option value="2" />
                <pf-select-option value="3" />
              </pf-select>
            </pf-toolbar-item>
            <pf-toolbar-item id="stacked-example-type-select" variant="label">Type</pf-toolbar-item>
            <pf-toolbar-item>
              <pf-select>
                <pf-select-option value="Filter 3" placeholder />
                <pf-select-option value="I" />
                <pf-select-option value="II" />
                <pf-select-option value="III" />
              </pf-select>
            </pf-toolbar-item>
          </pf-toolbar-toggle-group>
          <pf-toolbar-item variant="overflow-menu">
            <pf-overflow-menu breakpoint="2xl">
              <pf-overflow-menu-content>
                <pf-overflow-menu-group type="button">
                  <pf-overflow-menu-item>
                    <pf-button variant="primary">Primary</pf-button>
                  </pf-overflow-menu-item>
                  <pf-overflow-menu-item>
                    <pf-button variant="secondary">Secondary</pf-button>
                  </pf-overflow-menu-item>
                </pf-overflow-menu-group>
              </pf-overflow-menu-content>
              <pf-overflow-menu-control additional-options>
                <pf-dropdown v-model:open="kebabIsOpen" plain>
                  <template #toggle>
                    <pf-kebab-toggle />
                  </template>
                  <pf-dropdown-item key="link">Link</pf-dropdown-item>
                  <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
                  <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
                  <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
                  <pf-dropdown-separator key="separator" />
                  <pf-dropdown-item key="separated link">Separated Link</pf-dropdown-item>
                  <pf-dropdown-item key="separated action" component="button">Separated Action</pf-dropdown-item>
                </pf-dropdown>
              </pf-overflow-menu-control>
            </pf-overflow-menu>
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
      <pf-divider />
      <pf-toolbar>
        <pf-toolbar-content>
          <pf-toolbar-item variant="bulk-select">
            <pf-dropdown v-model:open="splitButtonDropdownIsOpen">
              <template #toggle>
                <pf-dropdown-toggle id="stacked-example-toggle">
                  <template #buttons>
                    <pf-dropdown-toggle-checkbox
                      id="example-checkbox-1"
                      key="split-checkbox"
                      aria-label="Select all"
                    />
                  </template>
                </pf-dropdown-toggle>
              </template>
              <pf-dropdown-item key="link">Link</pf-dropdown-item>
              <pf-dropdown-item key="action" component="button">Action</pf-dropdown-item>
              <pf-dropdown-item key="disabled link" disabled>Disabled Link</pf-dropdown-item>
              <pf-dropdown-item key="disabled action" disabled component="button">Disabled Action</pf-dropdown-item>
            </pf-dropdown>
          </pf-toolbar-item>
          <pf-toolbar-item variant="pagination" align="right">
            <pf-pagination
              v-model:page="page"
              v-model:per-page="perPage"
              :count="37"
              widget-id="pagination-options-menu-top"
            />
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import FilterIcon from '@vue-patternfly/icons/filter-icon';
import CloneIcon from '@vue-patternfly/icons/clone-icon';
import PenToSquareIcon from '@vue-patternfly/icons/pen-to-square-icon';
import RotateIcon from '@vue-patternfly/icons/rotate-icon';

import { reactive, ref } from "vue";

const expanded1 = ref(false);
const expanded2 = ref(false);
const selectExpanded1 = ref(false);
const selectExpanded2 = ref(false);
const selectExpanded3 = ref(false);
const dropdownOpen = ref(false);
const filters = reactive({
  risk: ['Low'],
  status: ['New', 'Pending'],
});

const kebabIsOpen = ref(false);
const splitButtonDropdownIsOpen = ref(false);
const page = ref(1);
const perPage = ref(20);


const onDelete = (type: string, id: string) => {
  if (!type) {
    filters.risk = [];
    filters.status = [];
    return;
  }
  const ktype = type.toLowerCase() as keyof typeof filters;
  filters[ktype] = filters[ktype].filter((s: string) => s !== id);
};

const onDeleteGroup = (type: string) => {
  filters[type.toLowerCase() as keyof typeof filters] = [];
};
</script>
