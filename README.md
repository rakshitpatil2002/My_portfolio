# Rakshit P Patil — Developer Portfolio

A responsive personal portfolio for a Python Developer at Stackly. Built with HTML, CSS, and vanilla JavaScript, with no build step or runtime dependencies.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000. Google Fonts is optional; system fonts are used when it is unavailable.

## Included

- Responsive introduction, experience, projects, skills, education, and contact sections.
- Original supplied CV, available to view and download directly below the introduction.
- Project detail dialogs with keyboard navigation and Escape-to-close behavior.
- Mobile navigation, email copying with a readable fallback, and LinkedIn link.
- Semantic markup, skip navigation, visible keyboard focus, and reduced-motion support.

## Update your portfolio

| Content | File |
| --- | --- |
| Profile, experience, skills, contact, project cards | `index.html` |
| Expanded project descriptions | `script.js` → `projects` |
| Colors, typography, layout | `styles.css` → `:root` and section styles |
| Downloadable CV | `assets/rakshit-patil-cv.pdf` |
| Browser icon | `assets/favicon.svg` |

To add a project, duplicate a `.project-card` in `index.html`, give its button a unique `data-project` value, and add the matching entry to `projects` in `script.js`. Add real repository or live-demo links when available. There are no invented repository links or project performance figures.

## Publish with GitHub Pages

1. Create a GitHub repository, such as `portfolio` (or `YOUR-USERNAME.github.io` for a profile site).
2. Upload this folder's contents, preserving the `assets` folder. Include `index.html` at the repository root.
3. In the repository, open **Settings → Pages**, select deployment from a branch, and choose **main / (root)**.
4. Save and wait for GitHub to provide your published URL.

Reference: [GitHub’s official publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

If Git is installed, you can upload from a terminal instead:

```sh
git init
git add .
git commit -m "Build personal developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the example repository URL with your own. All site assets use relative paths so the site works on both a profile domain and a repository subpath. A `.nojekyll` file is included for static hosting.

## Content notes

- Stackly employment starts **11 May 2026**, as provided by Rakshit.
- The downloadable PDF is the original supplied CV. It does not yet include the Stackly role; replace it with an updated CV when ready.
- The original CV contains a reversed internship date range (`Nov 2023 to Jan 2023`). The site describes the internship without an unverified date.
- Project artwork represents concepts, not screenshots or verified database schemas.
- GitHub and demo links can be added once the correct URLs are available.
- Contact uses email and LinkedIn; no backend service is needed.

## Validation

Checked in headless Microsoft Edge at desktop, tablet, and mobile widths (320, 375, 390, 768, 1024, and 1440 pixels). Verified section targets, mobile navigation, both project dialogs, Escape dismissal, email feedback, PDF delivery, reduced-motion behavior, and absence of horizontal page overflow or JavaScript runtime errors. JavaScript syntax also passes `node --check script.js`.
