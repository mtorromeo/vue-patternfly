<template>
  <doc-page title="Panel">
    <template #description
      >The <b>panel</b> component is a container that supports flexible content layouts. It can be used to house other
      components such as fields, forms, videos, buttons, and more. The panel should not be confused with the drawer
      component, which allows you to surface information via a collapsable container.</template
    >

    <template #apidocs>
      <component-info name="PfPanel" />
      <component-info name="PfPanelMain" />
      <component-info name="PfPanelMainBody" />
      <component-info name="PfPanelHeader" />
      <component-info name="PfPanelFooter" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - Boolean props drop their prefix: `scrollable`, `auto-height`, `no-border`, `full-height`, `glass` and `pill`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-panel>
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Header">
      <pf-panel>
        <pf-panel-header>Header content</pf-panel-header>
        <pf-divider />
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Footer">
      <pf-panel>
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
        <pf-panel-footer>Footer content</pf-panel-footer>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Header and footer">
      <pf-panel>
        <pf-panel-header>Header content</pf-panel-header>
        <pf-divider />
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
        <pf-panel-footer>Footer content</pf-panel-footer>
      </pf-panel>
    </story-canvas>

    <story-canvas title="No body">
      <pf-panel>
        <pf-panel-main>Main content</pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Raised">
      <pf-panel variant="raised">
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Bordered">
      <pf-panel variant="bordered">
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Secondary variant">
      <pf-panel variant="secondary">
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Scrollable">
      <pf-panel scrollable>
        <pf-panel-main tabindex="0">
          <pf-panel-main-body>
            <template v-for="i in 9" :key="i">
              <template v-if="i > 1">
                <br />
                <br />
              </template>
              Main content
            </template>
          </pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Scrollable with auto height">
      <div style="height: 200px">
        <pf-panel scrollable auto-height>
          <pf-panel-main tabindex="0">
            <pf-panel-main-body>
              <template v-for="i in 9" :key="i">
                <template v-if="i > 1">
                  <br />
                  <br />
                </template>
                Main content
              </template>
            </pf-panel-main-body>
          </pf-panel-main>
        </pf-panel>
      </div>
    </story-canvas>

    <story-canvas title="Scrollable with header and footer">
      <pf-panel scrollable>
        <pf-panel-header>Header content</pf-panel-header>
        <pf-divider />
        <pf-panel-main tabindex="0">
          <pf-panel-main-body>
            <template v-for="i in 9" :key="i">
              <template v-if="i > 1">
                <br />
                <br />
              </template>
              Main content
            </template>
          </pf-panel-main-body>
        </pf-panel-main>
        <pf-panel-footer>Footer content</pf-panel-footer>
      </pf-panel>
    </story-canvas>

    <story-canvas title="Pill">
      <pf-panel pill>
        <pf-panel-main>
          <pf-panel-main-body>Main content</pf-panel-main-body>
        </pf-panel-main>
      </pf-panel>
    </story-canvas>
  </doc-page>
</template>
