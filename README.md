# dad-a-base
A simple web app that displays a curated set of dad jokes in a tap-to-reveal flashcard-style interface.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [GitHub Copilot CLI](https://docs.github.com/copilot/concepts/agents/about-copilot-cli) *(optional — for AI-assisted development)*

## Getting Started

```bash
# Install dependencies
npm install

# Run the app (served at http://localhost:3000)
npm start
```

## Running Tests

```bash
npm test
```

## Dependencies

| Package | Type | Purpose |
|---|---|---|
| [`@playwright/test`](https://playwright.dev/) | dev | End-to-end browser tests |
| [`serve`](https://github.com/vercel/serve) | dev | Static file server (used by `npm start` and tests) |
