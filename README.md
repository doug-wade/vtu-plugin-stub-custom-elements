# vtu-plugin-stub-custom-elements

A @vue/test-utils plugin for automatically stubbing custom elements

## Installation

First, install the plugin using your favorite package manager (npm, pnpm, yarn)

```shell
yarn add vtu-plugin-stub-custom-elements --dev
```

Then add it to your `setup.js`

```javascript
import { config } from '@vue/test-utils'
import StubCustomElementsPlugin from './myPlugin'

// Install the plugin onto VueWrapper
config.plugins.VueWrapper.install(StubCustomElementsPlugin)
```

## Usage

This plugin adds stubs for every custom element that has a definition in the customElements registry to every wrapper mounted using Vue test utils. No additional
steps should be required to use it.

## Motivation

This is how I'm working around [this issue](https://github.com/vuejs/vue-jest#templatecompiler) in `vue-jest`.
