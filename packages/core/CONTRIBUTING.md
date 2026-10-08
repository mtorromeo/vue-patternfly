# Contributing

Contributions are **welcome** and will be fully **credited**.

We accept contributions via Pull Requests on [Github](https://github.com/mtorromeo/vue-patternfly).


## Pull Requests

- **Document any change in behaviour** - Make sure the `README.md` and any other relevant documentation are kept up-to-date.

- **Consider our release cycle** - We try to follow [SemVer v2.0.0](http://semver.org/). Randomly breaking public APIs is not an option.

- **Create feature branches** - Don't ask us to pull from your master branch.

- **Add tests** - Bug fixes should come with a regression test and new features with tests covering them.

- **One pull request per feature** - If you want to do more than one thing, send multiple pull requests.

## Testing

Tests use [Vitest](https://vitest.dev/) with [Vue Test Utils](https://test-utils.vuejs.org/) in a `happy-dom` environment.
They live in the `tests/` directory of each package (`packages/core/tests`, `packages/table/tests`) and are named `*.spec.ts`.

```bash
pnpm test                                  # run all tests (via turbo)
pnpm --filter @vue-patternfly/core test    # run a single package's tests
pnpm --filter @vue-patternfly/core test:watch
pnpm --filter @vue-patternfly/core coverage
```

**Happy coding**!
