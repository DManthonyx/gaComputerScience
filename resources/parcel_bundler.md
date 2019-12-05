# Parcel Web Application Bundler

Parcel is a compiler for all your code, regardless of the language or toolchain.

Parcel takes all of your files and dependencies, transforms them, and merges
them together into a smaller set of output files that can be used to run your
code.

Parcel supports many different languages and file types out of the box, from
web technologies like HTML, CSS, and JavaScript, to lower level languages like
Rust, and anything that compiles to WebAssembly (WASM), to assets like images,
fonts, videos, and more.

Parcel makes your code portable, you can build your code for different
environments, for the web for your server, or for an app. You can even build
multiple targets at once and have them live update as you make changes.

Parcel is fast and predictable. It compiles all of your files in isolation in
parallel inside workers, caching all of them as it goes along. Caches are
stable across machines and are only affected by the files and configs within
your project (unless you want to pass specific environment variables).

# Parcel CLI

## Global Install

`npm install -g parcel-bundler`

## Steps to Reproduce Parcel dev pipeline

- `mkdir my-parcel-app && cd my-parcel-app`
- `npm init --yes`
- Create an index.html and index.js file
- Add to index.js: `console.log('hello parcel!')`
- Add the **serve** and **build** scripts to package.js

```
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- Add the following script tag to the head of index.html
  `<script defer src="./index.js"></script>`

- Run dev script to start Parcel dev server
  - `npm run dev`
- Run build script to bundle app into **dist/** directory
  - `npm run build`

## Local Install

The Parcel CLI is built into the main `parcel` package. While you can install
it globally and run it, it is much better to install it locally into your
project as a dev dependency.

```sh
yarn add --dev parcel@next
```

You should also add some "scripts" to your `package.json` to run it easier.

```json
{
  "name": "my-project",
  "scripts": {
    "build": "parcel build index.html",
    "dev": "parcel serve index.html"
  },
  "devDependencies": {
    "parcel": "latest"
  }
}
```

Now you can run `npm run build` to bundle your project for production and
`npm run dev` to dev on your project.

### CLI Args & Flags

Usage:

```sh
$ parcel [command] [...entries] [...flags]
```

#### `parcel serve`

Serve assets on a local server

#### `parcel watch`

Watch and rebuild code on file changes.

#### `parcel build`

Build code once, in production mode.
