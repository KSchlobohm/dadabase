# Copilot Instructions

## Commands

```bash
npm install                        # install dev dependencies
npm start                          # serve app at http://localhost:3000
npm test                           # run all Playwright tests (also starts the server)
npx playwright test --grep "title" # run a single test by name pattern
```

Playwright tests only run against Chromium (see `playwright.config.js`). The test runner starts `npx serve` automatically via `webServer`, so no manual server step is needed for testing.

## Architecture

This is a zero-build, zero-runtime-dependency static web app:

- **`index.html`** — markup and layout
- **`app.js`** — all application logic: the joke array, navigation state (`index`, `showingPunchline`), and DOM manipulation
- **`styles.css`** — all styles

There is no bundler, no framework, and no backend. `app.js` runs directly in the browser via a `<script>` tag.

## Key Conventions

**Jokes must work verbally.** All jokes must land when spoken aloud — no visual or written-only punchlines (e.g. a punchline that only works because of spelling). When adding jokes, verify the punchline makes sense heard out loud.

**Jokes are hardcoded in two places.** `app.js` holds the canonical joke array used at runtime. `tests/dad-a-base.spec.js` has its own copy of the same jokes (in `const JOKES`) used to assert expected text. When adding or changing jokes, update both.

**State lives in two module-level variables** in `app.js`: `index` (current joke position) and `showingPunchline` (boolean). `loadJoke(i)` is the single function that resets both — always call it when navigating. `tap()` is the only path that mutates `showingPunchline`.

**Setup and punchline are separate DOM elements.** `#setup-text` is always visible; `#punchline-text` starts hidden and is toggled by tapping the card. Navigation (`next`, `prev`) always resets the punchline to hidden via `loadJoke`. Use `.hidden` (a `display:none` utility class) to control punchline visibility.

**Tests use `#setup-text` and `#punchline-text`** — these IDs are load-bearing for the test suite. Don't rename them without updating the tests.
