# JOUD Astro foundation

This is the new component-based foundation for the JOUD website. The current root website remains unchanged while this version is reviewed.

## Commands

```bash
npm install
npm run check
npm run build
npm run preview
```

## Structure

- `src/layouts/` — shared SEO and page shell
- `src/components/` — reusable header, footer, product cards, and video section
- `src/data/` — product/category data, ready to connect to a CMS or commerce backend later
- `src/pages/` — clean, crawlable routes
- `public/images/` — current JOUD image assets
- `public/videos/` — video files and caption tracks

Add a video by placing an optimized MP4 and its poster image in `public/`, then rendering `VideoSection.astro` from the page that needs it. Do not commit large production videos to the repository; use a video CDN when the assets are ready.
