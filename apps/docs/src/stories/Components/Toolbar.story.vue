<template>
  <doc-page title="Toolbar">
    <template #description>
      A <b>toolbar</b> allows a user to manage and manipulate a data set. Data can be presented in any valid
      presentation, a table, a list, or a data visualization (chart), for example. The toolbar responsively accommodates
      controls and displays applied filters in label groups.
    </template>

    <template #apidocs>
      <component-info name="PfToolbar" />
      <component-info name="PfToolbarContent" />
      <component-info name="PfToolbarGroup" />
      <component-info name="PfToolbarItem" />
      <component-info name="PfToolbarToggleGroup" />
      <component-info name="PfToolbarFilter" />
      <component-info name="PfToolbarExpandIconWrapper" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The expanded state of the toggle group is bound with `v-model:expanded` (`isExpanded`, `toggleIsExpanded`); without it the toolbar manages it.
      - `clearAllFilters` is the `clear-all-filters` event and `customLabelGroupContent` is the `label-group-content` slot.
      - Breakpoint modifiers are separate props per breakpoint: `inset-md`, `visibility-lg`, `visibility-at-height-md`, `gap-xl`, `column-gap-sm`, `row-wrap`, `flex-grow`, `width-md` (`widths`)… The values drop their prefix: `inset="sm"` for `insetSm`, `gap="none"` for `gapNone`, `align="end"` for `alignEnd`.
      - The breakpoint of `pf-toolbar-toggle-group` is a boolean prop (`xl` for `breakpoint="xl"`) and its icon is the `icon` slot (`toggleIcon`).
      - `pf-toolbar-filter` takes the `category` (`categoryName`) and the `labels`, or the `labels` slot; `delete-label` and `delete-label-group` are events (`deleteLabel`, `deleteLabelGroup`), and only a `delete-label-group` listener adds the close button of the label group. `hide-toolbar-item` inverts `showToolbarItem`.
      - Boolean props drop their prefix: `container`, `full-height`, `static`, `sticky`, `sticky-base`, `sticky-stuck`, `vertical`, `no-padding`, `all-expanded`, `overflow-container`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Toolbar items">
      <template #intro>
        <pre v-md>
          A toolbar can contain multiple toolbar items, like filters and buttons.

          Note: This example does not demonstrate responsive toolbar behavior. Responsive toolbars are shown in the examples with toggle groups and filters.
        </pre>
      </template>

      <pf-toolbar id="toolbar-items-example">
        <pf-toolbar-content>
          <pf-toolbar-item>
            <pf-search-input v-model="search.items" aria-label="Items example search input" />
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="secondary">Action</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item variant="separator" />
          <pf-toolbar-item>
            <pf-button variant="primary">Action2</pf-button>
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="With adjusted inset">
      <template #intro>
        <pre v-md>
          To adjust a toolbar’s inset, use the `inset` properties. You can set the inset value at multiple breakpoints with `inset`, `inset-md`, `inset-lg`, `inset-xl` and `inset-2xl`. Inset values include "none", "sm", "md", "lg", "xl" and "2xl".
        </pre>
      </template>

      <pf-toolbar id="toolbar-insets" inset="none" inset-md="sm" inset-xl="2xl" inset-2xl="lg">
        <pf-toolbar-content>
          <pf-toolbar-group variant="action-group">
            <pf-toolbar-item v-for="n in 4" :key="n">
              <pf-button variant="secondary">Action</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-item variant="separator" />
          <pf-toolbar-group variant="action-group">
            <pf-toolbar-item>
              <pf-button variant="secondary">Action</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="primary">Action</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-item variant="separator" />
          <pf-toolbar-group variant="action-group">
            <pf-toolbar-item v-for="n in 2" :key="n">
              <pf-button variant="secondary">Action</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Vertical toolbar">
      <template #intro>
        <pre v-md>
          A toolbar's orientation may be changed using the `vertical` property. Responsive behavior when height is adjusted may be customized for the `pf-toolbar-content`, `pf-toolbar-group`, and `pf-toolbar-item` components using their respective `visibility-at-height` properties.
        </pre>
      </template>

      <pf-toolbar id="toolbar-vertical" vertical>
        <pf-toolbar-content>
          <pf-toolbar-group variant="action-group-plain">
            <pf-toolbar-item>Item 1</pf-toolbar-item>
            <pf-toolbar-item>Item 2</pf-toolbar-item>
            <pf-toolbar-item>Item 3</pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-group
            variant="action-group-plain"
            visibility-at-height="hidden"
            visibility-at-height-md="visible"
          >
            <pf-toolbar-item>Item 4 (visible above md breakpoint)</pf-toolbar-item>
            <pf-toolbar-item visibility-at-height="hidden" visibility-at-height-lg="visible">
              Item 5 (visible above lg breakpoint)
            </pf-toolbar-item>
            <pf-toolbar-item visibility-at-height="hidden" visibility-at-height-lg="visible">
              Item 6 (visible above lg breakpoint)
            </pf-toolbar-item>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Sticky toolbar">
      <template #intro>
        <pre v-md>
          To lock a toolbar and prevent it from scrolling with other content, use a sticky toolbar.

          In the following example, toggle the "Is toolbar sticky" checkbox to see the difference between a sticky and non-sticky toolbar.
        </pre>
      </template>

      <div style="overflow-y: scroll; height: 200px">
        <pf-toolbar id="toolbar-sticky" inset="none" :sticky="sticky.sticky">
          <pf-toolbar-content>
            <pf-toolbar-item>
              <pf-search-input v-model="search.sticky" aria-label="Sticky example search input" />
            </pf-toolbar-item>
            <pf-toolbar-item align-self="center">
              <pf-checkbox id="showOnlyEvenCheckbox" v-model="sticky.evenOnly" label="Show only even number items" />
            </pf-toolbar-item>
          </pf-toolbar-content>
        </pf-toolbar>
        <ul>
          <li v-for="n in numbers(sticky.evenOnly)" :key="n">item {{ n }}</li>
        </ul>
      </div>
      <pf-checkbox id="isStickyCheckbox" v-model="sticky.sticky" label="Is toolbar sticky" />
    </story-canvas>

    <story-canvas title="Dynamic sticky toolbar">
      <template #intro>
        <pre v-md>
          A toolbar may alternatively be made sticky with two properties: `sticky-base` and `sticky-stuck` - which allows separate control of the sticky position and sticky styling respectively. In this example, `sticky-stuck` is only applied when the sticky element is not at the top of the scroll parent container.
        </pre>
      </template>

      <div
        id="dynamic-sticky-scroll-parent"
        style="overflow-y: scroll; height: 200px"
        @scroll="dynamicSticky.stuck = ($event.currentTarget as HTMLElement).scrollTop > 0"
      >
        <pf-toolbar id="toolbar-dynamic-sticky" inset="none" sticky-base :sticky-stuck="dynamicSticky.stuck">
          <pf-toolbar-content>
            <pf-toolbar-item>
              <pf-search-input v-model="search.dynamicSticky" aria-label="Sticky example search input" />
            </pf-toolbar-item>
            <pf-toolbar-item align-self="center">
              <pf-checkbox
                id="showOnlyEvenDynamicCheckbox"
                v-model="dynamicSticky.evenOnly"
                label="Show only even number items"
              />
            </pf-toolbar-item>
          </pf-toolbar-content>
        </pf-toolbar>
        <ul>
          <li v-for="n in numbers(dynamicSticky.evenOnly)" :key="n">item {{ n }}</li>
        </ul>
      </div>
    </story-canvas>

    <story-canvas title="With groups of items">
      <template #intro>
        <pre v-md>
          You can group similar items together to create desired associations and to enable items to respond to changes in viewport width together.

          Note: This example does not demonstrate responsive toolbar behavior. Responsive toolbars are shown in the examples with toggle groups and filters.
        </pre>
      </template>

      <pf-toolbar id="toolbar-group-types">
        <pf-toolbar-content>
          <pf-toolbar-group variant="filter-group">
            <pf-toolbar-item>
              <pf-select v-model:selected="groups.first" :label="groups.first ?? 'First'" close-on-select>
                <pf-select-list>
                  <pf-select-option v-for="option in ['A', 'B', 'C']" :key="option" :value="option">
                    {{ option }}
                  </pf-select-option>
                </pf-select-list>
              </pf-select>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-select v-model:selected="groups.second" :label="groups.second ?? 'Second'" close-on-select>
                <pf-select-list>
                  <pf-select-option v-for="option in ['1', '2', '3']" :key="option" :value="option">
                    {{ option }}
                  </pf-select-option>
                </pf-select-list>
              </pf-select>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-select v-model:selected="groups.third" :label="groups.third ?? 'Third'" close-on-select>
                <pf-select-list>
                  <pf-select-option v-for="option in ['I', 'II', 'III']" :key="option" :value="option">
                    {{ option }}
                  </pf-select-option>
                </pf-select-list>
              </pf-select>
            </pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-group variant="action-group-plain">
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="edit">
                <template #icon><pen-to-square-icon /></template>
              </pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="clone">
                <template #icon><clone-icon /></template>
              </pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="sync">
                <template #icon><rotate-icon /></template>
              </pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-group variant="action-group">
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

    <story-canvas title="Background color variants">
      <template #intro>
        <pre v-md>
          To change the background color of a toolbar, use the `color-variant` property on the `pf-toolbar`.
        </pre>
      </template>

      <template v-for="variant in colorVariants" :key="variant.value">
        {{ variant.title }}
        <pf-toolbar :id="`toolbar-color-variant-${variant.value}`" :color-variant="variant.value">
          <pf-toolbar-content>
            <pf-toolbar-item>
              <pf-search-input :aria-label="`${variant.title} variant example search input`" />
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="secondary">Action</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item variant="separator" />
            <pf-toolbar-item>
              <pf-button variant="primary">Action</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-content>
        </pf-toolbar>
      </template>
    </story-canvas>

    <pre v-md>
      ## Responsive toolbar behavior
      Toolbar width-based responsive modifiers use `@container` CSS queries with the global PatternFly breakpoints. Responsive inset modifiers (via the `inset` properties) are an exception and use viewport media queries.

      By default, the PatternFly CSS establishes the `container-name` property with a value of `pf-v6-contain-toolbar` on `:root`, so the breakpoints behave like viewport breakpoints.

      Alternatively, if another wrapping element creates a container in the CSS with a `container-name` property value of `pf-v6-contain-toolbar` and `container-type` value of `inline-size` or `size`, the breakpoints will apply to that container's width instead.
    </pre>

    <story-canvas title="Toolbar as container">
      <template #intro>
        <pre v-md>
          Add `container` to the toolbar so width-based modifiers respond to the toolbar's width. Resize the dashed box in this example to see items and groups show and hide at the global breakpoints.
        </pre>
      </template>

      <div class="toolbar-container-query-resize">
        <pf-toolbar id="toolbar-container-query-example" container>
          <pf-toolbar-content>
            <pf-toolbar-item visibility-md="hidden">
              <pf-button variant="secondary">Hide on md</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="secondary">Item</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item visibility="hidden" visibility-sm="visible">
              <pf-button variant="secondary">Show on sm</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-group visibility-xl="hidden">
              <pf-toolbar-item v-for="n in 2" :key="n">
                <pf-button variant="secondary">Hide group on xl</pf-button>
              </pf-toolbar-item>
            </pf-toolbar-group>
            <pf-toolbar-group visibility="hidden" visibility-lg="visible">
              <pf-toolbar-item v-for="n in 2" :key="n">
                <pf-button variant="secondary">Show group on lg</pf-button>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </pf-toolbar-content>
        </pf-toolbar>
      </div>
    </story-canvas>

    <pre v-md>
      ## Examples with toggle groups and filters
      The following examples use toggle groups to allow for more responsive and complex toolbars with multiple items and groups of items. To visualize responsive toolbar behavior in the following examples, resize the browser to a smaller screen width.
    </pre>

    <story-canvas title="Component managed toggle groups">
      <template #intro>
        <pre v-md>
          A toggle group allows you to collapse a set of items into an overlay panel at a certain breakpoint. For example, when a toggle group contains filter controls, its contents will collapse into an overlay panel when the toolbar adapts to a change in the viewport size. The contents can be toggled by selecting the filter icon in the overlay panel.
        </pre>
      </template>

      <pf-toolbar id="toolbar-toggle-groups" class="pf-m-toggle-group-container">
        <pf-toolbar-content>
          <pf-toolbar-toggle-group xl>
            <template #icon><filter-icon /></template>
            <pf-toolbar-item>
              <pf-search-input v-model="search.managed" aria-label="search input example" />
            </pf-toolbar-item>
            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-item>
                <pf-select v-model:selected="managed.status" :label="managed.status ?? 'Status'" close-on-select>
                  <pf-select-list>
                    <pf-select-option v-for="option in statusOptions" :key="option" :value="option">
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-item>
              <pf-toolbar-item>
                <pf-select v-model:selected="managed.risk" :label="managed.risk ?? 'Risk'" close-on-select>
                  <pf-select-list>
                    <pf-select-option v-for="option in riskOptions" :key="option" :value="option">
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </pf-toolbar-toggle-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Consumer managed toggle groups">
      <template #intro>
        <pre v-md>
          To manually control the expanded state of the toggle group for smaller screen widths, bind `v-model:expanded` on the toolbar.

          Note: The toggle group is aware of the consumer provided breakpoint, the expandable content is not. If the expandable content is expanded and the screen width surpasses that of the breakpoint, the expandable content is not aware of that and will remain open. Be sure to consider and handle this in your implementation.
        </pre>
      </template>

      <pf-toolbar
        id="toolbar-consumer-toggle-groups"
        v-model:expanded="consumerExpanded"
        class="pf-m-toggle-group-container"
      >
        <pf-toolbar-content>
          <pf-toolbar-toggle-group xl>
            <template #icon><filter-icon /></template>
            <pf-toolbar-item>
              <pf-search-input v-model="search.consumer" aria-label="search input example" />
            </pf-toolbar-item>
            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-item>
                <pf-select v-model:selected="consumer.status" :label="consumer.status ?? 'Status'" close-on-select>
                  <pf-select-list>
                    <pf-select-option v-for="option in statusOptions" :key="option" :value="option">
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-item>
              <pf-toolbar-item>
                <pf-select v-model:selected="consumer.risk" :label="consumer.risk ?? 'Risk'" close-on-select>
                  <pf-select-list>
                    <pf-select-option v-for="option in riskOptions" :key="option" :value="option">
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </pf-toolbar-toggle-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="With filters">
      <template #intro>
        <pre v-md>
          You can add filters to a toolbar to let users filter the content that a toolbar manages. When a toolbar is filtered, it will expand in height to make space for a row of filter labels and a "Clear all filters" button. Upon clearing the applied filters, the toolbar will return to its default height.

          The `pf-toolbar-filter` component expects the applied filters in `labels` and a `delete-label` listener. Listen to `delete-label-group` to close the entire label group. Once closed, the rendering of labels will be handled responsively by the toolbar.
        </pre>
      </template>

      <pf-toolbar
        id="toolbar-with-filter"
        class="pf-m-toggle-group-container"
        collapse-listed-filters-breakpoint="xl"
        @clear-all-filters="clearFilters(filters)"
      >
        <pf-toolbar-content>
          <pf-toolbar-toggle-group xl>
            <template #icon><filter-icon /></template>
            <pf-toolbar-item>
              <pf-search-input v-model="search.filters" aria-label="search input example" />
            </pf-toolbar-item>
            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-filter
                category="Status"
                :labels="filters.status"
                @delete-label="(_category, label) => removeFilter(filters, 'status', label)"
                @delete-label-group="filters.status = []"
              >
                <pf-select v-model:selected="filters.status" role="menu" label="Status">
                  <pf-select-list>
                    <pf-select-option v-for="option in statusOptions" :key="option" :value="option" check>
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-filter>
              <pf-toolbar-filter
                category="Risk"
                :labels="filters.risk"
                @delete-label="(_category, label) => removeFilter(filters, 'risk', label)"
              >
                <pf-select v-model:selected="filters.risk" role="menu" label="Risk">
                  <pf-select-list>
                    <pf-select-option v-for="option in riskOptions" :key="option" :value="option" check>
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-filter>
            </pf-toolbar-group>
          </pf-toolbar-toggle-group>
          <pf-toolbar-group variant="action-group-plain">
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="edit">
                <template #icon><pen-to-square-icon /></template>
              </pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="clone">
                <template #icon><clone-icon /></template>
              </pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="plain" aria-label="sync">
                <template #icon><rotate-icon /></template>
              </pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="With custom label group content">
      <template #intro>
        <pre v-md>
          To customize the label groups generated by toolbar filters, use the `label-group-content` slot of the `pf-toolbar`. This slot will remove the default "Clear all filters" button.
        </pre>
      </template>

      <pf-toolbar
        id="toolbar-with-custom-label-group"
        class="pf-m-toggle-group-container"
        collapse-listed-filters-breakpoint="xl"
      >
        <template #label-group-content>
          <pf-toolbar-item>
            <pf-button variant="link" inline>Save filters</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="link" inline @click="clearFilters(customFilters)">Clear all filters</pf-button>
          </pf-toolbar-item>
        </template>

        <pf-toolbar-content>
          <pf-toolbar-toggle-group xl>
            <template #icon><filter-icon /></template>
            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-filter
                category="Status"
                :labels="customFilters.status"
                @delete-label="(_category, label) => removeFilter(customFilters, 'status', label)"
                @delete-label-group="customFilters.status = []"
              >
                <pf-select v-model:selected="customFilters.status" role="menu" label="Status">
                  <pf-select-list>
                    <pf-select-option v-for="option in statusOptions" :key="option" :value="option" check>
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-filter>
              <pf-toolbar-filter
                category="Risk"
                :labels="customFilters.risk"
                @delete-label="(_category, label) => removeFilter(customFilters, 'risk', label)"
              >
                <pf-select v-model:selected="customFilters.risk" role="menu" label="Risk">
                  <pf-select-list>
                    <pf-select-option v-for="option in riskOptions" :key="option" :value="option" check>
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-filter>
            </pf-toolbar-group>
          </pf-toolbar-toggle-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Stacked example">
      <template #intro>
        <pre v-md>
          When all of a toolbar's required elements cannot fit in a single line, you can split toolbar items into multiple rows.
        </pre>
      </template>

      <pf-toolbar id="toolbar-group-types-stacked">
        <pf-toolbar-content>
          <pf-toolbar-toggle-group lg>
            <template #icon><filter-icon /></template>
            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-item id="stacked-example-resource-select" variant="label">Resource</pf-toolbar-item>
              <pf-toolbar-item>
                <pf-select v-model:selected="stacked.resource" :label="stacked.resource ?? 'Resource'" close-on-select>
                  <pf-select-list>
                    <pf-select-option v-for="option in ['Pod', 'Deployment', 'Pod Set']" :key="option" :value="option">
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-item>
            </pf-toolbar-group>
            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-item id="stacked-example-status-select" variant="label">Status</pf-toolbar-item>
              <pf-toolbar-item>
                <pf-select v-model:selected="stacked.status" :label="stacked.status ?? 'Status'" close-on-select>
                  <pf-select-list>
                    <pf-select-option
                      v-for="option in ['Running', 'Ready', 'Updating', 'Terminating']"
                      :key="option"
                      :value="option"
                    >
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-item>
            </pf-toolbar-group>
            <pf-toolbar-group variant="filter-group">
              <pf-toolbar-item id="stacked-example-type-select" variant="label">Type</pf-toolbar-item>
              <pf-toolbar-item>
                <pf-select v-model:selected="stacked.type" :label="stacked.type ?? 'Type'" close-on-select>
                  <pf-select-list>
                    <pf-select-option v-for="option in ['Any', 'No type']" :key="option" :value="option">
                      {{ option }}
                    </pf-select-option>
                  </pf-select-list>
                </pf-select>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </pf-toolbar-toggle-group>
          <pf-toolbar-item>
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
                <pf-dropdown v-model:open="stacked.kebabOpen" close-on-select>
                  <template #toggle>
                    <pf-menu-toggle variant="plain" aria-label="Stacked example overflow menu" />
                  </template>
                  <pf-dropdown-item value="link">Link</pf-dropdown-item>
                  <pf-dropdown-item value="action">Action</pf-dropdown-item>
                  <pf-dropdown-item value="disabled-link" disabled>Disabled Link</pf-dropdown-item>
                </pf-dropdown>
              </pf-overflow-menu-control>
            </pf-overflow-menu>
          </pf-toolbar-item>
        </pf-toolbar-content>
        <pf-divider />
        <pf-toolbar-content>
          <pf-toolbar-item>
            <pf-dropdown v-model:open="stacked.bulkOpen" close-on-select>
              <template #toggle>
                <pf-menu-toggle>
                  <template #split-buttons>
                    <pf-menu-toggle-checkbox id="stacked-example-ex-check" aria-label="Select all" />
                  </template>
                </pf-menu-toggle>
              </template>
              <pf-dropdown-item value="none">Select none (0 items)</pf-dropdown-item>
              <pf-dropdown-item value="page">Select page (10 items)</pf-dropdown-item>
              <pf-dropdown-item value="all">Select all (100 items)</pf-dropdown-item>
            </pf-dropdown>
          </pf-toolbar-item>
          <pf-toolbar-item variant="pagination">
            <pf-pagination v-model:page="stacked.page" v-model:per-page="stacked.perPage" :count="37" compact />
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <pre v-md>
      ## Examples with spacers and wrapping
      You may adjust the space between toolbar items to arrange them into groups. Items are spaced "16px" apart by default and can be modified by changing their or their parents' `gap`, `column-gap`, and `row-gap` properties. You can set the property values at multiple breakpoints, like `gap-md`, `gap-lg`, `gap-xl` and `gap-2xl`.
    </pre>

    <story-canvas title="Toolbar content wrapping">
      <template #intro>
        <pre v-md>
          The toolbar content section will wrap by default, but you can set the `row-wrap` property to "nowrap" to make it not wrap.
        </pre>
      </template>

      <pf-toolbar id="toolbar-content-wrap">
        <pf-toolbar-content row-wrap="nowrap">
          <pf-toolbar-item>
            <pf-search-input v-model="search.wrap" aria-label="Items example search input" />
          </pf-toolbar-item>
          <pf-toolbar-item v-for="n in 4" :key="n">
            <pf-button variant="secondary">Action</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item variant="separator" />
          <pf-toolbar-item>
            <pf-button variant="primary">Action</pf-button>
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Toolbar group spacers">
      Using gap
      <pf-toolbar id="toolbar-group-gap">
        <pf-toolbar-content>
          <template v-for="(gap, i) in groupGaps" :key="gap.title">
            <pf-toolbar-item v-if="i > 0" variant="separator" />
            <pf-toolbar-group :gap="gap.value">
              <pf-toolbar-item v-for="n in 2" :key="n">
                <pf-button variant="secondary">{{ gap.title }}</pf-button>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </template>
        </pf-toolbar-content>
      </pf-toolbar>
      Using column gap
      <pf-toolbar id="toolbar-group-column-gap">
        <pf-toolbar-content>
          <template v-for="(gap, i) in otherGaps" :key="gap.title">
            <pf-toolbar-item v-if="i > 0" variant="separator" />
            <pf-toolbar-group :column-gap="gap.value">
              <pf-toolbar-item v-for="n in 2" :key="n">
                <pf-button variant="secondary">{{ gap.title }} Column Gap</pf-button>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </template>
        </pf-toolbar-content>
      </pf-toolbar>
      Using row gap
      <pf-toolbar id="toolbar-group-row-gap">
        <pf-toolbar-content>
          <template v-for="(gap, i) in otherGaps" :key="gap.title">
            <pf-toolbar-item v-if="i > 0" variant="separator" />
            <pf-toolbar-group :row-gap="gap.value" row-wrap="wrap">
              <pf-toolbar-item v-for="n in 5" :key="n">
                <pf-button variant="secondary">{{ gap.title }} Row Gap</pf-button>
              </pf-toolbar-item>
            </pf-toolbar-group>
          </template>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="Toolbar item spacers">
      Using gap
      <pf-toolbar id="toolbar-item-gap">
        <pf-toolbar-content>
          <pf-toolbar-group row-wrap="wrap">
            <template v-for="(gap, i) in otherGaps" :key="gap.title">
              <pf-toolbar-item v-if="i > 0" variant="separator" />
              <pf-toolbar-item :gap="gap.value">
                <pf-button v-for="n in 2" :key="n" variant="secondary">{{ gap.title }} Gap</pf-button>
              </pf-toolbar-item>
            </template>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
      Using column gap
      <pf-toolbar id="toolbar-item-column-gap">
        <pf-toolbar-content>
          <pf-toolbar-group row-wrap="wrap">
            <template v-for="(gap, i) in otherGaps" :key="gap.title">
              <pf-toolbar-item v-if="i > 0" variant="separator" />
              <pf-toolbar-item :column-gap="gap.value">
                <pf-button v-for="n in 2" :key="n" variant="secondary">{{ gap.title }} Column Gap</pf-button>
              </pf-toolbar-item>
            </template>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
      Using row gap
      <pf-toolbar id="toolbar-item-row-gap">
        <pf-toolbar-content>
          <pf-toolbar-group>
            <template v-for="(gap, i) in otherGaps" :key="gap.title">
              <pf-toolbar-item v-if="i > 0" variant="separator" />
              <pf-toolbar-item :row-gap="gap.value" row-wrap="wrap">
                <pf-button v-for="n in 2" :key="n" variant="secondary">{{ gap.title }} Row Gap</pf-button>
              </pf-toolbar-item>
            </template>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>

    <story-canvas title="FlexGrow and widths">
      <template #intro>
        <pre v-md>
          You can use the `flex-grow` prop to make toolbar items or groups expand to fill available space. The `width` props allow you to set custom widths at various breakpoints.
        </pre>
      </template>

      Using flex-grow on pf-toolbar-item
      <pf-toolbar id="toolbar-flex-grow-item">
        <pf-toolbar-content>
          <pf-toolbar-item>
            <pf-button variant="secondary">Item 1</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item flex-grow>
            <pf-search-input aria-label="Flex grow search input" />
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="secondary">Item 2</pf-button>
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
      Using flex-grow on pf-toolbar-group
      <pf-toolbar id="toolbar-flex-grow-group">
        <pf-toolbar-content>
          <pf-toolbar-group>
            <pf-toolbar-item>
              <pf-button variant="secondary">Item 1</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="secondary">Item 2</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-group flex-grow>
            <pf-toolbar-item>
              <pf-button variant="secondary">Flex grow group item 1</pf-button>
            </pf-toolbar-item>
            <pf-toolbar-item>
              <pf-button variant="secondary">Flex grow group item 2</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
          <pf-toolbar-group>
            <pf-toolbar-item>
              <pf-button variant="secondary">Item 3</pf-button>
            </pf-toolbar-item>
          </pf-toolbar-group>
        </pf-toolbar-content>
      </pf-toolbar>
      Using widths on pf-toolbar-item
      <pf-toolbar id="toolbar-widths">
        <pf-toolbar-content>
          <pf-toolbar-item width="200px">
            <pf-search-input aria-label="Search input with fixed width" />
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="secondary">Regular item</pf-button>
          </pf-toolbar-item>
          <pf-toolbar-item width="300px">
            <pf-search-input aria-label="Search input with wider fixed width" />
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
      Using responsive widths on pf-toolbar-item
      <pf-toolbar id="toolbar-responsive-widths">
        <pf-toolbar-content>
          <pf-toolbar-item width="100px" width-md="200px" width-xl="300px">
            <pf-search-input aria-label="Search input with responsive width" />
          </pf-toolbar-item>
          <pf-toolbar-item>
            <pf-button variant="secondary">Regular item</pf-button>
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import FilterIcon from '@vue-patternfly/icons/filter-icon';
import CloneIcon from '@vue-patternfly/icons/clone-icon';
import PenToSquareIcon from '@vue-patternfly/icons/pen-to-square-icon';
import RotateIcon from '@vue-patternfly/icons/rotate-icon';
import { reactive, ref } from 'vue';

const search = reactive({
  items: '',
  sticky: '',
  dynamicSticky: '',
  managed: '',
  consumer: '',
  filters: '',
  wrap: '',
});

const sticky = reactive({ sticky: true, evenOnly: true });
const dynamicSticky = reactive({ stuck: false, evenOnly: true });

function numbers(evenOnly: boolean) {
  const all = Array.from(Array(30), (_, x) => x);
  return evenOnly ? all.filter(n => n % 2 === 0) : all;
}

const groups = reactive<{ first: string | null; second: string | null; third: string | null }>({
  first: null,
  second: null,
  third: null,
});

const colorVariants = [
  { value: 'no-background', title: 'No background' },
  { value: 'primary', title: 'Primary background' },
  { value: 'secondary', title: 'Secondary background' },
] as const;

const statusOptions = ['New', 'Pending', 'Running', 'Cancelled'];
const riskOptions = ['Low', 'Medium', 'High'];

const managed = reactive<{ status: string | null; risk: string | null }>({ status: null, risk: null });
const consumer = reactive<{ status: string | null; risk: string | null }>({ status: null, risk: null });
const consumerExpanded = ref(false);

type Filters = { status: string[]; risk: string[] };

const filters = reactive<Filters>({ status: ['New', 'Pending'], risk: ['Low'] });
const customFilters = reactive<Filters>({ status: ['New', 'Pending'], risk: ['Low'] });

function removeFilter(state: Filters, category: keyof Filters, label: string) {
  state[category] = state[category].filter(value => value !== label);
}

function clearFilters(state: Filters) {
  state.status = [];
  state.risk = [];
}

const stacked = reactive<{
  resource: string | null;
  status: string | null;
  type: string | null;
  kebabOpen: boolean;
  bulkOpen: boolean;
  page: number;
  perPage: number;
}>({
  resource: 'Pod',
  status: 'Running',
  type: 'Any',
  kebabOpen: false,
  bulkOpen: false,
  page: 1,
  perPage: 10,
});

const groupGaps = [
  { value: undefined, title: 'Default Gap' },
  { value: 'none', title: 'No Gap' },
  { value: 'sm', title: 'Small Gap' },
  { value: 'xl', title: 'Extra Large Gap' },
] as const;

const otherGaps = [
  { value: 'none', title: 'No' },
  { value: 'sm', title: 'Small' },
  { value: 'xl', title: 'Extra Large' },
] as const;
</script>

<style>
.toolbar-container-query-resize {
  width: 100%;
  min-width: 300px;
  padding: var(--pf-t--global--spacer--sm);
  overflow: auto;
  resize: horizontal;
  border: var(--pf-t--global--border--width--extra-strong) dashed var(--pf-t--global--border--color--default);
}
</style>
