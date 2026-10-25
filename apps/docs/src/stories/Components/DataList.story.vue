<template>
  <define-kebab v-slot="{ label }">
    <pf-dropdown close-on-select position="right">
      <template #toggle>
        <pf-menu-toggle variant="plain" :aria-label="label">
          <template #icon>
            <ellipsis-vertical-icon />
          </template>
        </pf-menu-toggle>
      </template>
      <pf-dropdown-item component="button">Action</pf-dropdown-item>
      <pf-dropdown-item to="#" @click.prevent>Link</pf-dropdown-item>
      <pf-dropdown-item component="button" disabled>Disabled Action</pf-dropdown-item>
      <pf-dropdown-item to="#" disabled @click.prevent>Disabled Link</pf-dropdown-item>
    </pf-dropdown>
  </define-kebab>

  <doc-page title="Data list">
    <template #description
      >A <b>data list</b> is used to display large data sets when you need a flexible layout or need to include
      interactive content like charts.</template
    >

    <template #apidocs>
      <component-info name="PfDataList" />
      <component-info name="PfDataListAction" />
      <component-info name="PfDataListCell" />
      <component-info name="PfDataListCheck" />
      <component-info name="PfDataListContent" />
      <component-info name="PfDataListControl" />
      <component-info name="PfDataListDragButton" />
      <component-info name="PfDataListItem" />
      <component-info name="PfDataListItemCells" />
      <component-info name="PfDataListItemRow" />
      <component-info name="PfDataListText" />
      <component-info name="PfDataListToggle" />
    </template>

    <pre v-md>
      Use data lists when:

      - A flexible layout is more important than arranging information in a grid.
      - You want to include active content like a chart.
      - Content displayed may vary between rows.

      ## Differences from patternfly-react
      - Selectable rows are bound with `v-model:selected` on `pf-data-list` (`onSelectDataListItem`, `selectedDataListItemId`), holding the key or `selection-input-value` of the selected item, or an array of them with `selection-multiple`. A hidden radio or checkbox is always rendered for selectable items (`onSelectableRowChange`).
      - `pf-data-list-item` can be expanded with `v-model:expanded` (`isExpanded`); with `expandable` the row renders its own `pf-data-list-toggle` and `pf-data-list-content` follows the expanded state.
      - The `isFilled` prop of `pf-data-list-cell` is replaced by `no-fill` with inverted behavior, and `isIcon` by `icon`.
      - The `isValid` prop of `pf-data-list-check` is replaced by `invalid` with inverted behavior, and `isChecked`/`onChange` by `v-model:checked`.
      - The `dataListCells` prop of `pf-data-list-item-cells` is replaced by its default slot.
      - `pf-data-list-item-row` and `pf-data-list-item-cells` are optional: consecutive `pf-data-list-cell` elements are wrapped in them automatically.
      - `visibility` of `pf-data-list-action` is replaced by the `visibility`, `visibility-sm`, … breakpoint props.
      - `button-attrs` replaces `buttonProps` on `pf-data-list-toggle`, and `no-padding` replaces `hasNoPadding` on `pf-data-list-content`.
      - The drag and drop examples are not ported: they rely on the `react-drag-drop` package.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-data-list aria-label="Simple data list example">
        <pf-data-list-item aria-labelledby="simple-item1">
          <pf-data-list-cell>
            <span id="simple-item1">Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>Secondary content</pf-data-list-cell>
        </pf-data-list-item>
        <pf-data-list-item aria-labelledby="simple-item2">
          <pf-data-list-cell no-fill>
            <span id="simple-item2">Secondary content (pf-m-no-fill)</span>
          </pf-data-list-cell>
          <pf-data-list-cell no-fill align-right>Secondary content (pf-m-align-right pf-m-no-fill)</pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Compact">
      <pf-data-list aria-label="Compact data list example" compact>
        <pf-data-list-item aria-labelledby="compact-item1">
          <pf-data-list-cell>
            <span id="compact-item1">Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>Secondary content</pf-data-list-cell>
        </pf-data-list-item>
        <pf-data-list-item aria-labelledby="compact-item2">
          <pf-data-list-cell no-fill>
            <span id="compact-item2">Secondary content (pf-m-no-fill)</span>
          </pf-data-list-cell>
          <pf-data-list-cell no-fill align-right>Secondary content (pf-m-align-right pf-m-no-fill)</pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Plain">
      <pf-data-list aria-label="Plain data list example" plain>
        <pf-data-list-item aria-labelledby="plain-item1">
          <pf-data-list-cell>
            <span id="plain-item1">Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>Secondary content</pf-data-list-cell>
        </pf-data-list-item>
        <pf-data-list-item aria-labelledby="plain-item2">
          <pf-data-list-cell no-fill>
            <span id="plain-item2">Secondary content (pf-m-no-fill)</span>
          </pf-data-list-cell>
          <pf-data-list-cell no-fill align-right>Secondary content (pf-m-align-right pf-m-no-fill)</pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Checkboxes, actions and additional cells">
      <pf-data-list aria-label="Checkbox and action data list example">
        <pf-data-list-item aria-labelledby="check-action-item1">
          <pf-data-list-check id="check-item1" aria-labelledby="check-action-item1" name="check-action-check1" />
          <pf-data-list-cell>
            <span id="check-action-item1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod.
          </pf-data-list-cell>
          <pf-data-list-cell>
            Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-cell>
            <span>Tertiary content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-cell>
            <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-cell>
            <span>More content</span> Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-action
            id="check-action-action1"
            aria-labelledby="check-action-item1 check-action-action1"
            aria-label="Actions"
          >
            <kebab label="Data list with checkboxes, actions and additional cells example kebab toggle 1" />
          </pf-data-list-action>
        </pf-data-list-item>
        <pf-data-list-item aria-labelledby="check-action-item2">
          <pf-data-list-check id="check-item2" aria-labelledby="check-action-item2" name="check-action-check2" />
          <pf-data-list-cell>
            <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-cell>
            Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-action
            id="check-action-action2"
            visibility-lg="hidden"
            aria-labelledby="check-action-item2 check-action-action2"
            aria-label="Actions"
          >
            <kebab label="Data list with checkboxes, actions and additional cells example kebab toggle 2" />
          </pf-data-list-action>
          <pf-data-list-action
            id="check-action-action2a"
            visibility="hidden"
            visibility-lg="visible"
            aria-labelledby="check-action-item2 check-action-action2a"
            aria-label="Actions"
          >
            <pf-button variant="primary">Primary</pf-button>
            <pf-button variant="secondary">Secondary</pf-button>
          </pf-data-list-action>
        </pf-data-list-item>
        <pf-data-list-item aria-labelledby="check-action-item3">
          <pf-data-list-check id="check-item3" aria-labelledby="check-action-item3" name="check-action-check3" />
          <pf-data-list-cell>
            <span id="check-action-item3">Primary content - Lorem ipsum</span> dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-cell>
            Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-action
            id="check-action-action3"
            visibility-xl="hidden"
            aria-labelledby="check-action-item3 check-action-action3"
            aria-label="Actions"
          >
            <kebab label="Data list with checkboxes, actions and additional cells example kebab toggle 3" />
          </pf-data-list-action>
          <pf-data-list-action
            id="check-action-action3a"
            visibility="hidden"
            visibility-xl="visible"
            aria-labelledby="check-action-item3 check-action-action3a"
            aria-label="Actions"
          >
            <pf-button variant="primary">Primary</pf-button>
            <pf-button variant="secondary">Secondary</pf-button>
            <pf-button variant="secondary">Secondary</pf-button>
            <pf-button variant="secondary">Secondary</pf-button>
          </pf-data-list-action>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Actions: single and multiple">
      <pf-data-list aria-label="single action data list example">
        <pf-data-list-item v-if="!deleted" aria-labelledby="single-action-item1">
          <pf-data-list-cell>
            <span id="single-action-item1">Single actionable Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>Single actionable Secondary content</pf-data-list-cell>
          <pf-data-list-action
            id="single-action-action1"
            aria-labelledby="single-action-item1 single-action-action1"
            aria-label="Actions"
          >
            <pf-button variant="primary" @click="deleted = confirm('Are you sure?')">Delete</pf-button>
          </pf-data-list-action>
        </pf-data-list-item>
        <pf-data-list-item aria-labelledby="multi-actions-item1">
          <pf-data-list-cell>
            <span id="multi-actions-item1">Multi actions Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>Multi actions Secondary content</pf-data-list-cell>
          <pf-data-list-action
            id="multi-actions-action1"
            aria-labelledby="multi-actions-item1 multi-actions-action1"
            aria-label="Actions"
          >
            <kebab label="Data list with actions example kebab toggle" />
          </pf-data-list-action>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Expandable">
      <pf-data-list aria-label="Expandable data list example" expandable>
        <pf-data-list-item v-model:expanded="expanded1" aria-labelledby="ex-item1">
          <pf-data-list-item-row>
            <template #toggle>
              <pf-data-list-toggle id="ex-toggle1" aria-controls="ex-expand1" @click="expanded1 = !expanded1" />
            </template>
            <pf-data-list-cell icon>
              <code-branch-icon />
            </pf-data-list-cell>
            <pf-data-list-cell>
              <div id="ex-item1">Primary content</div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
              <a href="#">link</a>
            </pf-data-list-cell>
            <pf-data-list-cell>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </pf-data-list-cell>
            <pf-data-list-cell>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </pf-data-list-cell>
            <pf-data-list-action id="ex-action1" aria-labelledby="ex-item1 ex-action1" aria-label="Actions">
              <kebab label="Data list expandable example kebab toggle 1" />
            </pf-data-list-action>
          </pf-data-list-item-row>
          <pf-data-list-content id="ex-expand1" aria-label="First expandable content details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </pf-data-list-content>
        </pf-data-list-item>
        <pf-data-list-item v-model:expanded="expanded2" aria-labelledby="ex-item2">
          <pf-data-list-item-row>
            <template #toggle>
              <pf-data-list-toggle id="ex-toggle2" aria-controls="ex-expand2" @click="expanded2 = !expanded2" />
            </template>
            <pf-data-list-cell icon>
              <code-branch-icon />
            </pf-data-list-cell>
            <pf-data-list-cell>
              <div id="ex-item2">Secondary content</div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </pf-data-list-cell>
            <pf-data-list-cell>
              <span>Lorem ipsum dolor sit amet.</span>
            </pf-data-list-cell>
            <pf-data-list-cell>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </pf-data-list-cell>
            <pf-data-list-action id="ex-action2" aria-labelledby="ex-item2 ex-action2" aria-label="Actions">
              <kebab label="Data list expandable example kebab toggle 2" />
            </pf-data-list-action>
          </pf-data-list-item-row>
          <pf-data-list-content id="ex-expand2" aria-label="Second expandable content details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </pf-data-list-content>
        </pf-data-list-item>
        <pf-data-list-item v-model:expanded="expanded3" aria-labelledby="ex-item3">
          <pf-data-list-item-row>
            <template #toggle>
              <pf-data-list-toggle id="ex-toggle3" aria-controls="ex-expand3" @click="expanded3 = !expanded3" />
            </template>
            <pf-data-list-cell icon>
              <code-branch-icon />
            </pf-data-list-cell>
            <pf-data-list-cell>
              <div id="ex-item3">Tertiary content</div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </pf-data-list-cell>
            <pf-data-list-cell>
              <span>Lorem ipsum dolor sit amet.</span>
            </pf-data-list-cell>
            <pf-data-list-cell>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </pf-data-list-cell>
            <pf-data-list-action id="ex-action3" aria-labelledby="ex-item3 ex-action3" aria-label="Actions">
              <kebab label="Data list expandable example kebab toggle 3" />
            </pf-data-list-action>
          </pf-data-list-item-row>
          <pf-data-list-content id="ex-expand3" aria-label="Third expandable content details" no-padding>
            This expanded section has no padding.
          </pf-data-list-content>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Mixed expandable">
      <pf-data-list aria-label="Mixed expandable data list example">
        <pf-data-list-item v-model:expanded="mixedExpanded1" expandable aria-labelledby="m-ex-item1">
          <pf-data-list-cell icon>
            <code-branch-icon />
          </pf-data-list-cell>
          <pf-data-list-cell>
            <div id="m-ex-item1">Primary content</div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <a href="#">link</a>
          </pf-data-list-cell>
          <pf-data-list-cell>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </pf-data-list-cell>
          <pf-data-list-action id="m-ex-action1" aria-labelledby="m-ex-item1 m-ex-action1" aria-label="Actions">
            <kebab label="Data list mixed expandable example kebab toggle 1" />
          </pf-data-list-action>
          <pf-data-list-content id="m-ex-expand1" aria-label="First expandable content details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </pf-data-list-content>
        </pf-data-list-item>
        <pf-data-list-item aria-labelledby="m-ex-item2">
          <pf-data-list-cell icon>
            <code-branch-icon />
          </pf-data-list-cell>
          <pf-data-list-cell>
            <div id="m-ex-item2">Secondary content</div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </pf-data-list-cell>
          <pf-data-list-cell>
            <span>Lorem ipsum dolor sit amet.</span>
          </pf-data-list-cell>
          <pf-data-list-action id="m-ex-action2" aria-labelledby="m-ex-item2 m-ex-action2" aria-label="Actions">
            <kebab label="Data list mixed expandable example kebab toggle 2" />
          </pf-data-list-action>
        </pf-data-list-item>
        <pf-data-list-item v-model:expanded="mixedExpanded3" expandable aria-labelledby="m-ex-item3">
          <pf-data-list-cell icon>
            <code-branch-icon />
          </pf-data-list-cell>
          <pf-data-list-cell>
            <div id="m-ex-item3">Tertiary content</div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </pf-data-list-cell>
          <pf-data-list-cell>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          </pf-data-list-cell>
          <pf-data-list-action id="m-ex-action3" aria-labelledby="m-ex-item3 m-ex-action3" aria-label="Actions">
            <kebab label="Data list mixed expandable example kebab toggle 3" />
          </pf-data-list-action>
          <pf-data-list-content id="m-ex-expand3" aria-label="Third expandable content details" no-padding>
            This expanded section has no padding.
          </pf-data-list-content>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Width modifiers">
      <div>
        <pf-content>
          <h4>Default fitting - example 1</h4>
        </pf-content>
        <pf-data-list aria-label="Width modifier data list example 1">
          <pf-data-list-item aria-labelledby="width-ex1-item1">
            <pf-data-list-check id="check-width-ex1-item1" aria-labelledby="width-ex1-item1" name="width-ex1-item1" />
            <pf-data-list-cell>
              <b id="width-ex1-item1">default</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </pf-data-list-cell>
            <pf-data-list-cell>
              <b>default</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </pf-data-list-cell>
          </pf-data-list-item>
        </pf-data-list>
      </div>
      <div>
        <pf-content>
          <h4>Flex modifiers - example 2</h4>
        </pf-content>
        <pf-data-list aria-label="Width modifier data list example 2">
          <pf-data-list-item aria-labelledby="width-ex2-item1">
            <pf-data-list-check id="check-width-ex2-item1" aria-labelledby="width-ex2-item1" name="width-ex2-item1" />
            <pf-data-list-cell :width="2">
              <b id="width-ex2-item1">width 2</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </pf-data-list-cell>
            <pf-data-list-cell :width="4">
              <b>width 4</b>
              <p>Lorem ipsum dolor sit amet.</p>
            </pf-data-list-cell>
            <pf-data-list-action
              id="width-ex2-action1"
              aria-labelledby="width-ex2-item1 width-ex2-action1"
              aria-label="Actions"
            >
              <kebab label="Data list width modifiers example kebab toggle 1" />
            </pf-data-list-action>
          </pf-data-list-item>
        </pf-data-list>
      </div>
      <div>
        <pf-content>
          <h4>Flex modifiers - example 3</h4>
        </pf-content>
        <pf-data-list aria-label="Width modifier data list example 3">
          <pf-data-list-item v-model:expanded="widthExpanded" expandable aria-labelledby="width-ex3-item1">
            <pf-data-list-item-row>
              <template #toggle>
                <pf-data-list-toggle
                  id="width-ex3-toggle1"
                  aria-controls="width-ex3-expand1"
                  @click="widthExpanded = !widthExpanded"
                />
              </template>
              <pf-data-list-check id="check-width-ex3-item1" aria-labelledby="width-ex3-item1" name="width-ex3-item1" />
              <pf-data-list-cell :width="5">
                <b id="width-ex3-item1">width 5</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </pf-data-list-cell>
              <pf-data-list-cell :width="2">
                <b>width 2</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </pf-data-list-cell>
              <pf-data-list-cell>default</pf-data-list-cell>
              <pf-data-list-action
                id="width-ex3-action1"
                aria-labelledby="width-ex3-item1 width-ex3-action1"
                aria-label="Actions"
              >
                <kebab label="Data list width modifiers example kebab toggle 2" />
              </pf-data-list-action>
            </pf-data-list-item-row>
            <pf-data-list-content id="width-ex3-expand1" aria-label="Primary Content Details">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </pf-data-list-content>
          </pf-data-list-item>
        </pf-data-list>
      </div>
    </story-canvas>

    <story-canvas title="Clickable rows">
      <pf-data-list v-model:selected="selectedItem" aria-label="clickable data list example">
        <pf-data-list-item key="item1" aria-labelledby="clickable-action-item1">
          <pf-data-list-cell>
            <span id="clickable-action-item1">Single actionable Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>Single actionable Secondary content</pf-data-list-cell>
          <pf-data-list-action
            id="clickable-action-action1"
            aria-labelledby="clickable-action-item1 clickable-action-action1"
            aria-label="Actions"
          >
            <kebab label="Data list clickable rows example kebab toggle 1" />
          </pf-data-list-action>
        </pf-data-list-item>
        <pf-data-list-item key="item2" aria-labelledby="clickable-actions-item2">
          <pf-data-list-cell>
            <span id="clickable-actions-item2">clickable actions Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>clickable actions Secondary content</pf-data-list-cell>
          <pf-data-list-action
            id="clickable-actions-action2"
            aria-labelledby="clickable-actions-item2 clickable-actions-action2"
            aria-label="Actions"
          >
            <kebab label="Data list clickable rows example kebab toggle 2" />
          </pf-data-list-action>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Controlling text">
      <pf-data-list aria-label="Controlling text data list example">
        <pf-data-list-item aria-labelledby="controlling-text-item1">
          <pf-data-list-cell wrap-modifier="breakWord">
            <span id="controlling-text-item1">Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell wrap-modifier="truncate">
            Really really really really really really really really really really really really really really long
            description that should be truncated before it ends
          </pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Small grid breakpoint">
      <pf-data-list aria-label="Small grid breakpoint list example" grid-breakpoint="sm">
        <pf-data-list-item aria-labelledby="sm-grid-item1">
          <pf-data-list-cell>
            <span id="sm-grid-item1">Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>
            Really really really really really really really really really really really really really really long
            description that should be truncated before it ends
          </pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
import CodeBranchIcon from '@vue-patternfly/icons/code-branch-icon';

const [DefineKebab, Kebab] = createReusableTemplate<{ label: string }>();

const confirm = (message: string) => window.confirm(message);
const deleted = ref(false);
const expanded1 = ref(true);
const expanded2 = ref(false);
const expanded3 = ref(true);
const mixedExpanded1 = ref(true);
const mixedExpanded3 = ref(true);
const widthExpanded = ref(true);
const selectedItem = ref<string | number | symbol | (string | number | symbol)[]>();
</script>
