<template>
  <doc-page title="Dual list selector">
    <template #description
      >A <b>dual list selector</b> displays two interactive lists: a list of selected items and a list of available,
      selectable items. Users can move items between the lists.</template
    >

    <template #apidocs>
      <component-info name="PfDualListSelector" />
      <component-info name="PfDualListSelectorPane" />
      <component-info name="PfDualListSelectorList" />
      <component-info name="PfDualListSelectorListItem" />
      <component-info name="PfDualListSelectorControlsWrapper" />
      <component-info name="PfDualListSelectorControl" />
      <component-info name="PfDualListSelectorTree" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - `tree` and `animations` replace `isTree` and `hasAnimations` on `pf-dual-list-selector`; there is no animations provider, so `animations` is off unless set.
      - The selection of `pf-dual-list-selector-list-item` is bound with `v-model:selected` (`isSelected`), toggled when the option is clicked or activated with Enter or Space; the `option-select` event (`onOptionSelect`) is still emitted. `draggable` replaces `isDraggable`; the unused `draggableButtonAriaLabel` is dropped.
      - The `searchInput` and `actions` props of `pf-dual-list-selector-pane` are replaced by the `#search-input` and `#actions` slots, `title` and `status` can also be set with slots, `chosen` replaces `isChosen` and the unused `onSearch` is dropped.
      - `disabled` on `pf-dual-list-selector-pane` marks its list with `aria-disabled` and disables its options and tree unless they set their own `disabled`; upstream only passes it to a default search input that is never rendered.
      - `disabled` on `pf-dual-list-selector-control` defaults to `false`, instead of `isDisabled` defaulting to `true`. The `icon` prop is replaced by the `#icon` slot, `tooltipContent` by `tooltip` (or the `#tooltip` slot) and `tooltipProps` by `tooltip-attrs`.
      - The options of `pf-dual-list-selector-tree` are named like those of `pf-tree-view`: `checked` (`null` when indeterminate), `badge`, `check-attrs`, `badge-attrs` and `disabled` replace `isChecked`, `hasBadge`, `checkProps`, `badgeProps` and `isDisabled`. `badges` replaces `hasBadges`, and the `option-check` event replaces `onOptionCheck`, with the same arguments.
      - With the arrow keys, the focus moves to the first or last option when it is on the list itself, instead of skipping the first one.
      - The draggable examples use [@vue-patternfly/drag-drop](#/stories/components/drag-and-drop) with its `dual-list-selector` variant.

      See [common differences from patternfly-react](#/).

      ## Examples

      The dual list selector is built in a composable manner to make customization easier. The standard sub-component relationships are arranged as follows:

      ```html
      &lt;pf-dual-list-selector&gt;
        &lt;pf-dual-list-selector-pane&gt;
          &lt;pf-dual-list-selector-list&gt;
            &lt;pf-dual-list-selector-list-item /&gt;
          &lt;/pf-dual-list-selector-list&gt;
        &lt;/pf-dual-list-selector-pane&gt;

        &lt;pf-dual-list-selector-controls-wrapper&gt;
          &lt;pf-dual-list-selector-control /&gt; &lt;!-- A standard dual list selector has 4 controls --&gt;
        &lt;/pf-dual-list-selector-controls-wrapper&gt;

        &lt;pf-dual-list-selector-pane chosen&gt;
          &lt;pf-dual-list-selector-list&gt;
            &lt;pf-dual-list-selector-list-item /&gt;
          &lt;/pf-dual-list-selector-list&gt;
        &lt;/pf-dual-list-selector-pane&gt;
      &lt;/pf-dual-list-selector&gt;
      ```
    </pre>

    <story-canvas title="Basic">
      <pf-dual-list-selector>
        <pf-dual-list-selector-pane title="Available options" :status="status(basic.available)">
          <pf-dual-list-selector-list>
            <template v-for="(option, index) in basic.available" :key="option.text">
              <pf-dual-list-selector-list-item
                v-if="option.visible"
                :id="`basic-available-option-${index}`"
                v-model:selected="option.selected"
              >
                {{ option.text }}
              </pf-dual-list-selector-list-item>
            </template>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
        <pf-dual-list-selector-controls-wrapper>
          <pf-dual-list-selector-control
            :disabled="!basic.available.some(option => option.selected)"
            aria-label="Add selected"
            @click="basic.moveSelected(true)"
          >
            <template #icon><angle-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="basic.available.length === 0"
            aria-label="Add all"
            @click="basic.moveAll(true)"
          >
            <template #icon><angles-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="basic.chosen.length === 0"
            aria-label="Remove all"
            @click="basic.moveAll(false)"
          >
            <template #icon><angles-left-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="!basic.chosen.some(option => option.selected)"
            aria-label="Remove selected"
            @click="basic.moveSelected(false)"
          >
            <template #icon><angle-left-icon /></template>
          </pf-dual-list-selector-control>
        </pf-dual-list-selector-controls-wrapper>
        <pf-dual-list-selector-pane title="Chosen options" :status="status(basic.chosen)" chosen>
          <pf-dual-list-selector-list>
            <template v-for="(option, index) in basic.chosen" :key="option.text">
              <pf-dual-list-selector-list-item
                v-if="option.visible"
                :id="`composable-basic-chosen-option-${index}`"
                v-model:selected="option.selected"
              >
                {{ option.text }}
              </pf-dual-list-selector-list-item>
            </template>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
      </pf-dual-list-selector>
    </story-canvas>

    <story-canvas title="Basic with tooltips">
      <pf-dual-list-selector>
        <pf-dual-list-selector-pane title="Available options" :status="status(tooltips.available)">
          <pf-dual-list-selector-list>
            <template v-for="(option, index) in tooltips.available" :key="option.text">
              <pf-dual-list-selector-list-item
                v-if="option.visible"
                :id="`tooltips-available-option-${index}`"
                v-model:selected="option.selected"
              >
                {{ option.text }}
              </pf-dual-list-selector-list-item>
            </template>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
        <pf-dual-list-selector-controls-wrapper>
          <pf-dual-list-selector-control
            :disabled="!tooltips.available.some(option => option.selected)"
            aria-label="Add selected"
            tooltip="Add selected"
            :tooltip-attrs="{ position: 'top', ariaLive: 'off' }"
            @click="tooltips.moveSelected(true)"
          >
            <template #icon><angle-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="tooltips.available.length === 0"
            aria-label="Add all"
            tooltip="Add all"
            :tooltip-attrs="{ position: 'right', ariaLive: 'off' }"
            @click="tooltips.moveAll(true)"
          >
            <template #icon><angles-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="tooltips.chosen.length === 0"
            aria-label="Remove all"
            tooltip="Remove all"
            :tooltip-attrs="{ position: 'left', ariaLive: 'off' }"
            @click="tooltips.moveAll(false)"
          >
            <template #icon><angles-left-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="!tooltips.chosen.some(option => option.selected)"
            aria-label="Remove selected"
            tooltip="Remove selected"
            :tooltip-attrs="{ position: 'bottom', ariaLive: 'off' }"
            @click="tooltips.moveSelected(false)"
          >
            <template #icon><angle-left-icon /></template>
          </pf-dual-list-selector-control>
        </pf-dual-list-selector-controls-wrapper>
        <pf-dual-list-selector-pane title="Chosen options" :status="status(tooltips.chosen)" chosen>
          <pf-dual-list-selector-list>
            <template v-for="(option, index) in tooltips.chosen" :key="option.text">
              <pf-dual-list-selector-list-item
                v-if="option.visible"
                :id="`composable-tooltips-chosen-option-${index}`"
                v-model:selected="option.selected"
              >
                {{ option.text }}
              </pf-dual-list-selector-list-item>
            </template>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
      </pf-dual-list-selector>
    </story-canvas>

    <story-canvas title="Basic with search">
      <pf-dual-list-selector>
        <pf-dual-list-selector-pane
          title="Available options"
          :status="status(search.available)"
          list-min-height="300px"
        >
          <template #search-input>
            <pf-search-input
              v-model="search.availableFilter"
              aria-label="Search available options"
              @update:model-value="search.filter(true)"
            />
          </template>
          <pf-empty-state
            v-if="search.availableFilter !== '' && !search.available.some(option => option.visible)"
            variant="sm"
            title="No results found"
            heading-level="h4"
          >
            <template #icon><magnifying-glass-icon /></template>
            <pf-empty-state-body
              >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body
            >
            <pf-empty-state-footer>
              <pf-empty-state-actions>
                <pf-button variant="link" @click="search.clearFilter(true)">Clear all filters</pf-button>
              </pf-empty-state-actions>
            </pf-empty-state-footer>
          </pf-empty-state>
          <pf-dual-list-selector-list>
            <template v-for="(option, index) in search.available" :key="option.text">
              <pf-dual-list-selector-list-item
                v-if="option.visible"
                :id="`search-available-option-${index}`"
                v-model:selected="option.selected"
              >
                {{ option.text }}
              </pf-dual-list-selector-list-item>
            </template>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
        <pf-dual-list-selector-controls-wrapper>
          <pf-dual-list-selector-control
            :disabled="!search.available.some(option => option.selected)"
            aria-label="Add selected"
            @click="search.moveSelected(true)"
          >
            <template #icon><angle-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="search.available.length === 0"
            aria-label="Add all"
            @click="search.moveAll(true)"
          >
            <template #icon><angles-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="search.chosen.length === 0"
            aria-label="Remove all"
            @click="search.moveAll(false)"
          >
            <template #icon><angles-left-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="!search.chosen.some(option => option.selected)"
            aria-label="Remove selected"
            @click="search.moveSelected(false)"
          >
            <template #icon><angle-left-icon /></template>
          </pf-dual-list-selector-control>
        </pf-dual-list-selector-controls-wrapper>
        <pf-dual-list-selector-pane
          title="Chosen options"
          :status="status(search.chosen)"
          list-min-height="300px"
          chosen
        >
          <template #search-input>
            <pf-search-input
              v-model="search.chosenFilter"
              aria-label="Search chosen options"
              @update:model-value="search.filter(false)"
            />
          </template>
          <pf-empty-state
            v-if="search.chosenFilter !== '' && !search.chosen.some(option => option.visible)"
            variant="sm"
            title="No results found"
            heading-level="h4"
          >
            <template #icon><magnifying-glass-icon /></template>
            <pf-empty-state-body
              >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body
            >
            <pf-empty-state-footer>
              <pf-empty-state-actions>
                <pf-button variant="link" @click="search.clearFilter(false)">Clear all filters</pf-button>
              </pf-empty-state-actions>
            </pf-empty-state-footer>
          </pf-empty-state>
          <pf-dual-list-selector-list v-if="search.chosen.some(option => option.visible)">
            <template v-for="(option, index) in search.chosen" :key="option.text">
              <pf-dual-list-selector-list-item
                v-if="option.visible"
                :id="`composable-search-chosen-option-${index}`"
                v-model:selected="option.selected"
              >
                {{ option.text }}
              </pf-dual-list-selector-list-item>
            </template>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
      </pf-dual-list-selector>
    </story-canvas>

    <story-canvas title="Using more complex options with actions">
      <pf-dual-list-selector>
        <pf-dual-list-selector-pane
          title="Available options"
          :status="status(complex.available)"
          list-min-height="300px"
          :disabled="complexDisabled"
        >
          <template #search-input>
            <pf-search-input
              v-model="complex.availableFilter"
              :disabled="complexDisabled"
              aria-label="Search available options"
              @update:model-value="complex.filter(true)"
            />
          </template>
          <template #actions>
            <pf-button
              variant="plain"
              aria-label="Sort Available"
              :disabled="complexDisabled"
              @click="complex.sort(true)"
            >
              <template #icon><arrow-down-short-wide-icon /></template>
            </pf-button>
            <pf-dropdown close-on-select>
              <template #toggle>
                <pf-menu-toggle
                  id="complex-available-toggle"
                  variant="plain"
                  :disabled="complexDisabled"
                  aria-label="Complex actions example available kebab toggle"
                >
                  <template #icon><ellipsis-vertical-icon /></template>
                </pf-menu-toggle>
              </template>
              <pf-dropdown-item component="button">Available Action</pf-dropdown-item>
              <pf-dropdown-item to="#" @click.prevent>Available Link</pf-dropdown-item>
            </pf-dropdown>
          </template>
          <pf-empty-state
            v-if="complex.availableFilter !== '' && !complex.available.some(option => option.visible)"
            variant="sm"
            title="No results found"
            heading-level="h4"
          >
            <template #icon><magnifying-glass-icon /></template>
            <pf-empty-state-body
              >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body
            >
            <pf-empty-state-footer>
              <pf-empty-state-actions>
                <pf-button variant="link" @click="complex.clearFilter(true)">Clear all filters</pf-button>
              </pf-empty-state-actions>
            </pf-empty-state-footer>
          </pf-empty-state>
          <pf-dual-list-selector-list>
            <template v-for="(option, index) in complex.available" :key="option.text">
              <pf-dual-list-selector-list-item
                v-if="option.visible"
                :id="`complex-available-option-${index}`"
                v-model:selected="option.selected"
              >
                {{ option.text }}
              </pf-dual-list-selector-list-item>
            </template>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
        <pf-dual-list-selector-controls-wrapper>
          <pf-dual-list-selector-control
            :disabled="!complex.available.some(option => option.selected) || complexDisabled"
            aria-label="Add selected"
            @click="complex.moveSelected(true)"
          >
            <template #icon><angle-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="complex.available.length === 0 || complexDisabled"
            aria-label="Add all"
            @click="complex.moveAll(true)"
          >
            <template #icon><angles-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="complex.chosen.length === 0 || complexDisabled"
            aria-label="Remove all"
            @click="complex.moveAll(false)"
          >
            <template #icon><angles-left-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="!complex.chosen.some(option => option.selected) || complexDisabled"
            aria-label="Remove selected"
            @click="complex.moveSelected(false)"
          >
            <template #icon><angle-left-icon /></template>
          </pf-dual-list-selector-control>
        </pf-dual-list-selector-controls-wrapper>
        <pf-dual-list-selector-pane
          title="Chosen options"
          :status="status(complex.chosen)"
          list-min-height="300px"
          :disabled="complexDisabled"
          chosen
        >
          <template #search-input>
            <pf-search-input
              v-model="complex.chosenFilter"
              :disabled="complexDisabled"
              aria-label="Search chosen options"
              @update:model-value="complex.filter(false)"
            />
          </template>
          <template #actions>
            <pf-button
              variant="plain"
              aria-label="Sort Chosen"
              :disabled="complexDisabled"
              @click="complex.sort(false)"
            >
              <template #icon><arrow-down-short-wide-icon /></template>
            </pf-button>
            <pf-dropdown close-on-select>
              <template #toggle>
                <pf-menu-toggle
                  id="complex-chosen-toggle"
                  variant="plain"
                  :disabled="complexDisabled"
                  aria-label="Complex actions example chosen kebab toggle"
                >
                  <template #icon><ellipsis-vertical-icon /></template>
                </pf-menu-toggle>
              </template>
              <pf-dropdown-item component="button">Chosen Action</pf-dropdown-item>
              <pf-dropdown-item to="#" @click.prevent>Chosen Link</pf-dropdown-item>
            </pf-dropdown>
          </template>
          <pf-empty-state
            v-if="complex.chosenFilter !== '' && !complex.chosen.some(option => option.visible)"
            variant="sm"
            title="No results found"
            heading-level="h4"
          >
            <template #icon><magnifying-glass-icon /></template>
            <pf-empty-state-body
              >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body
            >
            <pf-empty-state-footer>
              <pf-empty-state-actions>
                <pf-button variant="link" @click="complex.clearFilter(false)">Clear all filters</pf-button>
              </pf-empty-state-actions>
            </pf-empty-state-footer>
          </pf-empty-state>
          <pf-dual-list-selector-list v-if="complex.chosen.some(option => option.visible)">
            <template v-for="(option, index) in complex.chosen" :key="option.text">
              <pf-dual-list-selector-list-item
                v-if="option.visible"
                :id="`composable-complex-chosen-option-${index}`"
                v-model:selected="option.selected"
              >
                {{ option.text }}
              </pf-dual-list-selector-list-item>
            </template>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
      </pf-dual-list-selector>
      <pf-checkbox id="isDisabled" v-model="complexDisabled" label="disabled" aria-label="disabled" />
    </story-canvas>

    <story-canvas title="With tree">
      <pf-dual-list-selector animations tree>
        <pf-dual-list-selector-pane title="Available" :status="tree.status(false)" list-min-height="300px">
          <template #search-input>
            <pf-search-input v-model="tree.filters.available" aria-label="Search available items" />
          </template>
          <pf-empty-state
            v-if="tree.filters.available !== '' && tree.options(false).length === 0"
            variant="sm"
            title="No results found"
            heading-level="h4"
          >
            <template #icon><magnifying-glass-icon /></template>
            <pf-empty-state-body
              >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body
            >
            <pf-empty-state-footer>
              <pf-empty-state-actions>
                <pf-button variant="link" @click="tree.filters.available = ''">Clear all filters</pf-button>
              </pf-empty-state-actions>
            </pf-empty-state-footer>
          </pf-empty-state>
          <pf-dual-list-selector-list v-if="tree.options(false).length > 0">
            <pf-dual-list-selector-tree
              :data="tree.options(false)"
              @option-check="(_event, checked, itemData) => tree.onOptionCheck(checked, itemData, false)"
            />
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
        <pf-dual-list-selector-controls-wrapper>
          <pf-dual-list-selector-control
            :disabled="!tree.checkedLeafIds.some(id => tree.visibleLeafIds(false).includes(id))"
            aria-label="Add selected"
            @click="tree.moveChecked(true)"
          >
            <template #icon><angle-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="tree.chosenLeafIds.length === tree.allLeaves.length"
            aria-label="Add all"
            @click="tree.moveAll(true)"
          >
            <template #icon><angles-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="tree.chosenLeafIds.length === 0"
            aria-label="Remove all"
            @click="tree.moveAll(false)"
          >
            <template #icon><angles-left-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="!tree.checkedLeafIds.some(id => tree.visibleLeafIds(true).includes(id))"
            aria-label="Remove selected"
            @click="tree.moveChecked(false)"
          >
            <template #icon><angle-left-icon /></template>
          </pf-dual-list-selector-control>
        </pf-dual-list-selector-controls-wrapper>
        <pf-dual-list-selector-pane title="Chosen" :status="tree.status(true)" chosen list-min-height="300px">
          <template #search-input>
            <pf-search-input v-model="tree.filters.chosen" aria-label="Search chosen items" />
          </template>
          <pf-empty-state
            v-if="tree.filters.chosen !== '' && tree.options(true).length === 0"
            variant="sm"
            title="No results found"
            heading-level="h4"
          >
            <template #icon><magnifying-glass-icon /></template>
            <pf-empty-state-body
              >No results match the filter criteria. Clear all filters and try again.</pf-empty-state-body
            >
            <pf-empty-state-footer>
              <pf-empty-state-actions>
                <pf-button variant="link" @click="tree.filters.chosen = ''">Clear all filters</pf-button>
              </pf-empty-state-actions>
            </pf-empty-state-footer>
          </pf-empty-state>
          <pf-dual-list-selector-list v-if="tree.options(true).length > 0">
            <pf-dual-list-selector-tree
              :data="tree.options(true)"
              @option-check="(_event, checked, itemData) => tree.onOptionCheck(checked, itemData, true)"
            />
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
      </pf-dual-list-selector>
    </story-canvas>

    <story-canvas title="Draggable">
      <template #intro>
        <pre v-md>
          To enable drag and drop, replace the `pf-dual-list-selector-list` with a `pf-drag-drop-sort` whose `component` is `pf-dual-list-selector-list` and whose `variant` is `dual-list-selector`, and bind the sortable items with `v-model:items`. `pf-drag-drop-sort` renders the options inside the list from the items, so no options are passed as children; the `attrs` of each item are bound to its option, e.g. `selected` and `onUpdate:selected`.

          Full drag and drop details can be found on the [drag and drop](#/stories/components/drag-and-drop) component page.
        </pre>
      </template>

      <pf-dual-list-selector>
        <pf-dual-list-selector-pane title="Available" :status="status(draggable.available)">
          <pf-dual-list-selector-list>
            <pf-dual-list-selector-list-item
              v-for="option in draggable.available"
              :id="`composable-available-option-${option.text}`"
              :key="option.text"
              v-model:selected="option.selected"
            >
              {{ option.text }}
            </pf-dual-list-selector-list-item>
          </pf-dual-list-selector-list>
        </pf-dual-list-selector-pane>
        <pf-dual-list-selector-controls-wrapper>
          <pf-dual-list-selector-control
            :disabled="!draggable.available.some(option => option.selected)"
            aria-label="Add selected"
            @click="draggable.moveSelected(true)"
          >
            <template #icon><angle-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="draggable.available.length === 0"
            aria-label="Add all"
            @click="draggable.moveAll(true)"
          >
            <template #icon><angles-right-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="draggable.chosen.length === 0"
            aria-label="Remove all"
            @click="draggable.moveAll(false)"
          >
            <template #icon><angles-left-icon /></template>
          </pf-dual-list-selector-control>
          <pf-dual-list-selector-control
            :disabled="!draggable.chosen.some(option => option.selected)"
            aria-label="Remove selected"
            @click="draggable.moveSelected(false)"
          >
            <template #icon><angle-left-icon /></template>
          </pf-dual-list-selector-control>
        </pf-dual-list-selector-controls-wrapper>
        <pf-dual-list-selector-pane title="Chosen" :status="status(draggable.chosen)" chosen>
          <pf-drag-drop-sort
            :items="draggableItems(draggable.chosen)"
            variant="dual-list-selector"
            component="pf-dual-list-selector-list"
            @update:items="items => draggable.sortChosen(items)"
          />
        </pf-dual-list-selector-pane>
      </pf-dual-list-selector>
    </story-canvas>

    <story-canvas title="Draggable with multiple drop zones">
      <template #intro>
        <pre v-md>
          To enable multiple drop zones, wrap the `pf-dual-list-selector` with `pf-drag-drop-container`, and place a `pf-droppable` where each `pf-dual-list-selector-list` would go, with `component="pf-dual-list-selector-list"`. Bind all the items to `pf-drag-drop-container` with `v-model:items`, as a record keyed by the id of each `pf-droppable`, and pass each `pf-droppable` its own items. Set the `variant` of `pf-drag-drop-container` to `dual-list-selector`.

          Full drag and drop details can be found on the [drag and drop](#/stories/components/drag-and-drop) component page.
        </pre>
      </template>

      <pf-drag-drop-container
        :items="multiZoneItems"
        variant="dual-list-selector"
        @update:items="items => multiZone.setItems(items)"
      >
        <pf-dual-list-selector>
          <pf-dual-list-selector-pane title="Available" :status="status(multiZone.available)">
            <pf-droppable id="available" :items="multiZoneItems.available" component="pf-dual-list-selector-list" />
          </pf-dual-list-selector-pane>
          <pf-dual-list-selector-controls-wrapper aria-label="Selector controls">
            <pf-dual-list-selector-control
              :disabled="!multiZone.available.some(option => option.selected)"
              aria-label="Add selected"
              @click="multiZone.moveSelected(true)"
            >
              <angle-right-icon />
            </pf-dual-list-selector-control>
            <pf-dual-list-selector-control
              :disabled="multiZone.available.length === 0"
              aria-label="Add all"
              @click="multiZone.moveAll(true)"
            >
              <angles-right-icon />
            </pf-dual-list-selector-control>
            <pf-dual-list-selector-control
              :disabled="multiZone.chosen.length === 0"
              aria-label="Remove all"
              @click="multiZone.moveAll(false)"
            >
              <angles-left-icon />
            </pf-dual-list-selector-control>
            <pf-dual-list-selector-control
              :disabled="!multiZone.chosen.some(option => option.selected)"
              aria-label="Remove selected"
              @click="multiZone.moveSelected(false)"
            >
              <angle-left-icon />
            </pf-dual-list-selector-control>
          </pf-dual-list-selector-controls-wrapper>
          <pf-dual-list-selector-pane title="Chosen" :status="status(multiZone.chosen)" chosen>
            <pf-droppable id="chosen" :items="multiZoneItems.chosen" component="pf-dual-list-selector-list" />
          </pf-dual-list-selector-pane>
        </pf-dual-list-selector>
      </pf-drag-drop-container>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import type { DualListSelectorTreeItemData } from '@vue-patternfly/core/components/DualListSelector/DualListSelector.vue';
import type { DraggableObject } from '@vue-patternfly/drag-drop';
import AngleLeftIcon from '@vue-patternfly/icons/angle-left-icon';
import AngleRightIcon from '@vue-patternfly/icons/angle-right-icon';
import AnglesLeftIcon from '@vue-patternfly/icons/angles-left-icon';
import AnglesRightIcon from '@vue-patternfly/icons/angles-right-icon';
import ArrowDownShortWideIcon from '@vue-patternfly/icons/arrow-down-short-wide-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';

interface Option {
  text: string;
  selected: boolean;
  visible: boolean;
}

const status = (options: Option[]) =>
  `${options.filter(option => option.selected && option.visible).length} of ${
    options.filter(option => option.visible).length
  } options selected`;

/** State of a dual list selector with simple options, and the callbacks of its controls */
function useOptions(available: string[], chosen: string[] = []) {
  const toOption = (text: string): Option => ({ text, selected: false, visible: true });
  const state = reactive({
    available: available.map(toOption),
    chosen: chosen.map(toOption),
    availableFilter: '',
    chosenFilter: '',

    // moves the selected options between the lists
    moveSelected(fromAvailable: boolean) {
      const source = fromAvailable ? state.available : state.chosen;
      const destination = fromAvailable ? state.chosen : state.available;
      for (const option of source.filter(option => option.selected && option.visible)) {
        source.splice(source.indexOf(option), 1);
        option.selected = false;
        destination.push(option);
      }
    },

    // moves all the visible options between the lists
    moveAll(fromAvailable: boolean) {
      if (fromAvailable) {
        state.chosen = [...state.available.filter(option => option.visible), ...state.chosen];
        state.available = state.available.filter(option => !option.visible);
      } else {
        state.available = [...state.chosen.filter(option => option.visible), ...state.available];
        state.chosen = state.chosen.filter(option => !option.visible);
      }
    },

    filter(isAvailable: boolean) {
      const value = (isAvailable ? state.availableFilter : state.chosenFilter).toLowerCase();
      for (const option of isAvailable ? state.available : state.chosen) {
        option.visible = value === '' || option.text.toLowerCase().includes(value);
      }
    },

    clearFilter(isAvailable: boolean) {
      if (isAvailable) {
        state.availableFilter = '';
      } else {
        state.chosenFilter = '';
      }
      state.filter(isAvailable);
    },

    sort(isAvailable: boolean) {
      (isAvailable ? state.available : state.chosen).sort((a, b) => a.text.localeCompare(b.text));
    },

    // reorders the chosen options as sorted by drag and drop
    sortChosen(items: DraggableObject[]) {
      state.chosen = items.map(item => state.chosen.find(option => option.text === item.id)!);
    },

    // replaces both lists with the options moved by drag and drop
    setItems(items: Record<string, DraggableObject[]>) {
      const all = [...state.available, ...state.chosen];
      const find = (item: DraggableObject) => all.find(option => option.text === item.id)!;
      state.available = items.available.map(find);
      state.chosen = items.chosen.map(find);
    },
  });
  return state;
}

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
const basic = useOptions(options);
const tooltips = useOptions(options);
const search = useOptions(options);
const complex = useOptions(options);
const complexDisabled = ref(false);

const fruits = ['Apple', 'Banana', 'Pineapple'];
const chosenFruits = ['Orange', 'Grape', 'Peach', 'Strawberry'];
const draggable = useOptions(fruits, chosenFruits);
const multiZone = useOptions(fruits, chosenFruits);

// draggable objects of the options, whose selection is bound to the rendered options
const draggableItems = (list: Option[]): DraggableObject[] =>
  list.map(option => ({
    id: option.text,
    content: option.text,
    attrs: { selected: option.selected, 'onUpdate:selected': (s: boolean) => (option.selected = s) },
  }));

const multiZoneItems = computed(() => ({
  available: draggableItems(multiZone.available),
  chosen: draggableItems(multiZone.chosen),
}));

interface FoodNode {
  id: string;
  text: string;
  children?: FoodNode[];
}

const foodData: FoodNode[] = [
  {
    id: 'fruits',
    text: 'Fruits',
    children: [
      { id: 'apple', text: 'Apple' },
      {
        id: 'berries',
        text: 'Berries',
        children: [
          { id: 'blueberry', text: 'Blueberry' },
          { id: 'strawberry', text: 'Strawberry' },
        ],
      },
      { id: 'banana', text: 'Banana' },
    ],
  },
  { id: 'bread', text: 'Bread' },
  {
    id: 'vegetables',
    text: 'Vegetables',
    children: [
      { id: 'broccoli', text: 'Broccoli' },
      { id: 'cauliflower', text: 'Cauliflower' },
    ],
  },
  {
    id: 'proteins',
    text: 'Proteins',
    children: [
      { id: 'beans', text: 'Beans' },
      {
        id: 'meats',
        text: 'Meats',
        children: [
          { id: 'beef', text: 'Beef' },
          { id: 'chicken', text: 'Chicken' },
        ],
      },
      { id: 'tofu', text: 'Tofu' },
    ],
  },
];

/** State of the tree dual list selector, ported from the upstream example */
function useTree(data: FoodNode[]) {
  const leaves = (node: FoodNode): string[] => (node.children?.length ? node.children.flatMap(leaves) : [node.id]);
  const leavesById: Record<string, string[]> = {};
  const nodeTexts: Record<string, string> = {};
  const index = (node: FoodNode) => {
    leavesById[node.id] = leaves(node);
    nodeTexts[node.id] = node.text;
    node.children?.forEach(index);
  };
  data.forEach(index);

  const matchesFilter = (value: string, filter: string) => value.toLowerCase().includes(filter.trim().toLowerCase());

  const state = reactive({
    allLeaves: data.flatMap(leaves),
    checkedLeafIds: [] as string[],
    chosenLeafIds: ['beans', 'beef', 'chicken', 'tofu'],
    filters: { available: '', chosen: '' },

    leafIds(isChosen: boolean) {
      return isChosen ? state.chosenLeafIds : state.allLeaves.filter(id => !state.chosenLeafIds.includes(id));
    },

    visibleLeafIds(isChosen: boolean) {
      const filter = isChosen ? state.filters.chosen : state.filters.available;
      const matching = new Set(
        Object.keys(leavesById)
          .filter(id => matchesFilter(nodeTexts[id]!, filter))
          .flatMap(id => leavesById[id]!),
      );
      return state.leafIds(isChosen).filter(id => matching.has(id));
    },

    status(isChosen: boolean) {
      const visible = state.visibleLeafIds(isChosen);
      const selected = state.checkedLeafIds.filter(id => visible.includes(id)).length;
      return `${selected} of ${visible.length} options selected`;
    },

    moveChecked(toChosen: boolean) {
      const moved = state.checkedLeafIds.filter(id => state.visibleLeafIds(!toChosen).includes(id));
      state.chosenLeafIds = toChosen
        ? [...state.chosenLeafIds, ...moved]
        : state.chosenLeafIds.filter(id => !moved.includes(id));
      state.checkedLeafIds = state.checkedLeafIds.filter(id => !moved.includes(id));
    },

    moveAll(toChosen: boolean) {
      if (toChosen) {
        state.chosenLeafIds = [...state.chosenLeafIds, ...state.visibleLeafIds(false)];
      } else {
        const visible = state.visibleLeafIds(true);
        state.chosenLeafIds = state.chosenLeafIds.filter(id => !visible.includes(id));
      }
    },

    onOptionCheck(checked: boolean, node: DualListSelectorTreeItemData, isChosen: boolean) {
      const visible = state.visibleLeafIds(isChosen);
      const ids = leavesById[node.id]!.filter(id => visible.includes(id));
      const others = state.checkedLeafIds.filter(id => !ids.includes(id));
      state.checkedLeafIds = checked ? [...others, ...ids] : others;
    },

    // builds the options of a pane: a node is shown when it or its relatives match the filter on the pane
    options(isChosen: boolean, nodes: FoodNode[] = data, hasParentMatch = false): DualListSelectorTreeItemData[] {
      const filter = isChosen ? state.filters.chosen : state.filters.available;
      return nodes.flatMap(node => {
        const onThisPane = leavesById[node.id]!.filter(id =>
          isChosen ? state.chosenLeafIds.includes(id) : !state.chosenLeafIds.includes(id),
        );
        const hasMatchingChildren = !!filter && onThisPane.some(id => matchesFilter(nodeTexts[id]!, filter));
        const isFilterMatch = !!filter && matchesFilter(node.text, filter) && onThisPane.length > 0;
        const displayed =
          (!filter && onThisPane.length > 0) ||
          hasMatchingChildren ||
          (hasParentMatch && onThisPane.length > 0) ||
          isFilterMatch;

        if (!displayed) {
          return node.children?.length ? state.options(isChosen, node.children, hasParentMatch) : [];
        }
        return [
          {
            id: node.id,
            text: node.text,
            checked: onThisPane.every(id => state.checkedLeafIds.includes(id)),
            checkAttrs: { 'aria-label': `Select ${node.text}` },
            badge: !!node.children?.length,
            badgeAttrs: { read: true },
            defaultExpanded: !!filter,
            children: node.children
              ? state.options(isChosen, node.children, isFilterMatch || hasParentMatch)
              : undefined,
          },
        ];
      });
    },
  });
  return state;
}

const tree = useTree(foodData);
</script>
