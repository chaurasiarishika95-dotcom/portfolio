# Rishika's company-wise portfolio — GitHub + Vercel

## Files
- `index.html` — portfolio website and browser-based content editor.
- `portfolio-data.json` — published projects and company page configuration.

## First deployment
1. Create a new GitHub repository (for example, `rishika-portfolio`).
2. Upload `index.html`, `portfolio-data.json`, and this README to the repository root.
3. In Vercel, import that GitHub repository and deploy it. The default settings are fine for a static HTML site.
4. Once deployed, open `https://YOUR-SITE.vercel.app/?admin=1` to show the editor. The public website is `https://YOUR-SITE.vercel.app/`.

## Publishing future changes
1. Open the deployed site with `?admin=1`.
2. Make project/company changes in Manage Projects / Manage Companies.
3. Click **Export site data**. It downloads a file named `portfolio-data.json` containing both projects and companies.
4. Open your GitHub repository and select `portfolio-data.json`.
5. Click the pencil (Edit this file), replace the whole contents with the downloaded JSON, and commit the change.
6. Vercel redeploys automatically. Wait for the deployment to finish, then refresh the public site.

You can also import an existing `portfolio-data.json` in the editor before making more changes.

## Important limitations
- This is a static publishing workflow, not a cloud database or a secure CMS. The editor saves drafts in the current browser. Public visitors see the committed `portfolio-data.json` file.
- The `?admin=1` URL is not password-protected. Do not treat it as a security boundary. Anyone can open the editor UI, but edits only affect their own browser until they export and commit data to your GitHub repository. Protect your GitHub account with a strong password and two-factor authentication.
- Do not store secrets or private information in `portfolio-data.json`; it is public website content.
