<template>
  <doc-page title="Spinner">
    <template #description
      >A <b>spinner</b> is used to indicate to users that an action is in progress. For actions that may take a long
      time, use a <a href="#/stories/components/progress">progress bar</a> instead.</template
    >

    <template #apidocs>
      <component-info name="PfSpinner" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-spinner aria-label="Contents of the basic example" />
    </story-canvas>

    <story-canvas title="Size variations">
      <pf-spinner size="sm" aria-label="Contents of the small example" />
      <pf-spinner size="md" aria-label="Contents of the medium example" />
      <pf-spinner size="lg" aria-label="Contents of the large example" />
      <pf-spinner size="xl" aria-label="Contents of the extra large example" />
    </story-canvas>

    <story-canvas title="Custom size">
      <pf-spinner diameter="80px" aria-label="Contents of the custom size example" />
    </story-canvas>

    <story-canvas title="Inline size">
      <pf-content>
        <h1>
          Heading
          <pf-spinner inline aria-label="Spinner in a heading" />
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed hendrerit nisi in cursus maximus.</p>
        <h2>
          Second level
          <pf-spinner inline aria-label="spinner in a subheading" />
        </h2>
        <p>
          Curabitur accumsan turpis pharetra blandit. Quisque condimentum maximus mi,
          <pf-spinner inline aria-label="Spinner in a paragraph" /> sit amet commodo arcu rutrum id. Proin pretium urna
          vel cursus venenatis. Suspendisse potenti.
        </p>
        <small>
          Sometimes you need small text
          <pf-spinner inline aria-label="Spinner in a small element" />
        </small>
      </pf-content>
    </story-canvas>
  </doc-page>
</template>
