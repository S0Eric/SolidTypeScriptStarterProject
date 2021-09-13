# SolidTypeScriptStarterProject

A starter project for the Solid JavaScript library with TypeScript source.

Webpack is the main driver of the build process and is very configurable. It's main purpose is to start with one or more top level TypeScript source files, determine the dependency tree, and bundle everything into a single minified JavaScript file. Typescript and babel are configured as plugins to webpack. Solid requires specific JSX processing and this is done by configuring the TypeScript compiler to pass the JSX through unchanged, and then Solid's babel plugin translates the JSX syntax into Solid specific JavaScript code that renders the DOM nodes.

### Requirement:
- Node


After cloning, run this command to download all dependencies:

```
npm install
```

### For more information, visit these web sites:

[Solid](https://github.com/ryansolid/solid)

[TypeScript](https://www.typescriptlang.org/)

### Project Commands:

To launch Webpack's development server (has hot loading):

```
npm run dev
```

Then [open app in your browser.](http://localhost:8080)

To launch Webpack's development server (has hot loading), and open the app in your default browser:

```
npm run dev-open
```
To compile the TypeScript source into public/ts-bundle.js (mode=development):

```
npm run build-dev
```

To compile the TypeScript source into public/ts-bundle.min.js (mode=production):

```
npm run build
```

To watch the source folder and execute the build-dev script whenever a change is detected:

```
npm run watch
```

### Update History:

    2021-09-13: Update dependent packages to latest versions. Used npm-check-update (https://futurestud.io/tutorials/npm-update-all-node-js-dependencies-to-their-latest-version) to do it with one command.

    Solid version 1.0.0 renamed createState to createStore and related types were moved from "solid-js" to "solid-js/store". My class that wrapped the "state" object was called "Store", so it had to be renamed to "MainStore", so it didn't conflict.

    WebPack at some point removed the devServer.contentBase and devServer.overlay options. Replaced contentBase with static.directory.

    Added the dev-open script entry.
