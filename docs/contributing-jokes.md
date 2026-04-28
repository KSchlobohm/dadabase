# Contributing Jokes

## Assumptions

All jokes must work **verbally** — they must land when spoken aloud. Do not add jokes whose punchline only works because of spelling, punctuation, or visual presentation.

## Adding Jokes

Jokes are hardcoded in two places. Both must be updated together:

- **`app.js`** — the canonical runtime array
- **`tests/dad-a-base.spec.js`** — the mirrored `const JOKES` array used by the test suite

## Format

Each joke is an object with a `setup` and a `punchline`:

```js
{ setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired." }
```
