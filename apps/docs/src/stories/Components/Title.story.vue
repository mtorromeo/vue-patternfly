<template>
  <doc-page title="Title">
    <template #description>
      <pre v-md>
        A **title** component applies top and bottom margins, font-weight, font-size, and line-height to titles. The most common usage for a title is to define headings within a page. For more information about the relationship between title component sizes and HTML heading levels, see the [Typography guidelines](https://www.patternfly.org/design-foundations/typography#customizing-heading-levels).
      </pre>
    </template>

    <template #apidocs>
      <component-info name="PfTitle" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The heading level is the `h` prop (`headingLevel`), which accepts `1` to `6` as well as `h1` to `h6`, and defaults to `1`.
      See [common differences from patternfly-react](#/).

      ## Examples
    </pre>

    <story-canvas title="Default sizes">
      <pf-title h="1">H1-styled title</pf-title>
      <pf-title h="2">H2-styled title</pf-title>
      <pf-title h="3">H3-styled title</pf-title>
      <pf-title h="4">H4-styled title</pf-title>
      <pf-title h="5">H5-styled title</pf-title>
      <pf-title h="6">H6-styled title</pf-title>
    </story-canvas>

    <story-canvas title="Custom sizes">
      <pf-title h="1" size="4xl">4xl title</pf-title>
      <pf-title h="2" size="3xl">3xl title</pf-title>
      <pf-title h="3" size="2xl">2xl title</pf-title>
      <pf-title h="4" size="xl">xl title</pf-title>
      <pf-title h="5" size="lg">lg title</pf-title>
      <pf-title h="6" size="md">md title</pf-title>
    </story-canvas>
  </doc-page>
</template>
