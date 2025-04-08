<template>
  <doc-page title="Vue PatternFly" no-github-link no-design-guidelines>
    <pre v-md>
      [![LICENSE](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)][link-LICENSE]
      [![NPM](https://img.shields.io/npm/v/@vue-patternfly/core.svg?style=flat-square)](https://npmjs.org/package/@vue-patternfly/core)
      [![Download](https://img.shields.io/npm/dw/@vue-patternfly/core.svg?style=flat-square)](https://npmjs.org/package/@vue-patternfly/core)
      [![Issues](https://img.shields.io/github/issues/mtorromeo/vue-patternfly.svg?style=flat-square)](https://github.com/mtorromeo/vue-patternfly/issues)
      [![GitHub](https://img.shields.io/github/stars/mtorromeo/vue-patternfly?style=social)][link-github]

      PatternFly 5 components for Vue 3.

      The components are mostly a straight-forward port of the [PatternFly 5 components][link-patternfly] to Vue 3 with some differences where it makes sense to improve ergonomics or add new features.

      ### Common differences from patternfly-react

      #### Component names are prefixed with `pf-`

      This is done to conform to the custom element specification that requires component names to include an hyphen and to avoid conflicts with other components.

      #### Boolean props "is/has" prefixes removed

      This makes it easier to use the components and matches the naming convention of native elements. E.g. `&lt;pf-text-input disabled /&gt;` just like `&lt;input disabled&gt;` instead of `&lt;pf-text-input is-disabled /&gt;`.

      By doing this we can also omit to declare some props that are automatically inherited by the underlying native element.

      ### Get started

      Install the library with the package management tool of your choice:

      ```
      # @vue-patternfly/icons and @vue-patternfly/table are optional
      npm install --save @vue-patternfly/core @vue-patternfly/icons @vue-patternfly/table
      # or
      yarn add @vue-patternfly/core @vue-patternfly/icons @vue-patternfly/table
      # or
      pnpm add @vue-patternfly/core @vue-patternfly/icons @vue-patternfly/table
      ```

      Then you can import the components you need or use the whole library of components like this:

      ```js
      import '@patternfly/patternfly/patternfly.css';
      import '@patternfly/patternfly/patternfly-addons.css';
      import '@vue-patternfly/table/style.css'; // only for pf-table
      // alternatively include them in your html as a &lt;style&gt; tag

      import { createApp } from 'vue';
      import VuePatternFly from '@vue-patternfly/core';
      import VuePatternFlyTable from '@vue-patternfly/table'; // only for pf-table

      const app = createApp({
        setup() {
          return {};
        },
      });
      app.use(VuePatternFly);
      app.use(VuePatternFlyTable); // only for pf-table
      app.mount('#app');
      ```

      ## Credits

      - [Massimiliano Torromeo][link-author]
      - [All Contributors][link-contributors]

      ## License

      The MIT License (MIT). Please see [License File](LICENSE) for more information.

      [link-github]: https://github.com/mtorromeo/vue-patternfly
      [link-LICENSE]: https://raw.githubusercontent.com/mtorromeo/vue-patternfly/master/packages/core/LICENSE
      [link-author]: https://github.com/mtorromeo
      [link-contributors]: https://github.com/mtorromeo/vue-patternfly/graphs/contributors
      [link-patternfly]: https://v5-archive.patternfly.org/
    </pre>
  </doc-page>
</template>
