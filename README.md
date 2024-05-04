# 🐲 \<naga-ui>

![Static Badge](https://img.shields.io/badge/work_in_progress-yellow) ![NPM Version](https://img.shields.io/npm/v/naga-ui)

A webcomponent made for fun and follows the [open-wc](https://github.com/open-wc/open-wc) recommendation. Created using Lit.

## Development

To run a local development server that serves the basic demo located in `demo/index.html`

```bash
# install pre-commit if you don't have it
pre-commit install --hook-type commit-msg

# install deps
yarn install

# start local development server
yarn start
```

## Testing with Web Test Runner

To execute a single test run:

```bash
yarn run test
```

To run the tests in interactive watch mode run:

```bash
yarn run test:watch
```

## Publishing

Make sure you are in `main` branch and release note has been created first. Then run:

```bash
# build the package
yarn build

# publish the naga
yarn npm publish
```
