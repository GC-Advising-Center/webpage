# GitHub Pages Course Information Site

This repo uses a multi-page layout with a top navigation bar, and the workshop archive is now driven by a Markdown source file.

## Main Pages

- `index.html`: home page with the latest 3 workshop items and links to the other sections
- `materials.html`: full workshop archive
- `advisors.html`: advisor directory
- `schedule.html`: Monday-Friday evening duty table
- `piazza.html`: Piazza entry page and guidance

## Files You Will Usually Edit

- `content/workshops.md`: workshop archive source used by the home page preview and the Materials page
- `content/site-content.js`: site text for navigation, hero content, advisors, schedule, and Piazza
- `assets/styles.css`: shared styling
- `assets/app.js`: shared rendering and Markdown parsing logic

## How To Add A New Workshop Entry

The site reads workshop data directly from `content/workshops.md`.

When you add a new item:

1. Open `content/workshops.md`.
2. Add the newest entry near the top, above the older workshop items.
3. Follow the same structure as the existing archive.

Use this format:

```md
### 2026/04/12 <br>中文标题 | *English Title*
+ [预告推送](https://example.com/announcement)
+ [分享会回放](https://example.com/recording)
+ [资料存档](https://example.com/archive)
```

You can also use other existing resource labels that already appear in the archive, such as:

- `共享文档`
- `回顾推送`
- `总结推送`
- `推送链接`

Notes:

- Keep the date at the start of the `###` heading.
- Keep the Chinese title before the separator and the English title after it.
- The parser supports both `| *English Title*` and `- *English Title*` patterns.
- If a resource is temporarily unavailable, you can leave it as plain text, but only linked items will appear as clickable links on the site.
- Some older JBox links may require SJTU VPN. That reminder is already reflected in the Materials section copy.

## How The Materials Section Works

- The home page shows the first 3 workshop entries from `content/workshops.md`.
- The Materials page shows the full parsed archive.
- To keep the newest items on the home page, always insert new entries near the top of `content/workshops.md`.

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. Open the repository `Settings`.
3. Go to `Pages`.
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Save and wait for the site to publish.
