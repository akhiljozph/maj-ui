# Prompts

## Instructions: 01.

### Step 1 — Read the Project Rules

Before writing a single line of code, read the `GEMINI.md` file in the root of this project. That file is the single source of truth for this entire codebase. Every decision — tech stack, folder structure, naming conventions, styling approach, accessibility requirements — must strictly follow what is defined in it.

Do not proceed until you have confirmed you have read and understood `GEMINI.md`.

### Step 2 — Scaffold the Project Architecture

Based solely on the rules in `GEMINI.md`, set up the complete project structure from scratch. Do the following in order:

#### 2.1 — Initialize the Project

- Initialize a pnpm workspace
- Set up Vite with React 19 + TypeScript in strict mode
- Configure `tsconfig.json` with strict mode enabled, path aliases (`@/` -> `src/`), and library output settings
- Configure `vite.config.ts` for library mode with CSS Modules support and tree shaking

#### 2.2 — Install All Dependencies

Install every dependency defined in `GEMINI.md` including:
- React 19, TypeScript
- Radix UI
- Vitest, Playwright
- Storybook
- ESLint (with React, TypeScript, and accessibility plugins), Prettier

#### 2.3 — Create the Folder Structure

Create the following structure exactly:

```
src/
├── components/
├── tokens/
├── themes/
├── foundations/
├── hooks/
├── types/
└── index.ts
```

#### 2.4 — Configure the Public API

Set up `src/index.ts` as the barrel export file. It should be empty for now but structured to receive component exports as they are built.

#### 2.5 — Configure package.json for Publishing

Set the following fields in `package.json`:
- `main`, `module`, `types`, `exports` pointing to `dist/`
- `sideEffects: ["**/*.css"]`
- Correct `peerDependencies` for React and React DOM
- `files` field pointing only to `dist/`

#### 2.6 — Design Tokens

Create `src/tokens/tokens.css` with all CSS custom properties defined on `:root`:

- **Colors** — primary, secondary, neutral, semantic (success, warning, error, info) with full scale (50–900)
- **Typography** — font families, sizes (xs → 4xl), weights, line heights, letter spacing
- **Spacing** — scale from 0 to 128 using a 4px base unit
- **Border radius** — none, sm, md, lg, xl, full
- **Shadows** — xs, sm, md, lg, xl
- **Z-index** — base, dropdown, sticky, overlay, modal, toast
- **Breakpoints** — xs, sm, md, lg, xl, 2xl
- **Motion** — duration (fast, normal, slow), easing (ease-in, ease-out, ease-in-out, spring)

Also create:
- `src/themes/light.css` — overrides using `[data-theme="light"]`
- `src/themes/dark.css` — overrides using `[data-theme="dark"]`
- `src/tokens/index.ts` — typed TypeScript object mirroring all CSS variables

#### 2.7 — ThemeProvider

Create a `ThemeProvider` component at `src/themes/ThemeProvider.tsx` that:
- Accepts a `theme` prop (`"light" | "dark"`)
- Applies `data-theme` attribute to a wrapper element
- Allows consumers to switch themes at runtime

### Step 3 — Build the Button Component

Once the architecture is confirmed and compiles cleanly with zero errors, build the `Button` component. Plan your approach in 2–3 bullet points before writing any code.

The Button must follow the exact folder structure from `GEMINI.md`:

```
src/components/Button/
├── Button.tsx
├── Button.module.css
├── Button.types.ts
├── Button.test.tsx
├── Button.stories.tsx
└── index.ts
```

#### Button Requirements

**Variants:** `primary`, `secondary`, `ghost`, `danger`
**Sizes:** `sm`, `md`, `lg`
**States:** default, hover, focus, active, disabled, loading
**Props:**
- `variant` — controls visual style
- `size` — controls padding and font size
- `isLoading` — shows a spinner, disables interaction
- `isDisabled` — disables the button
- `leftIcon` / `rightIcon` — accepts a React node
- `fullWidth` — stretches to container width
- `onClick` — standard click handler
- All native HTML `<button>` attributes via prop spreading

**Accessibility:**
- Uses native `<button>` element (no Radix needed for Button)
- `aria-disabled` when disabled or loading
- `aria-busy` when loading
- Fully keyboard navigable
- Visible focus ring using token-based outline

**Styling:**
- All styles via `Button.module.css`
- All color, spacing, radius, and motion values pulled from CSS custom properties — no hardcoded values
- Smooth hover and focus transitions using motion tokens
- Dark mode works automatically via theme tokens

**Stories (`Button.stories.tsx`):**
- Default story
- All variants
- All sizes
- Loading state
- Disabled state
- With left icon
- With right icon
- Full width

**Tests (`Button.test.tsx`):**
- Renders correctly
- Calls `onClick` when clicked
- Does not call `onClick` when disabled
- Does not call `onClick` when loading
- Renders left and right icons
- Applies correct variant class
- Applies correct size class
- Has correct ARIA attributes in disabled and loading states

### Step 4 — Export and Verify

1. Export the `Button` component and its types from `src/index.ts`
2. Confirm the project builds with zero TypeScript errors
3. Confirm all Button tests pass
4. Confirm the Storybook story renders correctly

### Rules Reminder

- Read `GEMINI.md` first — it overrides everything
- No `any` — use `unknown` and narrow if needed
- No inline styles except dynamic CSS variable values
- No Tailwind, no Sass at component level
- No placeholders or TODOs — all code must be complete and working
- If you find a bug or type issue at any point, call it out before continuing

---