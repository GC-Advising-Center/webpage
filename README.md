# GitHub Pages Course Information Site

This is a static website template designed to be hosted directly on GitHub Pages.

## Structure

- `index.html`: page structure
- `assets/styles.css`: styling
- `assets/app.js`: rendering logic
- `content/site-content.js`: main content configuration, which is the file you will usually edit

## How To Update Content

Open `content/site-content.js` and edit the sections you need:

- `site`: page title and description
- `heroMeta`: top-right summary cards
- `quickLinks`: useful links
- `dutySchedule`: duty schedule for the semester
- `piazza`: Piazza-related notes
- `advisors`: advisor profiles

If you are only updating content, you usually do not need to touch the HTML or CSS files.

## How To Deploy On GitHub Pages

1. Push this repository to GitHub.
2. Open the repository `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or your default branch)
   - Folder: `/ (root)`
5. Save and wait for GitHub to publish the site.

After deployment, the URL will usually look like this:

`https://your-username.github.io/your-repository-name/`

If you later want to:

- turn the duty schedule into a table
- manage content with Markdown
- add search, filtering, or a denser mobile layout

this template is a good starting point to extend from.
