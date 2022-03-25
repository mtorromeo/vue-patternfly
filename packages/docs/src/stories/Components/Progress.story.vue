<template>
  <doc-page title="Progress">
    <component-title name="pf-progress" />

    <pre v-md>
      A **progress** bar informs users about the completion status of an ongoing process or task.
      See full [Design guidelines](https://www.patternfly.org/v4/components/progress/design-guidelines) on the official patternfly documentation.
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-progress :value="33" title="Title" />
    </story-canvas>

    <story-canvas title="Small">
      <pf-progress :value="33" title="Title" size="sm" />
    </story-canvas>

    <story-canvas title="Large">
      <pf-progress :value="33" title="Title" size="lg" />
    </story-canvas>

    <story-canvas title="Outside">
      <pf-progress :value="33" title="Title" measure-location="outside" />
    </story-canvas>

    <story-canvas title="Inside">
      <pf-progress :value="33" title="Title" measure-location="inside" />
    </story-canvas>

    <story-canvas title="Success">
      <pf-progress :value="33" title="Title" variant="success" />
    </story-canvas>

    <story-canvas title="Failure">
      <pf-progress :value="33" title="Title" variant="danger" />
    </story-canvas>

    <story-canvas title="Warning">
      <pf-progress :value="33" title="Title" variant="warning" />
    </story-canvas>

    <story-canvas title="Inside success">
      <pf-progress :value="33" title="Title" variant="success" measure-location="inside" />
    </story-canvas>

    <story-canvas title="Outside failure">
      <pf-progress :value="33" title="Title" variant="danger" measure-location="outside" />
    </story-canvas>

    <story-canvas title="Single line">
      <pf-progress :value="33" aria-title="Title" measure-location="outside" />
    </story-canvas>

    <story-canvas title="Without measure">
      <pf-progress :value="33" title="Title" measure-location="none" />
    </story-canvas>

    <story-canvas title="Failure without measure">
      <pf-progress :value="33" title="Title" variant="danger" measure-location="none" />
    </story-canvas>

    <story-canvas title="Finite step">
      <pf-progress :value="2" title="Title" :max="5" label="2 of 5" value-text="2 of 5" />
    </story-canvas>

    <story-canvas title="Progress (step instruction)">
      <pf-progress
        :value="2"
        title="Title"
        :max="5"
        label="Step 2: Copying files"
        value-text="Step 2: Copying files"
      />
    </story-canvas>

    <story-canvas title="Truncate title">
      <pf-progress
        :value="33"
        title="Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar"
        title-truncated
      />
    </story-canvas>
  </doc-page>
</template>
