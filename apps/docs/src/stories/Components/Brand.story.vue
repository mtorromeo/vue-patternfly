<template>
  <doc-page title="Brand">
    <template #description>A <b>brand</b> is used to place a product logotype on a screen.</template>

    <template #apidocs>
      <component-info name="PfBrand" />
    </template>

    <pre v-md>
      ## Differences from patternfly-react
      - The `widths` and `heights` objects are replaced by flat breakpoint props: `width`, `width-sm`, `width-md`, `width-lg`, `width-xl`, `width-2xl` and the same for `height`.

      See [common differences from patternfly-react](#/).

      ## Examples

      The brand component does not have any built-in theme support. If a brand should be dynamically styled, you must manually set up the necessary logic on your own.

      These examples adjust styling when the documentation is toggled between the light and dark theme.
    </pre>

    <story-canvas title="Basic">
      <div class="show-light">
        <pf-brand :src="pfLogo" alt="Patternfly" width="200px" width-md="400px" width-xl="600px" />
      </div>
      <div class="show-dark">
        <pf-brand :src="pfLogoDark" alt="Patternfly" width="200px" width-md="400px" width-xl="600px" />
      </div>
    </story-canvas>

    <story-canvas title="Responsive">
      <template #intro>
        <pre v-md>
          Passing `&lt;source&gt;` elements in the default slot of `pf-brand` will change the component from an `&lt;img&gt;` to a `&lt;picture&gt;` element. The `src` and `alt` properties should still be passed to populate the fallback `img` of the brand.
        </pre>
      </template>

      <div class="show-light">
        <pf-brand :src="pfLogo" alt="Patternfly" width="40px" width-sm="60px" width-md="220px">
          <source media="(min-width: 1200px)" :srcset="pfLogo" />
          <source media="(min-width: 992px)" :srcset="pfLogo" />
          <source media="(min-width: 768px)" :srcset="pfLogo" />
          <source media="(min-width: 576px)" :srcset="pfLogoSm" />
          <source media="(min-width: 320px)" :srcset="pfLogoSm" />
          <source :srcset="pfLogo" />
        </pf-brand>
      </div>
      <div class="show-dark">
        <pf-brand :src="pfLogoDark" alt="Patternfly" width="40px" width-sm="60px" width-md="220px">
          <source media="(min-width: 1200px)" :srcset="pfLogoDark" />
          <source media="(min-width: 992px)" :srcset="pfLogoDark" />
          <source media="(min-width: 768px)" :srcset="pfLogoDark" />
          <source media="(min-width: 576px)" :srcset="pfLogoSmDark" />
          <source media="(min-width: 320px)" :srcset="pfLogoSmDark" />
          <source :srcset="pfLogoDark" />
        </pf-brand>
      </div>
    </story-canvas>
  </doc-page>
</template>

<style>
.show-dark,
:where(.pf-v6-theme-dark) .show-light {
  display: none;
}

:where(.pf-v6-theme-dark) .show-dark {
  display: revert;
}

:where(.pf-v6-theme-dark) .show-dark .pf-m-picture {
  display: inline-flex;
}
</style>

<script lang="ts" setup>
import pfLogo from '@patternfly/patternfly/assets/images/PF-HorizontalLogo-Color.svg';
import pfLogoDark from '@patternfly/patternfly/assets/images/PF-HorizontalLogo-Reverse.svg';
import pfLogoSm from '@patternfly/patternfly/assets/images/PF-IconLogo-color.svg';
import pfLogoSmDark from '@patternfly/patternfly/assets/images/PF-IconLogo-Reverse.svg';
</script>
