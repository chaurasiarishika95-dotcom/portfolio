# Rishika Portfolio CMS — Company-scoped project controls

## Fix included
- On `?company=delhivery`, Hide/Show only hides/restores a project on that company page.
- Remove from Delhivery removes only that company assignment; the project remains on the main portfolio and other assigned company pages.
- On the main portfolio, Hide/Show remains global; Delete removes the project everywhere.
- Company-specific hidden state is saved in `portfolio-data.json` as `hiddenForCompanies`.

## Deploy
1. Replace `index.html`, `portfolio-data.json`, and `api/save.js` in the existing GitHub repository with these files.
2. Commit to the deployment branch (usually `main`). Vercel redeploys automatically.
3. Keep your existing Vercel environment variables unchanged.
4. Open `https://YOUR-DOMAIN/?company=delhivery&admin=1`.
5. Make company-level changes and click Central Save & Publish. Wait for deployment, then refresh the same link.

This package does not modify the live website automatically; it must be committed to GitHub.
