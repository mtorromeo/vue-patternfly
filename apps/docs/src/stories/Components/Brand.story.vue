<template>
  <doc-page title="Brand">
    <template #description>A <b>brand</b> is used to place a product logotype on a screen.</template>

    <template #apidocs>
      <component-info src="packages/core/src/components/Brand.vue" />
    </template>

    <pre v-md>
      ## Examples
    </pre>

    <story-canvas title="Basic">
      <pf-brand src="https://www.patternfly.org/assets/images/pf_logo.svg" alt="Patternfly Logo" />
    </story-canvas>

    <story-canvas title="Responsive">
      <template #intro>
        <pre v-md>
          Passing `&lt;source&gt;` elements as children to `Brand` will change the component from an `&lt;img&gt;` to a `&lt;picture&gt;` element. In this form, breakpoint modifiers for width and height may be passed to Brand. The `src` and `alt` properties should still be passed to populate the fallback `img` of the brand.
        </pre>
      </template>

      <pf-brand
        src="https://www.patternfly.org/assets/images/pf-c-brand__logo-base.jpg"
        alt="Fallback patternfly default logo"
        width="40px"
        width-sm="60px"
        width-md="220px"
      >
        <source media="(min-width: 1200px)" srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo-on-xl.svg">
        <source media="(min-width: 992px)" srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo-on-lg.svg">
        <source media="(min-width: 768px)" srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo-on-md.svg">
        <source media="(min-width: 576px)" srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo-on-sm.svg">
        <source srcset="https://www.patternfly.org/assets/images/pf-c-brand__logo.svg">
      </pf-brand>
    </story-canvas>
  </doc-page>
</template>
