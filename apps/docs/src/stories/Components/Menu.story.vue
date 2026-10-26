<template>
  <doc-page title="Menu">
    <template #description>
      <pre v-md>
        A **menu** is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu can be opened in a [dropdown](#/stories/components/dropdown) or [select](#/stories/components/select) list, or it can be revealed by right clicking on a specific region within a page.
      </pre>
    </template>

    <template #apidocs>
      <component-info name="PfMenu" />
      <component-info name="PfMenuContent" />
      <component-info name="PfMenuList" />
      <component-info name="PfMenuItem" />
      <component-info name="PfMenuItemAction" />
      <component-info name="PfMenuGroup" />
      <component-info name="PfMenuSearch" />
      <component-info name="PfMenuSearchInput" />
      <component-info name="PfMenuFooter" />
      <component-info name="PfDrilldownMenu" />
      <component-info name="PfMenuBreadcrumb" />
      <component-info name="PfMenuContainer" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `pf-menu-content`, `pf-menu-list` and `pf-menu-search` components are optional: items and inputs are wrapped automatically. `pf-menu-search` is also available as `pf-menu-input`.
      - The `itemId` prop of `pf-menu-item` is replaced by `value`, falling back to the `key` of the item.
      - The selection is bound with `v-model:selected`, toggling the selected value (or values for an array) when an item is clicked.
      - The `icon`, `actions` and `description` props of `pf-menu-item` are slots; `flyoutMenu` and `drilldownMenu` are the `flyout-menu` and `drilldown-menu` slots.
      - The `icon` of `pf-menu-item-action` is the `icon` slot, or `icon="favorites"`.
      - Favorited items (`v-model:favorited`) are copied in a favorites group at the top of the menu.
      - The drilldown state (`drilledInMenus`, `drilldownItemPath`, `activeMenu`) is managed by `pf-menu` and can be bound with `v-model`; `drill-in`, `drill-out` and `get-menu-height` are emitted. The content of the root menu follows the height of the active menu unless `menu-height` is set.
      - `pf-menu-container` takes the toggle in its `toggle` slot, whose `toggle()` opens or closes the menu, and the open state with `v-model:open`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic menus">
      <pf-menu :plain="basicPlain">
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0">Action</pf-menu-item>
            <pf-menu-item :value="1" to="#default-link2" @click.prevent>Link</pf-menu-item>
            <pf-menu-item disabled>Disabled action</pf-menu-item>
            <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
            <pf-menu-item aria-disabled tooltip="aria-disabled action" :tooltip-attrs="{ position: 'top' }">
              Aria-disabled action
            </pf-menu-item>
            <pf-menu-item
              aria-disabled
              to="#default-link5"
              tooltip="aria-disabled link"
              :tooltip-attrs="{ position: 'top' }"
            >
              Aria-disabled link
            </pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
      <div style="margin-top: 20px">
        <pf-checkbox id="toggle-plain" v-model="basicPlain" label="Plain menu" aria-label="plain menu checkbox" />
      </div>
    </story-canvas>

    <story-canvas title="Basic (simplified)">
      <template #intro>
        <pre v-md>
          `pf-menu-content` and `pf-menu-list` are added automatically around the items when omitted.
        </pre>
      </template>
      <pf-menu>
        <pf-menu-item :value="0">Action</pf-menu-item>
        <pf-menu-item :value="1" to="#default-link2" @click.prevent>Link</pf-menu-item>
        <pf-menu-item disabled>Disabled action</pf-menu-item>
        <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Danger menu item">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0">Action 1</pf-menu-item>
            <pf-menu-item :value="1">Action 2</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item :value="2" danger>Delete</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With icons">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0">
              <template #icon><code-branch-icon /></template>
              From git
            </pf-menu-item>
            <pf-menu-item :value="1">
              <template #icon><layer-group-icon /></template>
              Container image
            </pf-menu-item>
            <pf-menu-item :value="2">
              <template #icon><cube-icon /></template>
              Docker file
            </pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With actions">
      <pf-menu v-model:selected="actionsSelected" :active-item-id="0" :on-action-click="onActionClick">
        <pf-menu-content>
          <pf-menu-group label="Actions" label-heading-level="h3">
            <pf-menu-list>
              <pf-menu-item :value="0" description="This is a description">
                Item 1
                <template #actions>
                  <pf-menu-item-action action-id="code" aria-label="Code">
                    <template #icon><code-branch-icon /></template>
                  </pf-menu-item-action>
                </template>
              </pf-menu-item>
              <pf-menu-item :value="1" disabled description="This is a description">
                Item 2
                <template #actions>
                  <pf-menu-item-action action-id="alert" aria-label="Alert">
                    <template #icon><bell-icon /></template>
                  </pf-menu-item-action>
                </template>
              </pf-menu-item>
              <pf-menu-item :value="2">
                Item 3
                <template #actions>
                  <pf-menu-item-action action-id="copy" aria-label="Copy">
                    <template #icon><clipboard-icon /></template>
                  </pf-menu-item-action>
                </template>
              </pf-menu-item>
              <pf-menu-item :value="3" description="This is a description">
                Item 4
                <template #actions>
                  <pf-menu-item-action action-id="expand" aria-label="Expand">
                    <template #icon><bars-icon /></template>
                  </pf-menu-item-action>
                </template>
              </pf-menu-item>
            </pf-menu-list>
          </pf-menu-group>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With links">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0" external-link to="#default-link1">Link 1</pf-menu-item>
            <pf-menu-item :value="1" external-link to="#default-link2">Link 2</pf-menu-item>
            <pf-menu-item :value="2" to="#default-link3">Link 3</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With descriptions">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0" description="Description">
              <template #icon><code-branch-icon /></template>
              Action 1
            </pf-menu-item>
            <pf-menu-item :value="1" disabled description="Description">
              <template #icon><code-branch-icon /></template>
              Action 2 disabled
            </pf-menu-item>
            <pf-menu-item
              :value="2"
              description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
            >
              <template #icon><code-branch-icon /></template>
              Action 3
            </pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Item checkbox">
      <pf-menu v-model:selected="checkboxSelected">
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0" check>Checkbox 1</pf-menu-item>
            <pf-menu-item :value="1" check>Checkbox 2</pf-menu-item>
            <pf-menu-item :value="2" check disabled>Checkbox 3</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Menu footer">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0">Action</pf-menu-item>
            <pf-menu-item :value="1" to="#default-link2" @click.prevent>Link</pf-menu-item>
            <pf-menu-item disabled>Disabled action</pf-menu-item>
            <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
        <pf-menu-footer>
          <pf-button variant="link" inline>Action</pf-button>
        </pf-menu-footer>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Separated items">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0">Action 1</pf-menu-item>
            <pf-menu-item :value="1">Action 2</pf-menu-item>
            <pf-divider component="li" />
            <pf-menu-item :value="2">Action 3</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Titled groups of items">
      <pf-menu>
        <pf-menu-content>
          <pf-menu-group>
            <pf-menu-list>
              <pf-menu-item :value="0" to="#">Link not in group</pf-menu-item>
            </pf-menu-list>
          </pf-menu-group>
          <pf-divider />
          <pf-menu-group label="Group 1" label-heading-level="h3">
            <pf-menu-list>
              <pf-menu-item :value="1" to="#">Link 1</pf-menu-item>
              <pf-menu-item :value="2">Link 2</pf-menu-item>
            </pf-menu-list>
          </pf-menu-group>
          <pf-divider />
          <pf-menu-group label="Group 2" label-heading-level="h3">
            <pf-menu-list>
              <pf-menu-item :value="3" to="#">Link 1</pf-menu-item>
              <pf-menu-item :value="4" to="#">Link 2</pf-menu-item>
            </pf-menu-list>
          </pf-menu-group>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With favorites">
      <template #intro>
        <pre v-md>
          Items with `v-model:favorited` have a favorite action. The favorited items are copied in a favorites group at the top of the menu.
        </pre>
      </template>
      <pf-menu>
        <pf-menu-group v-for="(groupOptions, group) of options" :key="group" :label="group">
          <pf-menu-item
            v-for="option of groupOptions"
            :key="option.value"
            v-model:favorited="option.favorite"
            :name="option.value"
            :value="option.value"
            :description="option.description"
            :disabled="option.disabled"
          />
        </pf-menu-group>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Filtering with search input">
      <pf-menu>
        <pf-menu-search>
          <pf-menu-search-input>
            <pf-search-input v-model="filter" aria-label="Filter menu items" />
          </pf-menu-search-input>
        </pf-menu-search>
        <pf-divider />
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item v-for="(item, index) in filteredItems" :key="item" :value="index">{{ item }}</pf-menu-item>
            <pf-menu-item v-if="filter && !filteredItems.length" disabled>No results found</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Option single select menu">
      <pf-menu v-model:selected="singleSelected" role="listbox" :active-item-id="singleSelected ?? undefined">
        <pf-menu-content>
          <pf-menu-list aria-label="Menu single select example">
            <pf-menu-item :value="0">Option 1</pf-menu-item>
            <pf-menu-item :value="1">Option 2</pf-menu-item>
            <pf-menu-item :value="2">
              <template #icon><table-icon /></template>
              Option 3
            </pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Option multi select menu">
      <pf-menu v-model:selected="multiSelected" role="listbox" :active-item-id="0">
        <pf-menu-content>
          <pf-menu-list aria-multiselectable aria-label="Menu multi select example">
            <pf-menu-item :value="0">Option 1</pf-menu-item>
            <pf-menu-item :value="1">Option 2</pf-menu-item>
            <pf-menu-item :value="2">
              <template #icon><table-icon /></template>
              Option 3
            </pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Scrollable menus">
      <pf-menu scrollable>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item :value="0">Action 1</pf-menu-item>
            <pf-menu-item :value="1">Action 2</pf-menu-item>
            <pf-menu-item :value="2">Action 3</pf-menu-item>
            <pf-menu-item :value="3">Action 4</pf-menu-item>
            <pf-menu-item :value="4">Action 5</pf-menu-item>
            <pf-menu-item :value="5">Action 6</pf-menu-item>
            <pf-menu-item :value="6">Action 7</pf-menu-item>
            <pf-menu-item :value="7">Action 8</pf-menu-item>
            <pf-menu-item :value="8">Action 9</pf-menu-item>
            <pf-menu-item :value="9">Action 10</pf-menu-item>
            <pf-menu-item :value="10">Action 11</pf-menu-item>
            <pf-menu-item :value="11">Action 12</pf-menu-item>
            <pf-menu-item :value="12">Action 13</pf-menu-item>
            <pf-menu-item :value="13">Action 14</pf-menu-item>
            <pf-menu-item :value="14">Action 15</pf-menu-item>
            <pf-menu-item :value="15" to="#default-link2" @click.prevent>Link</pf-menu-item>
            <pf-menu-item disabled>Disabled action</pf-menu-item>
            <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Scrollable menu with custom height">
      <pf-menu scrollable>
        <pf-menu-content menu-height="200px">
          <pf-menu-list>
            <pf-menu-item :value="0">Action 1</pf-menu-item>
            <pf-menu-item :value="1">Action 2</pf-menu-item>
            <pf-menu-item :value="2">Action 3</pf-menu-item>
            <pf-menu-item :value="3">Action 4</pf-menu-item>
            <pf-menu-item :value="4">Action 5</pf-menu-item>
            <pf-menu-item :value="5">Action 6</pf-menu-item>
            <pf-menu-item :value="6">Action 7</pf-menu-item>
            <pf-menu-item :value="7">Action 8</pf-menu-item>
            <pf-menu-item :value="8">Action 9</pf-menu-item>
            <pf-menu-item :value="9">Action 10</pf-menu-item>
            <pf-menu-item :value="10">Action 11</pf-menu-item>
            <pf-menu-item :value="11">Action 12</pf-menu-item>
            <pf-menu-item :value="12">Action 13</pf-menu-item>
            <pf-menu-item :value="13">Action 14</pf-menu-item>
            <pf-menu-item :value="14">Action 15</pf-menu-item>
            <pf-menu-item :value="15" to="#default-link2" @click.prevent>Link</pf-menu-item>
            <pf-menu-item disabled>Disabled action</pf-menu-item>
            <pf-menu-item disabled to="#default-link4">Disabled link</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With view more">
      <template #intro>
        <pre v-md>
          If you want to initially render only a certain number of menu items within a large menu, you can add a "view more" menu item with a click handler that will render additional menu items.

          In this example, 3 additional menu items are revealed each time the "view more" option is selected, with a loading icon simulating a network call to fetch more items. After all items are visible, the "view more" link disappears.
        </pre>
      </template>
      <pf-menu ref="viewMoreMenu" :active-item-id="viewMoreActive">
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item
              v-for="option in viewMoreOptions.slice(0, viewMoreCount)"
              :key="option.value"
              :value="option.value"
              :disabled="option.disabled"
              :to="option.to"
              @click="option.to && $event.preventDefault()"
            >
              {{ option.label }}
            </pf-menu-item>
            <pf-menu-item
              v-if="viewMoreCount !== viewMoreOptions.length"
              value="loader"
              :load-button="!viewMoreLoading"
              :loading="viewMoreLoading"
              @click="onViewMoreClick"
            >
              <pf-spinner v-if="viewMoreLoading" size="lg" />
              <template v-else>View more</template>
            </pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With drilldown">
      <template #intro>
        <pre v-md>
          Use a drilldown menu to contain different levels of menu items. When a parent menu item (an item with a `pf-drilldown-menu` in its `drilldown-menu` slot and `direction="down"`) is selected, the menu is replaced with the children items; an item with `direction="up"` drills back out.

          - To indicate that a menu contains a drilldown, use the `contains-drilldown` property.
          - `pf-menu` manages the path of drilled-in menu item ids, the drilled-in menus and the active menu, which can be bound with `v-model:drilldown-item-path`, `v-model:drilled-in-menus` and `v-model:active-menu`.
          - The `drill-in` and `drill-out` events are emitted when drilling into and out of a submenu.
          - The content of the root menu follows the height of the active menu, which is also emitted with `get-menu-height`.
        </pre>
      </template>
      <pf-menu id="drilldown-rootMenu" contains-drilldown>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item value="group:start_rollout" direction="down">
              Start rollout
              <template #drilldown-menu>
                <pf-drilldown-menu id="drilldown-drilldownMenuStart">
                  <pf-menu-item value="group:start_rollout_breadcrumb" direction="up">Start rollout</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="group:app_grouping" description="Groups A-C" direction="down">
                    Application grouping
                    <template #drilldown-menu>
                      <pf-drilldown-menu id="drilldown-drilldownMenuStartGrouping">
                        <pf-menu-item value="group:app_grouping_breadcrumb" direction="up"
                          >Application grouping</pf-menu-item
                        >
                        <pf-divider component="li" />
                        <pf-menu-item value="group_a">Group A</pf-menu-item>
                        <pf-menu-item value="group_b">Group B</pf-menu-item>
                        <pf-menu-item value="group_c">Group C</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                  <pf-menu-item value="count">Count</pf-menu-item>
                  <pf-menu-item value="group:labels" direction="down">
                    Labels
                    <template #drilldown-menu>
                      <pf-drilldown-menu id="drilldown-drilldownMenuStartLabels">
                        <pf-menu-item value="group:labels_breadcrumb" direction="up">Labels</pf-menu-item>
                        <pf-divider component="li" />
                        <pf-menu-item value="label_1">Label 1</pf-menu-item>
                        <pf-menu-item value="label_2">Label 2</pf-menu-item>
                        <pf-menu-item value="label_3">Label 3</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                  <pf-menu-item value="annotations">Annotations</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="group:pause_rollout" direction="down">
              Pause rollouts
              <template #drilldown-menu>
                <pf-drilldown-menu id="drilldown-drilldownMenuPause">
                  <pf-menu-item value="group:pause_rollout_breadcrumb" direction="up">Pause rollouts</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="group:app_grouping" description="Groups A-C" direction="down">
                    Application grouping
                    <template #drilldown-menu>
                      <pf-drilldown-menu id="drilldown-drilldownMenuGrouping">
                        <pf-menu-item value="group:app_grouping_breadcrumb" direction="up"
                          >Application grouping</pf-menu-item
                        >
                        <pf-divider component="li" />
                        <pf-menu-item value="group_a">Group A</pf-menu-item>
                        <pf-menu-item value="group_b">Group B</pf-menu-item>
                        <pf-menu-item value="group_c">Group C</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                  <pf-menu-item value="count">Count</pf-menu-item>
                  <pf-menu-item value="group:labels" direction="down">
                    Labels
                    <template #drilldown-menu>
                      <pf-drilldown-menu id="drilldown-drilldownMenuLabels">
                        <pf-menu-item value="group:labels_breadcrumb" direction="up">Labels</pf-menu-item>
                        <pf-divider component="li" />
                        <pf-menu-item value="label_1">Label 1</pf-menu-item>
                        <pf-menu-item value="label_2">Label 2</pf-menu-item>
                        <pf-menu-item value="label_3">Label 3</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                  <pf-menu-item value="annotations">Annotations</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="group:storage" direction="down">
              <template #icon><database-icon /></template>
              Add storage
              <template #drilldown-menu>
                <pf-drilldown-menu id="drilldown-drilldownMenuStorage">
                  <pf-menu-item value="group:storage_breadcrumb" direction="up">
                    <template #icon><database-icon /></template>
                    Add storage
                  </pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="git">
                    <template #icon><code-branch-icon /></template>
                    From git
                  </pf-menu-item>
                  <pf-menu-item value="container">
                    <template #icon><layer-group-icon /></template>
                    Container image
                  </pf-menu-item>
                  <pf-menu-item value="docker">
                    <template #icon><cube-icon /></template>
                    Docker file
                  </pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="edit">Edit</pf-menu-item>
            <pf-menu-item value="delete_deployment">Delete deployment config</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Initially drilled-in menu">
      <template #intro>
        <pre v-md>
          To render an initially drilled-in menu, bind `v-model:drilldown-item-path`, `v-model:drilled-in-menus` and `v-model:active-menu` to their initial values.
        </pre>
      </template>
      <pf-menu
        id="initial-state-rootMenu"
        contains-drilldown
        v-model:drilled-in-menus="initialDrilledIn"
        v-model:drilldown-item-path="initialPath"
        v-model:active-menu="initialActiveMenu"
      >
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item value="group:start_rollout" direction="down">
              Start rollout
              <template #drilldown-menu>
                <pf-drilldown-menu id="initial-state-drilldownMenuStart">
                  <pf-menu-item value="group:start_rollout_breadcrumb" direction="up">Start rollout</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="group:app_grouping" description="Groups A-C" direction="down">
                    Application grouping
                    <template #drilldown-menu>
                      <pf-drilldown-menu id="initial-state-drilldownMenuStartGrouping">
                        <pf-menu-item value="group:app_grouping_breadcrumb" direction="up"
                          >Application grouping</pf-menu-item
                        >
                        <pf-divider component="li" />
                        <pf-menu-item value="group_a">Group A</pf-menu-item>
                        <pf-menu-item value="group_b">Group B</pf-menu-item>
                        <pf-menu-item value="group_c">Group C</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                  <pf-menu-item value="count">Count</pf-menu-item>
                  <pf-menu-item value="group:labels" direction="down">
                    Labels
                    <template #drilldown-menu>
                      <pf-drilldown-menu id="initial-state-drilldownMenuStartLabels">
                        <pf-menu-item value="group:labels_breadcrumb" direction="up">Labels</pf-menu-item>
                        <pf-divider component="li" />
                        <pf-menu-item value="label_1">Label 1</pf-menu-item>
                        <pf-menu-item value="label_2">Label 2</pf-menu-item>
                        <pf-menu-item value="label_3">Label 3</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                  <pf-menu-item value="annotations">Annotations</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="group:pause_rollout" direction="down">
              Pause rollouts
              <template #drilldown-menu>
                <pf-drilldown-menu id="initial-state-drilldownMenuPause">
                  <pf-menu-item value="group:pause_rollout_breadcrumb" direction="up">Pause rollouts</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="group:app_grouping" description="Groups A-C" direction="down">
                    Application grouping
                    <template #drilldown-menu>
                      <pf-drilldown-menu id="initial-state-drilldownMenuGrouping">
                        <pf-menu-item value="group:app_grouping_breadcrumb" direction="up"
                          >Application grouping</pf-menu-item
                        >
                        <pf-divider component="li" />
                        <pf-menu-item value="group_a">Group A</pf-menu-item>
                        <pf-menu-item value="group_b">Group B</pf-menu-item>
                        <pf-menu-item value="group_c">Group C</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                  <pf-menu-item value="count">Count</pf-menu-item>
                  <pf-menu-item value="group:labels" direction="down">
                    Labels
                    <template #drilldown-menu>
                      <pf-drilldown-menu id="initial-state-drilldownMenuLabels">
                        <pf-menu-item value="group:labels_breadcrumb" direction="up">Labels</pf-menu-item>
                        <pf-divider component="li" />
                        <pf-menu-item value="label_1">Label 1</pf-menu-item>
                        <pf-menu-item value="label_2">Label 2</pf-menu-item>
                        <pf-menu-item value="label_3">Label 3</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                  <pf-menu-item value="annotations">Annotations</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="group:storage" direction="down">
              <template #icon><database-icon /></template>
              Add storage
              <template #drilldown-menu>
                <pf-drilldown-menu id="initial-state-drilldownMenuStorage">
                  <pf-menu-item value="group:storage_breadcrumb" direction="up">
                    <template #icon><database-icon /></template>
                    Add storage
                  </pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item value="git">
                    <template #icon><code-branch-icon /></template>
                    From git
                  </pf-menu-item>
                  <pf-menu-item value="container">
                    <template #icon><layer-group-icon /></template>
                    Container image
                  </pf-menu-item>
                  <pf-menu-item value="docker">
                    <template #icon><cube-icon /></template>
                    Docker file
                  </pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="edit">Edit</pf-menu-item>
            <pf-menu-item value="delete_deployment">Delete deployment config</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With drilldown - submenu functions">
      <template #intro>
        <pre v-md>
          For added flexibility with large menus, the submenus can be generated from data, rather than writing everything up front.
        </pre>
      </template>
      <pf-menu id="functions-rootMenu" contains-drilldown>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item v-for="group in rolloutGroups" :key="group.value" :value="group.value" direction="down">
              {{ group.label }}
              <template #drilldown-menu>
                <pf-drilldown-menu :id="`functions-${group.value}`">
                  <pf-menu-item :value="`${group.value}_breadcrumb`" direction="up">{{ group.label }}</pf-menu-item>
                  <pf-divider component="li" />
                  <pf-menu-item
                    v-for="child in group.children"
                    :key="child.value"
                    :value="child.value"
                    :direction="child.children ? 'down' : undefined"
                  >
                    {{ child.label }}
                    <template v-if="child.children" #drilldown-menu>
                      <pf-drilldown-menu :id="`functions-${group.value}-${child.value}`">
                        <pf-menu-item :value="`${child.value}_breadcrumb`" direction="up">{{
                          child.label
                        }}</pf-menu-item>
                        <pf-divider component="li" />
                        <pf-menu-item v-for="leaf in child.children" :key="leaf" :value="leaf">{{ leaf }}</pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="edit">Edit</pf-menu-item>
            <pf-menu-item value="delete_deployment">Delete deployment config</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With drilldown breadcrumbs">
      <template #intro>
        <pre v-md>
          Use [breadcrumbs](#/stories/components/breadcrumb) when a drilldown menu has more than 2 levels to offer users better navigation. Here the breadcrumb is built from the drilldown state bound with `v-model`, and drills out by truncating it.

          To control the height of a menu, use the `max-menu-height` property. Selecting the "Set max menu height" checkbox in the following example sets the menu height to "100px" and makes the menu scrollable.
        </pre>
      </template>
      <pf-checkbox
        id="toggle-max-menu-height"
        v-model="withMaxMenuHeight"
        label="Set max menu height"
        aria-label="Set max menu height checkbox"
      />
      <br />
      <pf-menu
        id="breadcrumbs-rootMenu"
        v-model:drilled-in-menus="breadcrumbDrilledIn"
        v-model:drilldown-item-path="breadcrumbPath"
        v-model:active-menu="breadcrumbActiveMenu"
        contains-drilldown
        :scrollable="withMaxMenuHeight"
      >
        <template v-if="breadcrumbPath.length">
          <pf-menu-breadcrumb>
            <pf-breadcrumb>
              <pf-breadcrumb-item component="button" @click="drillOutTo(0)">Root</pf-breadcrumb-item>
              <pf-breadcrumb-item v-if="breadcrumbPath.length > 1" dropdown>
                <pf-dropdown close-on-select>
                  <template #toggle>
                    <pf-menu-toggle variant="plainText" aria-label="Previous levels">
                      <template #badge><pf-badge read screen-reader-text="additional item">1</pf-badge></template>
                    </pf-menu-toggle>
                  </template>
                  <pf-dropdown-item @click="drillOutTo(1)">
                    <template #icon><angle-left-icon /></template>
                    {{ breadcrumbLabels[breadcrumbPath[0]] }}
                  </pf-dropdown-item>
                </pf-dropdown>
              </pf-breadcrumb-item>
              <pf-breadcrumb-heading component="button">
                {{ breadcrumbLabels[breadcrumbPath[breadcrumbPath.length - 1]] }}
              </pf-breadcrumb-heading>
            </pf-breadcrumb>
          </pf-menu-breadcrumb>
          <pf-divider />
        </template>
        <pf-menu-content :max-menu-height="withMaxMenuHeight ? '100px' : 'auto'">
          <pf-menu-list>
            <pf-menu-item v-for="group in rolloutGroups" :key="group.value" :value="group.value" direction="down">
              {{ group.label }}
              <template #drilldown-menu>
                <pf-drilldown-menu :id="`breadcrumbs-${group.value}`">
                  <pf-menu-item
                    v-for="child in group.children"
                    :key="child.value"
                    :value="`${group.value}:${child.value}`"
                    :description="child.description"
                    :direction="child.children ? 'down' : undefined"
                  >
                    {{ child.label }} ({{ group.label.toLowerCase() }})
                    <template v-if="child.children" #drilldown-menu>
                      <pf-drilldown-menu :id="`breadcrumbs-${group.value}-${child.value}`">
                        <pf-menu-item v-for="leaf in child.children" :key="leaf" :value="leaf">
                          {{ leaf }} ({{ group.label.toLowerCase() }})
                        </pf-menu-item>
                      </pf-drilldown-menu>
                    </template>
                  </pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="edit">Edit</pf-menu-item>
            <pf-menu-item value="delete_deployment">Delete deployment config</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="With drilldown and inline filter">
      <pf-menu id="filter_drilldown-rootMenu" contains-drilldown>
        <pf-menu-content>
          <pf-menu-list>
            <pf-menu-item value="filter_group:start_rollout" direction="down">
              Start rollout
              <template #drilldown-menu>
                <pf-drilldown-menu id="filter_drilldown-drilldownMenuStart">
                  <pf-menu-item value="filter_group:start_rollout_breadcrumb" direction="up"
                    >Start rollout</pf-menu-item
                  >
                  <pf-divider component="li" />
                  <pf-menu-search>
                    <pf-menu-search-input>
                      <pf-search-input v-model="startInput" aria-label="Filter menu items" />
                    </pf-menu-search-input>
                  </pf-menu-search>
                  <pf-divider component="li" />
                  <pf-menu-item
                    v-for="(opt, index) in filteredStartItems"
                    :key="opt.item"
                    :value="index"
                    :description="opt.description"
                  >
                    {{ opt.item }}
                  </pf-menu-item>
                  <pf-menu-item v-if="startInput && !filteredStartItems.length" disabled>No results found</pf-menu-item>
                </pf-drilldown-menu>
              </template>
            </pf-menu-item>
            <pf-menu-item value="item-a">Item B</pf-menu-item>
            <pf-menu-item value="item-b">Item C</pf-menu-item>
            <pf-menu-item value="item-c">Item D</pf-menu-item>
          </pf-menu-list>
        </pf-menu-content>
      </pf-menu>
    </story-canvas>

    <story-canvas title="Menu container">
      <template #intro>
        <pre v-md>
          `pf-menu-container` links a menu to its toggle: it positions the menu, closes it on outside clicks and with the `open-change-keys` (tab and escape by default), and focuses the first or last item with the arrow keys from the toggle.
        </pre>
      </template>
      <pf-menu-container v-model:open="containerOpen" should-focus-first-item-on-open>
        <template #toggle>
          <pf-menu-toggle v-model:expanded="containerOpen">
            {{ containerOpen ? 'Expanded' : 'Collapsed' }}
          </pf-menu-toggle>
        </template>
        <pf-menu @select="containerOpen = false">
          <pf-menu-content>
            <pf-menu-list>
              <pf-menu-item :value="0">Action</pf-menu-item>
              <pf-menu-item :value="1" to="#default-link2" @click.prevent>Link</pf-menu-item>
              <pf-menu-item disabled>Disabled action</pf-menu-item>
            </pf-menu-list>
          </pf-menu-content>
        </pf-menu>
      </pf-menu-container>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import CodeBranchIcon from '@vue-patternfly/icons/code-branch-icon';
import LayerGroupIcon from '@vue-patternfly/icons/layer-group-icon';
import CubeIcon from '@vue-patternfly/icons/cube-icon';
import ClipboardIcon from '@vue-patternfly/icons/clipboard-icon';
import BarsIcon from '@vue-patternfly/icons/bars-icon';
import BellIcon from '@vue-patternfly/icons/bell-icon';
import TableIcon from '@vue-patternfly/icons/table-icon';
import DatabaseIcon from '@vue-patternfly/icons/database-icon';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import { computed, nextTick, reactive, ref, useTemplateRef } from 'vue';
import type { MenuItemId } from '@vue-patternfly/core/components/Menu/Menu.vue';

const basicPlain = ref(false);

const actionsSelected = ref<MenuItemId[]>([]);
function onActionClick(_event: Event, itemId?: MenuItemId, actionId?: unknown) {
  console.log(`clicked on ${String(itemId)} - ${String(actionId)}`);
}

const checkboxSelected = ref<MenuItemId[]>([]);

type Option = {
  value: string;
  favorite: boolean;
  disabled?: boolean;
  description?: string;
};

const options = reactive({
  Status: [
    { value: 'Running', favorite: false, description: 'This is a description.' },
    { value: 'Stopped', favorite: false },
    { value: 'Down', favorite: false, disabled: true },
    { value: 'Degraded', favorite: false },
    { value: 'Needs maintenance', favorite: false },
  ] as Option[],
  'Vendor names': [
    { value: 'Dell', favorite: false },
    { value: 'Samsung', favorite: true },
    { value: 'Hewlett-Packard', favorite: true, description: 'This is a description.' },
  ] as Option[],
});

const filter = ref('');
const filteredItems = computed(() =>
  ['Action 1', 'Action 2', 'Action 3'].filter(
    item => !filter.value || item.toLowerCase().includes(filter.value.toLowerCase()),
  ),
);

const singleSelected = ref<MenuItemId | null>(0);
const multiSelected = ref<MenuItemId[]>([]);

const viewMoreOptions: { value: string; label: string; disabled?: boolean; to?: string }[] = [
  { value: 'view-more-0', label: 'Action' },
  { value: 'view-more-1', label: 'Link', to: '#default-link2' },
  { value: 'view-more-2', label: 'Disabled action', disabled: true },
  { value: 'view-more-3', label: 'Disabled link', disabled: true, to: '#default-link4' },
  { value: 'view-more-4', label: 'Action 2' },
  { value: 'view-more-5', label: 'Action 3' },
  { value: 'view-more-6', label: 'Action 4' },
  { value: 'view-more-7', label: 'Action 5' },
  { value: 'view-more-8', label: 'Final option' },
];
const viewMoreCount = ref(3);
const viewMoreLoading = ref(false);
const viewMoreActive = ref<string>('view-more-0');
const viewMoreMenu = useTemplateRef('viewMoreMenu');

function onViewMoreClick() {
  viewMoreLoading.value = true;
  // simulates a network call
  setTimeout(() => {
    const previous = viewMoreCount.value;
    viewMoreCount.value = Math.min(previous + 3, viewMoreOptions.length);
    viewMoreLoading.value = false;
    const next = viewMoreOptions.slice(previous, viewMoreCount.value).find(o => !o.disabled);
    if (next) {
      viewMoreActive.value = next.value;
      // moves the focus to the first enabled new item
      nextTick(() => {
        const item =
          viewMoreMenu.value?.el?.querySelectorAll<HTMLElement>('li > button, li > a')[viewMoreOptions.indexOf(next)];
        item?.focus();
      });
    }
  }, 2000);
}

const initialDrilledIn = ref(['initial-state-rootMenu', 'initial-state-drilldownMenuStart']);
const initialPath = ref<MenuItemId[]>(['group:start_rollout', 'group:app_grouping']);
const initialActiveMenu = ref<string | undefined>('initial-state-drilldownMenuStartGrouping');

type Group = {
  value: string;
  label: string;
  children: { value: string; label: string; description?: string; children?: string[] }[];
};

const rolloutGroups: Group[] = [
  {
    value: 'start_rollout',
    label: 'Start rollout',
    children: [
      {
        value: 'app_grouping',
        label: 'Application grouping',
        description: 'Groups A-C',
        children: ['Group A', 'Group B', 'Group C'],
      },
      { value: 'count', label: 'Count' },
      { value: 'labels', label: 'Labels', children: ['Label 1', 'Label 2', 'Label 3'] },
      { value: 'annotations', label: 'Annotations' },
    ],
  },
  {
    value: 'pause_rollout',
    label: 'Pause rollouts',
    children: [
      {
        value: 'app_grouping',
        label: 'Application grouping',
        description: 'Groups A-C',
        children: ['Group A', 'Group B', 'Group C'],
      },
      { value: 'count', label: 'Count' },
      { value: 'labels', label: 'Labels', children: ['Label 1', 'Label 2', 'Label 3'] },
      { value: 'annotations', label: 'Annotations' },
    ],
  },
];

const withMaxMenuHeight = ref(false);
const breadcrumbDrilledIn = ref<string[]>([]);
const breadcrumbPath = ref<MenuItemId[]>([]);
const breadcrumbActiveMenu = ref<string | undefined>('breadcrumbs-rootMenu');

const breadcrumbLabels = computed(() => {
  const labels: Record<MenuItemId, string> = {};
  for (const group of rolloutGroups) {
    labels[group.value] = group.label;
    for (const child of group.children) {
      labels[`${group.value}:${child.value}`] = child.label;
    }
  }
  return labels;
});

/** Drills out to the given level of the breadcrumb */
function drillOutTo(level: number) {
  breadcrumbActiveMenu.value = breadcrumbDrilledIn.value[level] ?? 'breadcrumbs-rootMenu';
  breadcrumbDrilledIn.value = breadcrumbDrilledIn.value.slice(0, level);
  breadcrumbPath.value = breadcrumbPath.value.slice(0, level);
}

const startInput = ref('');
const startDrillItems = [
  { item: 'Application grouping', description: 'Description text' },
  { item: 'Labels' },
  { item: 'Annotations' },
  { item: 'Count' },
  { item: 'Count 2' },
  { item: 'Count 3' },
  { item: 'Other' },
];
const filteredStartItems = computed(() =>
  startDrillItems.filter(opt => !startInput.value || opt.item.toLowerCase().includes(startInput.value.toLowerCase())),
);

const containerOpen = ref(false);
</script>
