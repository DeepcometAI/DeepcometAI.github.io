# Deepcomet AI — Nuxt 3 SSG

A Nuxt 3 static-site-generation version of the Deepcomet AI Strategic Interactive Report, deployable on GitHub Pages.

## Tech Stack

- **Nuxt 3** — Vue 3 framework with SSG (`nuxt generate`)
- **Tailwind CSS** — via `@nuxtjs/tailwindcss`
- **Chart.js** — lazy-loaded client-side only
- **GitHub Actions** — automated CI/CD to GitHub Pages

---


## Local Development

```bash
npm install
npm run dev
```

## Build / Generate Static Site

```bash
npm run generate
# Output goes to .output/public/
```

---

## Deploying to GitHub Pages

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Configure GitHub Pages

- Go to your repo → **Settings** → **Pages**
- Set **Source** to `GitHub Actions`

### 3. Set the Base URL (if deploying to a sub-path)

If your site will be at `https://USERNAME.github.io/REPO-NAME/` (not the root), update two places:

**`.github/workflows/deploy.yml`:**
```yaml
NUXT_APP_BASE_URL: /REPO-NAME/
```

**`nuxt.config.ts`** (fallback default):
```ts
app: {
  baseURL: '/REPO-NAME/'
}
```

If deploying to a root domain (`USERNAME.github.io`), leave it as `/`.

### 4. Push and Done

Every push to `main` triggers the workflow and deploys automatically.