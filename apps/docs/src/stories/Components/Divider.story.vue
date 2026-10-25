<template>
  <doc-page title="Divider">
    <template #description
      >A <b>divider</b> is a horizontal or vertical line that is placed between screen elements to create visual
      divisions and content groupings.</template
    >

    <template #apidocs>
      <component-info name="PfDivider" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `inset` and `orientation` objects are replaced by breakpoint props: `inset`, `inset-sm`, … and `orientation`, `orientation-sm`, …; inset values drop the `inset` prefix (`md` for `insetMd`).
      - `vertical` is a shorthand for `orientation="vertical"`.

      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Using hr">
      <pf-divider />
    </story-canvas>

    <story-canvas title="Using li">
      <ul role="list">
        <li>List item one</li>
        <pf-divider component="li" role="none" />
        <li>List item two</li>
      </ul>
    </story-canvas>

    <story-canvas title="Using div">
      <pf-divider component="div" />
    </story-canvas>

    <story-canvas title="Inset medium">
      <pf-divider inset="md" />
    </story-canvas>

    <story-canvas title="Inset at various breakpoints">
      <pf-divider inset="md" inset-md="none" inset-lg="3xl" inset-xl="lg" />
    </story-canvas>

    <story-canvas title="Vertical in flex layout">
      <pf-flex>
        <pf-flex-item>first item</pf-flex-item>
        <pf-divider orientation="vertical" />
        <pf-flex-item>second item</pf-flex-item>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Vertical in flex layout, inset small">
      <pf-flex>
        <pf-flex-item>first item</pf-flex-item>
        <pf-divider orientation="vertical" inset="sm" />
        <pf-flex-item>second item</pf-flex-item>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Vertical in flex layout, inset at various breakpoints">
      <pf-flex>
        <pf-flex-item>first item</pf-flex-item>
        <pf-divider orientation="vertical" inset="md" inset-md="none" inset-lg="sm" inset-xl="xs" />
        <pf-flex-item>second item</pf-flex-item>
      </pf-flex>
    </story-canvas>

    <story-canvas title="Switch orientation at various breakpoints">
      <pf-flex>
        <pf-flex-item>first item</pf-flex-item>
        <pf-divider
          orientation="vertical"
          orientation-sm="horizontal"
          orientation-md="vertical"
          orientation-lg="horizontal"
          orientation-xl="vertical"
          orientation-2xl="horizontal"
        />
        <pf-flex-item>second item</pf-flex-item>
      </pf-flex>
    </story-canvas>
  </doc-page>
</template>
