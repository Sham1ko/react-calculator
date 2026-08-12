# React Calculator

A calculator built with React, TypeScript, and Vite. Supports mouse and keyboard input, and a light/dark theme that follows your system preference and remembers your choice.

Live demo: [react-calculator-sham1ko.vercel.app](https://react-calculator-sham1ko.vercel.app/)

## Features

- Basic arithmetic: addition, subtraction, multiplication, division
- Sign toggle (±) and decimal point input
- Division by zero is reported explicitly instead of showing `Infinity`
- Full keyboard support (see below), including the numeric keypad
- Light/dark theme toggle, persisted in `localStorage`, defaulting to your OS preference on first visit
- Styled with Tailwind CSS and [shadcn/ui](https://ui.shadcn.com/)-style components

## Keyboard shortcuts

| Key(s) | Action |
| --- | --- |
| `0`-`9` | Enter a digit |
| `.` or `,` | Decimal point |
| `+` `-` `*` `/` | Operator |
| `Enter` or `=` | Evaluate |
| `Backspace` | Delete last digit |
| `Escape` | Clear |

The numeric keypad works the same way as the top-row keys when Num Lock is on. Sign toggle (±) is mouse/touch only.

## Getting started

Install dependencies:

```bash
npm install
```

Start the dev server (Vite, with HMR):

```bash
npm run dev
```

Run the test suite (Jest):

```bash
npm test
```

Lint the project:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

The optimized build is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Project structure

```
src/
  components/     UI components (buttons, display, theme toggle)
  contexts/       Theme context/provider
  helpers/        Pure calculator logic: reducer, actions, keyboard mapping
  hooks/          React hooks (keyboard input)
  lib/            Small shared utilities
test/             Jest unit tests for the pure logic in helpers/
```

The calculator's state is driven by a single `useReducer` in `src/helpers/reducer.ts`; each action (`add-digit`, `choose-operator`, `clear`, `delete-digit`, `evaluate`, `change-sign`) has its own file under `src/helpers/actions/`.
