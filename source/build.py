#!/usr/bin/env python3
"""
Rebuilds index.html from the editable source template.

The homepage keeps images as normal files under /images instead of embedding
them as Base64. This keeps the HTML small, lets browsers cache each asset,
and makes the page faster to update and deliver on mobile connections.

Usage:
    cd source/
    python3 build.py

Output:
    ../index.html  (overwritten)
"""
import os
import shutil

SOURCE_DIR = os.path.dirname(os.path.abspath(__file__))
IMAGES_DIR = os.path.join(SOURCE_DIR, "..", "images")
TEMPLATE = os.path.join(SOURCE_DIR, "joud-template.html")
OUTPUT = os.path.join(SOURCE_DIR, "..", "index.html")

IMAGE_FILES = (
    "logo_icon.png", "logo_wordmark.png", "hero_dates.jpg", "hero_almond.jpg",
    "hero_walnut.jpg", "hero_gift.jpg", "about_img.jpg", "gift_cta_img.jpg",
    "cat_dates.jpg", "cat_stuffed.jpg", "cat_choc.jpg", "cat_mamool.jpg",
    "cat_coffee.jpg", "cat_dryfruits.jpg", "cat_signature.jpg", "cat_gifting.jpg",
)

def main():
    with open(TEMPLATE, "r", encoding="utf-8") as f:
        html = f.read()

    for filename in IMAGE_FILES:
        path = os.path.join(IMAGES_DIR, filename)
        if not os.path.exists(path):
            raise FileNotFoundError(f"Missing image asset: {path}")

    if "__" in html or "data:image" in html:
        raise ValueError("Template still contains an image token or embedded data URI")

    print(f"Validated {len(IMAGE_FILES)} external image assets")

    shutil.copyfile(TEMPLATE, OUTPUT)

    print(f"\nDone. Wrote {OUTPUT} ({len(html)//1024} KB)")

if __name__ == "__main__":
    main()
