# Dependencies

This app has no runtime dependencies. It is plain HTML, CSS, and JavaScript that runs directly in any browser with no build step.

## Developer Tools

### Node.js LTS

Provides `npm` to install dev dependencies and run scripts.

```bash
winget install OpenJS.NodeJS.LTS
```

### GitHub Copilot CLI

AI-assisted development.

```bash
winget install GitHub.Copilot
```

### VS Code Insiders

Recommended for reviewing changes.

```bash
winget install Microsoft.VisualStudioCode.Insiders
```

## Development Packages

| Package | Version | Purpose |
|---|---|---|
| [`@playwright/test`](https://playwright.dev/) | `^1.59.1` | End-to-end browser tests |
| [`serve`](https://github.com/vercel/serve) | `^14.2.6` | Static file server (used by `npm start` and tests) |
