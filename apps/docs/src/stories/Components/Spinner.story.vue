<template>
  <doc-page title="Spinner">
    <component-title name="pf-spinner" />

    <pre v-md>
      A **spinner** is used to indicate to users that an action is in progress. For actions that may take a long time, use a [progress bar](#/stories/components/progress) instead.

      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-spinner />
    </story-canvas>

    <story-canvas title="Size variations">
      <pf-spinner size="sm" />
      <pf-spinner size="md" />
      <pf-spinner size="lg" />
      <pf-spinner size="xl" />
    </story-canvas>

    <story-canvas title="Custom size">
      <pf-spinner diameter="80px" />
    </story-canvas>

    <story-canvas title="Inline size">
      <pf-text-content>
        <pf-text component="h1">
          Heading
          <pf-spinner inline aria-label="Spinner in a heading" />
        </pf-text>
        <pf-text component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.
        </pf-text>
        <pf-text component="h2">
          Second level
          <pf-spinner inline aria-label="spinner in a subheading" />
        </pf-text>
        <pf-text component="p">
          Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,
          <pf-spinner inline aria-label="Spinner in a paragraph" /> sit amet commodo arcu rutrum id. Proin pretium urna vel
          cursus venenatis. Suspendisse potenti.
        </pf-text>
        <small>
          Sometimes you need small text
          <pf-spinner inline aria-label="Spinner in a small element" />
        </small>
      </pf-text-content>
    </story-canvas>
  </doc-page>
</template>
