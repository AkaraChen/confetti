<h1 align="center">confetti</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/akarachen/confetti.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/akarachen/confetti.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Show confetti when build success.
    <br> 
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 About ](#-about-)
- [🏁 Getting Started ](#-getting-started-)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [🎈 Usage ](#-usage-)
    - [Vite](#vite)
    - [Rollup](#rollup)
    - [Webpack](#webpack)
    - [Esbuild](#esbuild)
- [🚀 Deployment ](#-deployment-)
- [⛏️ Built Using ](#️-built-using-)
- [✍️ Authors ](#️-authors-)
- [🎉 Acknowledgements ](#-acknowledgements-)

## 🧐 About <a name = "about"></a>

(Only support MacOS)

Show confetti when build success.

## 🏁 Getting Started <a name = "getting_started"></a>

You can use it standalone as a function, or you can interactive it with build tools like webpack/vite/esbuild/rollup.

### Prerequisites

You need to install [Raycast](https://www.raycast.com/).

### Installing

```shell
# If you only want to use it standalone.
pnpm add @akrc/confetti

# If you want to use it with build tools.
pnpm add unplugin-confetti
```

## 🎈 Usage <a name="usage"></a>

If you want to use it standalone:

```ts
import { confetti } from '@akrc/confetti'

confetti()
```

If you want to use it with build tools, see below:

#### Vite

```ts
// vite.config.ts
import { vite } from 'unplugin-confetti';

export default {
  plugins: [
    vite()
  ]
}
```

#### Rollup

```ts
// rollup.config.js
import { rollup } from 'rollup';

export default {
  plugins: [
    rollup()
  ]
}
```

#### Webpack

```js
// webpack.config.js
import { webpack } from 'unplugin-confetti';

module.exports = {
  plugins: [
    webpack()
  ]
}
```

#### Esbuild

```ts
// esbuild.config.js
import { esbuild } from 'unplugin-confetti';

build({
  plugins: [
    esbuild()
  ]
})
```

Or you can take a look at tests in this repo.

## 🚀 Deployment <a name = "deployment"></a>

This repo use pnpm to manage monorepo.

```shell
git clone https://github.com/akarachen/confitte
cd confitte
pnpm install
```

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - JavaScript runtime
- [Unplugin](https://github.com/unjs/unplugin) - Plugin system

## ✍️ Authors <a name = "authors"></a>

- [@akarachen](https://github.com/akarachen) - Idea & Initial work

See also the list of [contributors](https://github.com/akarachen/confetti/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

Inspired by [Umijs](https://github.com/umijs/umi/blob/master/packages/plugins/src/confetti.ts)
