<template>
  <doc-page title="Card">
    <component-title name="pf-card" />

    <pre v-md>
      A **card** is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.
      See full [Design guidelines](https://www.patternfly.org/v4/components/card/design-guidelines) on the official patternfly documentation.
      ## Differences from patternfly-react
      - The expanded state is controlled by `v-model:expanded` or managed internally with the prop `expandable`.
      See [common differences from patternfly-react](#/).
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-card>
        <pf-card-title>Header</pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="With image and actions">
      <pf-card>
        <pf-card-header>
          <pf-card-header-main>
            <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" alt="PatternFly logo" style="height: 50px" />
          </pf-card-header-main>
          <pf-card-actions no-offset>
            <pf-dropdown plain position="right">
              <template #toggle>
                <pf-kebab-toggle />
              </template>
              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
              <pf-dropdown-item disabled component="button">
                Disabled Action
              </pf-dropdown-item>
              <pf-dropdown-separator />
              <pf-dropdown-item>Separated Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Separated Action
              </pf-dropdown-item>
            </pf-dropdown>
            <pf-checkbox aria-label="card checkbox example" />
          </pf-card-actions>
        </pf-card-header>
        <pf-card-title>Header</pf-card-title>
        <pf-card-body>Body</pf-card-body>
        <pf-card-footer>Footer</pf-card-footer>
      </pf-card>
    </story-canvas>

    <story-canvas title="Expandable with icon">
      <pf-card expandable>
        <pf-card-header>
          <img src="https://raw.githubusercontent.com/patternfly/patternfly-react/main/packages/react-core/src/demos/Card/pf-logo-small.svg" alt="PatternFly logo" style="width: 27px">
          <pf-card-actions>
            <pf-dropdown plain position="right">
              <template #toggle>
                <pf-kebab-toggle />
              </template>
              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
              <pf-dropdown-item disabled component="button">
                Disabled Action
              </pf-dropdown-item>
            </pf-dropdown>
            <pf-checkbox aria-label="card checkbox example" />
          </pf-card-actions>
        </pf-card-header>
        <pf-card-expandable-content>
          <pf-card-body>Body</pf-card-body>
          <pf-card-footer>Footer</pf-card-footer>
        </pf-card-expandable-content>
      </pf-card>
    </story-canvas>

    <story-canvas title="Selectable cards">
      <template #intro>
        <pre v-md>
          Selectable cards can only be selected one at a time, and are intended for use with primary-detail layout.
        </pre>
      </template>

      <pf-card selectable-raised selectable-input>
        <pf-card-header>
          <pf-card-actions>
            <pf-dropdown plain position="right">
              <template #toggle>
                <pf-kebab-toggle />
              </template>
              <pf-dropdown-item>Link</pf-dropdown-item>
              <pf-dropdown-item component="button">
                Action
              </pf-dropdown-item>
              <pf-dropdown-item disabled>
                Disabled Link
              </pf-dropdown-item>
              <pf-dropdown-item disabled component="button">
                Disabled Action
              </pf-dropdown-item>
            </pf-dropdown>
          </pf-card-actions>
        </pf-card-header>
        <pf-card-title>First card</pf-card-title>
        <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
      </pf-card>
      <br>
      <pf-card selectable-raised selectable-input>
        <pf-card-title>Second card</pf-card-title>
        <pf-card-body>This is a selectable card. Click me to select me. Click again to deselect me.</pf-card-body>
      </pf-card>
      <br>
      <pf-card selectable-raised selectable-input selectable-disabled>
        <pf-card-title>Third card</pf-card-title>
        <pf-card-body>This is a raised but disabled card.</pf-card-body>
      </pf-card>
    </story-canvas>
  </doc-page>
</template>
