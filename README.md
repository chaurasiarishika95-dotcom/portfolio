# Rishika Portfolio — Central Save (GitHub + Vercel, no Supabase)

## Included
- `index.html`: portfolio and admin editor
- `portfolio-data.json`: central published content
- `api/save.js`: Vercel serverless endpoint that commits updates to GitHub

## Setup
1. Upload `index.html`, `portfolio-data.json`, and the `api` folder to the root of the GitHub repository connected to Vercel.
2. In GitHub, create a fine-grained personal access token scoped only to this repository, with **Contents: Read and write** permission. Never put the token in the HTML.
3. In Vercel → Project → Settings → Environment Variables, add `GITHUB_TOKEN`, `GITHUB_OWNER` (GitHub username/org), `GITHUB_REPO` (repository name), `GITHUB_BRANCH` (usually `main`), and `ADMIN_PASSWORD` (long unique admin password).
4. Redeploy after adding variables.
5. Open `https://YOUR-DOMAIN/?admin=1`, edit content, enter the admin password, and click **Save & publish all changes**. The API commits the JSON to GitHub and Vercel redeploys.

## Notes
- No Supabase/database required; GitHub's JSON file is the central content store.
- Save buttons for an individual project/section save to the browser draft; **Central Save & Publish** makes the changes public.
- The password is checked server-side; `?admin=1` only reveals the editor.
- Keep GitHub 2FA enabled. Use a repository-scoped token only.
- This makes selected main-page sections editable (headline, intro, approach, education, about paragraphs, contact text/email/LinkedIn), along with projects and companies. Some visual layout/design text remains in the HTML.
