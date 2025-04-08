# Vue PatternFly

[![LICENSE](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)][link-LICENSE]
[![NPM](https://img.shields.io/npm/v/@vue-patternfly/core.svg?style=flat-square)](https://npmjs.org/package/@vue-patternfly/core)
[![Download](https://img.shields.io/npm/dw/@vue-patternfly/core.svg?style=flat-square)](https://npmjs.org/package/@vue-patternfly/core)
[![Issues](https://img.shields.io/github/issues/mtorromeo/vue-patternfly.svg?style=flat-square)](https://github.com/mtorromeo/vue-patternfly/issues)

PatternFly 5 components for Vue 3.

The components are mostly a straight-forward port of the [PatternFly 5 components][link-patternfly] to Vue 3 with some differences where it makes sense to improve ergonomics or add new features.

### Common differences from patternfly-react

#### Component names are prefixed with `pf-`

This is done to conform to the custom element specification that requires component names to include an hyphen and to avoid conflicts with other components.

#### Boolean props "is/has" prefixes removed

This makes it easier to use the components and matches the naming convention of native elements. E.g. `<pf-text-input disabled />` just like `<input disabled>` instead of `<pf-text-input is-disabled />`.

By doing this we can also omit to declare some props that are automatically inherited by the underlying native element.

### Get started

Install the library with the package management tool of your choice:

```
npm install --save @vue-patternfly/core
# or
yarn add @vue-patternfly/core
```

Then you can import the components you need or use the whole library of components like this:

```js
import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';
// alternatively include them in your html as a <style> tag

import { createApp } from 'vue';
import VuePatternFly from '@vue-patternfly/core';

const app = createApp({
  setup() {
    return {};
  },
});
app.use(VuePatternFly);
app.mount('#app');
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Documentation

See the [storybook][link-storybook] for usage instructions and other documentation.

## Security

If you discover any security related issues, please email massimiliano.torromeo@gmail.com instead of using the issue tracker.

## Credits

- [Massimiliano Torromeo][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[link-LICENSE]: https://raw.githubusercontent.com/mtorromeo/vue-patternfly/master/packages/core/LICENSE
[link-CONDUCT]: https://github.com/mtorromeo/vue-patternfly/blob/master/packages/core/CONDUCT.md
[link-author]: https://github.com/mtorromeo
[link-contributors]: ../../contributors
[link-patternfly]: https://v5-archive.patternfly.org/
[link-storybook]: https://mtorromeo.github.io/vue-patternfly/
