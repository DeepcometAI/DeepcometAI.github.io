# Deepcomet AI Developer Portal

This is the official Astro SSG boilerplate for the Deepcomet AI developer portal, featuring the Aurelia programming language, Zenith Kernel, and SkyOS ecosystem.

## Tech Stack
- **Framework**: Astro SSG
- **Styling**: TailwindCSS (v3)
- **Content**: Markdown/MDX with Astro Content Collections
- **Deployment**: GitHub Pages (via GitHub Actions)

## Project Structure
- `src/pages/`: Routing and main pages (`index`, `roadmap`, `docs`, `blog`, `ecosystem`).
- `src/content/`: Structured MDX content collections.
- `src/components/`: Reusable UI components (Hero, Card, Timeline).
- `src/layouts/`: Global layout with Navbar, Footer, and Theme toggle.

## Setup & Development

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run development server**:
   ```bash
   npm run dev
   ```
3. **Build for production**:
   ```bash
   npm run build
   ```

## CI/CD Automation
A placeholder GitHub Actions workflow is included in `.github/workflows/deploy.yml` to automatically build and deploy the site to GitHub Pages upon pushing to the `main` branch.
