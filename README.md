# Backend for project practice management system for ICIS NRNU MEPhI

### Content

1. [Setup](#setup)

1.1. [Development](#development)

1.2. [Production](#production)

2. [Technology](#technology)

3. [Plans](#plans-for-the-future-долгий-ящик)

4. [Project structure](#project-structure)

### Setup

#### Development

```Bash
git clone https://github.com/Vampiracus/ppicis-frontend.git
npm i
npm run dev
```

#### Production

```Bash
git clone https://github.com/Vampiracus/ppicis-frontend.git
npm i
npm run build
```
After that the bundle of the project in created in the `dist` directory. Your web-server should return `index.html` from there

### Technology

- `React`
- `TypeScript` for static typing
- `ESLint` for formatting code-style
- `Vite` for building the project
- `Redux-Toolkit` as a state manager
- `Sass` as a preprocessor

### Plans for the future (долгий ящик)

- None yet

### Project structure

After you have set up the project, in the root directory you can see configuration files:
- `tsconfig.json` and `tsconfig.node.json` needed for correct work of TypeScript
- `package.json`, `package-lock.json` and `.npmrc` needed for NPM
- `.gitignore` which makes sure no unneded files and directories (such as `dist` or `node_modules`) get stored in this Git repository
- `eslintrc.cjs` needed for ESLint
- `vite.config.ts` needed for Vite

You can also see directories:
- `dist` (after performing `npm run build` in the terminal). There you can find the  project bundle
- `node_modules` (after performing `npm install`). There all the project dependencies are stored

Finally the directory `src` can also be found in the root directory. Inside it:
- `vite-end.d.ts` needed for Vite and for css-modules
- `url.ts`: project paths are defined there
- `main.tsx` is the entry point of the project
- `index.scss`: global styles are defined here
- `colors.scss`: project colors are defined here
- `App.tsx`: the app component is defined here
- `utils`: here utils are stored. For example in `validation.ts` all the validation functions are implemented
- `types`: in the nested file `global.d.ts` the project types are defined, in `types.ts` status codes are stored
- `redux`: redux files are implemented here. `store.ts` is the entry point. In `slices` all the slices are implemented
- `api`: all the server API calles are implemented in this directory
- `components`: global reusable components are implemented here
- `pages`: all the pages are implemented here. In a nested directory a `.tsx` file with the page component and a `.module.scss` file with the page styles are present. There also can be a `components` directory nested, it repeats the `pages` directory structure, but instead of pages page components are stored implemented there