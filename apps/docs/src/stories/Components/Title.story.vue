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

    <story-canvas title="Sizes">
      <pf-title h="1" size="4xl">4xl Title</pf-title>
      <pf-title h="2" size="3xl">3xl Title</pf-title>
      <pf-title h="3" size="2xl">2xl Title</pf-title>
      <pf-title h="4" size="xl">xl Title</pf-title>
      <pf-title h="5" size="lg">lg Title</pf-title>
      <pf-title h="6" size="md">md Title</pf-title>
    </story-canvas>

    <story-canvas title="Default size mappings">
      <pf-title h="1">4xl Title</pf-title>
      <pf-title h="2">3xl Title</pf-title>
      <pf-title h="3">2xl Title</pf-title>
      <pf-title h="4">xl Title</pf-title>
      <pf-title h="5">lg Title</pf-title>
      <pf-title h="6">md Title</pf-title>
    </story-canvas>
  </doc-page>
</template>
