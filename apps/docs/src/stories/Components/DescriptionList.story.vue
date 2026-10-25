<template>
  <doc-page title="Description list">
    <template #description>A <b>description list</b> contains terms and their corresponding descriptions.</template>

    <template #apidocs>
      <component-info name="PfDescriptionList" />
      <component-info name="PfDescriptionListDescription" />
      <component-info name="PfDescriptionListGroup" />
      <component-info name="PfDescriptionListTerm" />
      <component-info name="PfDescriptionListTermHelpText" />
      <component-info name="PfDescriptionListTermHelpTextButton" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `columnModifier`, `orientation`, `autoFitMinModifier` and `horizontalTermWidthModifier` objects are replaced by breakpoint props: `columns`, `columns-sm`, …, `orientation-md`, …, `auto-fit-min`, `auto-fit-min-md`, … and `horizontal-term-width`, `horizontal-term-width-sm`, ….
      - The `icon` prop of `pf-description-list-term` is replaced by the `icon` slot.
      - `auto-fit`, `horizontal`, `auto-column-widths`, `inline-grid`, `compact`, `fluid` and `fill-columns` replace the `is…` props.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-description-list aria-label="Basic example">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Term help text">
      <pf-description-list aria-label="Term help text">
        <pf-description-list-group>
          <pf-description-list-term-help-text>
            <pf-popover>
              <template #header><div>Name</div></template>
              <template #body><div>Additional name info</div></template>
              <pf-description-list-term-help-text-button>Name</pf-description-list-term-help-text-button>
            </pf-popover>
          </pf-description-list-term-help-text>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term-help-text>
            <pf-popover>
              <template #header><div>Namespace</div></template>
              <template #body><div>Additional namespace info</div></template>
              <pf-description-list-term-help-text-button>Namespace</pf-description-list-term-help-text-button>
            </pf-popover>
          </pf-description-list-term-help-text>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term-help-text>
            <pf-popover>
              <template #header><div>Labels</div></template>
              <template #body><div>Additional labels info</div></template>
              <pf-description-list-term-help-text-button>Labels</pf-description-list-term-help-text-button>
            </pf-popover>
          </pf-description-list-term-help-text>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term-help-text>
            <pf-popover>
              <template #header><div>Pod selector</div></template>
              <template #body><div>Additional pod selector info</div></template>
              <pf-description-list-term-help-text-button>Pod selector</pf-description-list-term-help-text-button>
            </pf-popover>
          </pf-description-list-term-help-text>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term-help-text>
            <pf-popover>
              <template #header><div>Annotation</div></template>
              <template #body><div>Additional annotation info</div></template>
              <pf-description-list-term-help-text-button>Annotation</pf-description-list-term-help-text-button>
            </pf-popover>
          </pf-description-list-term-help-text>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Default 2 col">
      <pf-description-list columns="2Col" aria-label="Two-column">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Default 3 col on lg">
      <pf-description-list columns-lg="3Col" aria-label="Three-column on large screens">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal">
      <pf-description-list horizontal aria-label="Horizontal">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal using custom term width modifier">
      <pf-description-list
        horizontal
        horizontal-term-width="12ch"
        horizontal-term-width-sm="15ch"
        horizontal-term-width-md="20ch"
        horizontal-term-width-lg="28ch"
        horizontal-term-width-xl="30ch"
        horizontal-term-width-2xl="35ch"
        aria-label="Horizontal with custom term width modifier"
      >
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal 2 col">
      <pf-description-list horizontal columns="2Col" aria-label="Two-column horizontal">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal 3 col on lg">
      <pf-description-list horizontal columns-lg="3Col" aria-label="Three-columns horizontal on large screens">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Compact">
      <pf-description-list compact aria-label="Compact example">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Compact horizontal">
      <pf-description-list compact horizontal aria-label="Compact horizontal">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Fluid horizontal">
      <pf-description-list horizontal fluid aria-label="Fluid horizontal">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Column fill">
      <pf-description-list fill-columns columns="2Col" columns-lg="3Col" aria-label="Column fill enabled">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Large display size">
      <div style="margin-bottom: 12px">
        <pf-checkbox
          id="toggle-display-size"
          v-model="displaySize2xl"
          label="displaySize 2xl"
          name="toggle-display-size"
        />
      </div>
      <pf-description-list
        :display-size="displaySize2xl ? '2xl' : 'lg'"
        columns-lg="2Col"
        aria-label="Large display size"
      >
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <pre v-md>
      ## Responsive column definitions
    </pre>

    <story-canvas title="Default responsive columns">
      <pf-description-list columns-lg="2Col" columns-xl="3Col" aria-label="Default responsive columns">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal responsive columns">
      <pf-description-list horizontal columns-lg="2Col" columns-xl="3Col" aria-label="Horizontal responsive columns">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Responsive horizontal, vertical group layout">
      <pf-description-list
        horizontal
        orientation-md="vertical"
        orientation-lg="horizontal"
        orientation-xl="vertical"
        orientation-2xl="horizontal"
        aria-label="Responsive orientation"
      >
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <pre v-md>
      ## Auto-column-width
    </pre>

    <story-canvas title="Default auto column width">
      <pf-description-list auto-column-widths columns="3Col" aria-label="Default auto column width">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Horizontal auto column width">
      <pf-description-list horizontal auto-column-widths columns-lg="2Col" aria-label="Horizontal auto column width">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <pre v-md>
      ## Inline grid
    </pre>

    <story-canvas title="Default inline grid">
      <pf-description-list columns="3Col" inline-grid aria-label="Default inline grid">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <pre v-md>
      ## Card variants

      A `pf-card` component can be used in place of a description list group.
    </pre>

    <story-canvas title="Description list with card">
      <div style="margin-bottom: 12px">
        <pf-checkbox id="toggle-isSelectable" v-model="cardSelectable" label="selectable" name="toggle-isSelectable" />
      </div>
      <pf-description-list columns-lg="2Col" aria-label="With card example">
        <pf-card component="div" :selectable="cardSelectable">
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-card>
        <pf-card component="div" :selectable="cardSelectable">
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div" :selectable="cardSelectable">
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-card>
        <pf-card component="div" :selectable="cardSelectable">
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div" :selectable="cardSelectable">
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-card>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Description list with large display size and card">
      <div style="margin-bottom: 12px">
        <pf-checkbox
          id="toggle-display-size-with-card"
          v-model="cardDisplaySize2xl"
          label="displaySize 2xl"
          name="toggle-display-size-with-card"
        />
      </div>
      <pf-description-list
        :display-size="cardDisplaySize2xl ? '2xl' : 'lg'"
        columns-lg="2Col"
        aria-label="With large display size and card"
      >
        <pf-card component="div">
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-card>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Display size with card, three column on large breakpoint">
      <pf-description-list
        display-size="lg"
        columns-lg="3Col"
        aria-label="Display size with card and three column on large breakpoint"
      >
        <pf-card component="div">
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-card>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Display size with card, horizontal, modified term width">
      <pf-description-list
        display-size="lg"
        horizontal
        columns-lg="2Col"
        term-width="10ch"
        aria-label="Display size with card, horizontal and modified term width"
      >
        <pf-card component="div">
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-card>
        <pf-card component="div">
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-card>
      </pf-description-list>
    </story-canvas>

    <pre v-md>
      ## Auto fit
    </pre>

    <story-canvas title="Auto-fit basic">
      <pf-description-list auto-fit aria-label="Basic auto-fit">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Auto-fit, min width modified grid template columns">
      <pf-description-list auto-fit auto-fit-min="200px" aria-label="Auto-fit grid with minimum width modification">
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <story-canvas title="Auto-fit, min width modified, responsive grid template columns">
      <pf-description-list
        auto-fit
        auto-fit-min-md="100px"
        auto-fit-min-lg="150px"
        auto-fit-min-xl="200px"
        auto-fit-min-2xl="300px"
        aria-label="Responsive auto-fit grid with minimum width"
      >
        <pf-description-list-group>
          <pf-description-list-term>Name</pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Namespace</pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Labels</pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Pod selector</pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>Annotation</pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>

    <pre v-md>
      ## With icons
    </pre>

    <story-canvas title="Icons on terms">
      <pf-description-list aria-label="With icons examples">
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon><cube-icon /></template>
            Name
          </pf-description-list-term>
          <pf-description-list-description>Example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon><book-icon /></template>
            Namespace
          </pf-description-list-term>
          <pf-description-list-description>
            <a href="#">mary-test</a>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon><key-icon /></template>
            Labels
          </pf-description-list-term>
          <pf-description-list-description>example</pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon><language-icon /></template>
            Pod selector
          </pf-description-list-term>
          <pf-description-list-description>
            <pf-button variant="link" inline>
              <template #icon><circle-plus-icon /></template>
              app=MyApp
            </pf-button>
          </pf-description-list-description>
        </pf-description-list-group>
        <pf-description-list-group>
          <pf-description-list-term>
            <template #icon><flag-icon /></template>
            Annotation
          </pf-description-list-term>
          <pf-description-list-description>2 Annotations</pf-description-list-description>
        </pf-description-list-group>
      </pf-description-list>
    </story-canvas>
  </doc-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CirclePlusIcon from '@vue-patternfly/icons/circle-plus-icon';
import CubeIcon from '@vue-patternfly/icons/cube-icon';
import BookIcon from '@vue-patternfly/icons/book-icon';
import KeyIcon from '@vue-patternfly/icons/key-icon';
import LanguageIcon from '@vue-patternfly/icons/language-icon';
import FlagIcon from '@vue-patternfly/icons/flag-icon';

const displaySize2xl = ref(false);
const cardSelectable = ref(false);
const cardDisplaySize2xl = ref(false);
</script>
