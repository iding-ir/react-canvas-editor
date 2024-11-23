# Index

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

## About
`react-canvas-editor` is a single page application that allows user to create an HTML5 canvas, edit it, and export it as file.

## Features
- Supports importing image.
- Supports Freehand drawing.
- Supports entering text.
- Allows modifying document properties.
- Allows user to export as `.jpg`, `.png`, and `.pdf`.
- Supports localization.
- Supports build-time and runtime theming.
- Uses LocalStorage for persisting state between visits.
- Leverages `.env` files to support different configurations.

## Demo
[Live](https://react-canvas-editor.iding.ir)

## Tech Stack
- `TypeScript`.
- `React`.
- `Redux Toolkit` for state management, querying, caching, and handling effects.
- `React i18next` for localization.
- `Konva` for HTML5 canvas operations.
- `Redux Persist` for persisting the state of app between user views.
- `PDF Lib` for exporting as PDF.
- `SCSS Modules` for component-scoped styles.
- `React Helmet Async` for changing `head` in runtime.
- `Vite` for building the project.

## Installation

Clone:
```
git clone https://github.com/iding-ir/react-canvas-editor.git
```

Install dependencies:
```
yarn install
```

Run dev environment:
```
yarn dev
```