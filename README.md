# D/d — Portfolio

Cybersecurity portfolio site. React + Vite + Tailwind CSS, deployed with GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy to GitHub Pages

This repo already includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys the site
automatically on every push to `main`.

**One-time setup:**

1. Create a new GitHub repo (e.g. `dd-portfolio`) and push this code to it:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/th1lak-d/dd-portfolio.git
   git push -u origin main
   ```
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   select **GitHub Actions**.
3. Push again (or re-run the workflow from the **Actions** tab). The site
   will be live at:
   ```
   https://th1lak-d.github.io/dd-portfolio/
   ```

**Important:** `vite.config.js` sets `base: "/dd-portfolio/"`. If you name
the repo something else, update that value to match — it must be
`/<your-repo-name>/`.

### Alternative: use it as your GitHub profile homepage

If you'd rather this live at `https://th1lak-d.github.io/` (no sub-path),
name the repo exactly `th1lak-d.github.io` and set `base: "/"` in
`vite.config.js` instead.

## Editing content

- `src/components/Hero.jsx` — name, tagline, status line
- `src/components/FeaturedProject.jsx` — SocCraft details, features, stack
- `src/components/ResponseTimeline.jsx` — performance data (pulled from the
  SocCraft README's MITRE ATT&CK results)
- `src/components/Skills.jsx` — skills, grouped by category
- `src/components/NextProject.jsx` — update once project #2 is ready
- `src/components/Contact.jsx` — swap in your real email / LinkedIn when ready
