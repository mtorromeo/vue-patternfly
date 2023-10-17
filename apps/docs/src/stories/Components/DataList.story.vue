<template>
  <doc-page title="Data list">
    <component-title name="pf-data-list" />

    <pre v-md>
      A **data list** is used to display large data sets when you need a flexible layout or need to include interactive content like charts.

      <!-- PatternFly offers 2 components for displaying large data sets: data lists and tables. While they satisfy similar use cases, choosing the correct component to use in your design will be dependent on the type of data you need to display. -->

      Use data lists when:

      - A flexible layout is more important than arranging information in a grid.
      - You want to include active content like a chart.
      - Content displayed may vary between rows.

      ## Differences from patternfly-react
      - The `filled` prop of `pf-data-list-cell` is renamed to `no-fill` with inverted behavior.
      - The `isPlainButtonAction` prop of `pf-data-list-action` is renamed to `plain-button`.
      - The `isValid` prop of `pf-data-list-check` is renamed to `invalid` with inverted behavior.
      - The `pf-data-list-item-row` and `pf-data-list-item-cells` components are optional and are only required if you need to change their attributes or when you have to control the order of sibling components.

      See [common differences from patternfly-react](#/).
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
          <pf-data-list-cell no-fill align-right>
            Secondary content (pf-m-align-right pf-m-no-fill)
          </pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Compact">
      <pf-data-list aria-label="Compact data list example" compact>
        <pf-data-list-item aria-labelledby="simple-item3">
          <pf-data-list-item-row>
            <pf-data-list-item-cells>
              <pf-data-list-cell>
                <span id="simple-item3">Primary content (explicit row and cells)</span>
              </pf-data-list-cell>
              <pf-data-list-cell>
                Secondary content
              </pf-data-list-cell>
            </pf-data-list-item-cells>
          </pf-data-list-item-row>
        </pf-data-list-item>

        <pf-data-list-item aria-labelledby="simple-item4">
          <pf-data-list-cell no-fill>
            <span id="simple-item4">Secondary content (pf-m-no-fill)</span>
          </pf-data-list-cell>
          <pf-data-list-cell no-fill align-right>
            Secondary content (pf-m-align-right pf-m-no-fill)
          </pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Checkboxes, actions and additional cells">
      <pf-data-list aria-label="Checkbox and action data list example">
        <pf-data-list-item aria-labelledby="check-action-item1">
          <pf-data-list-check aria-labelledby="check-action-item1" name="check-action-check1" />

          <pf-data-list-cell>
            <span id="check-action-item1">Primary content</span> Dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod.
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
            plain-button
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>

              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">Action</pf-dropdown-item>
              <pf-dropdown-item disabled>Disabled Link</pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>
        </pf-data-list-item>

        <pf-data-list-item aria-labelledby="check-action-item2">
          <pf-data-list-check aria-labelledby="check-action-item2" name="check-action-check1" />

          <pf-data-list-cell>
            <span id="check-action-item2">Primary content - Lorem ipsum</span> dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-cell>
            Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>

          <pf-data-list-action
            id="check-action-action2"
            aria-labelledby="check-action-item2 check-action-action2"
            aria-label="Actions"
            plain-button
            visibility-lg="hidden"
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>

              <pf-dropdown-item component="button">Primary</pf-dropdown-item>
              <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>

          <pf-data-list-action
            id="check-action-action3"
            aria-labelledby="check-action-item2 check-action-action3"
            aria-label="Actions"
            plain-button
            visibility="hidden"
            visibility-lg="visible"
          >
            <pf-button variant="primary">Primary</pf-button>
            <pf-button variant="secondary">Secondary</pf-button>
          </pf-data-list-action>
        </pf-data-list-item>

        <pf-data-list-item aria-labelledby="check-action-item3">
          <pf-data-list-check aria-labelledby="check-action-item3" name="check-action-check1" />

          <pf-data-list-cell>
            <span id="check-action-item3">Primary content - Lorem ipsum</span> dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>
          <pf-data-list-cell>
            Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
          </pf-data-list-cell>

          <pf-data-list-action
            id="check-action-action3"
            aria-labelledby="check-action-item3 check-action-action3"
            aria-label="Actions"
            plain-button
            visibility-xl="hidden"
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>

              <pf-dropdown-item component="button">Primary</pf-dropdown-item>
              <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
              <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
              <pf-dropdown-item component="button">Secondary</pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>

          <pf-data-list-action
            id="check-action-action3"
            aria-labelledby="check-action-item3 check-action-action3"
            aria-label="Actions"
            plain-button
            visibility="hidden"
            visibility-xl="visible"
          >
            <pf-button variant="primary">Primary</pf-button>
            <pf-button variant="secondary">Secondary</pf-button>
            <pf-button variant="secondary">Secondary</pf-button>
            <pf-button variant="secondary">Secondary</pf-button>
          </pf-data-list-action>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Selectable rows">
      <pf-data-list
        aria-label="selectable data list example"
        @update:selected="log"
      >
        <pf-data-list-item id="item1" aria-labelledby="selectable-action-item1">
          <pf-data-list-cell>
            <span id="selectable-action-item1">Single actionable Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>Single actionable Secondary content</pf-data-list-cell>

          <pf-data-list-action
            id="selectable-action-action1"
            aria-labelledby="selectable-action-item1 selectable-action-action1"
            aria-label="Actions"
            plain-button
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>
              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>
        </pf-data-list-item>

        <pf-data-list-item id="item2" aria-labelledby="selectable-actions-item2">
          <pf-data-list-cell>
            <span id="selectable-actions-item2">Selectable actions Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell>Selectable actions Secondary content</pf-data-list-cell>

          <pf-data-list-action
            id="selectable-actions-action2"
            aria-labelledby="selectable-actions-item2 selectable-actions-action2"
            aria-label="Actions"
            plain-button
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>

              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Expandable">
      <pf-data-list aria-label="Expandable data list example" expandable>
        <pf-data-list-item aria-labelledby="ex-item1">
          <pf-data-list-cell icon>
            <CodeBranchIcon />
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

          <pf-data-list-action
            id="ex-action1"
            aria-labelledby="ex-item1 ex-action1"
            aria-label="Actions"
            plain-button
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>

              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>

          <pf-data-list-content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </pf-data-list-content>
        </pf-data-list-item>

        <pf-data-list-item aria-labelledby="ex-item2">
          <pf-data-list-item-row>
            <pf-data-list-item-cells>
              <pf-data-list-cell icon>
                <CodeBranchIcon />
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
            </pf-data-list-item-cells>

            <pf-data-list-action
              id="ex-action2"
              aria-labelledby="ex-item2 ex-action2"
              aria-label="Actions"
              plain-button
            >
              <pf-dropdown position="right">
                <template #toggle>
                  <pf-menu-toggle variant="plain">
                    <ellipsis-vertical-icon />
                  </pf-menu-toggle>
                </template>

                <pf-dropdown-item>Link</pf-dropdown-item>
                <pf-dropdown-item component="button">
                  Action
                </pf-dropdown-item>
                <pf-dropdown-item disabled>
                  Disabled Link
                </pf-dropdown-item>
              </pf-dropdown>
            </pf-data-list-action>
          </pf-data-list-item-row>

          <pf-data-list-content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </pf-data-list-content>
        </pf-data-list-item>

        <pf-data-list-item aria-labelledby="ex-item3">
          <pf-data-list-cell icon>
            <CodeBranchIcon />
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

          <pf-data-list-action
            id="ex-action3"
            aria-labelledby="ex-item3 ex-action3"
            aria-label="Actions"
            plain-button
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>

              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>

          <pf-data-list-content no-padding>
            This expanded section has no padding.
          </pf-data-list-content>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Width modifiers - Default fitting example 1">
      <pf-data-list aria-label="Width modifier data list example 1">
        <pf-data-list-item aria-labelledby="width-ex1-item1">
          <pf-data-list-check aria-labelledby="width-ex1-item1" name="width-ex1-item1" />

          <pf-data-list-cell>
            <div class="preview-placeholder">
              <b id="width-ex1-item1">default</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </pf-data-list-cell>
          <pf-data-list-cell>
            <div class="preview-placeholder">
              <b>default</b>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Width modifiers - Flex modifiers - example 2">
      <pf-data-list aria-label="Width modifier data list example 2">
        <pf-data-list-item aria-labelledby="width-ex2-item1">
          <pf-data-list-check aria-labelledby="width-ex2-item1" name="width-ex2-item1" />

          <pf-data-list-cell :width="2">
            <div class="preview-placeholder">
              <b id="width-ex2-item1">width 2</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
          </pf-data-list-cell>
          <pf-data-list-cell :width="4">
            <div class="preview-placeholder">
              <b>width 4</b>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </pf-data-list-cell>
          <pf-data-list-action
            aria-labelledby="width-ex2-item1 width-ex2-action1"
            aria-label="Actions"
            plain-button
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>

              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Width modifiers - Flex modifiers - example 3">
      <pf-data-list aria-label="Width modifier data list example 3" expandable>
        <pf-data-list-item aria-labelledby="width-ex3-item1">
          <pf-data-list-check aria-labelledby="width-ex3-item1" name="width-ex3-item1" />

          <pf-data-list-cell :width="5">
            <div class="preview-placeholder">
              <b id="width-ex3-item1">width 5</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </pf-data-list-cell>
          <pf-data-list-cell :width="2">
            <div class="preview-placeholder">
              <b>width 2</b>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </pf-data-list-cell>
          <pf-data-list-cell>
            <div class="preview-placeholder">default</div>
          </pf-data-list-cell>

          <pf-data-list-action
            id="width-ex3-action1"
            aria-labelledby="width-ex3-item1 width-ex3-action1"
            aria-label="Actions"
            plain-button
          >
            <pf-dropdown position="right">
              <template #toggle>
                <pf-menu-toggle variant="plain">
                  <ellipsis-vertical-icon />
                </pf-menu-toggle>
              </template>

              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
            </pf-dropdown>
          </pf-data-list-action>

          <pf-data-list-content aria-label="Primary Content Details">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </pf-data-list-content>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Controlling text">
      <pf-data-list aria-label="Simple data list example">
        <pf-data-list-item aria-labelledby="simple-item5">
          <pf-data-list-cell wrap-modifier="breakWord">
            <span id="simple-item5">Primary content</span>
          </pf-data-list-cell>
          <pf-data-list-cell wrap-modifier="truncate">
            Really really really really really really really really really really really really really really long
            description that should be truncated before it ends
          </pf-data-list-cell>
        </pf-data-list-item>
      </pf-data-list>
    </story-canvas>

    <story-canvas title="Small grid breakpoint">
      <pf-data-list aria-label="Simple data list example" grid-breakpoint="sm">
        <pf-data-list-item>
          <pf-data-list-cell>
            Primary content
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

<style scoped>
.preview-placeholder {
  display: block;
  width: 100%;
  padding: .25rem .5rem;
  color: #004e8a;
  background-color: #def3ff;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 4px;
}
</style>

<script lang="ts" setup>
const log = console.log;

import CodeBranchIcon from '@vue-patternfly/icons/code-branch-icon';
import EllipsisVerticalIcon from '@vue-patternfly/icons/ellipsis-vertical-icon';
</script>
