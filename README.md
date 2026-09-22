# JOUD — Dates & Dry Fruits — Website Package (v2)

## What's in this folder
- **index.html** — the complete, ready-to-host website. Single self-contained file, all images embedded, no build step needed to use it.
- **dates.html** — the dedicated premium dates collection with variety cards, filters, product quick views, and WhatsApp enquiries.
- **source/joud-template.html** — the same site, but human-readable: images are `__TOKEN__` placeholders instead of huge base64 blobs. Edit this if you (or a developer) need to change text, layout, or styling.
- **source/build.py** — run this after editing the template to bake the images back in and regenerate `index.html`. Usage:
  ```
  cd source/
  python3 build.py
  ```
- **images/** — every photo and logo file as separate files.
- This README.

## Live link
https://claude.ai/artifact/PaxYTcj7JwZR7j4iBKGs1h — always reflects the latest version I publish.

## How to host it permanently
`index.html` is a plain static file — upload it to any static host (Netlify, Vercel, GitHub Pages, Hostinger, GoDaddy, etc.), or hand it to whoever manages your domain.

## Image manifest

| File | Used for |
|---|---|
| `images/logo_icon.png` | Nav bar + footer icon mark (circular nut emblem) |
| `images/logo_wordmark.png` | "JOUD" gold wordmark next to the icon |
| `images/hero_dates.jpg` | Hero slide 1 (intro) |
| `images/cat_dates.jpg` | Hero slide 2 (Premium Dates) **and** category tile — Dates |
| `images/hero_almond.jpg` | Hero slide 3 (Almonds & Pistachios) |
| `images/hero_walnut.jpg` | Hero slide 4 (Walnuts & Cashews) |
| `images/hero_gift.jpg` | Hero slide 5 (Gifting) |
| `images/about_img.jpg` | About section photo |
| `images/gift_cta_img.jpg` | "Planning a gift box?" section photo |
| `images/cat_stuffed.jpg` | Category tile — Stuffed Dates |
| `images/cat_choc.jpg` | Category tile — Chocolate Dates |
| `images/cat_mamool.jpg` | Category tile — Mamool & Sweets |
| `images/cat_coffee.jpg` | Category tile — Coffee & More |
| `images/cat_dryfruits.jpg` | Category tile — Dry Fruits |
| `images/cat_signature.jpg` | Category tile — Signature Range |
| `images/cat_gifting.jpg` | Category tile — Gifting Range |

To swap any image, replace the file in `images/` (keep the same filename), then run `python3 build.py` from `source/`.

## Everything currently built
- Dark charcoal / ivory / gold / pistachio palette, consistent regardless of visitor's device dark-mode setting
- **Hero**: auto-advancing carousel (5 slides, ~5.5s each), arrows + dots, swipe on mobile, pauses on hover/touch, Ken Burns slow zoom on each photo, directional overlay gradient so photos stay vibrant
- **Nav**: logo + wordmark, links, live category search, WhatsApp pill button, mobile menu with backdrop/close/escape-key support, responsive down to the smallest phones
- **About**: staggered scroll-reveal text, count-up stat numbers, image wipe reveal with animated frame
- **Categories**: 8-tile asymmetric "bento" grid (Dates + Gifting Range featured larger), real photography, gold hairline borders, hover lift/glow, each tile opens WhatsApp with a pre-filled message naming that category
- **Why JOUD** pillars strip, **Heritage** quote section (English + Arabic)
- **Gifting CTA** section with primary WhatsApp button (clipped-corner premium styling)
- **Footer** with company info, quick links, social icons
- Floating WhatsApp button with a subtle breathing glow
- Meta description + Open Graph tags for link previews
- No e-commerce, no pricing — pure brand/business site as requested

## Still open — decide before public launch
1. **Instagram & Facebook links** — footer icons are wired to do nothing (not `#`, so no more page jump) until you give me the real URLs.
2. **Footer address** — currently just says "India." Add a real address or confirm you want it left general.
3. **Category list** — placeholder lineup (Dates, Stuffed Dates, Chocolate Dates, Mamool & Sweets, Coffee & More, Dry Fruits, Signature Range, Gifting Range). Confirm against JOUD's actual range.
4. **Photography** — current images are AI-generated. Strong enough to launch with, but real product photography is worth planning for eventually, especially for paid ads.
5. **Open Graph image caveat** — the social link-preview image is embedded (base64), which not all platforms (notably Facebook/WhatsApp's crawler) reliably support. Once hosted on a real domain, swap it for a real hosted image file for guaranteed compatibility — ask me and I'll walk you through it.
6. **Copy review** — heritage story, stats, and footer text are placeholder copy in the brand's voice. Have the business owner review final wording.

## Need changes?
Tell me what to adjust and I'll update the same file — text, images, colors, layout, new sections, anything.
