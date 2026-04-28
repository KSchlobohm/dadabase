# Dependencies

This app has no runtime dependencies. It is plain HTML, CSS, and JavaScript that runs directly in any browser with no build step.

## Developer Tools

| Tool | Install | Purpose |
|---|---|---|
| [Node.js LTS](https://nodejs.org/) | `winget install OpenJS.NodeJS.LTS` | Provides `npm` to install dev dependencies and run scripts |
| [GitHub Copilot CLI](https://docs.github.com/copilot/concepts/agents/about-copilot-cli) | `winget install GitHub.Copilot` | AI-assisted development |
| [VS Code Insiders](https://code.visualstudio.com/insiders/) | `winget install Microsoft.VisualStudioCode.Insiders` | Reviewing changes |

## Development

| Package | Version | Purpose |
|---|---|---|
| [`@playwright/test`](https://playwright.dev/) | `^1.59.1` | End-to-end browser tests |
| [`serve`](https://github.com/vercel/serve) | `^14.2.6` | Static file server (used by `npm start` and tests) |
