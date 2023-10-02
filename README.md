This project is a Next.js application for the Assestment Task Eduqat - Front End Engineer.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Configuration](#configuration)
4. [Scripts](#scripts)
5. [Dependencies](#dependencies)
6. [Dev Dependencies](#dev-dependencies)
7. [Linting and Formatting](#linting-and-formatting)
8. [Resolutions](#resolutions)

## Installation

To install the project dependencies, run the following command:

```bash
npm install
```

## Usage

To run the development server, use:

```bash
npm run dev
```

To build the project, use:

```bash
npm run build
```

To start the production server, use:

```bash
npm start
```

## Configuration

- `private`: This project is marked as private.

## Scripts

- `dev`: Run the development server using `next dev`.
- `build`: Build the project using `next build`.
- `start`: Start the production server using `next start`.
- `lint`: Run linting using `next lint`.
- `prepare`: Install Husky using `husky install`.

## Dependencies

- `next`: Latest version - The Next.js framework for building React applications.
- `react`: Latest version - The React library for building user interfaces.
- `react-dom`: Latest version - Provides DOM-specific methods that can be used at the top level of a web app.
- `styled-components`: ^6.0.8 - A popular CSS-in-JS library for styling React components.

## Dev Dependencies

- `@types/node`: Latest version - TypeScript types for Node.js.
- `@types/react`: Latest version - TypeScript types for React.
- `@types/react-dom`: Latest version - TypeScript types for React DOM.
- `eslint`: Latest version - A tool for identifying and fixing code style issues.
- `eslint-config-next`: Latest version - ESLint configuration specific to Next.js projects.
- `eslint-config-prettier`: ^9.0.0 - ESLint rules for Prettier integration.
- `husky`: ^8.0.3 - A tool to easily set up Git hooks.
- `lint-staged`: ^14.0.1 - Run linters on pre-committed files in Git.
- `prettier`: 3.0.3 - An opinionated code formatter.
- `typescript`: Latest version - A superset of JavaScript that adds static types to the language.

## Linting and Formatting

The project uses ESLint for linting and Prettier for code formatting. Husky and lint-staged are set up to ensure that code is properly formatted before commits.
