<template>
  <doc-page title="Table">
    <template #description
      >A <b>table</b> is used to display large data sets that can be easily laid out in a simple grid with column
      headers.</template
    >

    <template #apidocs>
      <component-info name="PfTable" />
      <component-info name="PfThead" />
      <component-info name="PfTbody" />
      <component-info name="PfTfoot" />
      <component-info name="PfTr" />
      <component-info name="PfTh" />
      <component-info name="PfTd" />
      <component-info name="PfCaption" />
      <component-info name="PfTableText" />
      <component-info name="PfActionsColumn" />
      <component-info name="PfTreeRowWrapper" />
      <component-info name="PfExpandableRowContent" />
      <component-info name="PfHeaderCellInfoWrapper" />
      <component-info name="PfInnerScrollContainer" />
      <component-info name="PfOuterScrollContainer" />
    </template>

    <pre v-md>
      Note: `Table` lives in its own package at [@vue-patternfly/table](https://www.npmjs.com/package/@vue-patternfly/table)!

      The `pf-table` component takes an explicit and declarative approach, and its implementation closely mirrors that of an HTML table.

      ## Differences from patternfly-react
      - `variant="compact"` is `compact`, `borders` is `no-borders` with inverted behavior and `hasAnimations` is `animations`.
      - The cell decorator objects of `Th` and `Td` are replaced by flat props, `v-model`s and events:
        - `select` is `v-model:selected` (`isSelected`, emitting `@select`), with `select-radio` for `variant: 'radio'`, `select-disabled` (`isDisabled`, `isHeaderSelectDisabled`) and `select-attrs` (`props`). The indeterminate select all checkbox is `:selected="null"` rather than `isIndeterminate`. The radios of a table share a name scoped to that table rather than the global `radioGroup`.
        - `expand` is `v-model:expanded` (`isExpanded`, emitting `@toggle`), with `expand-id`, `row-index` and `toggle-attrs`. On `pf-th`, `expanded` tells whether all rows are expanded, where `areAllExpanded` is inverted.
        - `compoundExpand` is `v-model:expanded` with `compound`, plus `row-index` and `column-index`.
        - `favorites` is `v-model:favorited` (`isFavorited`, emitting `@favorite`) with `favorite-attrs` (`props`).
        - `sort` is `sortable`, `sorted` (`sortBy.index === columnIndex`), `v-model:direction` and `default-direction`, emitting `@sort` with the new direction. A favorites column (`isFavorites`) is `favorites`, and its `favoriteButtonProps` are `v-model:favorited` and `favorite-attrs`.
        - `info` is the `info` prop or slot, with `info-popover` for a popover, `info-attrs` (`tooltipProps`, `popoverProps`), `info-aria-label` and the `info-header`/`info-footer` slots for the popover header and footer.
        - `draggableRow` is `draggable-row`, with `draggable-attrs` for the id of the drag button.
        - `treeRow` is `tree-row`: its state lives on the parent `pf-tree-row-wrapper` (`level`, `posinset`, `setsize`, `hidden`, `v-model:expanded`, `v-model:details-expanded` and `v-model:checked`, which also show the details toggle and the checkbox when bound), the icon is the `icon` slot and the labels are set with `toggle-attrs`, `select-attrs` and `details-toggle-attrs`.
      - `isStickyColumn` is `sticky`, `hasRightBorder`/`hasLeftBorder` are `right-border`/`left-border`, `isSubheader` is `subheader`, `isActionCell` is `action-cell` and `hasAction` is `action`.
      - `visibility={['hiddenOnMd', 'visibleOnLg']}` is `visibility-md="hidden" visibility-lg="visible"`.
      - `tooltip={null}` is `no-tooltip`, `tooltipProps` is `tooltip-attrs`.
      - `additionalContent` of `pf-th` is the `additional-content` slot.
      - `onRowClick` of `pf-tr` is `@click`, `isRowSelected` is `selected` and `isContentExpanded` is `content-expanded`.
      - `ActionsColumn` takes its actions as `pf-dropdown-item` and `pf-divider` in its default slot and the actions beside the toggle in the `outside` slot, rather than an `items` array; `actionsToggle` is the `toggle` slot.
      - `TableText` takes the element as `component` rather than `variant`, and `tooltipHasDefaultBehavior` is `tooltip-default-behavior`.
      - A `pf-table` with `sticky-header` or `sticky-footer` wraps itself in an outer scroll container (and an inner one with `horizontal-scroll`), unless it is already inside a `pf-outer-scroll-container` or `pf-inner-scroll-container`.
      - `EditableTextCell`, `EditableSelectInputCell` and `RowWrapper` belong to the deprecated configuration based table and are not ported.
      See [common differences from patternfly-react](#/).

      ## Examples

      Some general notes:

      - Provide the `data-label` prop to the `pf-td` components so that in mobile view the cell has a label to provide context.
      - If you want a table caption, simply place a `pf-caption` as the first child within a `pf-table`.
      - You can set the `compact` prop on `pf-table`.
    </pre>

    <story-canvas title="Basic">
      <pf-toggle-group aria-label="Default with single selectable">
        <pf-toggle-group-item
          :selected="basicVariant === 'compact'"
          @update:selected="basicVariant = basicVariant === 'compact' ? '' : 'compact'"
          >Compact</pf-toggle-group-item
        >
        <pf-toggle-group-item
          :selected="basicVariant === 'compactBorderless'"
          @update:selected="basicVariant = basicVariant === 'compactBorderless' ? '' : 'compactBorderless'"
          >Compact borderless</pf-toggle-group-item
        >
      </pf-toggle-group>
      <pf-table
        aria-label="Simple table"
        :compact="basicVariant !== ''"
        :no-borders="basicVariant === 'compactBorderless'"
      >
        <pf-caption>Simple table using composable components</pf-caption>
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in repositories" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Plain">
      <pf-table aria-label="Plain table" plain>
        <pf-caption>Simple table with plain styling using composable components</pf-caption>
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in repositories" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Custom row wrapper, header tooltips & popovers">
      <template #intro>
        <pre v-md>
          - If you add the `no-wrap` prop to `pf-thead`, it won't wrap it if there is no space
          - You can add the `text-center` prop to `pf-th` or `pf-td` to center the contents
          - You can pass `class`, `style` and more to `pf-tr`

          To add a header tooltip or popover to `pf-th`, pass its text with the `info` prop (or the `info` slot), and `info-popover` for a popover.
        </pre>
      </template>

      <pf-table aria-label="Misc table">
        <pf-thead no-wrap>
          <pf-tr>
            <pf-th info="More information about repositories" :info-attrs="{ leftAligned: true }">
              {{ columnNames.name }}
            </pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th info-popover info-aria-label="More information on pull requests">
              {{ columnNames.prs }}
              <template #info>
                <div>More <strong>information</strong> on pull requests</div>
              </template>
              <template #info-header>{{ columnNames.prs }}</template>
              <template #info-footer><a href="#" @click.prevent>Click here for even more info</a></template>
            </pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th text-center>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr
            v-for="(repo, rowIndex) in repositories"
            :key="repo.name"
            :class="(rowIndex + 1) % 2 ? 'odd-row-class' : 'even-row-class'"
            :style="
              (rowIndex + 1) % 2
                ? { backgroundColor: 'var(--pf-t--global--background--color--secondary--default)' }
                : {}
            "
          >
            <pf-td :data-label="columnNames.name" :colspan="repo.branches === null && repo.prs === null ? 3 : 1">
              {{ repo.name }}
            </pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs" />
            <pf-td :data-label="columnNames.workspaces" />
            <pf-td :data-label="columnNames.lastCommit" :text-center="rowIndex !== 2" />
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Sortable & wrapping headers">
      <template #intro>
        <pre v-md>
          To make a column sortable, pass `sortable` to its `pf-th`, `sorted` when the table is sorted by that column, and bind the sort direction with `v-model:direction`. The `sort` event is emitted with the new direction, and `default-direction` sets the direction when first sorting a column (defaults to `asc`).

          The built in display for sorting is not fully responsive, as the column headers will be displayed per row when the screen size is small.
        </pre>
      </template>

      <pf-table aria-label="Sortable table" ouia-id="SortableTable">
        <pf-thead>
          <pf-tr>
            <pf-th
              sortable
              :sorted="sortable.index === 0"
              v-model:direction="sortable.direction"
              default-direction="asc"
              @sort="sortable.index = 0"
              >{{ columnNames.name }}</pf-th
            >
            <pf-th modifier="wrap">{{ columnNames.branches }}</pf-th>
            <pf-th
              modifier="wrap"
              sortable
              :sorted="sortable.index === 2"
              v-model:direction="sortable.direction"
              default-direction="asc"
              info="More information "
              @sort="sortable.index = 2"
              >{{ columnNames.prs }}</pf-th
            >
            <pf-th modifier="wrap">{{ columnNames.workspaces }}</pf-th>
            <pf-th modifier="wrap">{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in sortedRepositories(sortable)" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Sortable - custom control">
      <template #intro>
        <pre v-md>
          Sorting a table may also be controlled manually with a toolbar control.
        </pre>
      </template>

      <pf-toolbar id="toolbar">
        <pf-toolbar-content>
          <pf-toolbar-item>
            <pf-select
              v-model:open="sortableCustomOpen"
              :selected="sortableCustomSelected"
              @select="
                (_e: Event, value: unknown) => {
                  if (value === 'asc' || value === 'desc') {
                    sortableCustom.direction = value;
                  } else {
                    sortableCustom.index = value as number;
                  }
                }
              "
            >
              <template #toggle>
                <pf-menu-toggle variant="plain" aria-label="Sort columns">
                  <template #icon><arrow-down-wide-short-icon /></template>
                </pf-menu-toggle>
              </template>
              <pf-select-group label="Sort column">
                <pf-select-list>
                  <pf-select-option
                    v-for="(column, columnIndex) in Object.values(columnNames)"
                    :key="column"
                    :value="columnIndex"
                    :selected="sortableCustom.index === columnIndex"
                    >{{ column }}</pf-select-option
                  >
                </pf-select-list>
              </pf-select-group>
              <pf-select-group label="Sort direction">
                <pf-select-list>
                  <pf-select-option value="asc" :selected="sortableCustom.direction === 'asc'"
                    >Ascending</pf-select-option
                  >
                  <pf-select-option value="desc" :selected="sortableCustom.direction === 'desc'"
                    >Descending</pf-select-option
                  >
                </pf-select-list>
              </pf-select-group>
            </pf-select>
          </pf-toolbar-item>
        </pf-toolbar-content>
      </pf-toolbar>
      <pf-table aria-label="Sortable table custom toolbar">
        <pf-thead>
          <pf-tr>
            <pf-th
              v-for="(column, columnIndex) in Object.values(columnNames)"
              :key="column"
              sortable
              :sorted="sortableCustom.index === columnIndex"
              v-model:direction="sortableCustom.direction"
              :info="columnIndex === 2 ? 'More information ' : undefined"
              @sort="sortableCustom.index = columnIndex"
              >{{ column }}</pf-th
            >
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in sortedRepositories(sortableCustom)" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Selectable with checkbox">
      <template #intro>
        <pre v-md>
          To make a row selectable, the table needs a selection column.
          The selection column is just another column, but with selection specific props added.
          We add it as the first header cell and also as the first body cell for each row.

          To render a select all checkbox, bind `v-model:selected` (or `selected` and the `select` event) on the column's `pf-th`.

          To make a row selectable, bind `v-model:selected` on each row's first `pf-td`, with its `row-index`. `select-disabled` disables the checkbox.

          **Note:** This example has a `shift + select` feature where holding shift while
          checking checkboxes will check intermediate rows' checkboxes.
        </pre>
      </template>

      <pf-table aria-label="Selectable table">
        <pf-thead>
          <pf-tr>
            <pf-th
              :selected="selectedRepoNames.length === selectableRepos.length"
              aria-label="Row select"
              @update:selected="selectedRepoNames = $event ? selectableRepos.map(r => r.name) : []"
            />
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="(repo, rowIndex) in selectableRepositories" :key="repo.name">
            <pf-td
              :row-index="rowIndex"
              :selected="selectedRepoNames.includes(repo.name)"
              :select-disabled="!isRepoSelectable(repo)"
              @update:selected="onSelectRepo(repo, rowIndex, $event)"
            />
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Selectable with indeterminate state">
      <template #intro>
        <pre v-md>
          To indicate partial selection, set the header's `selected` to `null`. When some (but not all) selectable rows are selected, the header checkbox will convey this information to assistive technologies and also display a dash instead of a checkmark.
        </pre>
      </template>

      <pf-table aria-label="Selectable table with indeterminate state">
        <pf-thead>
          <pf-tr>
            <pf-th
              :selected="
                indeterminateNames.length === selectableRepos.length ? true : indeterminateNames.length ? null : false
              "
              aria-label="Row select"
              @update:selected="indeterminateNames = $event ? selectableRepos.map(r => r.name) : []"
            />
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="(repo, rowIndex) in selectableRepositories" :key="repo.name">
            <pf-td
              :row-index="rowIndex"
              :selected="indeterminateNames.includes(repo.name)"
              :select-disabled="!isRepoSelectable(repo)"
              @update:selected="
                indeterminateNames = $event
                  ? [...indeterminateNames, repo.name]
                  : indeterminateNames.filter(n => n !== repo.name)
              "
            />
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Selectable radio input">
      <template #intro>
        <pre v-md>
          Similarly to the selectable example above, the radio buttons use the first column. The first header cell is empty, and each body row's first cell has `select-radio`.
        </pre>
      </template>

      <pf-table aria-label="Selectable table">
        <pf-thead>
          <pf-tr>
            <pf-th screen-reader-text="Row select" />
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="(repo, rowIndex) in selectableRepositories.slice(0, 3)" :key="repo.name">
            <pf-td
              select-radio
              :row-index="rowIndex"
              :selected="selectedRadioName === repo.name"
              :select-disabled="!isRepoSelectable(repo)"
              @select="selectedRadioName = repo.name"
            />
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Row click handler, clickable rows">
      <template #intro>
        <pre v-md>
          This selectable rows feature is intended for use when a table is used to present a list of objects in a Primary-detail view.
        </pre>
      </template>

      <pf-table aria-label="Clickable table">
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr
            v-for="repo in repositories"
            :key="repo.name"
            selectable
            clickable
            :selected="clickedRepoName === repo.name"
            @click="clickedRepoName = repo.name"
          >
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Editable rows">
      <template #intro>
        <pre v-md>
          This example shows a table with editable rows. Cells in a row can be edited after clicking on the edit icon.
        </pre>
      </template>

      <pf-table aria-label="Editable table">
        <pf-thead>
          <pf-tr>
            <pf-th>Text input</pf-th>
            <pf-th>Disabled text input</pf-th>
            <pf-th>Checkboxes</pf-th>
            <pf-th>Radios</pf-th>
            <pf-th screen-reader-text="Row edit actions" />
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr
            v-for="(row, rowIndex) in editableRows"
            :key="rowIndex"
            class="pf-v6-c-inline-edit"
            :editable="row.editing"
          >
            <pf-td data-label="Text input">
              <div class="pf-v6-c-inline-edit__value">{{ row.data.textInput }}</div>
              <div class="pf-v6-c-inline-edit__input">
                <pf-text-input v-model="row.edited.textInput" :aria-label="`Text input row ${rowIndex + 1}`" />
              </div>
            </pf-td>
            <pf-td data-label="Disabled text input">
              <div class="pf-v6-c-inline-edit__value">{{ row.data.textInputDisabled }}</div>
              <div class="pf-v6-c-inline-edit__input">
                <pf-text-input
                  :model-value="row.edited.textInputDisabled ?? ''"
                  disabled
                  :aria-label="`Disabled text input row ${rowIndex + 1}`"
                />
              </div>
            </pf-td>
            <pf-td data-label="Checkboxes">
              <div class="pf-v6-c-inline-edit__value">{{ row.data.checkboxes.join(', ') }}</div>
              <div
                class="pf-v6-c-inline-edit__group pf-m-column"
                role="group"
                :aria-label="`Checkbox group row ${rowIndex}`"
              >
                <div v-for="option in row.options.checkboxes" :key="option" class="pf-v6-c-inline-edit__input">
                  <pf-checkbox
                    :label="option"
                    :model-value="row.edited.checkboxes.includes(option)"
                    @update:model-value="
                      row.edited.checkboxes = $event
                        ? [...row.edited.checkboxes, option]
                        : row.edited.checkboxes.filter(o => o !== option)
                    "
                  />
                </div>
              </div>
            </pf-td>
            <pf-td data-label="Radios">
              <div class="pf-v6-c-inline-edit__value">{{ row.data.radios }}</div>
              <div
                class="pf-v6-c-inline-edit__group pf-m-column"
                role="radiogroup"
                :aria-label="`Radio button group row ${rowIndex}`"
              >
                <div v-for="option in row.options.radios" :key="option" class="pf-v6-c-inline-edit__input">
                  <pf-radio
                    v-model="row.edited.radios"
                    :name="`radios-row-${rowIndex}`"
                    :value="option"
                    :label="option"
                  />
                </div>
              </div>
            </pf-td>
            <pf-td data-label="Edit row data" action>
              <div class="pf-v6-c-inline-edit__group pf-m-icon-group pf-m-action-group">
                <div class="pf-v6-c-inline-edit__action pf-m-valid">
                  <pf-button
                    variant="plain"
                    :aria-label="`Save edits of row ${rowIndex + 1}`"
                    @click="
                      row.data = cloneEditable(row.edited);
                      row.editing = false;
                    "
                  >
                    <template #icon><check-icon /></template>
                  </pf-button>
                </div>
                <div class="pf-v6-c-inline-edit__action">
                  <pf-button
                    variant="plain"
                    :aria-label="`Discard edits of row ${rowIndex + 1}`"
                    @click="
                      row.edited = cloneEditable(row.data);
                      row.editing = false;
                    "
                  >
                    <template #icon><xmark-icon /></template>
                  </pf-button>
                </div>
              </div>
              <div class="pf-v6-c-inline-edit__action pf-m-enable-editable">
                <pf-button variant="plain" :aria-label="`Edit row ${rowIndex + 1}`" @click="row.editing = true">
                  <template #icon><pen-to-square-icon /></template>
                </pf-button>
              </div>
            </pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Actions">
      <template #intro>
        <pre v-md>
          This example demonstrates adding actions as the last column. The header's last cell is an empty cell, and each body row's last cell is an action cell.

          To make a cell an action cell, render a `pf-actions-column` component inside a row's last `pf-td` with `action-cell`, and pass the actions as `pf-dropdown-item` components in its default slot. Its `toggle` slot replaces the default kebab toggle.

          If actions menus are getting clipped by other items on the page, such as sticky columns or rows, the `pf-actions-column` can be passed an `append-to` prop to adjust where the actions menu is appended.

          When a table row contains mixed content of text and interactive elements, the `action` property may be passed to a `pf-td` which contains interactive content like the below example's start `pf-button`. This will align buttons and other elements with other cells' text. Note that `action` should not be used with `pf-td`s containing a `pf-actions-column` because that comes with its own spacing.
        </pre>
      </template>

      <pf-toggle-group aria-label="Default uses kebab toggle">
        <pf-toggle-group-item v-model:selected="customActionsToggle">Custom actions toggle</pf-toggle-group-item>
      </pf-toggle-group>
      <pf-table aria-label="Actions table">
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
            <pf-th screen-reader-text="Primary action" />
            <pf-th screen-reader-text="Secondary action" />
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in actionRepositories" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
            <pf-td data-label="Single action" modifier="fitContent" action>
              <pf-table-text v-if="repo.singleAction">
                <pf-button variant="secondary">{{ repo.singleAction }}</pf-button>
              </pf-table-text>
            </pf-td>
            <pf-td action-cell>
              <pf-actions-column v-if="repo.name !== 'a'" :disabled="repo.name === '4'">
                <template v-if="customActionsToggle" #toggle>
                  <pf-menu-toggle>Actions</pf-menu-toggle>
                </template>
                <pf-dropdown-item @click="log(`clicked on Some action, on row ${repo.name}`)"
                  >Some action</pf-dropdown-item
                >
                <pf-dropdown-item
                  v-if="repo.name === '5'"
                  @click="log(`clicked on Another action, on row ${repo.name}`)"
                  >Another action</pf-dropdown-item
                >
                <pf-dropdown-item v-else :to="patternflyUrl">Link action</pf-dropdown-item>
                <pf-divider component="li" />
                <pf-dropdown-item @click="log(`clicked on Third action, on row ${repo.name}`)"
                  >Third action</pf-dropdown-item
                >
              </pf-actions-column>
            </pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Actions Overflow">
      <template #intro>
        <pre v-md>
          Using a `pf-overflow-menu` in the actions column, allowing the actions to condense into a dropdown if necessary for space.
        </pre>
      </template>

      <pf-table aria-label="Actions table">
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
            <pf-th screen-reader-text="Actions" />
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in overflowRepositories" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
            <pf-td action-cell>
              <pf-overflow-menu breakpoint="lg">
                <pf-overflow-menu-content>
                  <pf-overflow-menu-group type="button">
                    <pf-overflow-menu-item>
                      <pf-button variant="primary">Primary</pf-button>
                    </pf-overflow-menu-item>
                    <pf-overflow-menu-item>
                      <pf-button variant="secondary">Secondary</pf-button>
                    </pf-overflow-menu-item>
                    <pf-overflow-menu-item>
                      <pf-button variant="tertiary">Tertiary</pf-button>
                    </pf-overflow-menu-item>
                  </pf-overflow-menu-group>
                </pf-overflow-menu-content>
                <pf-overflow-menu-control>
                  <pf-dropdown v-model:open="repo.menuOpen" close-on-select position="right">
                    <template #toggle>
                      <pf-menu-toggle variant="plain" aria-label="Table actions overflow menu">
                        <template #icon><ellipsis-vertical-icon /></template>
                      </pf-menu-toggle>
                    </template>
                    <pf-dropdown-list>
                      <pf-overflow-menu-dropdown-item :value="0" shared>Primary</pf-overflow-menu-dropdown-item>
                      <pf-overflow-menu-dropdown-item :value="1" shared>Secondary</pf-overflow-menu-dropdown-item>
                      <pf-overflow-menu-dropdown-item :value="2" shared>Tertiary</pf-overflow-menu-dropdown-item>
                    </pf-dropdown-list>
                  </pf-dropdown>
                </pf-overflow-menu-control>
              </pf-overflow-menu>
            </pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Expandable">
      <template #intro>
        <pre v-md>
          To make a parent/child row pair expandable:

          1. Pass `expandable` to `pf-table`.
          1. Make the first cell in every row an expandable cell by binding `v-model:expanded` on the `pf-td` (with its `row-index`).
          1. Wrap the content of each child row cell in `pf-expandable-row-content`.
          1. Pass `expanded` to `pf-tbody` and the `pf-tr` containing expandable content, and pass `content-expanded` to the `pf-tr` that acts as the "control row".

          Note: Table column widths will respond automatically when toggling expanded rows. To retain column widths between expanded and collapsed states, column header and/or data cell widths must be set.
        </pre>
      </template>

      <pf-checkbox id="toggle-compact" v-model="expandableCompact" label="Compact" name="toggle-compact" />
      <pf-table expandable animations aria-label="Expandable table" :compact="expandableCompact">
        <pf-thead>
          <pf-tr>
            <pf-th screen-reader-text="Row expansion" />
            <pf-th :width="25">{{ columnNames.name }}</pf-th>
            <pf-th :width="10">{{ columnNames.branches }}</pf-th>
            <pf-th :width="15">{{ columnNames.prs }}</pf-th>
            <pf-th :width="30">{{ columnNames.workspaces }}</pf-th>
            <pf-th :width="10">{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody v-for="(repo, rowIndex) in expandableRepositories" :key="repo.name" :expanded="isExpanded(repo.name)">
          <pf-tr :content-expanded="isExpanded(repo.name)">
            <pf-td
              :row-index="rowIndex"
              :expanded="repo.details ? isExpanded(repo.name) : undefined"
              expand-id="composable-expandable-example"
              @update:expanded="setExpanded(repo.name, $event)"
            />
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
          <pf-tr v-if="repo.details" :expanded="isExpanded(repo.name)">
            <pf-td v-if="!detailLayout(repo).fullWidth" />
            <template v-for="(detail, i) in detailLayout(repo).details" :key="i">
              <pf-td
                :data-label="`Repo detail ${i + 1}`"
                :no-padding="detailLayout(repo).noPadding"
                :colspan="detail.colspan"
              >
                <pf-expandable-row-content>{{ detail.text }}</pf-expandable-row-content>
              </pf-td>
            </template>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Compound expandable">
      <template #intro>
        <pre v-md>
          To make a parent/child row pair compound expandable:

          1. Pass `expandable` to `pf-table`.
          1. Pass `compound` and bind `v-model:expanded` on any `pf-td` that has an expandable child row.
          1. Wrap the content of each child row cell in `pf-expandable-row-content`.
          1. Pass `expanded` to `pf-tbody` and the `pf-tr` containing expandable content, and pass `content-expanded` and `control-row` to the `pf-tr` that acts as the "control row".
        </pre>
      </template>

      <pf-table aria-label="Compound expandable table" expandable animations>
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
            <pf-th screen-reader-text="URL" />
          </pf-tr>
        </pf-thead>
        <pf-tbody
          v-for="(repo, rowIndex) in compoundRepositories"
          :key="repo.name"
          :expanded="!!expandedCells[repo.name]"
        >
          <pf-tr :content-expanded="!!expandedCells[repo.name]" control-row>
            <pf-td :width="25" :data-label="columnNames.name" component="th">
              <a href="#" @click.prevent>{{ repo.name }}</a>
            </pf-td>
            <pf-td
              v-for="(key, i) in compoundKeys"
              :key="key"
              :width="10"
              :data-label="columnNames[key]"
              compound
              :expanded="expandedCells[repo.name] === key"
              expand-id="compound-expandable-example"
              :row-index="rowIndex"
              :column-index="i + 1"
              @update:expanded="expandedCells[repo.name] = $event ? key : undefined"
            >
              <code-branch-icon v-if="key === 'branches'" />
              <code-icon v-else-if="key === 'prs'" />
              <cube-icon v-else />
              {{ repo[key] }}
            </pf-td>
            <pf-td :width="15" :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
            <pf-td :width="30"><a href="#" @click.prevent>Open in GitHub</a></pf-td>
          </pf-tr>
          <pf-tr v-for="key in compoundKeys" :key="key" :expanded="expandedCells[repo.name] === key">
            <pf-td :data-label="columnNames[key]" :colspan="6">
              <pf-expandable-row-content>
                <div>Expanded content for {{ repo.name }}: {{ key }} goes here!</div>
              </pf-expandable-row-content>
            </pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Cell width, breakpoint modifiers">
      <pf-table aria-label="Cell widths">
        <pf-thead>
          <pf-tr>
            <pf-th :width="15">{{ columnNames.name }}</pf-th>
            <pf-th :width="15">{{ columnNames.branches }}</pf-th>
            <pf-th :width="40" visibility-md="hidden" visibility-lg="visible">{{ columnNames.prs }}</pf-th>
            <pf-th :width="15">{{ columnNames.workspaces }}</pf-th>
            <pf-th :width="15">{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in repositories" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs" visibility-md="hidden" visibility-lg="visible">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Controlling text">
      <pf-table aria-label="Controlling text">
        <pf-thead>
          <pf-tr>
            <pf-th :width="20">Truncate (width 20%)</pf-th>
            <pf-th>Break word</pf-th>
            <pf-th modifier="wrap">Wrapping table header text. This th text will wrap instead of truncate.</pf-th>
            <pf-th modifier="fitContent">Fit content</pf-th>
            <pf-th>No wrap</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr>
            <pf-td data-label="Truncate (width 20%)" modifier="truncate"
              >This text will truncate instead of wrap.</pf-td
            >
            <pf-td data-label="Break word" modifier="breakWord">
              <a>http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>
            </pf-td>
            <pf-td data-label="Wrapping table header text. This th text will wrap instead of truncate.">
              <p>
                By default,
                <code>thead</code> cells will truncate and <code>tbody</code> cells will wrap. Use
                <code>.pf-m-wrap</code> on a<code>th</code> to change its behavior.
              </p>
            </pf-td>
            <pf-td data-label="Fit content">
              This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.
            </pf-td>
            <pf-td data-label="No wrap" modifier="nowrap"><a href="#" @click.prevent>No wrap</a></pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Modifiers with table text">
      <template #intro>
        <pre v-md>
          If the `wrap-modifier` property is set to `truncate`, it's needed to ensure that the corresponding tooltip can be opened using both keyboard and screen reader. Since this particular `pf-td` element is generic and doesn't have any predefined decorators, the focus management required to trigger the tooltip needs to be handled manually by defining and manipulating the requisite props.
        </pre>
      </template>

      <pf-table aria-label="Table text">
        <pf-thead>
          <pf-tr>
            <pf-th :width="30">Truncating text</pf-th>
            <pf-th>Wrapping table header text. This th text will wrap instead of truncate.</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr>
            <pf-td
              tabindex="0"
              data-label="Truncating text"
              @focus="tableTextFocused = true"
              @blur="tableTextFocused = false"
            >
              <pf-table-text :focused="tableTextFocused" wrap-modifier="truncate">
                This text will truncate instead of wrap.
              </pf-table-text>
            </pf-td>
            <pf-td data-label="Wrapping table header text. This th text will wrap instead of truncate.">
              <pf-table-text wrap-modifier="nowrap">
                <a href="#" @click.prevent>This is a link that needs to be on one line and fully readable.</a>
              </pf-table-text>
            </pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Empty state">
      <pf-table aria-label="Empty state table">
        <pf-thead>
          <pf-tr>
            <pf-th>Repositories</pf-th>
            <pf-th>Branches</pf-th>
            <pf-th>Pull requests</pf-th>
            <pf-th>Workspaces</pf-th>
            <pf-th>Last commit</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr>
            <pf-td :colspan="8">
              <pf-bullseye>
                <pf-empty-state heading-level="h2" title="No results found" variant="sm">
                  <template #icon><magnifying-glass-icon /></template>
                  <pf-empty-state-body>Clear all filters and try again.</pf-empty-state-body>
                  <pf-empty-state-footer>
                    <pf-empty-state-actions>
                      <pf-button variant="link">Clear all filters</pf-button>
                    </pf-empty-state-actions>
                  </pf-empty-state-footer>
                </pf-empty-state>
              </pf-bullseye>
            </pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Favoritable (implemented with sortable)">
      <template #intro>
        <pre v-md>
          To make a row favoritable, the table needs a favoritable column.
          Bind `v-model:favorited` on each row's first `pf-td` in the favoritable column.

          To make a favoritable column sortable, pass `sortable` and `favorites` to the favoritable column's `pf-th`. Binding its `v-model:favorited` renders a button to favorite all the rows beside the sort button.
        </pre>
      </template>

      <pf-table aria-label="Favoritable table" compact>
        <pf-thead>
          <pf-tr>
            <pf-th
              sortable
              favorites
              :sorted="favoritesSort.index === 0"
              v-model:direction="favoritesSort.direction"
              :favorited="headerFavorited"
              :favorite-attrs="{ 'aria-label': headerFavorited ? 'Unfavorite all' : 'Favorite all' }"
              aria-label="Favorite"
              @sort="favoritesSort.index = 0"
              @update:favorited="favoriteAll($event)"
            />
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="(repo, rowIndex) in sortedFavorites" :key="repo.name">
            <pf-td
              :row-index="rowIndex"
              :favorited="favoriteRepoNames.includes(repo.name)"
              @update:favorited="setFavorited(repo.name, $event)"
            />
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Tree table">
      <template #intro>
        <pre v-md>
          To enable a tree table:

          1. Pass the `tree-table` prop to the `pf-table` component
          2. Use a `pf-tree-row-wrapper` rather than `pf-tr`
          3. Pass the following to each `pf-tree-row-wrapper`:
             - `v-model:expanded` - Flag indicating the node is expanded and its children are visible
             - `v-model:details-expanded` - (optional) Flag indicating the row's details are visible in responsive view. The show row details button is rendered when bound.
             - `hidden` - Flag indicating the node's parent is collapsed and this node is hidden
             - `level` - number representing how many levels deep this node is nested
             - `posinset` - number representing where in the order this node sits amongst its siblings
             - `setsize` - number representing the number of children this node has
             - `v-model:checked` - (optional) checked state of the row checkbox, `null` for indeterminate. The checkbox is rendered when bound.
          4. Pass `tree-row` to the first `pf-td` in each row, with:
             - `row-index` - number representing the index of the row
             - an `icon` slot - (optional) icon to display before the row title
             - `toggle-attrs`, `select-attrs` and `details-toggle-attrs` - (optional) attributes, such as the accessible labels, for the expand/collapse toggle, the checkbox and the show row details button

          Note: If this table is going to be tested using axe-core, the tests will flag the use of aria-level,
          aria-posinset, and aria-setsize as violations. This is an intentional choice at this time so that
          the voice over technologies will recognize the flat table structure as a tree.
        </pre>
      </template>

      <pf-table tree-table aria-label="Tree table">
        <pf-thead>
          <pf-tr>
            <pf-th :width="40">{{ treeColumnNames.name }}</pf-th>
            <pf-th>{{ treeColumnNames.branches }}</pf-th>
            <pf-th>{{ treeColumnNames.prs }}</pf-th>
            <pf-th>{{ treeColumnNames.workspaces }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tree-row-wrapper
            v-for="row in flatTree"
            :key="row.node.name"
            :level="row.level"
            :posinset="row.posinset"
            :setsize="row.node.children?.length ?? 0"
            :hidden="row.hidden"
            :expanded="expandedNodeNames.includes(row.node.name)"
            :details-expanded="detailsNodeNames.includes(row.node.name)"
            :checked="isNodeChecked(row.node)"
            @update:expanded="expandedNodeNames = toggleName(expandedNodeNames, row.node.name, $event)"
            @update:details-expanded="detailsNodeNames = toggleName(detailsNodeNames, row.node.name, $event)"
            @update:checked="checkNode(row.node, !!$event)"
          >
            <pf-td
              tree-row
              :row-index="row.rowIndex"
              :data-label="treeColumnNames.name"
              :select-attrs="{ id: `checkbox_id_${row.node.name.toLowerCase().replace(/\s+/g, '_')}` }"
            >
              <template #icon>
                <leaf-icon v-if="!row.node.children" />
                <folder-open-icon v-else-if="expandedNodeNames.includes(row.node.name)" />
                <folder-icon v-else />
              </template>
              {{ row.node.name }}
            </pf-td>
            <pf-td :data-label="treeColumnNames.branches">{{ row.node.branches }}</pf-td>
            <pf-td :data-label="treeColumnNames.prs">{{ row.node.pullRequests }}</pf-td>
            <pf-td :data-label="treeColumnNames.workspaces">{{ row.node.workspaces }}</pf-td>
          </pf-tree-row-wrapper>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Flat tree table with no inset">
      <template #intro>
        <pre v-md>
          To remove the inset used to leave space for the expand/collapse toggle in a flat tree table, use the `no-inset` prop on the `pf-table` component.
        </pre>
      </template>

      <pf-table tree-table aria-label="Tree table" no-inset>
        <pf-thead>
          <pf-tr>
            <pf-th :width="40">{{ treeColumnNames.name }}</pf-th>
            <pf-th>{{ treeColumnNames.branches }}</pf-th>
            <pf-th>{{ treeColumnNames.prs }}</pf-th>
            <pf-th>{{ treeColumnNames.workspaces }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tree-row-wrapper
            v-for="(node, rowIndex) in flatTreeNodes"
            :key="node.name"
            :level="1"
            :posinset="rowIndex + 1"
            :setsize="0"
            :details-expanded="flatDetailsNames.includes(node.name)"
            :checked="flatCheckedNames.includes(node.name)"
            @update:details-expanded="flatDetailsNames = toggleName(flatDetailsNames, node.name, $event)"
            @update:checked="flatCheckedNames = toggleName(flatCheckedNames, node.name, !!$event)"
          >
            <pf-td
              tree-row
              :row-index="rowIndex"
              :data-label="treeColumnNames.name"
              :select-attrs="{ id: `checkbox_id_flat_${rowIndex}` }"
            >
              <template #icon><leaf-icon /></template>
              {{ node.name }}
            </pf-td>
            <pf-td :data-label="treeColumnNames.branches">{{ node.branches }}</pf-td>
            <pf-td :data-label="treeColumnNames.prs">{{ node.pullRequests }}</pf-td>
            <pf-td :data-label="treeColumnNames.workspaces">{{ node.workspaces }}</pf-td>
          </pf-tree-row-wrapper>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Draggable row table">
      <template #intro>
        <pre v-md>
          To make a row draggable:

          1. The table needs a draggable column.
          2. Each draggable `pf-tr` needs to be passed `draggable`, `@drop`, `@dragend`, and `@dragstart`.
          3. The `pf-tbody` needs `@dragover`, `@drop`, and `@dragleave`.
          4. While the user is dragging a row, the `pf-m-drag-over` class needs to be applied to `pf-table`.
          5. The draggable `pf-td` in each row needs the `draggable-row` prop.
        </pre>
      </template>

      <pf-table aria-label="Draggable table" :class="{ 'pf-m-drag-over': draggedItemId !== null }">
        <pf-thead>
          <pf-tr>
            <pf-th screen-reader-text="Drag and drop" />
            <pf-th v-for="column in draggableColumns" :key="column">{{ column }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody ref="draggableBody" @dragover.prevent="onDragOver" @drop="onDragOver" @dragleave="onDragLeave">
          <pf-tr
            v-for="row in draggableRowsInOrder"
            :id="row.id"
            :key="row.id"
            draggable="true"
            :class="{ 'pf-m-ghost-row': draggedItemId === row.id }"
            :aria-pressed="draggedItemId === row.id"
            @dragstart="onDragStart($event, row.id)"
            @drop="onDrop"
            @dragend="onDragEnd"
          >
            <pf-td draggable-row :draggable-attrs="{ id: `draggable-row-${row.id}` }" />
            <pf-td :data-label="draggableColumns[0]">{{ row.repository }}</pf-td>
            <pf-td :data-label="draggableColumns[1]">{{ row.branch }}</pf-td>
            <pf-td :data-label="draggableColumns[2]">{{ row.pullRequest }}</pf-td>
            <pf-td :data-label="draggableColumns[3]">{{ row.workspace }}</pf-td>
            <pf-td :data-label="draggableColumns[4]">{{ row.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <pre v-md>
      ### Sticky table modifiers

      To make certain columns and the header sticky, the table must be wrapped in a combination of `pf-outer-scroll-container` and `pf-inner-scroll-container`. For sticky columns, only `pf-inner-scroll-container` is required. For sticky headers, and sticky headers with sticky columns, both containers are required to ensure the sticky behavior behaves correctly.

      **Note:** Sticky table headers and columns have a higher `z-index` than the `z-index` used for menus (dropdown, select, etc). The intent is that the contents of a scrollable table will scroll under the sticky header/column, including any expanded menus. However, there may be use cases where a menu needs to appear on top of a sticky header/column, such as an expanded menu in a toolbar above a table with a sticky header.

      There are a few ways this can be handled:

      - Manipulate the `z-index` of the menu and/or table headers/columns manually.
      - Use the `append-to` prop of components with menus to append the menu to an element outside of the table (e.g., the table's parent element) so that the menu has a higher stacking context than - and can appear on top of - sticky headers/columns as well as appear outside of any scrollable content in the table.
      - In the case where the menu is outside of the table (e.g., above the table in a toolbar, or below the table and the menu expands up), assign the entire table a lower `z-index` than the `z-index` of the menu. This creates a lower stacking context for the entire table compared to the menu, while preserving the stacking context of the elements inside of the table.
    </pre>

    <story-canvas title="Sticky column">
      <template #intro>
        <pre v-md>
          To make a column sticky, wrap `pf-table` with `pf-inner-scroll-container` and add the following properties to the `pf-th` or `pf-td` that should be sticky:

          - `sticky`
          - `right-border` for a left-aligned sticky column, or `left-border` for a right-aligned sticky column.

          To prevent the default text wrapping behavior and allow horizontal scrolling, all `pf-th` or `pf-td` cells should also have the `modifier="nowrap"` property. To set the minimum width of the sticky column, use the `sticky-min-width` property. For multiple sticky columns, use the `sticky-left-offset` and `sticky-right-offset` properties for additional left or right sticky columns.
        </pre>
      </template>

      <pf-inner-scroll-container>
        <pf-table aria-label="Sticky column table" grid-break-point="">
          <pf-thead>
            <pf-tr>
              <pf-th
                sticky
                right-border
                modifier="truncate"
                sortable
                :sorted="stickySort.index === 0"
                v-model:direction="stickySort.direction"
                @sort="stickySort.index = 0"
                >{{ factColumns[0] }}</pf-th
              >
              <pf-th
                modifier="truncate"
                sortable
                :sorted="stickySort.index === 1"
                v-model:direction="stickySort.direction"
                @sort="stickySort.index = 1"
                >{{ factColumns[1] }}</pf-th
              >
              <pf-th v-for="column in factColumns.slice(2)" :key="column" modifier="truncate">{{ column }}</pf-th>
            </pf-tr>
          </pf-thead>
          <pf-tbody>
            <pf-tr v-for="fact in sortedFacts(stickySort)" :key="fact.name">
              <pf-th sticky right-border modifier="truncate">{{ fact.name }}</pf-th>
              <pf-td modifier="nowrap" :data-label="factColumns[1]">{{ fact.state }}</pf-td>
              <pf-td v-for="(detail, i) in fact.details" :key="i" modifier="nowrap" :data-label="factColumns[i + 2]">
                {{ detail }}
              </pf-td>
            </pf-tr>
          </pf-tbody>
        </pf-table>
      </pf-inner-scroll-container>
    </story-canvas>

    <story-canvas title="Multiple left-aligned sticky columns">
      <template #intro>
        <pre v-md>
          To make multiple left-aligned columns sticky:

          - wrap `pf-table` with `pf-inner-scroll-container`
          - add `sticky` to all columns that should be sticky
          - add `right-border` to the rightmost sticky column
          - add `sticky-left-offset` to each sticky column with a value that equals the combined width - set by `sticky-min-width` - of the previous sticky columns. The leftmost sticky column should have a value of `0`, which is the default of this property.

          To prevent the default text wrapping behavior and allow horizontal scrolling, all `pf-th` or `pf-td` cells should also have the `modifier="nowrap"` property.
        </pre>
      </template>

      <pf-inner-scroll-container>
        <pf-table aria-label="Multiple sticky column table" grid-break-point="">
          <pf-thead>
            <pf-tr>
              <pf-th
                sticky
                modifier="truncate"
                sortable
                :sorted="multiStickySort.index === 0"
                v-model:direction="multiStickySort.direction"
                @sort="multiStickySort.index = 0"
                >{{ factColumns[0] }}</pf-th
              >
              <pf-th
                sticky
                sticky-min-width="120px"
                sticky-left-offset="120px"
                right-border
                modifier="truncate"
                sortable
                :sorted="multiStickySort.index === 1"
                v-model:direction="multiStickySort.direction"
                @sort="multiStickySort.index = 1"
                >{{ factColumns[1] }}</pf-th
              >
              <pf-th v-for="column in factColumns.slice(2)" :key="column" modifier="truncate">{{ column }}</pf-th>
            </pf-tr>
          </pf-thead>
          <pf-tbody>
            <pf-tr v-for="fact in sortedFacts(multiStickySort)" :key="fact.name">
              <pf-th sticky modifier="truncate">{{ fact.name }}</pf-th>
              <pf-th sticky sticky-min-width="120px" sticky-left-offset="120px" modifier="truncate" right-border>
                <blueprint-icon /> {{ fact.state }}
              </pf-th>
              <pf-td v-for="(detail, i) in fact.details" :key="i" modifier="nowrap" :data-label="factColumns[i + 2]">
                {{ detail }}
              </pf-td>
            </pf-tr>
          </pf-tbody>
        </pf-table>
      </pf-inner-scroll-container>
    </story-canvas>

    <story-canvas title="Multiple right-aligned sticky columns">
      <template #intro>
        <pre v-md>
          To make multiple right-aligned columns sticky:

          - wrap `pf-table` with `pf-inner-scroll-container`
          - add `sticky` to all columns that should be sticky
          - add `left-border` to the leftmost sticky column
          - add `sticky-right-offset` to each sticky column with a value that equals the combined width - set by `sticky-min-width` - of the next sticky columns. The rightmost sticky column should have a value of `0`, which is the default of this property.

          To prevent the default text wrapping behavior and allow horizontal scrolling, all `pf-th` or `pf-td` cells should also have the `modifier="nowrap"` property.
        </pre>
      </template>

      <pf-inner-scroll-container>
        <pf-table aria-label="Sticky column table" grid-break-point="">
          <pf-thead>
            <pf-tr>
              <pf-th
                modifier="truncate"
                sortable
                :sorted="rightStickySort.index === 0"
                v-model:direction="rightStickySort.direction"
                @sort="rightStickySort.index = 0"
                >{{ factColumns[0] }}</pf-th
              >
              <pf-th
                modifier="truncate"
                sortable
                :sorted="rightStickySort.index === 1"
                v-model:direction="rightStickySort.direction"
                @sort="rightStickySort.index = 1"
                >{{ factColumns[1] }}</pf-th
              >
              <pf-th v-for="column in factColumns.slice(2, 7)" :key="column" modifier="truncate">{{ column }}</pf-th>
              <pf-th sticky left-border sticky-min-width="130px" sticky-right-offset="130px" modifier="truncate">
                {{ factColumns[7] }}
              </pf-th>
              <pf-th sticky sticky-min-width="130px" modifier="truncate">{{ factColumns[8] }}</pf-th>
            </pf-tr>
          </pf-thead>
          <pf-tbody>
            <pf-tr v-for="fact in sortedFacts(rightStickySort)" :key="fact.name">
              <pf-th modifier="nowrap">{{ fact.name }}</pf-th>
              <pf-td modifier="nowrap" :data-label="factColumns[1]">{{ fact.state }}</pf-td>
              <pf-td
                v-for="(detail, i) in fact.details.slice(0, 5)"
                :key="i"
                modifier="nowrap"
                :data-label="factColumns[i + 2]"
              >
                {{ detail }}
              </pf-td>
              <pf-td
                sticky
                left-border
                sticky-min-width="130px"
                sticky-right-offset="130px"
                modifier="nowrap"
                :data-label="factColumns[7]"
              >
                {{ fact.details[5] }}
              </pf-td>
              <pf-td sticky sticky-min-width="130px" modifier="nowrap" :data-label="factColumns[8]">
                {{ fact.details[6] }}
              </pf-td>
            </pf-tr>
          </pf-tbody>
        </pf-table>
      </pf-inner-scroll-container>
    </story-canvas>

    <story-canvas title="Dynamic sticky header">
      <template #intro>
        <pre v-md>
          A sticky header may alternatively be implemented with two properties: `sticky-header-base` and `sticky-header-stuck` - which allows separate control of the sticky position and sticky styling. `sticky-header-base` should always be applied to make the header position sticky, and `sticky-header-stuck` may be applied dynamically to enable the sticky styling, such as when the sticky header is not at the top of the scroll parent as shown in the example.

          `sticky-header` acts as if both properties are present and true when applied, and is useful when dynamic sticky styling is not necessary.
        </pre>
      </template>

      <div style="height: 400px">
        <pf-inner-scroll-container @scroll="headerStuck = ($event.target as HTMLElement).scrollTop > 0">
          <pf-table
            aria-label="Dynamic sticky header table"
            grid-break-point=""
            sticky-header-base
            :sticky-header-stuck="headerStuck"
          >
            <pf-thead>
              <pf-tr>
                <pf-th v-for="column in factColumns" :key="column" modifier="truncate">{{ column }}</pf-th>
              </pf-tr>
            </pf-thead>
            <pf-tbody>
              <pf-tr v-for="fact in facts" :key="fact.name">
                <pf-td modifier="nowrap" :data-label="factColumns[0]">{{ fact.name }}</pf-td>
                <pf-td modifier="nowrap" :data-label="factColumns[1]"><blueprint-icon /> {{ fact.state }}</pf-td>
                <pf-td v-for="(detail, i) in fact.details" :key="i" modifier="nowrap" :data-label="factColumns[i + 2]">
                  {{ detail }}
                </pf-td>
              </pf-tr>
            </pf-tbody>
          </pf-table>
        </pf-inner-scroll-container>
      </div>
    </story-canvas>

    <story-canvas title="Sticky columns and header">
      <template #intro>
        <pre v-md>
          To maintain proper sticky behavior across sticky columns and header, `pf-table` must be wrapped with `pf-outer-scroll-container` and `pf-inner-scroll-container`.
        </pre>
      </template>

      <div style="height: 400px">
        <pf-outer-scroll-container>
          <pf-inner-scroll-container>
            <pf-table aria-label="Sticky columns and header table" grid-break-point="" sticky-header>
              <pf-thead>
                <pf-tr>
                  <pf-th
                    sticky
                    modifier="truncate"
                    sortable
                    :sorted="stickyHeaderSort.index === 0"
                    v-model:direction="stickyHeaderSort.direction"
                    @sort="stickyHeaderSort.index = 0"
                    >{{ factColumns[0] }}</pf-th
                  >
                  <pf-th
                    sticky
                    sticky-min-width="120px"
                    sticky-left-offset="120px"
                    right-border
                    modifier="truncate"
                    sortable
                    :sorted="stickyHeaderSort.index === 1"
                    v-model:direction="stickyHeaderSort.direction"
                    @sort="stickyHeaderSort.index = 1"
                    >{{ factColumns[1] }}</pf-th
                  >
                  <pf-th v-for="column in factColumns.slice(2)" :key="column" modifier="truncate">{{ column }}</pf-th>
                </pf-tr>
              </pf-thead>
              <pf-tbody>
                <pf-tr v-for="fact in sortedFacts(stickyHeaderSort)" :key="fact.name">
                  <pf-th sticky modifier="truncate">{{ fact.name }}</pf-th>
                  <pf-th sticky sticky-min-width="120px" sticky-left-offset="120px" modifier="truncate" right-border>
                    <blueprint-icon /> {{ fact.state }}
                  </pf-th>
                  <pf-td
                    v-for="(detail, i) in fact.details"
                    :key="i"
                    modifier="nowrap"
                    :data-label="factColumns[i + 2]"
                  >
                    {{ detail }}
                  </pf-td>
                </pf-tr>
              </pf-tbody>
            </pf-table>
          </pf-inner-scroll-container>
        </pf-outer-scroll-container>
      </div>
    </story-canvas>

    <story-canvas title="Nested column headers">
      <template #intro>
        <pre v-md>
          To make a nested column header:

          1. Wrap `pf-table` with `pf-inner-scroll-container`.
          2. Pass `nested-header` to `pf-thead`.
          3. Pass two `pf-tr` as children of `pf-thead`.
          4. If the parent `pf-table` has a sticky header, pass an additional `pf-tr border-row` in `pf-thead` to create the bottom border in the `pf-thead`.

          The first `pf-tr` represents the top level of columns, and each must pass either `rowspan` if the column does not contain sub columns or `colspan` if the column contains sub columns. The value of `rowspan` is equal to the number of rows the nested header will span, typically `2`, and the value of `colspan` is equal to the number of sub columns in a column. Each `pf-th` except the last should also pass `right-border`.

          The second `pf-tr` represents the second level of sub columns. The `pf-th` in this row each should pass `subheader`, and the last sub column of a column should also pass `right-border`.
        </pre>
      </template>

      <pf-inner-scroll-container>
        <pf-table aria-label="Nested column headers table" grid-break-point="">
          <pf-thead nested-header>
            <pf-tr>
              <pf-th right-border :colspan="3">{{ connectionColumns.pods }}</pf-th>
              <pf-th right-border :colspan="2">{{ connectionColumns.ports }}</pf-th>
              <pf-th
                v-for="(key, i) in connectionSortKeys"
                :key="key"
                modifier="fitContent"
                :right-border="i < connectionSortKeys.length - 1"
                :rowspan="2"
                sortable
                :sorted="nestedSort.index === i + 5"
                v-model:direction="nestedSort.direction"
                @sort="nestedSort.index = i + 5"
                >{{ connectionColumns[key] }}</pf-th
              >
            </pf-tr>
            <pf-tr>
              <pf-th
                v-for="(column, i) in connectionSubColumns"
                :key="i"
                subheader
                :modifier="i > 1 ? 'fitContent' : undefined"
                :right-border="i === 2 || i === 4"
                sortable
                :sorted="nestedSort.index === i"
                v-model:direction="nestedSort.direction"
                @sort="nestedSort.index = i"
                >{{ column }}</pf-th
              >
            </pf-tr>
          </pf-thead>
          <pf-tbody>
            <pf-tr v-for="connection in sortedConnections(nestedSort)" :key="connection.source.podName">
              <pf-td :data-label="connectionColumns.source">{{ connection.source.podName }}</pf-td>
              <pf-td :data-label="connectionColumns.destination">{{ connection.destination.podName }}</pf-td>
              <pf-td :data-label="connectionColumns.datetime">
                <div>
                  <time :datetime="connection.timestamp">{{ formatTimestamp(connection.timestamp) }}</time>
                </div>
              </pf-td>
              <pf-td :data-label="connectionColumns.source">
                <pf-stack>
                  <pf-stack-item
                    ><span>{{ connection.source.port.num }}</span></pf-stack-item
                  >
                  <pf-stack-item
                    ><small>({{ connection.source.port.protocol }})</small></pf-stack-item
                  >
                </pf-stack>
              </pf-td>
              <pf-td :data-label="connectionColumns.destination">
                <pf-stack>
                  <pf-stack-item
                    ><span>{{ connection.destination.port.num }}</span></pf-stack-item
                  >
                  <pf-stack-item
                    ><small>({{ connection.destination.port.protocol }})</small></pf-stack-item
                  >
                </pf-stack>
              </pf-td>
              <pf-td :data-label="connectionColumns.protocol">{{ connection.protocol }}</pf-td>
              <pf-td :data-label="connectionColumns.flowRate">{{ connection.flowRate }}</pf-td>
              <pf-td :data-label="connectionColumns.traffic">{{ connection.traffic }}</pf-td>
              <pf-td :data-label="connectionColumns.packets">{{ connection.packets }}</pf-td>
            </pf-tr>
          </pf-tbody>
        </pf-table>
      </pf-inner-scroll-container>
    </story-canvas>

    <story-canvas title="Nested column headers and expandable rows">
      <pf-inner-scroll-container>
        <pf-table
          expandable
          animations
          aria-label="Nested column headers with expandable rows table"
          grid-break-point=""
        >
          <pf-thead nested-header>
            <pf-tr>
              <pf-th screen-reader-text="Row expansion" :rowspan="2" />
              <pf-th :width="35" :rowspan="2" right-border>{{ teamColumns.team }}</pf-th>
              <pf-th :colspan="3" right-border>{{ teamColumns.members }}</pf-th>
              <pf-th :width="25" :rowspan="2">{{ teamColumns.contact }}</pf-th>
            </pf-tr>
            <pf-tr reset-offset>
              <pf-th subheader>{{ teamColumns.lead }}</pf-th>
              <pf-th subheader>{{ teamColumns.interaction }}</pf-th>
              <pf-th subheader right-border>{{ teamColumns.visual }}</pf-th>
            </pf-tr>
          </pf-thead>
          <pf-tbody
            v-for="(team, rowIndex) in teams"
            :key="team.name"
            :expanded="expandedTeamNames.includes(team.name)"
          >
            <pf-tr :content-expanded="expandedTeamNames.includes(team.name)">
              <pf-td
                :row-index="rowIndex"
                :expanded="expandedTeamNames.includes(team.name)"
                expand-id="composable-nested-expandable-example"
                @update:expanded="expandedTeamNames = toggleName(expandedTeamNames, team.name, $event)"
              />
              <pf-td :data-label="teamColumns.team">{{ team.name }}</pf-td>
              <pf-td :data-label="teamColumns.lead">{{ team.members.lead }}</pf-td>
              <pf-td :data-label="teamColumns.interaction">{{ team.members.interaction }}</pf-td>
              <pf-td :data-label="teamColumns.visual">{{ team.members.visual }}</pf-td>
              <pf-td :data-label="teamColumns.contact">
                <pf-button variant="link" component="a" :href="`mailto:${team.email}`" inline>
                  Email team {{ rowIndex }}
                </pf-button>
              </pf-td>
            </pf-tr>
            <pf-tr :expanded="expandedTeamNames.includes(team.name)">
              <pf-td :data-label="`Team ${team.name} description`" :colspan="6">
                <pf-expandable-row-content>{{ team.description }}</pf-expandable-row-content>
              </pf-td>
            </pf-tr>
          </pf-tbody>
        </pf-table>
      </pf-inner-scroll-container>
    </story-canvas>

    <story-canvas title="Expandable with nested table">
      <pf-table expandable animations aria-label="Simple table">
        <pf-thead>
          <pf-tr>
            <pf-th screen-reader-text="Row expansion" />
            <pf-th :width="20">{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>Link</pf-th>
            <pf-th>Action</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody
          v-for="(repo, rowIndex) in nodeRepositories"
          :key="repo.name"
          :expanded="expandedNodeRepos.includes(repo.name)"
        >
          <pf-tr :content-expanded="expandedNodeRepos.includes(repo.name)">
            <pf-td
              :row-index="rowIndex"
              :expanded="repo.nested ? expandedNodeRepos.includes(repo.name) : undefined"
              expand-id="composable-nested-table-expandable-example"
              @update:expanded="expandedNodeRepos = toggleName(expandedNodeRepos, repo.name, $event)"
            />
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td data-label="Link"
              ><a>{{ repo.link }}</a></pf-td
            >
            <pf-td data-label="Action">
              <pf-actions-column>
                <pf-dropdown-item @click="log(`clicked on Some action, on row ${repo.name}`)"
                  >Some action</pf-dropdown-item
                >
                <pf-dropdown-item :to="patternflyUrl">Link action</pf-dropdown-item>
                <pf-divider component="li" />
                <pf-dropdown-item @click="log(`clicked on Third action, on row ${repo.name}`)"
                  >Third action</pf-dropdown-item
                >
              </pf-actions-column>
            </pf-td>
          </pf-tr>
          <pf-tr v-if="repo.nested" :expanded="expandedNodeRepos.includes(repo.name)">
            <pf-td :no-padding="repo.noPadding" :data-label="`${columnNames.name} expended`" :colspan="6">
              <pf-expandable-row-content>
                <pf-table v-if="repo.nested === 'table'" aria-label="Simple table" compact>
                  <pf-thead>
                    <pf-tr>
                      <pf-th>{{ columnNames.name }}</pf-th>
                      <pf-th>{{ columnNames.branches }}</pf-th>
                      <pf-th>{{ columnNames.prs }}</pf-th>
                      <pf-th>{{ columnNames.workspaces }}</pf-th>
                      <pf-th>{{ columnNames.lastCommit }}</pf-th>
                    </pf-tr>
                  </pf-thead>
                  <pf-tbody>
                    <pf-tr v-for="i in 4" :key="i">
                      <pf-td :data-label="columnNames.name">Repository {{ i }}</pf-td>
                      <pf-td :data-label="columnNames.branches">25</pf-td>
                      <pf-td :data-label="columnNames.prs">25</pf-td>
                      <pf-td :data-label="columnNames.workspaces">5</pf-td>
                      <pf-td :data-label="columnNames.lastCommit">2 days ago</pf-td>
                    </pf-tr>
                  </pf-tbody>
                </pf-table>
                <p v-else-if="repo.nested === 'paragraph'">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <template v-else>{{ repo.nested }}</template>
              </pf-expandable-row-content>
            </pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Nested sticky header">
      <div style="height: 250px">
        <pf-inner-scroll-container>
          <pf-table aria-label="Nested column headers table" grid-break-point="" sticky-header>
            <pf-thead nested-header>
              <pf-tr>
                <pf-th right-border :colspan="3">{{ connectionColumns.pods }}</pf-th>
                <pf-th right-border :colspan="2">{{ connectionColumns.ports }}</pf-th>
                <pf-th
                  v-for="(key, i) in connectionSortKeys"
                  :key="key"
                  modifier="fitContent"
                  :right-border="i < connectionSortKeys.length - 1"
                  :rowspan="2"
                  sortable
                  :sorted="nestedStickySort.index === i + 5"
                  v-model:direction="nestedStickySort.direction"
                  @sort="nestedStickySort.index = i + 5"
                  >{{ connectionColumns[key] }}</pf-th
                >
              </pf-tr>
              <pf-tr>
                <pf-th
                  v-for="(column, i) in connectionSubColumns"
                  :key="i"
                  subheader
                  :modifier="i > 1 ? 'fitContent' : undefined"
                  :right-border="i === 2 || i === 4"
                  sortable
                  :sorted="nestedStickySort.index === i"
                  v-model:direction="nestedStickySort.direction"
                  @sort="nestedStickySort.index = i"
                  >{{ column }}</pf-th
                >
              </pf-tr>
              <pf-tr border-row aria-hidden="true">
                <pf-td :colspan="9" />
              </pf-tr>
            </pf-thead>
            <pf-tbody>
              <pf-tr v-for="connection in sortedConnections(nestedStickySort)" :key="connection.source.podName">
                <pf-td :data-label="connectionColumns.source">{{ connection.source.podName }}</pf-td>
                <pf-td :data-label="connectionColumns.destination">{{ connection.destination.podName }}</pf-td>
                <pf-td :data-label="connectionColumns.datetime">
                  <div>
                    <time :datetime="connection.timestamp">{{ formatTimestamp(connection.timestamp) }}</time>
                  </div>
                </pf-td>
                <pf-td :data-label="connectionColumns.source">
                  <pf-stack>
                    <pf-stack-item
                      ><span>{{ connection.source.port.num }}</span></pf-stack-item
                    >
                    <pf-stack-item
                      ><small>({{ connection.source.port.protocol }})</small></pf-stack-item
                    >
                  </pf-stack>
                </pf-td>
                <pf-td :data-label="connectionColumns.destination">
                  <pf-stack>
                    <pf-stack-item
                      ><span>{{ connection.destination.port.num }}</span></pf-stack-item
                    >
                    <pf-stack-item
                      ><small>({{ connection.destination.port.protocol }})</small></pf-stack-item
                    >
                  </pf-stack>
                </pf-td>
                <pf-td :data-label="connectionColumns.protocol">{{ connection.protocol }}</pf-td>
                <pf-td :data-label="connectionColumns.flowRate">{{ connection.flowRate }}</pf-td>
                <pf-td :data-label="connectionColumns.traffic">{{ connection.traffic }}</pf-td>
                <pf-td :data-label="connectionColumns.packets">{{ connection.packets }}</pf-td>
              </pf-tr>
            </pf-tbody>
          </pf-table>
        </pf-inner-scroll-container>
      </div>
    </story-canvas>

    <story-canvas title="Sticky footer">
      <template #intro>
        <pre v-md>
          Use `pf-tfoot` for semantic table footer rows. Set `sticky-footer` on `pf-table` to keep the footer visible while its scroll container is scrolling.
        </pre>
      </template>

      <div style="height: 400px">
        <pf-inner-scroll-container>
          <pf-table aria-label="Sticky footer table" sticky-footer>
            <pf-thead>
              <pf-tr>
                <pf-th>Item</pf-th>
                <pf-th>Value</pf-th>
              </pf-tr>
            </pf-thead>
            <pf-tbody>
              <pf-tr v-for="row in 12" :key="row">
                <pf-td data-label="Item">Item {{ row }}</pf-td>
                <pf-td data-label="Value">Value {{ row }}</pf-td>
              </pf-tr>
            </pf-tbody>
            <pf-tfoot>
              <pf-tr>
                <pf-td :colspan="2">Total: 12 items</pf-td>
              </pf-tr>
            </pf-tfoot>
          </pf-table>
        </pf-inner-scroll-container>
      </div>
    </story-canvas>

    <story-canvas title="Dynamic sticky footer">
      <template #intro>
        <pre v-md>
          A sticky footer may alternatively be implemented with two properties: `sticky-footer-base` and `sticky-footer-stuck` - which allows separate control of the sticky position and sticky styling. `sticky-footer-base` should always be applied to make the footer position sticky, and `sticky-footer-stuck` may be applied dynamically to enable the sticky styling, such as when the sticky footer is not at the bottom of the scroll parent as shown in the example.

          `sticky-footer` acts as if both properties are present and true when applied, and is useful when dynamic sticky styling is not necessary.
        </pre>
      </template>

      <div style="height: 400px">
        <pf-inner-scroll-container ref="footerScroll" @scroll="updateFooterStuck">
          <pf-table aria-label="Dynamic sticky footer table" sticky-footer-base :sticky-footer-stuck="footerStuck">
            <pf-thead>
              <pf-tr>
                <pf-th>Item</pf-th>
                <pf-th>Value</pf-th>
              </pf-tr>
            </pf-thead>
            <pf-tbody>
              <pf-tr v-for="row in 12" :key="row">
                <pf-td data-label="Item">Item {{ row }}</pf-td>
                <pf-td data-label="Value">Value {{ row }}</pf-td>
              </pf-tr>
            </pf-tbody>
            <pf-tfoot>
              <pf-tr>
                <pf-td :colspan="2">Total: 12 items</pf-td>
              </pf-tr>
            </pf-tfoot>
          </pf-table>
        </pf-inner-scroll-container>
      </div>
    </story-canvas>

    <story-canvas title="Striped">
      <template #intro>
        <pre v-md>
          To apply striping to a basic table, add the `striped` property to `pf-table`.
        </pre>
      </template>

      <pf-table aria-label="Simple table" striped>
        <pf-caption>Simple striped table using composable components</pf-caption>
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="repo in stripedRepositories" :key="repo.name">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Striped expandable">
      <template #intro>
        <pre v-md>
          To apply striping to an expandable table, add the `striped` and `expandable` properties to `pf-table`.
        </pre>
      </template>

      <pf-checkbox id="toggle-compact-striped" v-model="stripedCompact" label="Compact" name="toggle-compact-striped" />
      <pf-table aria-label="Expandable table" :compact="stripedCompact" striped expandable animations>
        <pf-thead>
          <pf-tr>
            <pf-th screen-reader-text="Row expansion" />
            <pf-th :width="25">{{ columnNames.name }}</pf-th>
            <pf-th :width="10">{{ columnNames.branches }}</pf-th>
            <pf-th :width="15">{{ columnNames.prs }}</pf-th>
            <pf-th :width="30">{{ columnNames.workspaces }}</pf-th>
            <pf-th :width="10">{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody
          v-for="(repo, rowIndex) in expandableRepositories"
          :key="repo.name"
          :expanded="stripedExpandedNames.includes(repo.name)"
        >
          <pf-tr :content-expanded="stripedExpandedNames.includes(repo.name)">
            <pf-td
              :row-index="rowIndex"
              :expanded="repo.details ? stripedExpandedNames.includes(repo.name) : undefined"
              expand-id="composable-striped-expandable-example"
              @update:expanded="stripedExpandedNames = toggleName(stripedExpandedNames, repo.name, $event)"
            />
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
          <pf-tr v-if="repo.details" :expanded="stripedExpandedNames.includes(repo.name)">
            <pf-td v-if="!detailLayout(repo).fullWidth" />
            <template v-for="(detail, i) in detailLayout(repo).details" :key="i">
              <pf-td
                :data-label="`Repo detail ${i + 1}`"
                :no-padding="detailLayout(repo).noPadding"
                :colspan="detail.colspan"
              >
                <pf-expandable-row-content>{{ detail.text }}</pf-expandable-row-content>
              </pf-td>
            </template>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Striped multiple tbody">
      <template #intro>
        <pre v-md>
          When there are multiple `pf-tbody` components within a table, a more granular application of striping may be controlled by adding either the `even-striped` or `odd-striped` properties to `pf-tbody`. These properties will stripe even or odd rows within that `pf-tbody` respectively.
        </pre>
      </template>

      <pf-table aria-label="Simple table">
        <pf-caption>Striped table using multiple tbody components</pf-caption>
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody
          v-for="(group, groupIndex) in stripedGroups"
          :key="groupIndex"
          :odd-striped="groupIndex === 0"
          :even-striped="groupIndex === 1"
        >
          <pf-tr v-for="repo in group" :key="repo.name">
            <pf-td :data-label="columnNames.name">
              {{ repo.name }}
              <template v-if="repo.description">
                <br />
                <small>{{ repo.description }}</small>
              </template>
            </pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>

    <story-canvas title="Striped tr">
      <template #intro>
        <pre v-md>
          To manually control striping, add the `striped` property to each desired `pf-tr`. This replaces adding the `striped` property to `pf-table`.
        </pre>
      </template>

      <pf-table aria-label="Simple table">
        <pf-caption>Manually striped table using composable components</pf-caption>
        <pf-thead>
          <pf-tr>
            <pf-th>{{ columnNames.name }}</pf-th>
            <pf-th>{{ columnNames.branches }}</pf-th>
            <pf-th>{{ columnNames.prs }}</pf-th>
            <pf-th>{{ columnNames.workspaces }}</pf-th>
            <pf-th>{{ columnNames.lastCommit }}</pf-th>
          </pf-tr>
        </pf-thead>
        <pf-tbody>
          <pf-tr v-for="(repo, index) in stripedRepositories" :key="repo.name" :striped="index % 2 === 0">
            <pf-td :data-label="columnNames.name">{{ repo.name }}</pf-td>
            <pf-td :data-label="columnNames.branches">{{ repo.branches }}</pf-td>
            <pf-td :data-label="columnNames.prs">{{ repo.prs }}</pf-td>
            <pf-td :data-label="columnNames.workspaces">{{ repo.workspaces }}</pf-td>
            <pf-td :data-label="columnNames.lastCommit">{{ repo.lastCommit }}</pf-td>
          </pf-tr>
        </pf-tbody>
      </pf-table>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref, useTemplateRef } from 'vue';
import { useKeyModifier } from '@vueuse/core';
import ArrowDownWideShortIcon from '@vue-patternfly/icons/arrow-down-wide-short-icon';
import CheckIcon from '@vue-patternfly/icons/check-icon';
import CodeBranchIcon from '@vue-patternfly/icons/code-branch-icon';
import CodeIcon from '@vue-patternfly/icons/code-icon';
import CubeIcon from '@vue-patternfly/icons/cube-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import FolderIcon from '@vue-patternfly/icons/folder-icon';
import FolderOpenIcon from '@vue-patternfly/icons/folder-open-icon';
import LeafIcon from '@vue-patternfly/icons/leaf-icon';
import MagnifyingGlassIcon from '@vue-patternfly/icons/magnifying-glass-icon';
import PenToSquareIcon from '@vue-patternfly/icons/pen-to-square-icon';
import XmarkIcon from '@vue-patternfly/icons/xmark-icon';
import BlueprintIcon from '@vue-patternfly/icons/blueprint-icon';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

interface SortState {
  index: number | null;
  direction: 'asc' | 'desc';
}

const log = (message: string) => console.log(message);
const patternflyUrl = 'https://www.patternfly.org';

const columnNames = {
  name: 'Repositories',
  branches: 'Branches',
  prs: 'Pull requests',
  workspaces: 'Workspaces',
  lastCommit: 'Last commit',
};

const repositories: Repository[] = [
  { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
  { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
  { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' },
];

function sortRows<T>(rows: T[], sort: SortState, values: (row: T) => (string | number | null)[]) {
  if (sort.index === null) {
    return rows;
  }
  const index = sort.index;
  return [...rows].sort((a, b) => {
    const aValue = values(a)[index] ?? '';
    const bValue = values(b)[index] ?? '';
    const result =
      typeof aValue === 'number' && typeof bValue === 'number'
        ? aValue - bValue
        : String(aValue).localeCompare(String(bValue));
    return sort.direction === 'asc' ? result : -result;
  });
}

function toggleName(names: string[], name: string, include: boolean | undefined) {
  const others = names.filter(n => n !== name);
  return include ? [...others, name] : others;
}

// Basic
const basicVariant = ref<'' | 'compact' | 'compactBorderless'>('');

// Sortable
const sortableRepositories: Repository[] = [
  { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
  { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
  { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' },
];
const sortable = reactive<SortState>({ index: null, direction: 'asc' });
const sortableCustom = reactive<SortState>({ index: null, direction: 'asc' });
const sortableCustomOpen = ref(false);
const sortableCustomSelected = computed(() =>
  sortableCustom.index === null ? [sortableCustom.direction] : [sortableCustom.direction, sortableCustom.index],
);
const sortedRepositories = (sort: SortState) =>
  sortRows(sortableRepositories, sort, r => [r.name, r.branches, r.prs, r.workspaces, r.lastCommit]);

// Selectable
const selectableRepositories: Repository[] = [
  { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
  { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
  { name: 'b', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
  { name: 'c', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
  { name: 'd', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
  { name: 'e', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' },
];
// Arbitrary logic for this example
const isRepoSelectable = (repo: Repository) => repo.name !== 'a';
const selectableRepos = selectableRepositories.filter(isRepoSelectable);
const selectedRepoNames = ref<string[]>([]);
const indeterminateNames = ref<string[]>([]);
const selectedRadioName = ref<string>();

// To allow shift+click to select/deselect multiple rows
const shifting = useKeyModifier('Shift');
let recentSelectedRowIndex: number | null = null;
function onSelectRepo(repo: Repository, rowIndex: number, selecting: boolean) {
  const setSelected = (r: Repository) => {
    selectedRepoNames.value = toggleName(selectedRepoNames.value, r.name, selecting && isRepoSelectable(r));
  };
  if (shifting.value && recentSelectedRowIndex !== null) {
    const [from, to] = [recentSelectedRowIndex, rowIndex].sort((a, b) => a - b);
    for (let i = from; i <= to; i++) {
      setSelected(selectableRepositories[i]);
    }
  } else {
    setSelected(repo);
  }
  recentSelectedRowIndex = rowIndex;
}

// Clickable
const clickedRepoName = ref('');

// Editable
interface EditableData {
  textInput: string;
  textInputDisabled: string | null;
  checkboxes: string[];
  radios: string;
}
const cloneEditable = (data: EditableData): EditableData => ({ ...data, checkboxes: [...data.checkboxes] });
const editableRows = reactive<
  { data: EditableData; options: { checkboxes: string[]; radios: string[] }; editing: boolean; edited: EditableData }[]
>(
  [
    {
      data: {
        textInput: 'Editable text 1',
        textInputDisabled: 'Non-editable text 1',
        checkboxes: ['Option A'],
        radios: 'Option A',
      },
      options: { checkboxes: ['Option A', 'Option B', 'Option C'], radios: ['Option A', 'Option B'] },
    },
    {
      data: { textInput: 'Editable text 2', textInputDisabled: null, checkboxes: [], radios: 'Option B' },
      options: { checkboxes: ['Option A', 'Option B'], radios: ['Option A', 'Option B', 'Option C'] },
    },
    {
      data: {
        textInput: 'Editable text 3',
        textInputDisabled: 'Non-editable text 3',
        checkboxes: ['Option A', 'Option B'],
        radios: 'Option A',
      },
      options: { checkboxes: ['Option A', 'Option B'], radios: ['Option A', 'Option B'] },
    },
  ].map(row => ({ ...row, editing: false, edited: cloneEditable(row.data as EditableData) })),
);

// Actions
const customActionsToggle = ref(false);
const actionRepositories = [
  { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
  { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five', singleAction: '' },
  { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
  { name: '4', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
  { name: '5', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
];
const overflowRepositories = reactive(repositories.map(repo => ({ ...repo, menuOpen: false })));

// Expandable
interface ExpandableRepository extends Repository {
  details?: {
    detail1?: string;
    detail2?: string;
    detail3?: string;
    detailFormat: 0 | 1 | 2 | 3;
  };
}
const lorem = 'Lorem ipsum sit dolor. '.repeat(33);
const expandableRepositories: ExpandableRepository[] = [
  { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
  {
    name: 'parent 1',
    branches: 'two',
    prs: 'k',
    workspaces: 'four',
    lastCommit: 'five',
    details: { detailFormat: 0, detail1: 'single cell' },
  },
  {
    name: 'parent 2',
    branches: 'two',
    prs: 'b',
    workspaces: 'four',
    lastCommit: 'five',
    details: { detailFormat: 1, detail1: lorem },
  },
  {
    name: 'parent 3',
    branches: '2',
    prs: 'b',
    workspaces: 'four',
    lastCommit: 'five',
    details: { detailFormat: 2, detail1: 'single cell - noPadding' },
  },
  {
    name: 'parent 4',
    branches: '2',
    prs: 'b',
    workspaces: 'four',
    lastCommit: 'five',
    details: { detailFormat: 3, detail1: 'single cell - fullWidth & noPadding' },
  },
  {
    name: 'parent 5',
    branches: '2',
    prs: 'b',
    workspaces: 'four',
    lastCommit: 'five',
    details: {
      detailFormat: 0,
      detail1: "spans 'Repositories and 'Branches'",
      detail2: "spans 'Pull requests' and 'Workspaces', and 'Last commit'",
    },
  },
  {
    name: 'parent 6',
    branches: '2',
    prs: 'b',
    workspaces: 'four',
    lastCommit: 'five',
    details: {
      detailFormat: 1,
      detail1: "fullWidth, spans the collapsible column and 'Repositories'",
      detail2: "fullWidth, spans 'Branches' and 'Pull requests'",
      detail3: "fullWidth, spans 'Workspaces' and 'Last commit'",
    },
  },
];
// Default to all expanded
const initialExpandedRepoNames = expandableRepositories.filter(repo => !!repo.details).map(repo => repo.name);
const expandableCompact = ref(true);
const expandedRepoNames = ref([...initialExpandedRepoNames]);
const isExpanded = (name: string) => expandedRepoNames.value.includes(name);
const setExpanded = (name: string, expanded: boolean) => {
  expandedRepoNames.value = toggleName(expandedRepoNames.value, name, expanded);
};
const stripedCompact = ref(true);
const stripedExpandedNames = ref([...initialExpandedRepoNames]);

// Some arbitrary examples of how you could customize the child row based on your needs
function detailLayout(repo: ExpandableRepository) {
  const { detail1, detail2, detail3, detailFormat } = repo.details!;
  const numColumns = 5;
  const fullWidth = [1, 3].includes(detailFormat);
  const noPadding = [2, 3].includes(detailFormat);
  let colspans = [1, 1, 1];
  if (detail1 && !detail2 && !detail3) {
    colspans = [!fullWidth ? numColumns : numColumns + 1]; // Account for toggle column
  } else if (detail1 && detail2 && !detail3) {
    colspans = [2, !fullWidth ? 3 : 4];
  } else if (detail1 && detail2 && detail3) {
    colspans = [2, 2, !fullWidth ? 1 : 2];
  }
  const details = [detail1, detail2, detail3].map((text, i) => ({ text, colspan: colspans[i] })).filter(d => d.text);
  return { fullWidth, noPadding, details };
}

// Compound expandable
const compoundKeys = ['branches', 'prs', 'workspaces'] as const;
const compoundRepositories = [
  { name: 'siemur/test-space', branches: 10, prs: 4, workspaces: 4, lastCommit: '20 minutes' },
  { name: 'siemur/test-space-2', branches: 3, prs: 4, workspaces: 4, lastCommit: '20 minutes' },
];
// Default to the first cell of the first row being expanded
const expandedCells = reactive<Record<string, (typeof compoundKeys)[number] | undefined>>({
  'siemur/test-space': 'branches',
});

// Table text
const tableTextFocused = ref(false);

// Favoritable
const favoriteRepositories: Repository[] = [
  { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
  { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
  { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' },
];
const favoriteRepoNames = ref<string[]>([]);
const headerFavorited = ref(false);
const favoritesSort = reactive<SortState>({ index: null, direction: 'asc' });
const sortedFavorites = computed(() =>
  sortRows(favoriteRepositories, favoritesSort, r => [favoriteRepoNames.value.includes(r.name) ? 1 : 0]),
);
function setFavorited(name: string, favorited: boolean) {
  favoriteRepoNames.value = toggleName(favoriteRepoNames.value, name, favorited);
  if (favoriteRepoNames.value.length === favoriteRepositories.length) {
    headerFavorited.value = true;
  } else if (!favoriteRepoNames.value.length) {
    headerFavorited.value = false;
  }
}
function favoriteAll(favorited: boolean) {
  favoriteRepoNames.value = favorited ? favoriteRepositories.map(r => r.name) : [];
  headerFavorited.value = favorited;
}

// Tree table
interface RepositoriesTreeNode {
  name: string;
  branches: string;
  pullRequests: string;
  workspaces: string;
  children?: RepositoriesTreeNode[];
}
const treeNode = (n: string, children?: RepositoriesTreeNode[]): RepositoriesTreeNode => ({
  name: `Repositories ${n}`,
  branches: `Branch ${n}`,
  pullRequests: `Pull request ${n}`,
  workspaces: `Workplace ${n}`,
  children,
});
const treeData = [
  treeNode('one', [treeNode('two', [treeNode('three'), treeNode('four')]), treeNode('five'), treeNode('six')]),
  treeNode('seven', [treeNode('eight')]),
  treeNode('nine'),
];
const flatTreeNodes = [treeNode('one'), treeNode('seven'), treeNode('nine')];
const treeColumnNames = {
  name: 'Repositories',
  branches: 'Branches',
  prs: 'Pull requests',
  workspaces: 'Workspaces',
};
const expandedNodeNames = ref(['Repositories one']);
const detailsNodeNames = ref<string[]>([]);
const selectedNodeNames = ref<string[]>([]);
const flatDetailsNames = ref<string[]>([]);
const flatCheckedNames = ref<string[]>([]);

const getDescendants = (node: RepositoriesTreeNode): RepositoriesTreeNode[] =>
  node.children?.length ? node.children.flatMap(getDescendants) : [node];

function isNodeChecked(node: RepositoriesTreeNode) {
  const descendants = getDescendants(node);
  const selected = descendants.filter(n => selectedNodeNames.value.includes(n.name));
  if (selected.length === descendants.length) {
    return true;
  }
  return selected.length ? null : false;
}

function checkNode(node: RepositoriesTreeNode, checking: boolean) {
  const names = getDescendants(node).map(n => n.name);
  const others = selectedNodeNames.value.filter(name => !names.includes(name));
  selectedNodeNames.value = checking ? [...others, ...names] : others;
}

/** Flattens the tree into the rows of the table, with their position and visibility */
const flatTree = computed(() => {
  const rows: { node: RepositoriesTreeNode; level: number; posinset: number; rowIndex: number; hidden: boolean }[] = [];
  const visit = (nodes: RepositoriesTreeNode[], level: number, hidden: boolean) => {
    nodes.forEach((node, i) => {
      rows.push({ node, level, posinset: i + 1, rowIndex: rows.length, hidden });
      if (node.children) {
        visit(node.children, level + 1, hidden || !expandedNodeNames.value.includes(node.name));
      }
    });
  };
  visit(treeData, 1, false);
  return rows;
});

// Draggable
const draggableColumns = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
const draggableRows = [
  { id: 'row1', repository: 'one', branch: 'two', pullRequest: 'three', workspace: 'four', lastCommit: 'five' },
  { id: 'row2', repository: 'one -2', branch: null, pullRequest: null, workspace: 'four -2', lastCommit: 'five -2' },
  {
    id: 'row3',
    repository: 'one - 3',
    branch: 'two - 3',
    pullRequest: 'three - 3',
    workspace: 'four - 3',
    lastCommit: 'five - 3',
  },
];
const itemOrder = ref(draggableRows.map(r => r.id));
const tempItemOrder = ref<string[]>([]);
const draggedItemId = ref<string | null>(null);
const draggableBody = useTemplateRef<{ $el: HTMLElement }>('draggableBody');
const draggableRowsInOrder = computed(() =>
  (draggedItemId.value ? tempItemOrder.value : itemOrder.value).map(id => draggableRows.find(r => r.id === id)!),
);

function onDragStart(event: DragEvent, id: string) {
  event.dataTransfer!.effectAllowed = 'move';
  event.dataTransfer!.setData('text/plain', id);
  draggedItemId.value = id;
  tempItemOrder.value = [...itemOrder.value];
}

function isValidDrop(event: DragEvent) {
  const rect = draggableBody.value!.$el.getBoundingClientRect();
  return (
    event.clientX > rect.x &&
    event.clientX < rect.x + rect.width &&
    event.clientY > rect.y &&
    event.clientY < rect.y + rect.height
  );
}

function onDragOver(event: DragEvent) {
  const row = (event.target as HTMLElement).closest('tr');
  if (!draggedItemId.value || !row || row.id === draggedItemId.value || !tempItemOrder.value.includes(row.id)) {
    return;
  }
  const order = tempItemOrder.value.filter(id => id !== draggedItemId.value);
  order.splice(tempItemOrder.value.indexOf(row.id), 0, draggedItemId.value);
  tempItemOrder.value = order;
}

function onDragLeave(event: DragEvent) {
  if (!isValidDrop(event)) {
    tempItemOrder.value = [...itemOrder.value];
  }
}

function onDrop(event: DragEvent) {
  if (isValidDrop(event)) {
    itemOrder.value = tempItemOrder.value;
  }
  draggedItemId.value = null;
}

function onDragEnd() {
  draggedItemId.value = null;
}

// Sticky columns
const factColumns = [
  'Fact',
  'State',
  'Header 3',
  'Header 4',
  'Header 5',
  'Header 6',
  'Header 7',
  'Header 8',
  'Header 9',
];
const facts = Array.from({ length: 9 }, (_, index) => ({
  name: `Fact ${index + 1}`,
  state: `State ${index + 1}`,
  details: Array.from({ length: 7 }, (_, i) => `Test cell ${index + 1}-${i + 3}`),
}));
const stickySort = reactive<SortState>({ index: null, direction: 'asc' });
const multiStickySort = reactive<SortState>({ index: null, direction: 'asc' });
const rightStickySort = reactive<SortState>({ index: null, direction: 'asc' });
const stickyHeaderSort = reactive<SortState>({ index: null, direction: 'asc' });
const sortedFacts = (sort: SortState) => sortRows(facts, sort, f => [f.name, f.state]);
const headerStuck = ref(false);

const footerScroll = useTemplateRef<{ container: HTMLElement | null }>('footerScroll');
const footerStuck = ref(false);
function updateFooterStuck() {
  const el = footerScroll.value?.container;
  footerStuck.value = !!el && el.scrollTop + el.clientHeight < el.scrollHeight;
}
onMounted(updateFooterStuck);

// Nested headers
const connectionColumns = {
  pods: 'Pods',
  source: 'Source',
  destination: 'Destination',
  datetime: 'Date & Time',
  ports: 'Ports',
  protocol: 'Protocol',
  flowRate: 'Flow rate',
  traffic: 'Traffic',
  packets: 'Packets',
};
const connectionSubColumns = ['Source', 'Destination', 'Date & Time', 'Source', 'Destination'];
const connectionSortKeys = ['protocol', 'flowRate', 'traffic', 'packets'] as const;
const connections = [
  {
    source: { podName: 'api-pod-source-name', port: { num: 443, protocol: 'HTTPS' } },
    destination: { podName: 'api-pod-destination-name', port: { num: 24, protocol: 'SMTP' } },
    timestamp: '2021-06-22T19:58:24.000Z',
    protocol: 'TCP',
    flowRate: '1.9 Kbps',
    traffic: '2.1 KB',
    packets: 3,
  },
  {
    source: { podName: 'api-pod-source2-name', port: { num: 80, protocol: 'HTTP' } },
    destination: { podName: 'api-pod-destination2-name', port: { num: 24, protocol: 'SMTP' } },
    timestamp: '2021-06-22T21:42:01.000Z',
    protocol: 'UDP',
    flowRate: '3.4 Kbps',
    traffic: '6.1 KB',
    packets: 7,
  },
];
const nestedSort = reactive<SortState>({ index: null, direction: 'asc' });
const nestedStickySort = reactive<SortState>({ index: null, direction: 'asc' });
const sortedConnections = (sort: SortState) =>
  sortRows(connections, sort, c => [
    c.source.podName,
    c.destination.podName,
    c.timestamp,
    c.source.port.num,
    c.destination.port.num,
    c.protocol,
    c.flowRate,
    c.traffic,
    c.packets,
  ]);
const formatTimestamp = (timestamp: string) =>
  new Date(timestamp).toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'medium' });

// Nested expandable
const teamColumns = {
  team: 'Team',
  members: 'Members',
  lead: 'Design Lead',
  interaction: 'Interaction Designer',
  visual: 'Visual Designer',
  contact: 'Contact',
};
const teamDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const teams = [
  {
    name: 'Developer program 1',
    members: { lead: 'Person 1', interaction: 'Person 2', visual: 'Person 3' },
    email: 'devteam1@example.com',
  },
  {
    name: 'Developer program 2',
    members: { lead: 'Person A', interaction: 'Person B', visual: 'Person C' },
    email: 'devteam2@example.com',
  },
  {
    name: 'Developer program 3',
    members: { lead: 'Person X', interaction: 'Person Y', visual: 'Person Z' },
    email: 'devteam3@example.com',
  },
].map(team => ({ ...team, description: teamDescription }));
const expandedTeamNames = ref<string[]>([]);

// Expandable with nested table
const nodeRepositories = [
  { name: 'Node 1', branches: '10', prs: '2', nested: 'table', link: 'Link 1', noPadding: false },
  { name: 'Node 2', branches: '3', prs: '4', nested: undefined, link: 'Link 2', noPadding: false },
  { name: 'Node 3', branches: '11', prs: '7', nested: 'paragraph', link: 'Link 3', noPadding: false },
  {
    name: 'Node 4',
    branches: '11',
    prs: '7',
    nested: 'Expandable row content has no padding.',
    link: 'Link 4',
    noPadding: true,
  },
];
// Default to all expanded
const expandedNodeRepos = ref(nodeRepositories.filter(r => r.nested).map(r => r.name));

// Striped
const stripedRepositories = [
  { name: 'Repository 1', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
  { name: 'Repository 2', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
  { name: 'Repository 3', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
  { name: 'Repository 4', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
];
const stripedGroups = [
  [
    {
      name: 'tbody 1 - Repository 1',
      description: '(odd rows striped)',
      branches: 10,
      prs: 25,
      workspaces: 5,
      lastCommit: '2 days ago',
    },
    { name: 'tbody 1 - Repository 2', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    {
      name: 'tbody 1 - Repository 3',
      description: '(odd rows striped)',
      branches: 10,
      prs: 25,
      workspaces: 5,
      lastCommit: '2 days ago',
    },
  ],
  [
    { name: 'tbody 2 - Repository 4', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    {
      name: 'tbody 2 - Repository 5',
      description: '(even rows striped)',
      branches: 10,
      prs: 25,
      workspaces: 5,
      lastCommit: '2 days ago',
    },
    { name: 'tbody 2 - Repository 6', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    {
      name: 'tbody 2 - Repository 7',
      description: '(even rows striped)',
      branches: 10,
      prs: 25,
      workspaces: 5,
      lastCommit: '2 days ago',
    },
  ],
];
</script>
